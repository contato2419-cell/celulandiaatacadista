/* ==========================================================================
   CELULANDIA ATACADISTA - SODELLA MODEL JS ENGINE
   WhatsApp Smart Cart, Filters & QuickView Modal
   ========================================================================== */

const WHATSAPP_NUMBER = "5521987680702";

// Products Catalog Data (iPhone 15 Removed as requested)
const PRODUCTS = [
  // MOTOS ELÉTRICAS BIKELANDIA (Fotos do Usuário)
  {
    id: "moto-1",
    name: "Scooter Elétrica Celulandia Tricolor Edition",
    category: "motos",
    priceRetail: 4500,
    priceWholesale: 3890,
    image: "images/moto-e-1.png",
    badge: "DESTAQUE BIKELANDIA",
    specs: ["Motor 1000W High Torque", "Bateria Lítio Removível 60V", "Autonomia até 45km", "Painel Digital LED"]
  },
  {
    id: "moto-2",
    name: "Scooter Elétrica Celulandia Vintage White",
    category: "motos",
    priceRetail: 4990,
    priceWholesale: 4290,
    image: "images/moto-e-2.png",
    badge: "MAIS VENDIDA",
    specs: ["Motor 1200W Potente", "Design Retro Clássico", "Freio a Disco ABS", "Suporte para Capacete"]
  },
  {
    id: "moto-3",
    name: "Scooter Elétrica Monster Fat Tire Black",
    category: "motos",
    priceRetail: 5800,
    priceWholesale: 4990,
    image: "images/moto-e-3.png",
    badge: "SUPER POTÊNCIA",
    specs: ["Pneu Largo Off-Road Fat Tire", "Motor 1500W Ultra", "Bateria Removível 20Ah", "Amortecedor Duplo Reforçado"]
  },

  // SMARTPHONES REAL STORE PRODUCTS (Fotos do Usuário - iPhone 15 Removido)
  {
    id: "phone-poco-c71",
    name: "Smartphone POCO C71 (Xiaomi) Lacrado - Várias Cores",
    category: "celulares",
    priceRetail: 890,
    priceWholesale: 680,
    image: "images/poco-c71.png",
    badge: "🔥 CAMPEÃO ATACADO",
    specs: ["Cores: Azul, Preto, Prata", "Versão Global Lacrada na Caixa", "Processador Octa-Core", "Garantia de Loja"]
  },
  {
    id: "phone-realme-note-60x",
    name: "Smartphone realme Note 60x - Preto e Verde Mint",
    category: "celulares",
    priceRetail: 850,
    priceWholesale: 640,
    image: "images/realme-note-60x.png",
    badge: "✨ NOVO NO ESTOQUE",
    specs: ["Cores: Preto & Verde Mint", "Bateria 5000mAh de Longa Duração", "Super Custo-Benefício Atacadista", "Caixa Original"]
  },

  // SMARTWATCHES REAL STORE PRODUCTS (Fotos do Usuário)
  {
    id: "watch-ultra-black",
    name: "Smartwatch Ultra 49mm Titanium Black + Indução",
    category: "relogios",
    priceRetail: 190,
    priceWholesale: 99.90,
    image: "images/smartwatch-ultra-black.png",
    badge: "🔥 TOP VENDAS",
    specs: ["Caixa 49mm Titanium Black", "Carregador Magnético por Indução", "Faz e Recebe Chamadas Bluetooth", "Caixa Lacrada"]
  },
  {
    id: "watch-ultra-kit5",
    name: "Kit Smartwatch Ultra 49mm com 5 Pulseiras + Bumpers",
    category: "relogios",
    priceRetail: 250,
    priceWholesale: 129.90,
    image: "images/smartwatch-ultra-kit5.png",
    badge: "🎁 KIT 5 EM 1",
    specs: ["5 Pulseiras Ocean (Preta, Laranja, Amarela, Verde, Menta)", "Case Bumper 49mm Incluso", "Sensores Cardíacos e Esportivos", "Pronta Entrega Atacado"]
  },
  {
    id: "watch-ultra-gold",
    name: "Smartwatch Ultra Gold 18K Luxury Edition + 2 Pulseiras",
    category: "relogios",
    priceRetail: 290,
    priceWholesale: 149.90,
    image: "images/smartwatch-ultra-gold.png",
    badge: "👑 EDIÇÃO LUXO OURO",
    specs: ["Acabamento em Ouro Dourado 18K", "Pulseira Metálica Ouro + Silicone Preta", "Chave Ajustadora de Elos", "Estojo Presenteável Premium"]
  },

  // FONES & ÁUDIO REAL STORE PRODUCTS (Fotos do Usuário)
  {
    id: "audio-airdots",
    name: "Fone de Ouvido TWS AirDots Bluetooth 5.1 sem Fio",
    category: "fones",
    priceRetail: 55,
    priceWholesale: 22.90,
    image: "images/airdots-tws.png",
    badge: "🔥 CAMPEÃO VENDAS",
    specs: ["Bluetooth v5.1 High Speed", "Estojo de Carregamento sem Fio", "Touch Control Inteligente", "Atacado por Unidade"]
  },
  {
    id: "audio-jbl-jb950",
    name: "Headset Bluetooth JBL Everest JB950 Wireless FM/MP3",
    category: "fones",
    priceRetail: 89,
    priceWholesale: 38.90,
    image: "images/jbl-everest-jb950.png",
    badge: "🎧 SUPER BASS",
    specs: ["Rádio FM & Leitor Cartão MicroSD", "Microfone Noise Reduction", "Dobrável e Ajustável", "Várias Cores"]
  },
  {
    id: "audio-p47",
    name: "Headphone Wireless P47 5.0+EDR Dobrável Bluetooth",
    category: "fones",
    priceRetail: 60,
    priceWholesale: 24.90,
    image: "images/headphone-p47.png",
    badge: "⚡ TOP ATACADO",
    specs: ["Bluetooth 5.0+EDR", "Haste Regulável Dobrável", "Atendimento de Chamadas", "Excelente Graves"]
  },
  {
    id: "audio-bluestar-earx",
    name: "Fone Blue Star EarX com Fio (Conector Lightning / iOS)",
    category: "fones",
    priceRetail: 35,
    priceWholesale: 14.90,
    image: "images/fone-bluestar-earx.png",
    badge: "📱 PARA IPHONE",
    specs: ["Conector Lightning para iPhone", "Controle de Volume no Cabo", "Microfone Embutido", "Áudio HD Hi-Fi"]
  },

  // PEÇAS & ACESSÓRIOS REAL STORE PRODUCTS (Fotos do Usuário)
  {
    id: "part-capas-coloridas",
    name: "Capas de Silicone Coloridas Anti-Impacto para Celular",
    category: "pecas",
    priceRetail: 25,
    priceWholesale: 8.90,
    image: "images/capas-celular.png",
    badge: "🏷️ ATACADO ACESSÓRIOS",
    specs: ["Preço Atacado por Unidade", "Cores: Roxo, Vermelho, Azul, Rosa, Grafite", "Proteção para Câmera", "Modelos iPhone/Xiaomi/Samsung"]
  }
];

// State Management
let cart = JSON.parse(localStorage.getItem('celulandia_cart') || '[]');
let currentCategory = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

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

  const checkoutBtn = document.getElementById('send-whatsapp-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', processCheckout);
  }
}

// Category Filter Bar Modeled after SoDella
function renderCategories() {
  const categoriesNav = document.getElementById('categories-nav');
  if (!categoriesNav) return;

  const cats = [
    { id: 'all', label: 'TODOS OS PRODUTOS' },
    { id: 'motos', label: 'MOTOS ELÉTRICAS' },
    { id: 'celulares', label: 'SMARTPHONES' },
    { id: 'relogios', label: 'SMARTWATCHES' },
    { id: 'fones', label: 'FONES & ÁUDIO' },
    { id: 'pecas', label: 'PEÇAS & ACESSÓRIOS' }
  ];

  categoriesNav.innerHTML = cats.map(cat => `
    <a href="javascript:void(0)" class="cat-link ${currentCategory === cat.id ? 'active' : ''}" onclick="setCategory('${cat.id}')">
      ${cat.label}
    </a>
  `).join('');
}

function setCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderProducts();
}

// Products Grid Renderer Modeled after SoDella
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
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-light);">
        <h3 style="font-weight: 400; letter-spacing: 2px;">NENHUM PRODUTO ENCONTRADO</h3>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">TENTE BUSCAR POR OUTRO TERMO OU CATEGORIA.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(prod => `
    <div class="product-card">
      <div class="product-image-wrapper">
        <span class="product-badge-tag">${prod.badge}</span>
        <img src="${prod.image}" alt="${prod.name}" class="product-image" loading="lazy" />
        <button class="product-quickview-btn" onclick="openQuickView('${prod.id}')">ESPIAR DETALHES 👁️</button>
      </div>

      <div class="product-info">
        <div class="product-category-name">${getCategoryLabel(prod.category)}</div>
        <h3 class="product-title">${prod.name}</h3>
        
        <div class="product-price">
          <span class="product-retail-price">R$ ${prod.priceRetail.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
          R$ ${prod.priceWholesale.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
        </div>

        <button class="btn-add-cart-card" onclick="addToCart('${prod.id}')">
          ADICIONAR À SACOLA 🛒
        </button>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const map = {
    motos: 'MOTO ELÉTRICA BIKELANDIA',
    celulares: 'SMARTPHONE',
    fones: 'FONES & ÁUDIO',
    relogios: 'SMARTWATCH',
    pecas: 'PEÇAS & ACESSÓRIOS'
  };
  return map[cat] || cat.toUpperCase();
}

// Cart Management Modeled after SoDella
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
  showToast(`"${prod.name}" ADICIONADO À SACOLA!`);
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
  const sidebar = document.querySelector('.cart-sidebar');
  if (overlay && sidebar) {
    renderCartItems();
    overlay.classList.add('open');
    sidebar.classList.add('open');
  }
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.querySelector('.cart-sidebar');
  if (overlay && sidebar) {
    overlay.classList.remove('open');
    sidebar.classList.remove('open');
  }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-body');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-light);">
        <p style="font-size: 1rem; letter-spacing: 1px; text-transform: uppercase;">SUA SACOLA ESTÁ VAZIA</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button class="cart-remove" style="margin-left: auto;" onclick="removeFromCart('${item.id}')">REMOVER</button>
        </div>
      </div>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = `R$ ${subtotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

// WhatsApp Checkout Generator
function processCheckout() {
  if (cart.length === 0) {
    alert("ADICIONE PELO MENOS UM PRODUTO À SUA SACOLA!");
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
    alert("POR FAVOR, DIGITE SEU NOME COMPLETO PARA FINALIZAR.");
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
  modal.querySelector('#modal-price').textContent = `R$ ${prod.priceWholesale.toLocaleString('pt-BR', {minimumFractionDigits: 2})} ATACADO NO PIX`;
  
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

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('open');
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
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
