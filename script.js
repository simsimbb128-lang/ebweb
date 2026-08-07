// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// =========================
// Language Switch
// =========================

const languageBtn = document.getElementById("languageBtn");

let currentLang = localStorage.getItem("lang") || "ar";

function setLanguage(lang){

    document.documentElement.lang = lang;

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar]").forEach(el=>{

        el.textContent = lang==="ar"
        ? el.dataset.ar
        : el.dataset.en;

    });

    document.querySelectorAll("[data-ar-placeholder]").forEach(el=>{

        el.placeholder = lang==="ar"
        ? el.dataset.arPlaceholder
        : el.dataset.enPlaceholder;

    });

    languageBtn.innerHTML =
        lang==="ar"
        ? "🌐 العربية | English"
        : "🌐 English | العربية";

    localStorage.setItem("lang",lang);

}

setLanguage(currentLang);

languageBtn.addEventListener("click",()=>{

    currentLang =
        currentLang==="ar"
        ? "en"
        : "ar";

    setLanguage(currentLang);

});

// =========================
// Scroll To Top
// =========================

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTopBtn.style.display="block";

    }else{

        scrollTopBtn.style.display="none";

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("تم إرسال رسالتك بنجاح!");
});