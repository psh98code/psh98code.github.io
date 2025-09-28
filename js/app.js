import { HeaderController } from "./controllers/headerController.js";
import { BlogParser } from "./jsonParser/jsonParserBlog.js";
import { ProjectParser } from "./jsonParser/jsonParserProyect.js";
import { HomeController } from "./controllers/pages_homeController.js"
import { LanguageController } from './controllers/languageController.js';
import { BlogSystem } from "./systems/blogSystem.js";
import { AboutMeController } from "./controllers/pages_aboutmeController.js";
import { BlogController } from "./controllers/pages_blogController.js";


// INICIALIZACIONES --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Parsers ------------------------------------------------------------------------
const blogManager = new BlogParser("../data/blog.json");
const projectManager = new ProjectParser("../data/proyects.json");
// Contentedores
const headerDesktop = document.getElementById("headerDesktop");
const headerMobile = document.getElementById("headerMobile");
const sectionDesktop = document.getElementById("sectionDesktop");
const sectionMobile = document.getElementById("sectionMobile");
const divMenuHamburger = document.getElementById("divMenuHamburger");
const divSearchBarMobile = document.getElementById("divSearchBarMobile");
const divSearchBarDesktop = document.getElementById("divSearchBarDesktop");
const desktopNavLinks = document.getElementById("divRssDesktop");
const mobileNavLinks = document.getElementById("divRssMobile");



export class App {
    /**
     * @param {HeaderController} headerController -- Controlador para el HEADER
     * @param {HomeController} homeController -- Controlador para el HOME
     * @param {AboutMeController} aboutMeController -- Controlador para el ABOUT ME
     * @param {LanguageController} languageController -- Controlador para el IDIOMA
     * @param {BlogController} blogController
     * @param {BlogSystem} blogSystem -- Controlador para el SISTEMA DE BLOG
     * @param {BlogParser} blogParser -- Parseador para el blog
     * @param {ProjectParser} proyectParser -- Parseador para el parser
     */
    constructor() {
        this.blogParser = new BlogParser("../data/blog.json");
        this.proyectParser = new ProjectParser("../data/proyects.json");
        this.languageController = new LanguageController();
        this.blogSystem = new BlogSystem(this.blogParser, this.proyectParser);
        this.homeController = new HomeController(this.languageController, this.blogSystem);
        this.headerController = new HeaderController(this.languageController,headerDesktop,headerMobile,desktopNavLinks,mobileNavLinks,divMenuHamburger,divSearchBarMobile,divSearchBarDesktop);
        this.aboutMeController = new AboutMeController(this.languageController);
        this.blogController = new BlogController(this.languageController, this.blogSystem);
    }

    async init() {
        await Promise.all([
            this.blogSystem.loadAllParsers()
        ]);

        this.route();
        window.addEventListener("hashchange", () => {
            this.route();
        });
    }







    navigateTo(path) {
        history.pushState({}, "", path);    // Cambia la URL sin recargar
        this.route();                       // Carga contenido
    };

    route() {
        const path = window.location.pathname; // ej: "/projects/1"
        const segments = path.split("/").filter(seg => seg !== ""); // ["projects", "1"]

        if (segments.length === 0) {
            document.getElementById("loadingDiv").style.display = "flex";
            document.body.classList.remove("bodyGeneral");
            document.body.classList.add("bodyLoading");
            this.simulateLoading(1000, () => {
                this.goToHome();
            });
        } 
        else{
            this.clearAllPageRenders();
            const seccion = segments[0];
            console.log(seccion);
            // Renderiza SIEMPRE el header 
            if(document.getElementById("divMenuHamburger").style.display == "flex"){
                this.headerController.renderAllMinusHamburger(seccion, () => this.setAllClickListeners(seccion));
            }
            else{
                this.headerController.renderAll(seccion);
                this.setAllClickListeners(seccion);
            }

            switch(seccion){
                case "home":
                    this.homeController.renderAll();
                    this.homeController.setAllClickListeners();
                    this.homeController.loopOfLastArticles();
                    this.setMinimumHeightSection(60, { allowScrollMobile: true, allowScrollDesktop: false, autoHeight: true });
                ;
                break;
                case "contactme":;
                break;
                case "aboutme":
                    console.log("Entering about me");
                    this.aboutMeController.renderAll();    
                    this.setMinimumHeightSection(150, { allowScrollMobile: true, allowScrollDesktop: true, autoHeight: true });
                ;
                break;
                case "blog":
                    {
                        const param = segments[1] // Usar para el parametro como por ejemplo la entrada de blog o de proyecto
                        console.log("param " +param);
                        if(param !== undefined){

                        }
                        else{
                            this.setMinimumHeightSection(100, { allowScrollMobile: true, allowScrollDesktop: false, autoHeight: true });
                            this.blogController.renderAll(
                                (blogEntryId) => {
                                    this.blogController.renderBlogEntry(blogEntryId) 
                                    this.setMinimumHeightSection(100, { allowScrollMobile: true, allowScrollDesktop: true, autoHeight: true });
                                },
                                (indexPage) => { 
                                    this.blogController.changeActualPage(indexPage); 
                                    this.setMinimumHeightSection(100, { allowScrollMobile: true, allowScrollDesktop: false, autoHeight: true });
                                },
                                () => {
                                    this.route();
                                }
                            );
                        }
                    }    
                ;
                break;
                case "proyects":
                    {
                        const param = segments[1]

                    }                    
                ;
                break;
                default:; // Cargar error 404
            }
        }
    }







    /* LOADING EFFECT ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
    simulateLoading(duration = 1000, onComplete = null) {
        const loadingBar = document.getElementById("loadingBar");
        if (!loadingBar) return;

        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);
            loadingBar.style.width = progress + "%";

            if (progress < 100) {
                requestAnimationFrame(update);
            } 
            else {
                if (onComplete) onComplete();
            }
        }

        requestAnimationFrame(update);
    }

    fadeOutBodyLoading(duration = 1000, onComplete = null) {
        const body = document.body;
        if (!body.classList.contains("bodyLoading")) return;

        // Obtener el color de fondo actual
        const style = getComputedStyle(body);
        const bg = style.backgroundColor;

        // Convertir rgb(a) a componentes
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        let r = 0, g = 0, b = 0, a = 1;
        if (match) {
            r = parseInt(match[1]);
            g = parseInt(match[2]);
            b = parseInt(match[3]);
            a = match[4] !== undefined ? parseFloat(match[4]) : 1;
        }

        let startTime = null;

        function update(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1); // 0 → 1

            // Opacidad del body
            body.style.opacity = 1 - progress;

            // Reducir alfa del background
            body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a * (1 - progress)})`;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Limpiar estilos y clases
                body.style.opacity = "";
                body.style.backgroundColor = "";
                body.classList.remove("bodyLoading");

                if (onComplete) onComplete();
            }
        }

        requestAnimationFrame(update);
    }








    /* GO TO HOME ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
    goToHome(){
        if(document.body.classList.contains("bodyLoading")){
                document.body.classList.add("bodyGeneral");
            
            this.fadeOutBodyLoading(600, () => {
                document.getElementById("loadingDiv").style.display = "none";
                document.body.classList.remove("bodyLoading");
                this.navigateTo("home");
            });
        }
        else{
            document.body.classList.add("bodyGeneral");
        }
    }

    setAllClickListeners(seccion){
        this.headerController.setClickListeners_NavLinkHome(() => this.navigateTo("home"));
        this.headerController.setClickListeners_NavLinkContactMe(() => this.navigateTo("contactme"));
        this.headerController.setClickListeners_NavLinkAboutMe(() => this.navigateTo("aboutme"));
        this.headerController.setClickListeners_NavLinkBlog(() => this.navigateTo("blog"));
        this.headerController.setClickListeners_NavLinkProyect(() => this.navigateTo("proyects"));     
        this.headerController.setClickListeners_LanguageBtns(() => {
            this.headerController.renderAll(seccion);
            this.setAllClickListeners(seccion);
            this.rechargeLanguageSec(seccion);
        });   
        this.headerController.setClickListeners_Hamburger();
        this.headerController.setClickListeners_Links();
    }

    rechargeLanguageSec(seccion){
        if(seccion === "home"){
            this.homeController.renderAll();
            this.homeController.setAllClickListeners();
        }
    }



    clearAllPageRenders(){
        document.getElementById("sectionDesktop").innerHTML = `<div id="sectionMain_home_desktop"></div>`;
        document.getElementById("sectionMobile").innerHTML = `<div id="sectionMain_home_mobile"></div>`;
    }




    setMinimumHeightSection(minimum, options = {}) {
        // options = { allowScrollMobile: true/false, allowScrollDesktop: true/false, autoHeight: true/false }

        const body = document.body;
        const html = document.documentElement;
        const w = window.innerWidth;

        if (options.autoHeight) {
            // Forzar altura automática
            body.style.height = "auto";
            html.style.height = "auto";
            body.style.minHeight = "100vh";
            html.style.minHeight = "0";
        } 
        else {
            // Ajuste de altura mínima según ancho
            let newMinimum = minimum;
            if (w < 350) newMinimum += 30;
            else if (w < 400) newMinimum += 20;
            else if (w < 500) newMinimum += 10;

            body.style.height = "";
            html.style.height = "";
            body.style.minHeight = newMinimum + "vh";
            html.style.minHeight = newMinimum + "vh";
        }

        // Control de scroll según dispositivo y opciones
        if (w < 850) {
            // Móvil
            body.style.overflowY = options.allowScrollMobile ? "auto" : "hidden";
            html.style.overflowY = options.allowScrollMobile ? "scroll" : "hidden";
        } else {
            // Desktop
            body.style.overflowY = options.allowScrollDesktop ? "auto" : "hidden";
            html.style.overflowY = options.allowScrollDesktop ? "scroll" : "hidden";
        }

        // Listener resize para reajustar
        if (this._heightResizeListener) window.removeEventListener("resize", this._heightResizeListener);

        this._heightResizeListener = () => this.setMinimumHeightSection(minimum, options);
        window.addEventListener("resize", this._heightResizeListener);
    }


    /*setMinimumHeightMobileSection(minimum, scrollYEver) {
        const body = document.body;
        const html = document.documentElement;

        // Si ya existía un listener previo, removerlo
        if (this._heightResizeListener) {
            window.removeEventListener("resize", this._heightResizeListener);
        }

        // Función que aplica altura según ventana
        const applyHeight = () => {
            console.log("resize listened")
            if (window.innerWidth < 350) {
                if(scrollYEver){
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                }
                else{
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "scroll";  
                }
               
                let newMinimum = minimum +30;
                body.style.minHeight = "";
                html.style.minHeight = "";
                body.style.minHeight = newMinimum + "vh";
                html.style.minHeight = newMinimum + "vh";
            }                        
            else if (window.innerWidth < 400) {
                if(scrollYEver){
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                }
                else{
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "scroll";  
                }
               
                let newMinimum = minimum +20;
                body.style.minHeight = "";
                html.style.minHeight = "";
                body.style.minHeight = newMinimum + "vh";
                html.style.minHeight = newMinimum + "vh";
            }                        
            else if (window.innerWidth < 500) {
                if(scrollYEver){
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                }
                else{
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "scroll";  
                }
               
                let newMinimum = minimum +10;
                body.style.minHeight = "";
                html.style.minHeight = "";
                body.style.minHeight = newMinimum + "vh";
                html.style.minHeight = newMinimum + "vh";
            }                        
            else if (window.innerWidth < 850) {
                if(scrollYEver){
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                }
                else{
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "scroll";  
                }
               

                body.style.minHeight = "";
                html.style.minHeight = "";
                body.style.minHeight = minimum + "vh";
                html.style.minHeight = minimum + "vh";
            } 
            else {
                if(scrollYEver){
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                    body.style.minHeight = "";
                    html.style.minHeight = "";
                    body.style.minHeight = "100vh";
                    html.style.minHeight = "100vh";
                }
                else{
                    body.style.overflowY = "";
                    html.style.overflowY = "";
                    body.style.overflowY = "hidden";
                    html.style.overflowY = "hidden";
                    body.style.minHeight = "";
                    html.style.minHeight = "";
                    body.style.minHeight = minimum + "vh";
                    html.style.minHeight = minimum + "vh";
                }
            }
        };

        // Guardar referencia para poder eliminar en la próxima llamada
        this._heightResizeListener = applyHeight;

        // Aplicar inmediatamente
        applyHeight();

        // Añadir listener para redimensionar
        window.addEventListener("resize", applyHeight);
    }*/
}