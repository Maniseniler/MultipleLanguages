//-------------------------------------------------------------------------------------------------------------------------------------------|
// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Constants ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
//-------------------------------------------------------------------------------------------------------------------------------------------|

let translations = {};
const languageButtons = document.querySelectorAll('.lang-btn');

//-------------------------------------------------------------------------------------------------------------------------------------------|
// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Reloading Fonctions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
//-------------------------------------------------------------------------------------------------------------------------------------------|

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        translations = await response.json();
    } catch (error) {
        console.error("Error loading translation file:", error);
        document.body.innerHTML = '<p style="color: red; text-align: center; padding-top: 50px;">Failed to load language data. Please try again later.</p>';
    }
}


const setLanguage = (lang) => {
    if (!translations[lang]) return console.error(`Language '${lang}' not found in translations.`);

    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = translations[lang][key] || key;
    });

    document.title = translations[lang]['page_title'] || 'Multilingual Website';
    document.documentElement.lang = lang;

    languageButtons.forEach(btn => {
        btn.classList.toggle('active', `btn-${lang}` === btn.id);
    });

    localStorage.setItem('selectedLanguage', lang);
};

//-------------------------------------------------------------------------------------------------------------------------------------------|
// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Init ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
//-------------------------------------------------------------------------------------------------------------------------------------------|

function initializePage() {
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.split('-')[1]; 
            setLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('selectedLanguage');

    const initialLang = savedLang && translations[savedLang] ? savedLang : 'en';
    
    setLanguage(initialLang);
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initializePage();
});
