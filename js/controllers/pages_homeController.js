import { LanguageController } from './languageController.js';
import { BlogSystem } from '../systems/blogSystem.js';







const texts = {
    es: {
        welcome: "Bienvenido a mi Portfolio",
        welcomeSubText: "Desarrollor android, programador amateur de videojuegos, profesor particular de programación y apasionado de la",
        welcomeSubTextHighligted : " tecnología"
    },
    en: {
        welcome: "Welcome to my porftolio",
        welcomeSubText: "Android developer, amateur game programmer, private programming tutor, and passionate about",
        welcomeSubTextHighligted: " technology"
    }
}








export class HomeController{
    /**
     * @param {LanguageController} languageController 
     * @param {BlogSystem} blogSystem
     */
    constructor(languageController, blogSystem){
        this.languageController = languageController;
        this.blogSystem = blogSystem;
        this.actualArticleOfLastArticles = 3;
    }


    renderAll(){
        this.renderHomeContent();
        this.renderLastArticles();
    }



    /* Renders */
    renderHomeContent(){
        let lang = this.languageController.getLanguage();
        document.getElementById("sectionDesktop").innerHTML = `<div id="sectionMain_home_desktop"></div>`;
        document.getElementById("sectionMobile").innerHTML = `<div id="sectionMain_home_mobile"></div>`;

        let html = `
        <div id="pageHome_DivHorizontal" class="fade-in">
            <div>
                <h1 class="text-8xl md:text-7xl font-bold text-gray-200 mb-4"> ${texts[lang].welcome}</h1>
                <p class="text-xl md:text-2xl text-gray-400 mb-6"> ${texts[lang].welcomeSubText}<span class="text-green-400 font-semibold">${texts[lang].welcomeSubTextHighligted}</span></p>
            </div>
            <div>
                <div id="pageHome_SubDiv_LastArticles">  </div>
            </div>
        </div>`;
        document.getElementById("sectionMain_home_desktop").innerHTML = html;

        let html2 = `
            <div id="pageHome_DivVertical" class="fade-in">
            <div>
                <h1 class="text-5xl md:text-6xl font-bold text-gray-200 mb-4"> ${texts[lang].welcome} </h1>
                <p class="text-xl md:text-2xl text-gray-400 mb-6"> ${texts[lang].welcomeSubText}
                    <span class="text-green-400 font-semibold">${texts[lang].welcomeSubTextHighligted}</span>
                </p>
            </div>
            <div>
                <div id="pageHome_SubDiv_LastArticlesVertical"></div>
            </div>
        </div>`;
        document.getElementById("sectionMain_home_mobile").innerHTML = html2;
    }

    renderLastArticles(){
        let lang = this.languageController.getLanguage();
        let txt = "";

        console.log("2 : "+this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang));
        if(this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.length > 220){
            txt = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.substring(0, 220) + " [...]";
        }
        else{
            txt =  this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text;
        }

        let html = `
            <div id="pageHome_CardLastArticles" style="position:relative">
                <span style="
                    position: absolute;
                    top: 8px;         
                    left: 8px;        
                    background-color: rgba(0, 0, 0, 0.95); 
                    color: white;
                    font-weight: bold;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    z-index: 10;
                ">Últimos Artículos</span>

                <img id="pageHome_CardLastArticles_imgOfArticle" class="fadeInImg" src="${this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).imgPortada}">
                <div id="pageHome_CardLastArticles_textsSecion" class="fade-in">
                    <h3 id="pageHome_CardLastArticles_titleOfArticle">${this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).title}</h3>
                    <p id="pageHome_CardLastArticles_txtOfArticle">${txt}</p>
                    <a id="pageHome_CardLastArticles_seeArticleBtn" class="inline-block px-4 py-2 text-white font-semibold rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
                        Leer más
                    </a>
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection">
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowLeft">
                        <img src="../../res/img/arrow_left.png" id="pageHome_CardLastArticles_arrorLeft">
                    </div>
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_dots">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot1" class="dotScaled">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot2" class="dot">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot3" class="dot">
                    </div>
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowRight">
                        <img src="../../res/img/arrow_left.png" id="pageHome_CardLastArticles_arrowRight">
                    </div>
                </div>
            </div>
        `;
        let html2 = `
            <div id="pageHome_CardLastArticlesV" style="position:relative">
                <span style="
                    position: absolute;
                    top: 8px;         
                    left: 8px;        
                    background-color: rgba(0, 0, 0, 0.95); 
                    color: white;
                    font-weight: bold;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    z-index: 10;
                ">Últimos Artículos</span>

                <img id="pageHome_CardLastArticles_imgOfArticleV" class="fadeInImg" src="${this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).imgPortada}">
                <div id="pageHome_CardLastArticles_textsSecionV" class="fade-in">
                    <h3 id="pageHome_CardLastArticles_titleOfArticleV">${this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).title}</h3>
                    <p id="pageHome_CardLastArticles_txtOfArticleV">${txt}</p>
                    <a id="pageHome_CardLastArticles_seeArticleBtnV" class="inline-block px-6 py-2 text-white font-semibold rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
                        Leer más
                    </a>
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSectionV">
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowLeftV">
                        <img src="../../res/img/arrow_left.png" id="pageHome_CardLastArticles_arrorLeftV">
                    </div>
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_dotsV">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot1V" class="dotScaled">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot2V" class="dot">
                        <img src="../../res/img/dot.png" id="pageHome_CardLastArticles_dot3V" class="dot">
                    </div>
                    <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowRightV">
                        <img src="../../res/img/arrow_left.png" id="pageHome_CardLastArticles_arrowRightV">
                    </div>
                </div>
            </div>
        `;
        document.getElementById("pageHome_SubDiv_LastArticles").innerHTML = html;
        document.getElementById("pageHome_SubDiv_LastArticlesVertical").innerHTML = html2;
    }




    setAllClickListeners(){
        /* LISTENERS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
        document.getElementById("pageHome_CardLastArticles_arrorLeft").addEventListener("click", () => {
            if(this.actualArticleOfLastArticles == 1){
                this.actualArticleOfLastArticles = 3;
            }
            else{
                this.actualArticleOfLastArticles--;
            }
            this.changeContentOfLastArticles_Desktop();
        });
        document.getElementById("pageHome_CardLastArticles_arrowRight").addEventListener("click", () => {
            if(this.actualArticleOfLastArticles == 3){
                this.actualArticleOfLastArticles = 1;
            }
            else{
                this.actualArticleOfLastArticles++;
            }
            this.changeContentOfLastArticles_Desktop();
        });
        document.getElementById("pageHome_CardLastArticles_dot1").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 1;
            this.changeContentOfLastArticles_Desktop();
        });
        document.getElementById("pageHome_CardLastArticles_dot2").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 2;
            this.changeContentOfLastArticles_Desktop();
        });
        document.getElementById("pageHome_CardLastArticles_dot3").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 3;
            this.changeContentOfLastArticles_Desktop();
        });


        /* LISTENERS VERTICALES -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
        document.getElementById("pageHome_CardLastArticles_arrorLeftV").addEventListener("click", () => {
            if(this.actualArticleOfLastArticles == 1){
                this.actualArticleOfLastArticles = 3;
            }
            else{
                this.actualArticleOfLastArticles--;
            }
            this.changeContentOfLastArticles_Mobile();
        });
        document.getElementById("pageHome_CardLastArticles_arrowRightV").addEventListener("click", () => {
            if(this.actualArticleOfLastArticles == 3){
                this.actualArticleOfLastArticles = 1;
            }
            else{
                this.actualArticleOfLastArticles++;
            }
            this.changeContentOfLastArticles_Mobile();
        });
        document.getElementById("pageHome_CardLastArticles_dot1V").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 1;
            this.changeContentOfLastArticles_Mobile();
        });
        document.getElementById("pageHome_CardLastArticles_dot2V").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 2;
            this.changeContentOfLastArticles_Mobile();
        });
        document.getElementById("pageHome_CardLastArticles_dot3V").addEventListener("click", () => {
            this.actualArticleOfLastArticles = 3;
            this.changeContentOfLastArticles_Mobile();
        });
    }





    loopOfLastArticles(){
        if(this.actualArticleOfLastArticles == 3){
            this.actualArticleOfLastArticles = 1;
        }
        else{
            this.actualArticleOfLastArticles++;
        }
        this.changeContentOfLastArticles_Desktop();
        this.changeContentOfLastArticles_Mobile();
        setTimeout(() => this.loopOfLastArticles(), 4000);
    }
    restartFadeIn() {
        const elements = [
            document.getElementById("pageHome_CardLastArticles_textsSecion"),
            document.getElementById("pageHome_CardLastArticles_textsSecionV")
        ];
        const elements2 = [
            document.getElementById("pageHome_CardLastArticles_imgOfArticle"),
            document.getElementById("pageHome_CardLastArticles_imgOfArticleV")
        ];

        elements.forEach(el => {
            if(!el) return;

            // Quitar la clase para reiniciar la animación
            el.classList.remove("fade-in");

            // Forzar reflow para que se registre el cambio
            void el.offsetWidth;

            // Añadir la clase para disparar la animación
            el.classList.add("fade-in");
        });
        elements2.forEach(el => {
            if(!el) return;

            // Quitar la clase para reiniciar la animación
            el.classList.remove("fadeInImg");

            // Forzar reflow para que se registre el cambio
            void el.offsetWidth;

            // Añadir la clase para disparar la animación
            el.classList.add("fadeInImg");
        });

    }












    /* CARGAR CONTENIDO de articulos -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    changeContentOfLastArticles_Desktop(){
        let lang = this.languageController.getLanguage();
        let txt = "";

        if(this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.length > 150){
            txt = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.substring(0, 150) + " [...]";
        }
        else{
            txt =  this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text;
        }

        if(this.actualArticleOfLastArticles == 1){ document.getElementById("pageHome_CardLastArticles_dot1").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot1").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot1").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot1").classList.remove("dotScaled"); }

        if(this.actualArticleOfLastArticles == 2){ document.getElementById("pageHome_CardLastArticles_dot2").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot2").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot2").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot2").classList.remove("dotScaled"); }

        if(this.actualArticleOfLastArticles == 3){ document.getElementById("pageHome_CardLastArticles_dot3").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot3").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot3").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot3").classList.remove("dotScaled"); }

        document.getElementById("pageHome_CardLastArticles_imgOfArticle").src = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).imgPortada;
        document.getElementById("pageHome_CardLastArticles_titleOfArticle").textContent = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).title;
        document.getElementById("pageHome_CardLastArticles_txtOfArticle").textContent = txt;
        this.restartFadeIn();
    }

    /* CARGAR CONTENIDO de articulos VERTICALES -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    changeContentOfLastArticles_Mobile(){
        let lang = this.languageController.getLanguage();
        let txt = "";
        
        if(this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.length > 50){
            txt = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text.substring(0, 50) + " [...]";
        }
        else{
            txt = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).text;
        }

        if(this.actualArticleOfLastArticles == 1){ document.getElementById("pageHome_CardLastArticles_dot1V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot1V").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot1V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot1V").classList.remove("dotScaled"); }

        if(this.actualArticleOfLastArticles == 2){ document.getElementById("pageHome_CardLastArticles_dot2V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot2V").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot2V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot2V").classList.remove("dotScaled"); }

        if(this.actualArticleOfLastArticles == 3){ document.getElementById("pageHome_CardLastArticles_dot3V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot3V").classList.add("dotScaled"); }
        else{ document.getElementById("pageHome_CardLastArticles_dot3V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot3V").classList.remove("dotScaled"); }

        document.getElementById("pageHome_CardLastArticles_imgOfArticleV").src = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).imgPortada;
        document.getElementById("pageHome_CardLastArticles_titleOfArticleV").textContent = this.blogSystem.getLastArticleN(this.actualArticleOfLastArticles, lang).title;
        document.getElementById("pageHome_CardLastArticles_txtOfArticleV").textContent = txt;
        this.restartFadeIn();
    }
}