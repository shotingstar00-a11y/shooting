// -------------------
// 1) Navbar Active
// -------------------
const navItems = document.querySelectorAll(".heading");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".heading.active")?.classList.remove("active");
    item.classList.add("active");
  });
});

// -------------------
// 2) WhatsApp Buttons Inside Products
// -------------------
const phone = "201013737586"; // رقمك بدون +
const buttons = document.querySelectorAll(".pro button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع فتح الـ popup عند الضغط على زر واتساب
    const parent = btn.closest(".pro1");
    const codeEl = Array.from(parent.querySelectorAll("h5")).find((h5) =>
      h5.textContent.toLowerCase().includes("code")
    );
    const codeText = codeEl ? codeEl.textContent.trim() : "غير محدد";
    const msg = `مرحبًا، أود الاستفسار عن المنتج ${codeText}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  });
});

// -------------------
// 3) Form → WhatsApp
// -------------------
function sendToWhatsApp(event) {
  event.preventDefault();

  let phoneNumber = "201113605116";
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let text = `Hello Shooting Star 👋
Name: ${name}
Email: ${email}
Message: ${message}`;

  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// -------------------
// 4) Scroll Navbar Styling (صفحات مختلفة)
// -------------------
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".heading");

  const hero =
    document.querySelector(".hero") || document.querySelector(".hero-shop");

  if (!hero) return; // لو مفيش Hero في الصفحة

  const triggerPoint = hero.offsetHeight - 100;
  const scrollY = window.scrollY;

  if (scrollY > triggerPoint) navbar.classList.add("scroled");
  else navbar.classList.remove("scroled");
});

// -------------------
// 5) المنتج → Popup
// -------------------
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCode = document.getElementById("modalCode");
const modalPrice = document.getElementById("modalPrice");
// زرار Contact Me داخل الـ Popup
const contactBtn = document.getElementById("contactbtn");

if (contactBtn) {
  contactBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع فتح أي شيء غير الواتساب

    const phonePopup = "201013737586"; // رقمك
    const codePopup = modalCode.textContent || "غير محدد";

    const msg = `مرحبًا، أود الاستفسار عن المنتج ${codePopup}`;
    const url = `https://wa.me/${phonePopup}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  });
}

const navbar = document.querySelector(".heading");

document.querySelectorAll(".pro1").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").textContent;
    const soft = item.querySelectorAll("h5")[0]?.textContent || "";
    const code = item.querySelectorAll("h5")[1]?.textContent || "غير محدد";
    const price = item.querySelector("span")?.textContent || "";

    modalImg.src = img;
    modalTitle.textContent = `${title} - ${soft}`;
    modalCode.textContent = code;
    modalPrice.textContent = price;

    modal.style.display = "flex";
    navbar.classList.add("hide"); // بدل display = none (أفضل ومعماري)
  });
});

// -------------------
// 6) إغلاق الـ Popup
// -------------------
document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
  navbar.classList.remove("hide");
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    navbar.classList.remove("hide");
  }
};

// -------------------
// 7) Slider Fade-in
// -------------------
window.addEventListener("load", function () {
  const slider = document.querySelector(".slides");
  if (slider) slider.style.opacity = "1";
});
