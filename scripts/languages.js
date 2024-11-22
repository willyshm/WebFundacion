const translations = {
    en: {
        start: "Start",
        about: "About Us",
        program: "Spanish Program",
        accommodation: "Accommodation",
        volunteer: "Volunteering",
        register: "Register",
        "main-heading": "BREAKING BARRIERS WITH LANGUAGES, BUILDING A BETTER WORLD.",
        subheading: "Cúcuta, a land of borders and warm hearts, where history, culture, and hospitality meet to create unforgettable experiences."
    },
    es: {
        start: "Inicio",
        about: "¿Quiénes Somos?",
        program: "Programa de español",
        accommodation: "Hospedaje",
        volunteer: "Voluntariado",
        register: "Regístrate",
        "main-heading": "ROMPIENDO BARRERAS CON IDIOMAS, CONSTRUYENDO UN MUNDO MEJOR.",
        subheading: "Cúcuta, tierra de fronteras y corazón cálido, donde la historia, la cultura y la hospitalidad se encuentran para crear experiencias inolvidables."
    }
};

let currentLanguage = "es"; // Idioma inicial

document.getElementById("language-toggle").addEventListener("click", () => {
    // Alternar idioma
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    // Cambiar el texto del botón entre EN y ES
    document.getElementById("language-toggle").textContent = currentLanguage === "es" ? "EN" : "ES";

    // Actualizar el contenido de todos los elementos traducibles
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[currentLanguage][key];
    });
});