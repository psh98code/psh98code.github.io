import { LanguageController } from './languageController.js';

// Constantes para uso
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
}
const langBtns = {
    es:{
        link: "../../res/img/spanish.png"
    },
    en:{
        link: "../../res/img/english.png"
    }
}
const stylesNavLinks ={
    1: {
        "home" : "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "proyects" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    2: {
        "home" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects" : "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "blog" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    3: {
        "home" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog" : "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "aboutme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    4: {
        "home" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme" : "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "contactme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    5: {
        "home" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme" : "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme" : "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2"
    }
}
const stylesNavLinks2 = {
    1: { // Home activo
        "home": "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "proyects": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    2: { // Proyects activo
        "home": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects": "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "blog": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    3: { // Blog activo
        "home": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog": "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "aboutme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    4: { // AboutMe activo
        "home": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme": "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2",
        "contactme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300"
    },
    5: { // Contact activo
        "home": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "proyects": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "blog": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "aboutme": "components_btnMain text-lg text-gray-200 hover:text-green-400 transition-colors duration-300",
        "contactme": "components_btnMain text-lg text-green-400 hover:text-green-500 transition-colors duration-300 underline decoration-green-400 decoration-2"
    }
};




export class HeaderController{
    /**
     * @param {LanguageController} languageController - Controlador para el lenguaje
     * @param {HTMLElement} headerDesktop - Elemento header desktop
     * @param {HTMLElement} headerMobile - Elemento header mobile
     * @param {HTMLElement} desktopDivLinks - Elemento contenedor de links desktop
     * @param {HTMLElement} mobileDivLinks - Elemento contenedor de links mobile
     * @param {HTMLElement} mobileDivHamburger - Elemento botón hamburger mobile
     * @param {HTMLElement} mobileDivSearch - Elemento barra de búsqueda mobile
     * @param {HTMLElement} desktopDivSearch - Elemento barra de búsqueda desktop
     * @param {Array} navItems - Opcional, lista de secciones [{id, label, href}]
     * @param {Boolean} isHamburgerOpen - Controla si el menu hamburguesa esta abierto o cerrado
     * @param {Boolean} isSearchOpen - Controla si el seach esta abierto o cerrado
     */
    constructor(languageController,headerDesktop,headerMobile,desktopDivLinks,mobileDivLinks,mobileDivHamburger,mobileDivSearch,desktopDivSearch,navItems = null){
        this.headerDesktop = headerDesktop;
        this.headerMobile = headerMobile;
        this.desktopDivLinks = desktopDivLinks;
        this.mobileDivLinks = mobileDivLinks;
        this.mobileDivHamburger = mobileDivHamburger;
        this.mobileDivSearch = mobileDivSearch;
        this.desktopDivSearch = desktopDivSearch;
        this.languageController = languageController;
        this.isHamburgerOpen = false;

        // Si no se pasan navItems, usar default
        this.navItems = navItems || [
            { id: "home", label: "Home", href: "#home" },
            { id: "blog", label: "Blog", href: "#blog" },
            { id: "projects", label: "Projects", href: "#projects" },
            { id: "about", label: "About", href: "#about" },
            { id: "contact", label: "Contact", href: "#contact" }
        ];
    }


    renderAll(seccion){
        this.headerDesktop.innerHTML = "";
        this.headerMobile.innerHTML = "";
        this.mobileDivHamburger.innerHTML = "";
        this.mobileDivLinks.innerHTML = "";
        this.desktopDivLinks.innerHTML = "";
        this.mobileDivSearch.innerHTML = "";
        this.desktopDivSearch.innerHTML = "";
        this.renderDesktopHeader(seccion);
        this.renderMobileHeader();
        this.renderDesktopDivLinks();
        this.renderMobileDivLinks();
        this.renderMobileDivHamburger(seccion);
        this.renderMobileDivSearch();
        this.renderDesktopDivSearch();
    }
    renderAllMinusHamburger(seccion, func){
        if(divMenuHamburger.style.display == "flex"){
            this.simulateFadeOutMenuHamburger(150, () => {
                divMenuHamburger.style.display = "none";
                this.renderAll(seccion);
                func();
            });
        }
        else {
            // Si el menú ya estaba oculto
            this.renderAll(seccion);
            if(func) func();
        }
    }


    renderDesktopHeader(seccion){
        var lang = this.languageController.getLanguage();

        let html = `
        <img src="../../res/img/logo.png" id="logoMain" class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <nav id="pages_general_navMain">
                <a href="javascript:void(0)" class="${stylesNavLinks[1][seccion]} btnLinkHome">${textsBtns[lang].btnHome}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks[2][seccion]} btnLinkProyects">${textsBtns[lang].btnProjects}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks[3][seccion]} btnLinkBlog">${textsBtns[lang].btnBlog}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks[4][seccion]} btnLinkAboutMe">${textsBtns[lang].btnAboutMe}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks[5][seccion]} btnLinkContactMe">${textsBtns[lang].btnContactMe}</a>
            </nav>
            <div id="pages_general_divOptions">
                <div id="pages_general_headerDivOfLang">
                    <img src="${langBtns[lang].link}" class="pages_general_iconsOfHeader btnChangeLang">
                </div>
                <div id="pages_general_headerDivOfSearch">
                    <img src="../../res/img/search.png" class="search_btnOpen pages_general_iconsOfHeader">
                </div>
            </div>
        `;
        this.headerDesktop.innerHTML = html;
    }
    renderMobileHeader(){
        var lang = this.languageController.getLanguage();

        let html = `
            <img src="../../res/img/hamburger.png" class="hamburger hamburger_btnOpen" id="hamburguer">
            <img src="../../res/img/logo.png" id="logoMain2" class="rounded-full w-28 h-28 object-cover shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]  transition-all duration-500">
            <div id="pages_general_divOptions2">
                <div id="pages_general_headerDivOfLang2">
                    <img src="${langBtns[lang].link}" class="pages_general_iconsOfHeader2 btnChangeLang">
                </div>
                <div id="pages_general_headerDivOfSearch2">
                    <img src="../../res/img/search.png" class="search_btnOpen pages_general_iconsOfHeader">
                </div>
            </div>
        `;
        this.headerMobile.innerHTML = html;

    }

    renderDesktopDivLinks(){
        let html = `
            <img src="../../res/img/linkedin.png" class="hover-scale-and-opacity linkedIn">
            <img src="../../res/img/github.png" class="hover-scale-and-opacity gitHub">
            <img src="../../res/img/classgap.png" class="rounded-image hover-scale-and-opacity classgap">
        `;
        this.desktopDivLinks.innerHTML = html;
    }
    renderMobileDivLinks(){
        let html = `
            <img src="../../res/img/linkedin.png" class="hover-scale-and-opacity linkedIn">
            <img src="../../res/img/github.png" class="hover-scale-and-opacity gitHub">
            <img src="../../res/img/classgap.png" class="rounded-image hover-scale-and-opacity classgap">
        `;
        this.mobileDivLinks.innerHTML = html;        
    }

    renderMobileDivHamburger(seccion){
        var lang = this.languageController.getLanguage();

        let html = `
            <div id="menuOfHeader">
                <a href="javascript:void(0)" class="${stylesNavLinks2[1][seccion]} btnLinkHome">
                ${textsBtns[lang].btnHome}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks2[2][seccion]} btnLinkProyects">
                ${textsBtns[lang].btnProjects}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks2[3][seccion]} btnLinkBlog">
                ${textsBtns[lang].btnBlog}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks2[4][seccion]} btnLinkAboutMe">
                ${textsBtns[lang].btnAboutMe}</a>
                <a href="javascript:void(0)" class="${stylesNavLinks2[5][seccion]} btnLinkContactMe">
                ${textsBtns[lang].btnContactMe}</a>
                <p class="hamburger_btnClose text-m font-semibold text-red-500 hover:text-red-700 hover:underline cursor-pointer transition-colors duration-300" id="closeBtnMenuSec"> Cerrar </p>
            </div>
        `;
        this.mobileDivHamburger.innerHTML = html;
    }

    renderDesktopDivSearch(){

    }
    renderMobileDivSearch(){
        
    }








    setClickListeners_NavLinkHome(handler){
        const btns = document.getElementsByClassName("btnLinkHome");
     
        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                handler();           
            });
        });
    }
    setClickListeners_NavLinkContactMe(handler){
        const btns = document.getElementsByClassName("btnLinkContactMe");
     
        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                handler();           
            });
        });
    }
    setClickListeners_NavLinkAboutMe(handler){
        const btns = document.getElementsByClassName("btnLinkAboutMe");
     
        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                handler();           
            });
        });
    }
    setClickListeners_NavLinkProyect(handler){
        const btns = document.getElementsByClassName("btnLinkProyects");
     
        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                handler();           
            });
        });
    }
    setClickListeners_NavLinkBlog(handler){
        const btns = document.getElementsByClassName("btnLinkBlog");
     
        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                handler();           
            });
        });
    }
    setClickListeners_LanguageBtns(handler){
        const btns = document.getElementsByClassName("btnChangeLang");

        Array.from(btns).forEach(btn => {
            btn.addEventListener("click", (event) => {
                this.languageController.changeLanguage();
                var lang = this.languageController.getLanguage();

                event.preventDefault(); 
                const btns2 = document.getElementsByClassName("btnChangeLang");
                Array.from(btns2).forEach(btn2 => {
                    btn2.src = langBtns[lang].link;
                });
                handler();
            });
        });

    }
    setClickListeners_Hamburger(){
        let hamburgerBtn = document.getElementById("hamburguer");
        let hamburgerBtnClose = document.getElementById("closeBtnMenuSec");
        let divMenuHamburger = document.getElementById("divMenuHamburger");

        hamburgerBtn.addEventListener("click", (event) => {
            event.preventDefault();
            hamburgerBtn.src = "../../res/img/close.png";
            divMenuHamburger.style.opacity = 1;
            divMenuHamburger.style.display = "flex";
        });
        hamburgerBtnClose.addEventListener("click", (event) => {
            event.preventDefault();
            hamburgerBtn.src = "../../res/img/hamburger.png";
            divMenuHamburger.style.display = "none";
        });
    }
    setClickListeners_Links(){
        let btnsLkdn = document.getElementsByClassName("linkedIn");
        let btnsClss = document.getElementsByClassName("classgap");
        let btnsGthb = document.getElementsByClassName("gitHub");

        Array.from(btnsLkdn).forEach(lnk => {
            lnk.addEventListener("click", () => {
                openInNewTab("https://www.linkedin.com/in/psh98code");
            });
        });
        Array.from(btnsClss).forEach(lnk => {
            lnk.addEventListener("click", () => {
                openInNewTab("https://www.classgap.com/es/tutor/pablo-1086105");
            });
        });
        Array.from(btnsGthb).forEach(lnk => {
            lnk.addEventListener("click", () => {
                openInNewTab("https://github.com/psh98code");
            });
        });
    }






    simulateFadeOutMenuHamburger(duration, onComplete) {
        const startTime = performance.now();
        const divMenuHamburger = document.getElementById("divMenuHamburger");

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1); // Normalizamos entre 0 y 1
            divMenuHamburger.style.opacity = 1 - progress;   // De 1 a 0

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (onComplete) onComplete();
            }
        }

        requestAnimationFrame(update);
    }
}




function openInNewTab(url) {
    window.open(url, "_blank");
}
