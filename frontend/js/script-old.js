/* ============================================
   COMMERCEHUB - COMPLETE JAVASCRIPT (FIXED)
   ============================================ */

// ========== 24 PRODUCT CATALOG ==========
const productCatalog = [
    // Watches (1-6)
    { id: 1, name: "Analogue Resin Strap", price: 999, oldPrice: 1500, discount: 33, rating: 4.5, category: "Watches", sku: "WATCH-001", description: "Classic analogue watch with durable resin strap. Water resistant up to 30 meters. Japanese quartz movement.", images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"], tags: ["Classic", "Casual"] },
    { id: 2, name: "Digital Smart Watch", price: 2499, oldPrice: 3999, discount: 38, rating: 4, category: "Watches", sku: "WATCH-002", description: "Feature-packed smartwatch with heart rate, step tracking, sleep analysis, and notifications.", images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600", "https://images.unsplash.com/photo-1508685096489-7aacd43bd3ed?w=600"], tags: ["Smart", "Fitness"] },
    { id: 3, name: "Leather Band Watch", price: 1299, oldPrice: 1800, discount: 28, rating: 5, category: "Watches", sku: "WATCH-003", description: "Elegant minimalist watch with genuine leather strap and rose gold accents.", images: ["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600", "https://images.unsplash.com/photo-1518131672697-17bdbbe984c3?w=600"], tags: ["Leather", "Minimalist"] },
    { id: 4, name: "Classic Chronograph", price: 1899, oldPrice: 2500, discount: 24, rating: 4.5, category: "Watches", sku: "WATCH-004", description: "Precision chronograph with three sub-dials and stainless steel bracelet.", images: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600", "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600"], tags: ["Chronograph", "Steel"] },
    { id: 5, name: "Sports Edition Watch", price: 3299, oldPrice: 4500, discount: 27, rating: 4, category: "Watches", sku: "WATCH-005", description: "Rugged sports watch with GPS, altimeter, barometer, and 100m water resistance.", images: ["https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600", "https://images.unsplash.com/photo-1495856458515-063c7d715c7c?w=600"], tags: ["Sports", "GPS"] },
    { id: 6, name: "Luxury Automatic Watch", price: 8999, oldPrice: 12999, discount: 31, rating: 4.8, category: "Watches", sku: "WATCH-006", description: "Automatic mechanical watch with exhibition case back. Sapphire crystal.", images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600", "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600"], tags: ["Luxury", "Automatic"] },
    // Sneakers (7-11)
    { id: 7, name: "Nike Air Max", price: 4999, oldPrice: 7999, discount: 38, rating: 5, category: "Sneakers", sku: "SHOE-001", description: "Iconic Nike Air Max with visible Max Air cushioning.", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600"], tags: ["Nike", "Running"] },
    { id: 8, name: "Adidas Ultraboost", price: 6499, oldPrice: 9999, discount: 35, rating: 4.5, category: "Sneakers", sku: "SHOE-002", description: "Responsive Boost midsole with Primeknit upper.", images: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600", "https://images.unsplash.com/photo-1551107696-9d3e9d4e0a8f?w=600"], tags: ["Adidas", "Running"] },
    { id: 9, name: "Puma RS-X", price: 3499, oldPrice: 5499, discount: 36, rating: 4.3, category: "Sneakers", sku: "SHOE-003", description: "Retro-inspired chunky sneakers with bold color blocking.", images: ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600", "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=600"], tags: ["Puma", "Retro"] },
    { id: 10, name: "New Balance 574", price: 4499, oldPrice: 5999, discount: 25, rating: 4.6, category: "Sneakers", sku: "SHOE-004", description: "Classic heritage sneakers with ENCAP midsole.", images: ["https://images.unsplash.com/photo-1539185442499-87932ba0d86a?w=600", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"], tags: ["New Balance", "Classic"] },
    { id: 11, name: "Converse Chuck Taylor", price: 2499, oldPrice: 3299, discount: 24, rating: 4.4, category: "Sneakers", sku: "SHOE-005", description: "Timeless canvas high-top sneakers.", images: ["https://images.unsplash.com/photo-1494496195158-c3becb4f2476?w=600", "https://images.unsplash.com/photo-1463100099107-aa0984783c7d?w=600"], tags: ["Converse", "Canvas"] },
    // Apparel (12-16)
    { id: 12, name: "Classic Cotton T-Shirt", price: 599, oldPrice: 999, discount: 40, rating: 4, category: "Apparel", sku: "APP-001", description: "Premium 100% cotton t-shirt with comfortable regular fit.", images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600"], tags: ["Cotton", "Basic"] },
    { id: 13, name: "Denim Jacket", price: 1899, oldPrice: 3299, discount: 42, rating: 5, category: "Apparel", sku: "APP-002", description: "Classic denim jacket with modern tailored fit.", images: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600", "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600"], tags: ["Denim", "Jacket"] },
    { id: 14, name: "Hooded Sweatshirt", price: 1299, oldPrice: 1999, discount: 35, rating: 4.2, category: "Apparel", sku: "APP-003", description: "Soft fleece-lined hoodie with kangaroo pocket.", images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600", "https://images.unsplash.com/photo-1578762560049-7da18f2d1e2f?w=600"], tags: ["Hoodie", "Fleece"] },
    { id: 15, name: "Slim Fit Chinos", price: 1499, oldPrice: 2499, discount: 40, rating: 4.3, category: "Apparel", sku: "APP-004", description: "Stretch cotton chino pants with slim fit.", images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1f?w=600", "https://images.unsplash.com/photo-1584865288641-f0a5e6b9d1a5?w=600"], tags: ["Chinos", "Slim"] },
    { id: 16, name: "Wool Blend Coat", price: 3999, oldPrice: 6499, discount: 38, rating: 4.7, category: "Apparel", sku: "APP-005", description: "Elegant wool-blend overcoat with notch lapel.", images: ["https://images.unsplash.com/photo-1544022613-ab879a63a1f7?w=600", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"], tags: ["Wool", "Coat"] },
    // Electronics (17-21)
    { id: 17, name: "Wireless Headphones", price: 2499, oldPrice: 4999, discount: 50, rating: 4.5, category: "Electronics", sku: "ELEC-001", description: "Premium wireless headphones with ANC, 40hr battery.", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600"], tags: ["Wireless", "ANC"] },
    { id: 18, name: "Smart Speaker", price: 3999, oldPrice: 6499, discount: 38, rating: 4, category: "Electronics", sku: "ELEC-002", description: "Voice-controlled smart speaker with 360° sound.", images: ["https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600", "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600"], tags: ["Smart", "Audio"] },
    { id: 19, name: "Bluetooth Earbuds", price: 1799, oldPrice: 2999, discount: 40, rating: 4.1, category: "Electronics", sku: "ELEC-003", description: "True wireless earbuds with touch controls, IPX5.", images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600", "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600"], tags: ["Earbuds", "Wireless"] },
    { id: 20, name: "4K Action Camera", price: 3299, oldPrice: 4999, discount: 34, rating: 4.4, category: "Electronics", sku: "ELEC-004", description: "Waterproof action camera with 4K video, stabilization.", images: ["https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600"], tags: ["Action Cam", "4K"] },
    { id: 21, name: "Portable Power Bank", price: 1299, oldPrice: 1999, discount: 35, rating: 4.6, category: "Electronics", sku: "ELEC-005", description: "20000mAh power bank with dual USB, fast charging.", images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600", "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600"], tags: ["Power Bank", "Portable"] },
    // Accessories (22-24)
    { id: 22, name: "Travel Backpack", price: 1499, oldPrice: 2499, discount: 40, rating: 5, category: "Accessories", sku: "ACC-001", description: "Durable 30L travel backpack with laptop compartment.", images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", "https://images.unsplash.com/photo-1581605405669-fcdf71165e41?w=600"], tags: ["Backpack", "Travel"] },
    { id: 23, name: "Leather Wallet", price: 899, oldPrice: 1499, discount: 40, rating: 4.7, category: "Accessories", sku: "ACC-002", description: "Genuine leather bifold wallet with RFID blocking.", images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?w=600", "https://images.unsplash.com/photo-1559563458-527698bb529f?w=600"], tags: ["Leather", "RFID"] },
    { id: 24, name: "Sunglasses", price: 799, oldPrice: 1299, discount: 38, rating: 4.2, category: "Accessories", sku: "ACC-003", description: "Polarized UV400 sunglasses with lightweight frame.", images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600", "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600"], tags: ["Sunglasses", "Polarized"] }
];

// ========== GLOBAL VARIABLES ==========
let cartCount = 0;
let cartItems = [];
let wishlistItems = [];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage FIRST
    loadCartFromStorage();
    loadWishlistFromStorage();
    
    // Initialize UI components
    initSliders();
    initCountdown();
    initMobileMenu();
    initStickyHeader();
    initSearch();
    initQuantityControls();
    initImageErrorHandling();
    
    // Update displays
    updateCartCountDisplay();
    updateWishlistDisplay();
    checkLoginStatus();
    
    // Render page-specific content
    if (window.location.pathname.includes('shop.html')) {
        renderShopPage();
    }
    
    if (window.location.pathname.includes('product-detail.html')) {
        renderProductDetail();
    }
    
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
    
    if (window.location.pathname.includes('wishlist.html')) {
        renderWishlistPage();
    }
    
    console.log('✅ CommerceHub initialized - Wishlist:', wishlistItems);
});

// ========== WISHLIST FUNCTIONS (FIXED) ==========
function addToWishlist(productName) {
    console.log('Adding to wishlist:', productName);
    
    // Ensure wishlistItems is an array
    if (!Array.isArray(wishlistItems)) {
        wishlistItems = [];
    }
    
    // Check if product already exists
    if (!wishlistItems.includes(productName)) {
        wishlistItems.push(productName);
        saveWishlistToStorage();
        updateWishlistDisplay();
        showNotification(`❤️ Added "${productName}" to wishlist!`, 'success');
    } else {
        showNotification(`"${productName}" is already in your wishlist`, 'info');
    }
}

function removeFromWishlist(productName) {
    console.log('Removing from wishlist:', productName);
    
    wishlistItems = wishlistItems.filter(item => item !== productName);
    saveWishlistToStorage();
    updateWishlistDisplay();
    showNotification(`Removed "${productName}" from wishlist`, 'info');
    
    // Re-render wishlist page if on it
    if (window.location.pathname.includes('wishlist.html')) {
        renderWishlistPage();
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('commercehub_wishlist', JSON.stringify(wishlistItems));
    console.log('Wishlist saved:', wishlistItems);
}

function loadWishlistFromStorage() {
    const saved = localStorage.getItem('commercehub_wishlist');
    if (saved) {
        try {
            wishlistItems = JSON.parse(saved);
            if (!Array.isArray(wishlistItems)) wishlistItems = [];
        } catch (e) {
            console.error('Failed to load wishlist:', e);
            wishlistItems = [];
        }
    } else {
        wishlistItems = [];
    }
    console.log('Wishlist loaded:', wishlistItems);
}

function updateWishlistDisplay() {
    const count = wishlistItems.length;
    const wishlistSpans = document.querySelectorAll('#wishlist-count, .wishlist-btn .count, .wishlist-count');
    wishlistSpans.forEach(span => {
        span.textContent = count;
    });
    
    // Also update wishlist count display if exists
    const countDisplay = document.getElementById('wishlist-count-display');
    if (countDisplay) {
        countDisplay.textContent = count;
    }
}

function clearWishlist() {
    wishlistItems = [];
    saveWishlistToStorage();
    updateWishlistDisplay();
    showNotification('Wishlist cleared', 'info');
    
    if (window.location.pathname.includes('wishlist.html')) {
        renderWishlistPage();
    }
}

// ========== RENDER WISHLIST PAGE ==========
function renderWishlistPage() {
    const container = document.getElementById('wishlist-container') || document.getElementById('wishlist-items-container');
    if (!container) return;
    
    console.log('Rendering wishlist page, items:', wishlistItems);
    
    if (wishlistItems.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist" style="grid-column:1/-1; text-align:center; padding:60px;">
                <i class="bi bi-heart" style="font-size:64px; color:#ccc;"></i>
                <h3>Your wishlist is empty</h3>
                <p>Save items you love to your wishlist!</p>
                <a href="shop.html" class="btn btn-primary">Explore Products</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    wishlistItems.forEach(itemName => {
        const product = productCatalog.find(p => p.name === itemName);
        if (product) {
            html += `
                <div class="wishlist-item">
                    <div class="wishlist-item-image">
                        <a href="product-detail.html?id=${product.id}">
                            <img src="${product.images[0]}" alt="${product.name}">
                        </a>
                    </div>
                    <div class="wishlist-item-details">
                        <a href="product-detail.html?id=${product.id}" class="wishlist-item-title">${product.name}</a>
                        <div class="wishlist-item-price">
                            <span class="new-price">₹${product.price.toLocaleString()}</span>
                            <span class="old-price">₹${product.oldPrice.toLocaleString()}</span>
                        </div>
                        <div class="wishlist-item-actions">
                            <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price})">
                                <i class="bi bi-bag"></i> Add to Cart
                            </button>
                            <button class="btn btn-outline" onclick="removeFromWishlist('${product.name}')">
                                <i class="bi bi-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    container.innerHTML = html;
    
    // Update the clear button
    const clearBtn = document.getElementById('clearWishlistBtn');
    if (clearBtn) {
        clearBtn.onclick = clearWishlist;
    }
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchBtn || !searchOverlay) return;
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = productCatalog.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query) ||
            p.tags.some(tag => tag.toLowerCase().includes(query))
        ).slice(0, 8);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No products found</div>';
            return;
        }
        
        let html = '';
        results.forEach(p => {
            html += `
                <a href="product-detail.html?id=${p.id}" class="search-result-item">
                    <img src="${p.images[0]}" alt="${p.name}">
                    <div class="search-result-info">
                        <h4>${p.name}</h4>
                        <p>₹${p.price.toLocaleString()}</p>
                    </div>
                </a>
            `;
        });
        searchResults.innerHTML = html;
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
}

// ========== RENDER SHOP PAGE ==========
function renderShopPage() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    
    let html = '';
    productCatalog.forEach(p => {
        const stars = renderStars(p.rating);
        html += `
            <div class="product-item">
                <div class="product-image">
                    <a href="product-detail.html?id=${p.id}">
                        <img src="${p.images[0]}" class="img1" alt="${p.name}">
                        ${p.images[1] ? `<img src="${p.images[1]}" class="img2" alt="${p.name}">` : ''}
                    </a>
                </div>
                <div class="product-info">
                    <a href="product-detail.html?id=${p.id}" class="product-title">${p.name}</a>
                    <ul class="product-star">${stars}</ul>
                    <div class="product-prices">
                        <strong class="new-price">₹${p.price.toLocaleString()}</strong>
                        <span class="old-price">₹${p.oldPrice.toLocaleString()}</span>
                    </div>
                    <span class="product-discount">-${p.discount}%</span>
                    <div class="product-links">
                        <button onclick="addToCart('${p.name}', ${p.price})"><i class="bi bi-basket-fill"></i></button>
                        <button onclick="addToWishlist('${p.name}')"><i class="bi bi-heart-fill"></i></button>
                        <a href="product-detail.html?id=${p.id}"><i class="bi bi-eye-fill"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
    
    // Sorting functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sorted = [...productCatalog];
            switch(e.target.value) {
                case 'price-low': sorted.sort((a,b) => a.price - b.price); break;
                case 'price-high': sorted.sort((a,b) => b.price - a.price); break;
                case 'name': sorted.sort((a,b) => a.name.localeCompare(b.name)); break;
            }
            let sortedHtml = '';
            sorted.forEach(p => {
                const stars = renderStars(p.rating);
                sortedHtml += `
                    <div class="product-item">
                        <div class="product-image">
                            <a href="product-detail.html?id=${p.id}">
                                <img src="${p.images[0]}" class="img1" alt="${p.name}">
                                ${p.images[1] ? `<img src="${p.images[1]}" class="img2" alt="${p.name}">` : ''}
                            </a>
                        </div>
                        <div class="product-info">
                            <a href="product-detail.html?id=${p.id}" class="product-title">${p.name}</a>
                            <ul class="product-star">${stars}</ul>
                            <div class="product-prices">
                                <strong class="new-price">₹${p.price.toLocaleString()}</strong>
                                <span class="old-price">₹${p.oldPrice.toLocaleString()}</span>
                            </div>
                            <span class="product-discount">-${p.discount}%</span>
                            <div class="product-links">
                                <button onclick="addToCart('${p.name}', ${p.price})"><i class="bi bi-basket-fill"></i></button>
                                <button onclick="addToWishlist('${p.name}')"><i class="bi bi-heart-fill"></i></button>
                                <a href="product-detail.html?id=${p.id}"><i class="bi bi-eye-fill"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            });
            grid.innerHTML = sortedHtml;
        });
    }
}

// ========== RENDER PRODUCT DETAIL ==========
function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')) || 1;
    const product = productCatalog.find(p => p.id === productId) || productCatalog[0];
    
    document.title = `${product.name} - CommerceHub`;
    const breadcrumb = document.getElementById('breadcrumb-product');
    if (breadcrumb) breadcrumb.textContent = product.name;
    
    const container = document.getElementById('product-detail-content');
    if (!container) return;
    
    let thumbnails = '';
    product.images.forEach((img, i) => {
        thumbnails += `<img src="${img}" onclick="changeMainImage(this.src)" class="${i === 0 ? 'active' : ''}" alt="${product.name}">`;
    });
    
    let tagsHtml = '';
    product.tags.forEach(tag => {
        tagsHtml += `<span style="display:inline-block;background:#f0f0f0;padding:4px 12px;border-radius:20px;font-size:13px;margin-right:8px;">${tag}</span>`;
    });
    
    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image"><img src="${product.images[0]}" id="mainImg" alt="${product.name}"></div>
            <div class="thumbnail-list">${thumbnails}</div>
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="product-rating">
                <ul class="product-star">${renderStars(product.rating)}</ul>
                <span>(${product.rating} / 5 · 24 reviews)</span>
            </div>
            <div class="product-price">
                <span class="new-price">₹${product.price.toLocaleString()}</span>
                <span class="old-price">₹${product.oldPrice.toLocaleString()}</span>
                <span class="discount-badge">Save ${product.discount}%</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <div class="quantity-selector">
                    <button onclick="decrementQty()">-</button>
                    <input type="number" id="quantity" value="1" min="1" max="10" readonly>
                    <button onclick="incrementQty()">+</button>
                </div>
                <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price}, document.getElementById('quantity').value)">
                    <i class="bi bi-bag"></i> Add to Cart
                </button>
                <button class="btn btn-outline" onclick="addToWishlist('${product.name}')">
                    <i class="bi bi-heart"></i> Wishlist
                </button>
            </div>
            <div class="product-meta">
                <p><strong>SKU:</strong> ${product.sku}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Tags:</strong> ${tagsHtml}</p>
            </div>
        </div>
    `;
    
    renderRelatedProducts(product.category, product.id);
}

function renderRelatedProducts(category, currentId) {
    const related = productCatalog.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
    const listEl = document.getElementById('related-products-list');
    if (!listEl) return;
    
    let html = '';
    related.forEach(p => {
        html += `
            <li class="product-item glide__slide">
                <div class="product-image">
                    <a href="product-detail.html?id=${p.id}">
                        <img src="${p.images[0]}" class="img1" alt="${p.name}">
                        ${p.images[1] ? `<img src="${p.images[1]}" class="img2" alt="${p.name}">` : ''}
                    </a>
                </div>
                <div class="product-info">
                    <a href="product-detail.html?id=${p.id}" class="product-title">${p.name}</a>
                    <ul class="product-star">${renderStars(p.rating)}</ul>
                    <div class="product-prices">
                        <strong class="new-price">₹${p.price.toLocaleString()}</strong>
                        <span class="old-price">₹${p.oldPrice.toLocaleString()}</span>
                    </div>
                    <span class="product-discount">-${p.discount}%</span>
                    <div class="product-links">
                        <button onclick="addToCart('${p.name}', ${p.price})"><i class="bi bi-basket-fill"></i></button>
                        <button onclick="addToWishlist('${p.name}')"><i class="bi bi-heart-fill"></i></button>
                        <a href="product-detail.html?id=${p.id}"><i class="bi bi-eye-fill"></i></a>
                    </div>
                </div>
            </li>
        `;
    });
    listEl.innerHTML = html;
    
    if (typeof Glide !== 'undefined' && related.length > 0) {
        new Glide('.product-carousel3', {
            perView: 4,
            gap: 20,
            bound: true,
            breakpoints: { 992: { perView: 3 }, 768: { perView: 2 }, 576: { perView: 1 } }
        }).mount();
    }
}

// ========== CART FUNCTIONS ==========
function addToCart(name, price, qty = 1) {
    qty = parseInt(qty) || 1;
    const existing = cartItems.find(i => i.name === name);
    if (existing) {
        existing.quantity += qty;
    } else {
        cartItems.push({ name, price, quantity: qty });
    }
    cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);
    saveCartToStorage();
    updateCartCountDisplay();
    showNotification(`🛒 Added ${name} to cart!`, 'success');
}

function removeFromCart(productName) {
    cartItems = cartItems.filter(item => item.name !== productName);
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    saveCartToStorage();
    updateCartCountDisplay();
    showNotification(`Removed ${productName} from cart`, 'info');
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

function updateCartItemQuantity(productName, newQuantity) {
    const item = cartItems.find(item => item.name === productName);
    if (item) {
        item.quantity = Math.max(1, Math.min(10, newQuantity));
        cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        saveCartToStorage();
        updateCartCountDisplay();
        if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        }
    }
}

function saveCartToStorage() {
    localStorage.setItem('commercehub_cart', JSON.stringify(cartItems));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('commercehub_cart');
    if (saved) {
        try {
            cartItems = JSON.parse(saved);
            cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);
        } catch (e) {
            console.error('Failed to load cart:', e);
        }
    }
}

function updateCartCountDisplay() {
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = cartCount);
}

function renderCartPage() {
    const container = document.querySelector('.cart-items');
    if (!container) return;
    
    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="text-align:center;padding:60px;">
                <i class="bi bi-bag-x" style="font-size:48px;color:#ccc;"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        const summary = document.querySelector('.cart-summary');
        if (summary) summary.style.display = 'none';
        return;
    }
    
    let html = '';
    let subtotal = 0;
    
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const product = productCatalog.find(p => p.name === item.name);
        const image = product ? product.images[0] : 'https://via.placeholder.com/150';
        
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="price">₹${item.price.toLocaleString()}</p>
                    <div class="quantity-control">
                        <button onclick="updateCartItemQuantity('${item.name}', ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="10" readonly>
                        <button onclick="updateCartItemQuantity('${item.name}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.name}')">
                        <i class="bi bi-trash"></i> Remove
                    </button>
                </div>
                <div class="cart-item-total">₹${itemTotal.toLocaleString()}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    const summaryRows = document.querySelectorAll('.summary-row');
    if (summaryRows.length >= 3) {
        summaryRows[0].querySelector('span:last-child').textContent = `₹${subtotal.toLocaleString()}`;
        summaryRows[2].querySelector('span:last-child').textContent = `₹${subtotal.toLocaleString()}`;
    }
}

// ========== HELPER FUNCTIONS ==========
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < 5; i++) {
        if (i < full) html += '<i class="bi bi-star-fill"></i>';
        else if (i === full && half) html += '<i class="bi bi-star-half"></i>';
        else html += '<i class="bi bi-star"></i>';
    }
    return html;
}

window.changeMainImage = function(src) {
    const main = document.getElementById('mainImg');
    if (main) {
        main.src = src;
        document.querySelectorAll('.thumbnail-list img').forEach(img => img.classList.remove('active'));
        event.target.classList.add('active');
    }
};

function initQuantityControls() {
    window.incrementQty = function() {
        const qty = document.getElementById('quantity');
        if (qty) { let val = parseInt(qty.value) || 1; if (val < 10) qty.value = val + 1; }
    };
    window.decrementQty = function() {
        const qty = document.getElementById('quantity');
        if (qty) { let val = parseInt(qty.value) || 1; if (val > 1) qty.value = val - 1; }
    };
}

function initImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x400/f0f0f0/cccccc?text=Image';
        });
    });
}

function showNotification(msg, type = 'info') {
    const n = document.createElement('div');
    n.className = `notification notification-${type}`;
    n.textContent = msg;
    n.style.cssText = `position:fixed;bottom:20px;right:20px;background:${type==='success'?'#28a745':'#17a2b8'};color:white;padding:15px 25px;border-radius:8px;z-index:9999;animation:slideIn 0.3s;font-weight:500;`;
    document.body.appendChild(n);
    setTimeout(() => { n.style.animation = 'slideOut 0.3s'; setTimeout(() => n.remove(), 300); }, 3000);
}

// ========== SLIDERS, MENU, HEADER ==========
function initSliders() {
    if (document.querySelector('.product-carousel2')) {
        new Glide('.product-carousel2', { perView: 4, gap: 20, bound: true, autoplay: 3500, breakpoints: { 992: { perView: 3 }, 768: { perView: 2 }, 576: { perView: 1 } } }).mount();
    }
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = toggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('bi-list');
                icon.classList.add('bi-x-lg');
            } else {
                icon.classList.remove('bi-x-lg');
                icon.classList.add('bi-list');
            }
        });
    }
}

function initStickyHeader() {
    const header = document.querySelector('.header-main');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.pageYOffset > 100);
        });
    }
}

function initCountdown() {
    const el = document.getElementById('countdown');
    if (!el) return;
    const target = new Date();
    target.setDate(target.getDate() + 3);
    function update() {
        const diff = target - new Date();
        if (diff <= 0) {
            ['days','hours','minutes','seconds'].forEach(id => { const e = document.getElementById(id); if (e) e.textContent = '00'; });
            return;
        }
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        if (days) days.textContent = String(Math.floor(diff/(24*60*60*1000))).padStart(2,'0');
        if (hours) hours.textContent = String(Math.floor((diff%(24*60*60*1000))/(60*60*1000))).padStart(2,'0');
        if (minutes) minutes.textContent = String(Math.floor((diff%(60*60*1000))/(60*1000))).padStart(2,'0');
        if (seconds) seconds.textContent = String(Math.floor((diff%(60*1000))/1000)).padStart(2,'0');
    }
    update();
    setInterval(update, 1000);
}

function checkLoginStatus() {
    if (localStorage.getItem('userLoggedIn') === 'true') {
        const btn = document.querySelector('.user-btn');
        if (btn) { btn.innerHTML = '<i class="bi bi-person-check"></i>'; btn.title = 'My Account'; }
    }
}

// ========== EXPORT TO WINDOW ==========
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.clearWishlist = clearWishlist;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = '@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}';
document.head.appendChild(style);