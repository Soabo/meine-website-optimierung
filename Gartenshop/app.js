// Konfiguration
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojoavva'; // Ersetze YOUR_FORM_ID_HERE mit deiner tatsächlichen Formspree-ID

// Mock-Daten als JSON-Objekte im Code (einfach austauschbar)
const products = [
    { 
        id: 1, 
        name: "Schild 'Gurke'", 
        category: "garten", 
        price: 5.00, 
        img: "Produktbilder/Gurke_im_Beet.png", 
        imgHover: "Produktbilder/Gurke.png",
        multicolor: true, 
        width: "11,6 cm",
        description: "Wetterfestes Steckschild für dein Gurkenbeet. Perfekt für Hobbygärtner." 
    },
    { 
        id: 2, 
        name: "Schild 'Paprika'", 
        category: "garten", 
        price: 5.00, 
        img: "Produktbilder/Paprika_im_Beet.png", 
        imgHover: "Produktbilder/Paprika.png",
        multicolor: true, 
        width: "13,9 cm",
        description: "Klares Design, robuste Textur. Ideal für die Paprikazucht." 
    },
    { 
        id: 3, 
        name: "Schild 'Tomate'", 
        category: "garten", 
        price: 5.00, 
        img: "Produktbilder/Tomate_im_Beet.png", 
        imgHover: "Produktbilder/Tomate.png",
        multicolor: true, 
        width: "11,4 cm",
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
        width: "14,3 cm",
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
        width: "11,9 cm",
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
        width: "11,0 cm",
        description: "Ein persönliches und robustes Geschenk für den besten Opa der Welt." 
    },
    {
        id: 7,
        name: "Schild 'Chili'",
        category: "garten",
        price: 5.00,
        img: "Produktbilder/Chili_im_Beet.png",
        imgHover: "Produktbilder/Chili.png",
        multicolor: true,
        width: "8,7 cm",
        description: "Feuriges 3D‑Druck‑Steckschild für dein Chili‑Beet. Wetterfest und robust."
    },
    {
        id: 8,
        name: "Schild 'Erdbeere'",
        category: "garten",
        price: 5.00,
        img: "Produktbilder/Erdbeere_im_Beet.png",
        imgHover: "Produktbilder/Erdbeere.png",
        multicolor: true,
        width: "12,2 cm",
        description: "Süßes 3D‑Druck‑Steckschild für dein Erdbeer‑Beet. Ideal für Hobbygärtner."
    },
    {
        id: 9,
        name: "Schild 'Ouzo'",
        category: "fun",
        price: 9.00,
        img: "Produktbilder/Ouzo_Bar.png",
        imgHover: "Produktbilder/Ouzo.png",
        multicolor: true,
        width: "10,5 cm",
        description: "Erfrischendes Ouzo‑Schild für deine Party – im Bar‑Style präsentiert."
    },
    {
        id: 10,
        name: "Schild 'Helles'",
        category: "fun",
        price: 9.00,
        img: "Produktbilder/Helles_Bar.png",
        imgHover: "Produktbilder/Helles.png",
        multicolor: true,
        width: "12,8 cm",
        description: "Klassisches Helles‑Schild, perfekt für deine heimische Bar."
    },
    {
        id: 11,
        name: "Schild 'Petersilie'",
        category: "garten",
        price: 5.00,
        img: "Produktbilder/Petersilie_im_Beet.png",
        imgHover: "Produktbilder/Petersilie.png",
        multicolor: true,
        width: "14,7 cm",
        description: "Frisches 3D‑Druck‑Steckschild für dein Petersilien‑Beet. Ideal für Kräuterliebhaber."
    },
    {
        id: 12,
        name: "Schild 'Basilikum'",
        category: "garten",
        price: 5.00,
        img: "Produktbilder/Basilikum_im_Beet.png",
        imgHover: "Produktbilder/Basilikum.png",
        multicolor: true,
        width: "15,6 cm",
        description: "Aromatisches 3D‑Druck‑Steckschild für deinen Basilikumtopf oder dein Kräuterbeet."
    },
    {
        id: 13,
        name: "Schild 'Zucchini'",
        category: "garten",
        price: 5.00,
        img: "Produktbilder/Zucchini_im_Beet.png",
        imgHover: "Produktbilder/Zucchini.png",
        multicolor: true,
        width: "14,7 cm",
        description: "Robustes 3D‑Druck‑Steckschild für dein Zucchinibeet. Wetterfest und dekorativ."
    },
    {
        id: 14,
        name: "Türhänger 'Oh Hi'",
        category: "fun",
        price: 9.00,
        img: "Produktbilder/OhHi_Deko.png",
        imgHover: "Produktbilder/OhHi.png",
        multicolor: true,
        width: "20,0 cm",
        description: "Stilvoller Türhänger für deine Haustür, der Gästen ein freundliches 'Oh Hi' entgegenbringt."
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
const checkoutBtn = document.getElementById('checkout-btn');
const cartContentView = document.getElementById('cart-content-view');
const checkoutFormView = document.getElementById('checkout-form-view');
const backToCartBtn = document.getElementById('back-to-cart');
const checkoutFormReal = document.getElementById('checkout-form');

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
                ${product.width ? `<span class="badge badge-width" style="right: auto; left: 12px; border-color: var(--text-muted); color: var(--text-main); font-size: 0.7rem; padding: 0.2rem 0.5rem;">Breite ${product.width}</span>` : ''}
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
    cartContentView.style.display = 'flex';
    checkoutFormView.style.display = 'none';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    setTimeout(() => { cartOverlay.classList.remove('show'); }, 300);
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Bestellanfrage per E-Mail absenden
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Dein Warenkorb ist leer.');
            return;
        }
        cartContentView.style.display = 'none';
        checkoutFormView.style.display = 'flex';
    });
}

if (backToCartBtn) {
    backToCartBtn.addEventListener('click', () => {
        cartContentView.style.display = 'flex';
        checkoutFormView.style.display = 'none';
    });
}

if (checkoutFormReal) {
    checkoutFormReal.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            alert('Dein Warenkorb ist leer.');
            return;
        }
        
        const name = document.getElementById('checkout-name').value;
        const email = document.getElementById('checkout-email').value;
        const address = document.getElementById('checkout-address').value;
        
        let cartDetails = '';
        let total = 0;
        cart.forEach(item => {
            const itemPrice = item.price * item.quantity;
            total += itemPrice;
            if (item.type === 'custom') {
                cartDetails += `- ${item.quantity}x ${item.name} (Einzelpreis: ${item.price.toFixed(2).replace('.', ',')} €) = ${itemPrice.toFixed(2).replace('.', ',')} €\n`;
                cartDetails += `  Text 1: "${item.text1}" (${item.color1})\n`;
                cartDetails += `  Text 2: "${item.text2}" (${item.color2})\n`;
            } else {
                cartDetails += `- ${item.quantity}x ${item.name} (Einzelpreis: ${item.price.toFixed(2).replace('.', ',')} €) = ${itemPrice.toFixed(2).replace('.', ',')} €\n`;
            }
        });
        
        const submitBtn = checkoutFormReal.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';
        
        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                Email: email,
                Adresse: address,
                Warenkorb: cartDetails,
                Gesamtsumme: `${total.toFixed(2).replace('.', ',')} €`
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Vielen Dank! Deine Bestellanfrage wurde erfolgreich an uns übermittelt.');
                cart = [];
                updateCart();
                closeCart();
                checkoutFormReal.reset();
            } else {
                return response.json().then(data => {
                    if (data && Object.hasOwnProperty.call(data, 'errors')) {
                        alert(data.errors.map(error => error.message).join(', '));
                    } else {
                        alert('Hoppla! Beim Senden deiner Anfrage ist ein Problem aufgetreten.');
                    }
                });
            }
        })
        .catch(error => {
            alert('Hoppla! Beim Senden deiner Anfrage ist ein Problem aufgetreten.');
            console.error(error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        });
    });
}

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

// Custom Idea Form Handler
const ideaForm = document.getElementById('idea-form');
const ideaFile = document.getElementById('idea-file');
const fileUploadText = document.getElementById('file-upload-text');
const ideaSuccessMsg = document.getElementById('idea-success-msg');
const ideaMailtoBtn = document.getElementById('idea-mailto-btn');

if (ideaFile) {
    ideaFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            fileUploadText.innerHTML = `Ausgewählte Datei: <strong style="color: var(--accent-orange);">${e.target.files[0].name}</strong><br><span style="font-size: 0.75rem;">(Klicke erneut zum Ändern)</span>`;
        } else {
            fileUploadText.innerHTML = `Datei hierher ziehen oder <strong style="color: var(--accent-orange);">durchsuchen</strong><br><span style="font-size: 0.75rem;">(Erlaubt: PNG, JPG, PDF, STL, OBJ | max. 10MB)</span>`;
        }
    });
}

if (ideaForm) {
    ideaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('idea-name').value;
        const email = document.getElementById('idea-email').value;
        const desc = document.getElementById('idea-description').value;
        const file = ideaFile.files[0];

        const recipient = 'christiandorn83@googlemail.com';
        const subject = encodeURIComponent(`Anfrage für individuellen 3D-Druck von ${name}`);
        
        let bodyText = `Hallo Christian,\n\nich möchte eine eigene Idee als 3D-Druck umsetzen lassen.\n\n`;
        bodyText += `Name: ${name}\n`;
        bodyText += `E-Mail: ${email}\n\n`;
        bodyText += `Projektbeschreibung:\n${desc}\n\n`;
        
        if (file) {
            bodyText += `[HINWEIS] Ich habe die Datei "${file.name}" angehängt. Bitte ziehe diese Datei in das E-Mail-Fenster deines Clients (oder antworte auf diese Mail, um sie anzuhängen), da Web-Formulare keine direkten Dateianhänge über Standard-Mailto-Links mitsenden können.\n\n`;
        }
        
        bodyText += `Viele Grüße\n${name}`;
        const body = encodeURIComponent(bodyText);

        ideaMailtoBtn.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        
        ideaForm.style.display = 'none';
        ideaSuccessMsg.style.display = 'block';
    });
}

// Initialisierung
renderProducts();
updateCart();
