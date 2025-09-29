import {LanguageController} from './languageController.js'
import { ProyectSystem } from '../systems/proyectSystem.js';






const txtTitle = {
    "es": {txt: "Mis proyectos"},
    "en": {txt: "My projects"}
}
const numOfProTXT = {
    "es": {txt: "Número de proyectos: "},
    "en": {txt: "Number of proyects: "}
}
const txtsCategories = {
    android: { "es": { txt: "Android" }, "en": { txt: "Android" } },
    webpages: { "es": { txt: "Páginas web" }, "en": { txt: "Webpages" } },
    webapps: { "es": { txt: "Aplicaciones web" }, "en": { txt: "Web apps" } },
    desktopapps: { "es": { txt: "Aplicaciones de escritorio" }, "en": { txt: "Desktop apps" } },
    flutter: { "es": { txt: "Flutter" }, "en": { txt: "Flutter" } },
    gamesunity: { "es": { txt: "Juegos Unity" }, "en": { txt: "Unity games" } },
    minigamesunity: { "es": { txt: "Mini juegos Unity" }, "en": { txt: "Mini Unity games" } },
    other: { "es": { txt: "Otros" }, "en": { txt: "Other" } }
}





export class ProyectController{
    /**
     * @param {LanguageController} languageController
     * @param {ProyectSystem} proyectSystem 
     * @param handlerToGoToCategories
     * @param handlerToSeeProyect
     */
    constructor(proyectSystem, languageController){
        this.proyectSystem = proyectSystem;
        this.languageController = languageController;
    }



    renderAll(handlerToGoToCategories, handlerToSeeProyect){
        this.handlerToGoToCategories = handlerToGoToCategories;
        this.handlerToSeeProyect = handlerToSeeProyect;
        this.renderDesktopContent();
        this.renderMobileContent();
        this.chargeProyectCategories();
    }



    renderDesktopContent(){
        let lang = this.languageController.getLanguage();

        let html = `
            <div id="pages_proyects_Desktop_DivMain">
                <div><h1>${txtTitle[lang].txt}</h1></div>
                <div id="pages_proyects_Desktop_DivMain_proyects"></div>
            </div>
        `;

        document.getElementById("sectionDesktop").innerHTML = "";
        document.getElementById("sectionDesktop").innerHTML = html;
    }

    renderMobileContent(){
        let lang = this.languageController.getLanguage();

        let html = `
            <div id="pages_proyects_Mobile_DivMain">
                <div><h1>${txtTitle[lang].txt}</h1></div>
                <div id="pages_proyects_Mobile_DivMain_proyects"></div>
            </div>
        `;

        document.getElementById("sectionMobile").innerHTML = "";
        document.getElementById("sectionMobile").innerHTML = html;        
    }

    chargeProyectCategories(){
        let lang = this.languageController.getLanguage();
        let list = ["android", "webpages", "gamesunity", "minigamesunity", "webapps", "desktopapps", "flutter", "other"]

        for(let i = 0; i < list.length; i++){
            let actualCategory = list[i]
            let numOfProyects = this.proyectSystem.getNumberOfProyectsByCategory(actualCategory)
            
            let idMobile = "cardProyectsType_"+actualCategory+"_mobile"
            let idDesktop = "cardProyectsType_"+actualCategory+"_desktop"
            
            // Crear nodo DOM para Mobile
            const tempMobile = document.createElement("div");
            tempMobile.innerHTML = `
                <div class="cardProyectsType" id="${idMobile}">
                    <img src="${getImgOfCategory(actualCategory)}">
                    <h2>${txtsCategories[actualCategory][lang].txt}</h2>
                    <p>${numOfProTXT[lang].txt}${numOfProyects}</p>
                </div>
            `;
            const cardMobileNode = tempMobile.firstElementChild;

            // Crear nodo DOM para Desktop
            const tempDesktop = document.createElement("div");
            tempDesktop.innerHTML = `
                <div class="cardProyectsType" id="${idDesktop}">
                    <img src="${getImgOfCategory(actualCategory)}">
                    <h2>${txtsCategories[actualCategory][lang].txt}</h2>
                    <p>${numOfProTXT[lang].txt}${numOfProyects}</p>
                </div>
            `;
            const cardDesktopNode = tempDesktop.firstElementChild;


            const desktopContainer = document.getElementById("pages_proyects_Desktop_DivMain_proyects");
            const mobileContainer = document.getElementById("pages_proyects_Mobile_DivMain_proyects");
            desktopContainer.appendChild(cardDesktopNode);
            mobileContainer.appendChild(cardMobileNode);

            if(numOfProyects == 0){
                document.getElementById(idDesktop).classList.add("cardDisabled");
                document.getElementById(idMobile).classList.add("cardDisabled");
            }
            else{
                document.getElementById(idDesktop).addEventListener("click", this.handlerToGoToCategories(actualCategory))
                document.getElementById(idMobile).addEventListener("click", this.handlerToGoToCategories(actualCategory))
            }
        }
    }








    renderProyectsCards(category){
        let lang = this.languageController.getLanguage();

        let htmlDesktop = `
            <div id="pages_proyects_Desktop_DivSecondary">
                <div id="pages_proyects_Desktop_DivSecondary_backBtn">
                    <img src="../../res/img/back.png" id="pages_proyects_Desktop_DivSecondary_backBtn_btn">
                </div>
                <div id="pages_proyects_Desktop_DivSecondary_proyects">
                </div>
            </div>        
        `;
        let htmlMobile = `
            <div id="pages_proyects_Mobile_DivSecondary">
                <div id="pages_proyects_Mobile_DivSecondary_backBtn">
                    <img src="../../res/img/back.png" id="pages_proyects_Mobile_DivSecondary_backBtn_btn">
                </div>
                <div id="pages_proyects_Mobile_DivSecondary_proyects">
                </div>
            </div>           
        `;
        // Asignación del html
        document.getElementById("sectionMobile").innerHTML = "";
        document.getElementById("sectionMobile").innerHTML = htmlMobile;       
        document.getElementById("sectionDesktop").innerHTML = "";
        document.getElementById("sectionDesktop").innerHTML = htmlDesktop;       
        // Click listeners de botones BACK
        document.getElementById("pages_proyects_Desktop_DivSecondary_backBtn_btn").addEventListener("click", () => this.renderAll());
        document.getElementById("pages_proyects_Mobile_DivSecondary_backBtn_btn").addEventListener("click", () => this.renderAll());


        // CARGA de los proyectos
        let proyectList = this.proyectSystem.getAllProyectsOfCategory(category);

        proyectList.forEach(proyect => {
            let idDesktop = "cardProyectsType_card_"+proyect.id+"_desktop";
            let idMobile = "cardProyectsType_card_"+proyect.id+"_mobile";
            let cardDesktop = ""
            let cardMobile= ""

            let cardDesktopDiv = document.createElement("div")
            let cardMobileDiv = document.createElement("div")

            if(lang == "es"){
                cardDesktop = `
                    <div class="cardProyectsType" id="${idDesktop}">
                        <img src="${proyect.imgPortada}">
                        <h2>${proyect.es.title}</h2>
                        <p>${proyect.es.description}</p>
                        <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                    </div>
                `;
                cardMobile = `     
                    <div class="cardProyectsType" id="${idMobile}">
                        <img src="${proyect.imgPortada}">
                        <h2>${proyect.es.title}</h2>
                        <p>${proyect.es.description}</p>
                        <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                    </div>
                `;                
            }
            else{
                cardDesktop = `
                    <div class="cardProyectsType" id="${idDesktop}">
                        <img src="${proyect.imgPortada}">
                        <h2>${proyect.en.title}</h2>
                        <p>${proyect.en.description}</p>
                        <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                    </div>
                `;   
                cardMobile = `
                    <div class="cardProyectsType" id="${idMobile}">
                        <img src="${proyect.imgPortada}">
                        <h2>${proyect.en.title}</h2>
                        <p>${proyect.en.description}</p>
                        <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                    </div>
                `;                
            }

            cardDesktopDiv.innerHTML = cardDesktop;
            cardMobileDiv.innerHTML = cardMobile;

            const desktopContainer = document.getElementById("pages_proyects_Desktop_DivSecondary_proyects");
            const mobileContainer = document.getElementById("pages_proyects_Mobile_DivSecondary_proyects");
            desktopContainer.appendChild(cardDesktopDiv.firstElementChild);
            mobileContainer.appendChild(cardMobileDiv.firstElementChild);

            document.getElementById(idDesktop).addEventListener("click", this.handlerToSeeProyect(proyect));
            document.getElementById(idMobile).addEventListener("click", this.handlerToSeeProyect(proyect));
        });
    }

    renderProyectContent(proyect){
        let lang = this.languageController.getLanguage();

        let htmlDesktop = `

        `
        let htmlMobile = `

        `
    }
}









function getImgOfCategory(category) {
    const categoryImages = {
        android: "../../res/img/category_android.jpg",
        webpages: "../../res/img/category_webpages.jpg",
        webapps: "../../res/img/category_webApps.jpg",
        desktopapps: "../../res/img/category_desktopApps.jpg",
        flutter: "../../res/img/category_flutter.jpg",
        gamesunity: "../../res/img/category_gamesUnity.jpg",
        minigamesunity: "../../res/img/category_miniGamesUnity.jpg",
        other: "../../res/img/category_other.jpg"
    };

    return categoryImages[category] || "../../res/img/category_other.jpg";
}
