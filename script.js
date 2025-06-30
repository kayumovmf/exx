const products = [
    // men's clothing
    { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
    { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
    { id: 4, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
    // jewelery
    
    { id: 6, title: "Solid Gold Petite Micropave", price: 168, category: "jewelery", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" },
    { id: 7, title: "White Gold Plated Princess", price: 9.99, category: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
    { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel Double", price: 10.99, category: "jewelery", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
    // electronics
    { id: 9, title: "WD 2TB Elements Portable External Hard Drive - USB 3.0", price: 64, category: "electronics", image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
    { id: 10, title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", price: 109, category: "electronics", image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" },
    { id: 11, title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", price: 109, category: "electronics", image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" },
    { id: 12, title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", price: 114, category: "electronics", image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
    // women's clothing
    { id: 13, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 39.99, category: "women's clothing", image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" },
    { id: 14, title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, category: "women's clothing", image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" },
    { id: 15, title: "Opna Women's Short Sleeve Moisture", price: 7.95, category: "women's clothing", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
    { id: 16, title: "DANVOUY Womens T Shirt Casual Cotton Short", price: 12.99, category: "women's clothing", image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const searchInput = document.getElementById('searchInput');

function displayProducts(displayItems) {
    productList.innerHTML = '';
    displayItems.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Kategoriya: ${product.category}</p>
            <p class="price">Narxi: $${product.price}</p>
        `;
        productList.appendChild(card);
    });
}

function filterAndSort() {
    let filtered = [...products];

    if (categoryFilter.value !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    const searchText = searchInput.value.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(searchText));

    if (sortPrice.value === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortPrice.addEventListener('change', filterAndSort);
searchInput.addEventListener('input', filterAndSort);

displayProducts(products);
