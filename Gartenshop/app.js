// Mock-Daten als JSON-Objekte im Code (einfach austauschbar)
const products = [
    { 
        id: 1, 
        name: "Schild 'Gurke'", 
        category: "garten", 
        price: 6.00, 
        img: "Produktbilder/Gurke_im_Beet.png", 
        imgHover: "Produktbilder/Gurke.png",
        multicolor: true, 
        description: "Wetterfestes Steckschild für dein Gurkenbeet. Perfekt für Hobbygärtner." 
    },
    { 
        id: 2, 
        name: "Schild 'Paprika'", 
        category: "garten", 
        price: 6.00, 
        img: "Produktbilder/Paprika_im_Beet.png", 
        imgHover: "Produktbilder/Paprika.png",
        multicolor: true, 
        description: "Klares Design, robuste Textur. Ideal für die Paprikazucht." 
    },
    { 
        id: 3, 
        name: "Schild 'Tomate'", 
        category: "garten", 
        price: 6.00, 
        img: "Produktbilder/Tomate_im_Beet.png", 
        imgHover: "Produktbilder/Tomate.png",
        multicolor: true, 
        description: "Klares Design, robuste Textur. Ideal für die Tomatenzucht." 
    },
    { 
        id: 4, 
        name: "Schild 'Aperol'", 
        category: "fun", 
        price: 9.00, 
        img: "Produktbilder/Aperol_Bar.png", 
        imgHover: "Produktbilder/Aperol.png",
        multicolor: true, 
        description: "Das Highlight für deine nächste Sommerparty oder Heimbar." 
    },
    { 
        id: 5, 
        name: "Schild 'Beste Oma'", 
        category: "fun", 
        price: 9.00, 
        img: "Produktbilder/BesteOma_Deko.png", 
        imgHover: "Produktbilder/BesteOma.png",
        multicolor: true, 
        description: "Ein persönliches und robustes Geschenk für die beste Oma der Welt." 
    },
    { 
        id: 6, 
        name: "Schild 'Bester Opa'", 
        category: "fun", 
        price: 9.00, 
        img: "Produktbilder/BesterOpa_Deko.png", 
        imgHover: "Produktbilder/BesterOpa.png",
        multicolor: true, 
        description: "Ein persönliches und robustes Geschenk für den besten Opa der Welt." 
    }
];

// App State
let cart = [];

// DOM Elemente
const productGrid = document.getElementById('product-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');
const customForm = document.getElementById('custom-form');

// Produkte Rendern
function renderProducts(filter = 'all') {
    productGrid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                ${product.multicolor ? '<span class="badge">Mehrfarbig</span>' : ''}
                <img src="${product.img}" alt="${product.name}" class="img-main" loading="lazy">
                ${product.imgHover ? `<img src="${product.imgHover}" alt="${product.name}" class="img-hover" loading="lazy">` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(2).replace('.', ',')} €</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, 'regular')" aria-label="In den Warenkorb">+</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Kategorien Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// Warenkorb Logik
window.addToCart = function(id, type = 'regular', customData = null) {
    let item;
    if (type === 'custom') {
        item = { ...customData, cartId: Date.now(), quantity: 1 };
        cart.push(item);
    } else {
        const product = products.find(p => p.id === id);
        const existing = cart.find(c => c.id === id && c.type === 'regular');
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ ...product, cartId: Date.now(), type: 'regular', quantity: 1 });
        }
    }
    updateCart();
    openCart();
};

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">Dein Warenkorb ist leer.</p>';
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.img || 'https://placehold.co/70x70/2a2a2a/ffffff?text=Custom'}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                ${item.type === 'custom' ? `<div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem;">T1: "${item.text1}" (${item.color1})<br>T2: "${item.text2}" (${item.color2})</div>` : ''}
                <div class="cart-item-price">${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQuantity(${item.cartId}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.cartId}, 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(el);
    });

    cartCount.textContent = count;
    totalPriceEl.textContent = total.toFixed(2).replace('.', ',') + ' €';
}

window.changeQuantity = function(cartId, delta) {
    const item = cart.find(c => c.cartId === cartId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(c => c.cartId !== cartId);
        }
        updateCart();
    }
};

// Warenkorb UI Steuerung
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    setTimeout(() => { cartOverlay.classList.remove('show'); }, 300);
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Custom Konfigurator Formular
customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text1 = document.getElementById('custom-text-1').value;
    const color1 = document.getElementById('color-1').value;
    const text2 = document.getElementById('custom-text-2').value;
    const color2 = document.getElementById('color-2').value;
    
    addToCart(null, 'custom', {
        name: 'Custom Schild',
        price: 24.90,
        text1: text1,
        color1: color1,
        text2: text2,
        color2: color2,
        type: 'custom'
    });
    
    customForm.reset();
});

// Initialisierung
renderProducts();
updateCart();
