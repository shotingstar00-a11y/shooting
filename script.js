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
let ticking = false;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".heading");

  const hero =
    document.querySelector(".our-story-hero") ||
    document.querySelector(".our-story-intro");

  if (!hero || !navbar) return;

  const triggerPoint = hero.offsetHeight - 100;
  const scrollY = window.scrollY;

  if (scrollY > triggerPoint) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// ================= TRANSLATION DATA =================
const translations = {
  en: {
    home: "Home",
    shoping: "Shop",
    about: "About",
    contact: "Contact",
    hero_text: "Crafting Fashion. Creating Confidence.",
    my_products: "My Products",
    contact_me: "Contact Me",
    about_me: "About Me",
    our_story: "Our Story",
    our_story1:
      "Founded with a vision to redefine fashion manufacturing, Shooting Star brings together skilled craftsmanship, modern technology, and timeless design to create clothing that speaks for itself",
    values: "Our Values",
    values1: `    Quality First  
            Creative Design
                     Long-term Partnerships `,
    services: "Our Services",
    our_service: `Custom Manufacturing
We bring your designs to life with precision and care.



Private Label Production
From concept to final product — your brand, our expertise.



Bulk Orders & Export
Reliable production and timely delivery worldwide.`,
    contact_us: "Contact Us",
    get_in_touch: "Get in Touch",
    name: "Enter your full name",
    send: "send message",
    // Footer
    footer_about: `We are working to expand our production lines and increase our capabilities to reach new markets, and to develop products that meet the constantly changing needs of customers.`,
    quick_links: "Quick Links",
    adress: "📍 address: egypt- cairo- ezbet el nakhl",
    phone: "📞 phone:01013737586",
    email: "✉️ email:shotingstar00@gmail.com",
    rights: "All Rights Reserved © 2026 – Shooting Star",
  },

  ar: {
    home: "الرئيسية",
    shoping: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    hero_text: "نصنع الأناقة. نخلق الثقة.",
    my_products: "المنتجات",
    contact_me: "تواصل معي",
    about_me: "من نحن",
    our_story: "قصتنا",
    our_story1:
      "تأسست شركة Shooting Star بهدف إعادة تعريف صناعة الأزياء، حيث تجمع بين الحرفية الماهرة والتكنولوجيا الحديثة والتصميم الخالد لإنشاء ملابس تتحدث عن نفسها",
    values: "قيمنا",
    values1: `الجودة أولاً
تصميم إبداعي
شراكات طويلة الأمد`,
    services: "خدماتنا",
    our_service: `تصنيع حسب الطلب
نُضفي على تصاميمكم لمسةً من الدقة والعناية.

إنتاج العلامات التجارية الخاصة
من الفكرة إلى المنتج النهائي - علامتكم التجارية، خبرتنا.

طلبات الجملة والتصدير
إنتاج موثوق وتسليم في الوقت المحدد لجميع أنحاء العالم.
`,
    contact_us: "أتصل بنا",
    get_in_touch: "كن على تواصل",
    name: "أكتب أسمك بالكامل",
    send: "أرسال",
    // Footer
    footer_about: `نحن نعمل على توسيع خطوط إنتاجنا وزيادة قدراتنا للوصول إلى أسواق جديدة، وتطوير منتجات تلبي احتياجات العملاء المتغيرة باستمرار`,
    quick_links: "روابط سريعة",
    address: "العنوان: مصر - القاهره - عزبه النخل📍",
    phone: " رقم الهاتف:01013737586📞",
    email: "shotingstar00@gmail.com:أيميل✉️",
    rights: "© 2026 جميع الحقوق محفوظة – Shooting Star",
  },
};

// ================ BUTTON ACTION =====================
const btn = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("lang") || "en";

function applyTranslation(lang) {
  document.documentElement.lang = lang;

  // RTL - LTR
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "ar" ? "right" : "left";

  // Change button text
  btn.textContent = lang === "ar" ? "EN" : "AR";

  // Replace all text nodes with translation
  document.querySelectorAll("[data-translate]").forEach((el) => {
    el.textContent = translations[lang][el.dataset.translate];
  });

  localStorage.setItem("lang", lang);
}

// Toggle Language
btn.onclick = () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyTranslation(currentLang);
};

// Apply on page load
applyTranslation(currentLang);
