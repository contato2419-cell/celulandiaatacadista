/* ==========================================================================
   CELULANDIA ATACADISTA - APPLICATION LOGIC
   WhatsApp Cart, Products Engine, Filters & Modal
   ========================================================================== */

const WHATSAPP_NUMBER = "5521987680702";

// Products Catalog Data
const PRODUCTS = [
  // SMARTWATCHES REAL STORE PRODUCTS
  {
    id: "watch-ultra-black",
    name: "Smartwatch Ultra 49mm Titanium Black + Indução",
    category: "relogios",
    priceRetail: 190,
    priceWholesale: 99.90,
    image: "images/smartwatch-ultra-black.png",
    badge: "🔥 Campeão Vendas",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 142,
    specs: ["Caixa 49mm Titanium Black", "Carregador por Indução Magnético", "Faz e Recebe Chamadas Bluetooth", "Caixa Lacrada"]
  },
  {
    id: "watch-ultra-kit5",
    name: "Kit Smartwatch Ultra 49mm com 5 Pulseiras + Bumpers Protetores",
    category: "relogios",
    priceRetail: 250,
    priceWholesale: 129.90,
    image: "images/smartwatch-ultra-kit5.png",
    badge: "🎁 Kit 5 em 1",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 198,
    specs: ["5 Pulseiras Ocean (Várias Cores)", "Acompanha Case Bumper 49mm", "Sensores Cardíacos e Esportivos", "Pronta Entrega Atacado"]
  },
  {
    id: "watch-ultra-gold",
    name: "Smartwatch Ultra Gold 18K Luxury Edition + 2 Pulseiras",
    category: "relogios",
    priceRetail: 290,
    priceWholesale: 149.90,
    image: "images/smartwatch-ultra-gold.png",
    badge: "👑 Edição Luxo Ouro",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 86,
    specs: ["Acabamento em Ouro Dourado 18K", "Pulseira Metálica Ouro + Silicone Preta", "Chave Ajustadora de Elos", "Estojo de Presente Premium"]
  },

  // MOTOS ELÉTRICAS
  {
    id: "moto-1",
    name: "Scooter Elétrica Celulandia Tricolor Edition",
    category: "motos",
    priceRetail: 4500,
    priceWholesale: 3890,
    image: "images/moto-e-1.png",
    badge: "Destaque Atacado",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 24,
    specs: ["Motor 1000W", "Bateria Lítio 60V", "Autonomia 45km", "Painel Digital LED"]
  },
  {
    id: "moto-2",
    name: "Scooter Elétrica Celulandia Vintage White",
    category: "motos",
    priceRetail: 4990,
    priceWholesale: 4290,
    image: "images/moto-e-2.png",
    badge: "Mais Vendida",
    badgeClass: "destaque",
    rating: 4.9,
    reviews: 31,
    specs: ["Motor 1200W", "Retro Design", "Freio a Disco ABS", "Suporte para Capacete"]
  },
  {
    id: "moto-3",
    name: "Scooter Elétrica Monster Fat Tire Black",
    category: "motos",
    priceRetail: 5800,
    priceWholesale: 4990,
    image: "images/moto-e-3.png",
    badge: "Super Potência",
    badgeClass: "atacado",
    rating: 5.0,
    reviews: 19,
    specs: ["Pneu Largo Off-Road", "Motor 1500W", "Bateria Removível 20Ah", "Amortecedor Duplo"]
  },

  // SMARTPHONES REAL STORE PRODUCTS
  {
    id: "phone-poco-c71",
    name: "Smartphone POCO C71 (Xiaomi) Lacrado - Várias Cores",
    category: "celulares",
    priceRetail: 890,
    priceWholesale: 680,
    image: "images/poco-c71.png",
    badge: "🔥 Sucesso Atacado",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 78,
    specs: ["Cores: Azul, Preto, Prata", "Versão Global Lacrada", "Processador Octa-Core", "Garantia de Loja"]
  },
  {
    id: "phone-realme-note-60x",
    name: "Smartphone realme Note 60x - Preto e Verde Mint",
    category: "celulares",
    priceRetail: 850,
    priceWholesale: 640,
    image: "images/realme-note-60x.png",
    badge: "✨ Novo no Estoque",
    badgeClass: "destaque",
    rating: 4.9,
    reviews: 52,
    specs: ["Cores: Preto & Verde Mint", "Bateria 5000mAh", "Super Custo-Benefício", "Caixa Original"]
  },
  {
    id: "phone-1",
    name: "Apple iPhone 15 Pro Max 256GB Titanium Blue",
    category: "celulares",
    priceRetail: 7100,
    priceWholesale: 6290,
    image: "images/iphone-15.jpg",
    badge: "Lançamento Apple",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 42,
    specs: ["Chip A17 Pro", "Câmera 48MP Zoom 5x", "Super Retina XDR", "Garantia Apple 1 Ano"]
  },

  // FONES & ÁUDIO REAL STORE PRODUCTS
  {
    id: "audio-airdots",
    name: "Fone de Ouvido TWS AirDots Bluetooth 5.1 sem Fio",
    category: "fones",
    priceRetail: 55,
    priceWholesale: 22.90,
    image: "images/airdots-tws.png",
    badge: "🔥 Campeão Vendas",
    badgeClass: "destaque",
    rating: 5.0,
    reviews: 165,
    specs: ["Bluetooth v5.1 High Speed", "Estojo de Carregamento", "Touch Control Inteligente", "Atacado por Unidade"]
  },
  {
    id: "audio-jbl-jb950",
    name: "Headset Bluetooth JBL Everest JB950 Wireless FM/MP3",
    category: "fones",
    priceRetail: 89,
    priceWholesale: 38.90,
    image: "images/jbl-everest-jb950.png",
    badge: "🎧 Super Bass",
    badgeClass: "destaque",
    rating: 4.9,
    reviews: 94,
    specs: ["Rádio FM & Leitor Cartão MicroSD", "Microfone Noise Reduction", "Dobrável e Ajustável", "Várias Cores"]
  },
  {
    id: "audio-p47",
    name: "Headphone Wireless P47 5.0+EDR Dobrável Bluetooth",
    category: "fones",
    priceRetail: 60,
    priceWholesale: 24.90,
    image: "images/headphone-p47.png",
    badge: "⚡ Top Atacado",
    badgeClass: "atacado",
    rating: 4.8,
    reviews: 82,
    specs: ["Bluetooth 5.0+EDR", "Haste Regulável Dobrável", "Atendimento de Chamadas", "Excelente Graves"]
  },
  {
    id: "audio-bluestar-earx",
    name: "Fone de Ouvido Blue Star EarX com Fio (Conector Lightning / iOS)",
    category: "fones",
    priceRetail: 35,
    priceWholesale: 14.90,
    image: "images/fone-bluestar-earx.png",
    badge: "📱 Para iPhone",
    badgeClass: "atacado",
    rating: 4.9,
    reviews: 110,
    specs: ["Conector Lightning para iPhone", "Controle de Volume no Cabo", "Microfone Embutido", "Áudio HD Hi-Fi"]
  },

  // PEÇAS & ACESSÓRIOS
  {
    id: "part-capas-coloridas",
    name: "Capas de Silicone Coloridas Anti-Impacto para Celular",
    category: "pecas",
    priceRetail: 25,
    priceWholesale: 8.90,
    image: "images/capas-celular.png",
    badge: "🏷️ Atacado Acessórios",
    badgeClass: "atacado",
    rating: 5.0,
    reviews: 142,
    specs: ["Preço Atacado por Unidade", "Cores: Roxo, Vermelho, Azul, Rosa, Grafite", "Proteção de Câmera", "Modelos iPhone/Xiaomi/Samsung"]
  }
];

// State Management
let cart = JSON.parse(localStorage.getItem('celulandia_cart') || '[]');
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Cart Drawer Triggers
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // Checkout Form Submission
  const checkoutBtn = document.getElementById('send-whatsapp-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', processCheckout);
  }
}

// Category Tabs Filter
function renderCategories() {
  const categoriesNav = document.getElementById('categories-nav');
  if (!categoriesNav) return;

  const cats = [
    { id: 'all', label: 'Todos os Produtos', icon: '⚡' },
    { id: 'relogios', label: 'Smartwatches', icon: '⌚' },
    { id: 'celulares', label: 'Smartphones', icon: '📱' },
    { id: 'motos', label: 'Motos Elétricas', icon: '🛵' },
    { id: 'fones', label: 'Fones & Áudio', icon: '🎧' },
    { id: 'pecas', label: 'Peças & Acessórios', icon: '🔧' }
  ];

  categoriesNav.innerHTML = cats.map(cat => `
    <button class="cat-btn ${currentCategory === cat.id ? 'active' : ''}" onclick="setCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  `).join('');
}

function setCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderProducts();
}

// Render Products Grid
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  const filtered = PRODUCTS.filter(prod => {
    const matchesCategory = currentCategory === 'all' || prod.category === currentCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                          prod.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente buscar por outro termo ou selecione uma categoria diferente.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(prod => `
    <div class="product-card">
      <span class="product-badge ${prod.badgeClass}">${prod.badge}</span>
      
      <div class="product-img-wrapper">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
        <button class="quick-view-btn" onclick="openQuickView('${prod.id}')">Espiar Detalhes 👁️</button>
      </div>

      <div class="product-details">
        <div class="product-category">${getCategoryLabel(prod.category)}</div>
        <h3 class="product-title">${prod.name}</h3>
        
        <div class="product-specs">
          ${prod.specs.slice(0, 3).map(s => `<span class="spec-pill">${s}</span>`).join('')}
        </div>

        <div class="product-pricing">
          <div class="price-box">
            <span class="price-retail">Varejo: R$ ${prod.priceRetail.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            <span class="price-wholesale">R$ ${prod.priceWholesale.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
            <span class="price-label">Preço Atacado no PIX</span>
          </div>

          <button class="add-cart-btn" onclick="addToCart('${prod.id}')" title="Adicionar ao Carrinho">
            🛒
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const map = {
    motos: 'Moto Elétrica',
    celulares: 'Smartphone',
    fones: 'Fones & Som',
    relogios: 'Smartwatch',
    pecas: 'Peças & Acessórios'
  };
  return map[cat] || cat;
}

// Cart Functions
function addToCart(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.priceWholesale,
      image: prod.image,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`"${prod.name}" adicionado ao carrinho!`);
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartBadge();
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('celulandia_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (badge) {
    badge.textContent = totalCount;
  }
}

function openCart() {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    renderCartItems();
    overlay.classList.add('active');
  }
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-body');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🛍️</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Escolha produtos em nosso catálogo de atacado!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 800; font-size: 0.9rem;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button style="margin-left: auto; color: #ef4444; font-size: 0.8rem;" onclick="removeFromCart('${item.id}')">Excluir</button>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  if (totalEl) totalEl.textContent = `R$ ${subtotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// WhatsApp Checkout Generator
function processCheckout() {
  if (cart.length === 0) {
    alert("Adicione pelo menos um produto ao seu carrinho para finalizar o pedido!");
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const deliverySelect = document.getElementById('delivery-mode');
  const paymentSelect = document.getElementById('payment-mode');
  const noteInput = document.getElementById('order-notes');

  const customerName = nameInput ? nameInput.value.trim() : "";
  const deliveryMode = deliverySelect ? deliverySelect.value : "Retirada em Santa Cruz";
  const paymentMode = paymentSelect ? paymentSelect.value : "PIX";
  const orderNotes = noteInput ? noteInput.value.trim() : "";

  if (!customerName) {
    alert("Por favor, digite seu nome completo para prosseguir com o pedido.");
    if (nameInput) nameInput.focus();
    return;
  }

  let text = `*NOVO PEDIDO - CELULANDIA ATACADISTA* 🚀\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `👤 *Cliente:* ${customerName}\n`;
  text += `📦 *Forma de Entrega:* ${deliveryMode}\n`;
  text += `💳 *Pagamento:* ${paymentMode}\n`;
  if (orderNotes) text += `📝 *Observação:* ${orderNotes}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  text += `🛒 *ITENS DO PEDIDO:*\n`;

  let grandTotal = 0;
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;
    text += `${idx + 1}. *${item.name}*\n`;
    text += `   ↳ Qtd: ${item.qty}x | Unit: R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})} | Subtotal: *R$ ${itemTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*\n`;
  });

  text += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💰 *VALOR TOTAL: R$ ${grandTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  text += `Gostaria de confirmar a disponibilidade dos itens e dados de envio!`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
}

// Quick View Modal
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickview-modal');
  if (!modal) return;

  modal.querySelector('#modal-img').src = prod.image;
  modal.querySelector('#modal-title').textContent = prod.name;
  modal.querySelector('#modal-category').textContent = getCategoryLabel(prod.category);
  modal.querySelector('#modal-price-wholesale').textContent = `R$ ${prod.priceWholesale.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  modal.querySelector('#modal-price-retail').textContent = `R$ ${prod.priceRetail.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
  
  const specsBox = modal.querySelector('#modal-specs');
  if (specsBox) {
    specsBox.innerHTML = prod.specs.map(s => `<li style="margin-bottom:0.4rem;">✔ ${s}</li>`).join('');
  }

  const addBtn = modal.querySelector('#modal-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(prod.id);
      closeQuickView();
      openCart();
    };
  }

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('active');
}

// Toast Notifications
function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✅</span> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
