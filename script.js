let products = [{
    image: 'image/card1.png_.avif',
    title: 'Zero Evo Wireless',
    price: '$3020',
    discription: 'Zero Evo Wireless delivers sleek design, long-lasting battery, ultra-fast connectivity, and crystal-clear audio performance, making it a premium.',
    category: 'Grocery'
}, {
    image: 'image/card2.jpg_.avif',
    title: 'Smart Watch',
    price: '$2800',
    discription: 'A sleek, wireless smart watch offering seamless connectivity, health tracking, long battery life, and intuitive controls for modern, active lifestyles.',
    category: 'Sumsung'
}, {
    image: 'image/card3.jpg_.avif',
    title: 'Original HeadPhone ',
    price: '$1020',
    discription: 'Premium original headphones delivering rich sound, deep bass, noise isolation, durable build quality, and all-day comfort for immePriceive music .',
    category: 'Electronic'
}, {
    image: 'image/card4.jpg_.webp',
    title: 'Lagent Shoes ',
    price: '$1520',
    discription: 'Lightweight Lagent shoes offering breathable comfort, durable grip, cushioned support, stylish design, and reliable performance for daily wear and active lifestyles.',
    category: 'Bata',
}, {
    image: 'image/card5.jpg_.webp',
    title: 'Airpods_pro protect ',
    price: '$1520',
    discription: 'Protective AirPods Pro case offering shock absorption, scratch resistance, secure fit, lightweight durability, and stylish coverage to keep your earbuds safe anywhere',
    category: 'Electronic'
}, {
    image: 'image/card6.jpg_.webp',
    title: 'Kashmiri Dhussa ',
    price: '$900',
    discription: 'Handcrafted Kashmiri dhussa featuring soft warm fabric, traditional patterns, durable stitching, elegant texture, and cozy comfort perfect for winter wear and cultural style',
    category: 'J.Brand'
}]

let cardrow = document.getElementById('card-row');

function renderCards(productsArray) {
    cardrow.innerHTML = "";
    productsArray.map((product, i) => {
        cardrow.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12  mb-4">
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title ">${product.title}</h4>
                        <p class="card-title text-black-50">${product.discription}</p>
                        <p class="card-text fw-bold">${product.price}</p>
                        <a href="details.html?index=${i}" class="btn btn-primary">More Details</a>
                    </div>
                </div>
            </div>
            `;
    })

}
renderCards(products);

let search = document.getElementById('search');
let searchbtn = document.getElementById('searchbtn');
search.addEventListener('input', () => {
    let searchValue = search.value.toLowerCase();
    let filteredArray = products.filter((pro) =>
        pro.title.toLowerCase().includes(searchValue)
    )
    renderCards(filteredArray);
})
searchbtn.addEventListener('click', () => {
    let searchValue = search.value.toLowerCase();
    let filteredArray = products.filter((pro) =>
        pro.title.toLowerCase().includes(searchValue)
    )
    renderCards(filteredArray);
})