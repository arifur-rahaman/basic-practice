/* =========================
   GLOBAL CART
========================= */
let cart = [];

/* =========================
   SUBSCRIBE FEATURE (FOOTER)
========================= */
const subscribeBtn = document.querySelector(".subscribe-btn");
const subscribeInput = document.getElementById("subscribe");
const subscribeField = document.querySelector(".subscribe-field");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const emailValue = subscribeInput.value.trim();

    // Simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      subscribeInput.classList.add("invalid");
      subscribeField.classList.add("show-tooltip");
      return;
    }

    // Valid email
    subscribeInput.classList.remove("invalid");
    subscribeField.classList.remove("show-tooltip");

    alert("Thank you for subscribing.");
    subscribeInput.value = "";
  });
}

/* =========================
   GALLERY – ADD TO CART
========================= */
const galleryItems = document.querySelectorAll(".gallery-grid div");

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    cart.push(`Item ${index + 1}`);
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
if (viewCartBtn) {
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
  cartModal.style.display = "none";
}

/* =========================
   CLEAR CART
========================= */
function clearCart() {
  if (cart.length > 0) {
    cart = [];
    renderCart();
    alert("Cart Cleared");
  } else {
    alert("No items to clear.");
  }
}

/* =========================
   PROCESS ORDER
========================= */
function processOrder() {
  if (cart.length > 0) {
    cart = [];
    renderCart();
    alert("Thank you for your order");
    closeCart();
  } else {
    alert("Cart is empty.");
  }
}

/* =========================
   CONTACT FORM
========================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out this field.");
    } else {
      alert("Thank you for your message");
      contactForm.reset();
    }
  });
}
