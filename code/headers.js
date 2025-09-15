
const textsBtns = {
  es: {
    btnHome: "Inicio",
    btnProjects: "Proyectos",
    btnBlog: "Blog",
    btnAboutMe: "Sobre mí",
    btnContactMe: "Contacto"
  },
  en: {
    btnHome: "Home",
    btnProjects: "Proyects",
    btnBlog: "Blog",
    btnAboutMe: "About me",
    btnContactMe: "Contact"
  }
};
const langBtns = {
    es:{
        link: "../imgs/spanish.png"
    },
    en:{
        link: "../imgs/english.png"
    }
}


function chargeHeaders(lang, actualpage){
    if(actualpage === "home"){
        let html = `
            <img src="imgs/logo.png" id="logoMain" class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">

            <nav id="pages_general_navMain">
                <a href="index.html" class="components_btnMain text-lg
                    text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnContactMe}</a>
            </nav>
            <div id="pages_general_divOptions">
                <div id="pages_general_headerDivOfLang">
                    <img src="${langBtns[lang].link}" class="pages_general_iconsOfHeader" id="btnChangeLang1">
                </div>
                <div id="pages_general_headerDivOfSearch">
                    <img src="../imgs/search.png" class="pages_general_iconsOfHeader">
                </div>
            </div>
            `;
        document.getElementById('mainHeader').innerHTML = html;
        
        let html2 = `
            <img src="../imgs/hamburger.png" class="hamburger" id="hamburguer">
            <img src="imgs/logo.png" id="logoMain2" class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <div id="pages_general_divOptions2">
                <div id="pages_general_headerDivOfLang2">
                    <img src="${langBtns[lang].link}" class="pages_general_iconsOfHeader2" id="btnChangeLang2">
                </div>
            </div>
        `;
        document.getElementById('secondaryHeader').innerHTML = html2;

        let html3 = `
            <>
        `;
        document.getElementById('sectionMenuHamburger').innerHTML = html3;

        let html4 = `
            <div id="menuOfHeader">
                <a href="index.html" class="text-white text-2xl font-semibold tracking-wide underline decoration-green-400">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="text-white text-2xl font-semibold tracking-wide hover:text-green-400 hover:underline hover:decoration-green-400 transition-all duration-300">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="text-white text-2xl font-semibold tracking-wide hover:text-green-400 hover:underline hover:decoration-green-400 transition-all duration-300">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="text-white text-2xl font-semibold tracking-wide hover:text-green-400 hover:underline hover:decoration-green-400 transition-all duration-300">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="text-white text-2xl font-semibold tracking-wide hover:text-green-400 hover:underline hover:decoration-green-400 transition-all duration-300">
                ${textsBtns[lang].btnContactMe}</a>
                <p class="text-m font-semibold text-red-500 hover:text-red-700 hover:underline cursor-pointer transition-colors duration-300" id="closeBtnMenuSec"> Cerrar </p>
            </div>
        `;
        document.getElementById('sectionSearchBar').innerHTML = html4;
    } 
    else if (actualpage === "proyects"){
        let html = `
            <img src="imgs/logo.png" id="logoMain" 
                class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <nav id="pages_general_navMain">
                <a href="index.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="components_btnMain text-lg
                    text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnContactMe}</a>
            </nav>`;
        document.getElementById('mainHeader').innerHTML = html; 
    } 
    else if (actualpage === "blog"){
        let html = `
            <img src="imgs/logo.png" id="logoMain" 
                class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <nav id="pages_general_navMain">
                <a href="index.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="components_btnMain text-lg
                    text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnContactMe}</a>
            </nav>`;
        document.getElementById('mainHeader').innerHTML = html; 
    } 
    else if (actualpage === "about"){
        let html = `
            <img src="imgs/logo.png" id="logoMain" 
                class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <nav id="pages_general_navMain">
                <a href="index.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="components_btnMain text-lg
                    text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnContactMe}</a>
            </nav>`;
        document.getElementById('mainHeader').innerHTML = html; 
    } 
    else if (actualpage === "contact"){
        let html = `
            <img src="imgs/logo.png" id="logoMain" 
                class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <nav id="pages_general_navMain">
                <a href="index.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnHome}</a>
                <a href="proyects.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnProjects}</a>
                <a href="blog.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnBlog}</a>
                <a href="about.html" class="components_btnMain text-lg
                    text-gray-200 hover:text-green-400 transition-colors duration-300">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="contact.html" class="components_btnMain text-lg
                    text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2">
                ${textsBtns[lang].btnContactMe}</a>
            </nav>`;
        document.getElementById('mainHeader').innerHTML = html; 
    }
}