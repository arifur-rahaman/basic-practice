let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

/* =========================
   SUBSCRIBE FEATURE (FOOTER)
========================= */
const subscribeBtn = document.querySelector(".subscribe-btn");
const subscribeInput = document.getElementById("subscribe");
const subscribeField = document.querySelector(".subscribe-field");

if (subscribeBtn && subscribeInput && subscribeField) {
  subscribeBtn.addEventListener("click", () => {
    const emailValue = subscribeInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      subscribeInput.classList.add("invalid");
      subscribeField.classList.add("show-tooltip");
      return;
    }

    subscribeInput.classList.remove("invalid");
    subscribeField.classList.remove("show-tooltip");

    alert("Thank you for subscribing");
    subscribeInput.value = "";
  });
}

/* =========================
   GALLERY – ADD TO CART
========================= */
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const itemName = btn.getAttribute("data-item");

    cart.push(itemName);
    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to the cart");
  });
});

/* =========================
   CART MODAL ELEMENTS
========================= */
const viewCartBtn = document.getElementById("view-cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsList = document.getElementById("cart-items");

/* =========================
   VIEW CART
========================= */
if (viewCartBtn && cartModal && cartItemsList) {
  viewCartBtn.addEventListener("click", () => {
    renderCart();
    cartModal.style.display = "flex";
  });
}

/* =========================
   RENDER CART ITEMS
========================= */
function renderCart() {
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}

/* =========================
   CLOSE CART
========================= */
function closeCart() {
  if (cartModal) {
    cartModal.style.display = "none";
  }
}

/* =========================
   CLEAR CART
========================= */
function clearCart() {
  if (cart.length > 0) {
    cart = [];
    sessionStorage.removeItem("cart");
    renderCart();
    alert("Cart cleared");
  } else {
    alert("No items to clear");
  }
}

/* =========================
   PROCESS ORDER
========================= */
function processOrder() {
  if (cart.length > 0) {
    cart = [];
    sessionStorage.removeItem("cart");
    renderCart();
    alert("Thank you for your order");
    closeCart();
  } else {
    alert("Cart is empty");
  }
}

/* =========================
   CONTACT FORM (LOCAL STORAGE)
========================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject")?.value.trim() || "",
      message: document.getElementById("message").value.trim(),
      submittedAt: new Date().toLocaleString(),
    };

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields");
      return;
    }

    localStorage.setItem("contactFormData", JSON.stringify(formData));

    alert("Thank you for your message");
    contactForm.reset();
  });
}

/* =========================
   HAMBURGER MENU
========================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}
