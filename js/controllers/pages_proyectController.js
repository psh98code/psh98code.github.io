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
     * @param onBackFromCategories
     * @param onBackFromProyectView
     */
    constructor(proyectSystem, languageController){
        this.proyectSystem = proyectSystem;
        this.languageController = languageController;
    }



    renderAll(handlerToGoToCategories, handlerToSeeProyect, onBackFromCategories, onBackFromProyectView){
        this.handlerToGoToCategories = handlerToGoToCategories;
        this.handlerToSeeProyect = handlerToSeeProyect;
        this.onBackFromCategories = onBackFromCategories;
        this.onBackFromProyectView = onBackFromProyectView;
        this.renderDesktopContent();
        this.renderMobileContent();
        this.chargeProyectCategories();
    }



    renderDesktopContent(){
        let lang = this.languageController.getLanguage();

        let html = `
            <div id="pages_proyects_Desktop_DivMain">
                <div><h1 class="text-4xl md:text-4xl font-semibold text-gray-200">${txtTitle[lang].txt}</h1></div>
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
                <div><h1 class="text-4xl md:text-4xl font-semibold text-gray-200">${txtTitle[lang].txt}</h1></div>
                <div id="pages_proyects_Mobile_DivMain_proyects"></div>
            </div>
        `;

        document.getElementById("sectionMobile").innerHTML = "";
        document.getElementById("sectionMobile").innerHTML = html;        
    }

    chargeProyectCategories(){
        let lang = this.languageController.getLanguage();
        let list = ["android", "webpages", "gamesunity", "minigamesunity", "webapps", "desktopapps", "flutter", "other"]

        for(let i = 0; i < list.length; i += 3){  // avanzamos de 3 en 3
            const categoriesGroup = [list[i], list[i + 1], list[i + 2]].filter(Boolean); // evita undefined si hay número impar
            const desktopRow = document.createElement("div");
            desktopRow.classList.add("rowProyectsDesktop"); // puedes añadir estilos CSS

            categoriesGroup.forEach(actualCategory => {
                const numOfProyects = this.proyectSystem.getNumberOfProyectsByCategory(actualCategory);
                const idDesktop = "cardProyectsType_" + actualCategory + "_desktop";
                // Crear card Desktop
                const tempDesktop = document.createElement("div");
                tempDesktop.innerHTML = `
                    <div class="cardProyectsType" id="${idDesktop}">
                        <img src="${getImgOfCategory(actualCategory)}">
                        <h2>${txtsCategories[actualCategory][lang].txt}</h2>
                        <p>${numOfProTXT[lang].txt}${numOfProyects}</p>
                    </div>
                `;
                const cardDesktopNode = tempDesktop.firstElementChild;

                // Manejar estado y eventos
                if(numOfProyects == 0){
                    cardDesktopNode.classList.add("cardDisabled");
                } else {
                    cardDesktopNode.addEventListener("click", () => this.handlerToGoToCategories(actualCategory));
                }

                // Agregar cards a sus respectivas filas
                desktopRow.appendChild(cardDesktopNode);
            });
            document.getElementById("pages_proyects_Desktop_DivMain_proyects").appendChild(desktopRow);
        }
        for(let i = 0; i < list.length; i += 2){  // avanzamos de 2 en 2
            const categoriesGroup = [list[i], list[i + 1]].filter(Boolean); // evita undefined si hay número impar
            const mobileRow = document.createElement("div");
            mobileRow.classList.add("rowProyectsMobile");

            categoriesGroup.forEach(actualCategory => {
                const numOfProyects = this.proyectSystem.getNumberOfProyectsByCategory(actualCategory);
                const idMobile = "cardProyectsType_" + actualCategory + "_mobile";

                // Crear card Mobile
                const tempMobile = document.createElement("div");
                tempMobile.innerHTML = `
                    <div class="cardProyectsType" id="${idMobile}">
                        <img src="${getImgOfCategory(actualCategory)}">
                        <h2>${txtsCategories[actualCategory][lang].txt}</h2>
                        <p>${numOfProTXT[lang].txt}${numOfProyects}</p>
                    </div>
                `;
                const cardMobileNode = tempMobile.firstElementChild;


                // Manejar estado y eventos
                if(numOfProyects == 0){
                    cardMobileNode.classList.add("cardDisabled");
                }
                else {
                    cardMobileNode.addEventListener("click", () => this.handlerToGoToCategories(actualCategory));
                }

                // Agregar cards a sus respectivas filas
                mobileRow.appendChild(cardMobileNode);
            });

            // Agregar la fila completa a los contenedores principales
            document.getElementById("pages_proyects_Mobile_DivMain_proyects").appendChild(mobileRow);
        }
    }








    renderProyectsCards(category){
        let lang = this.languageController.getLanguage();

        console.log(category);

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
        document.getElementById("pages_proyects_Desktop_DivSecondary_backBtn_btn").addEventListener("click", () => this.onBackFromCategories());
        document.getElementById("pages_proyects_Mobile_DivSecondary_backBtn_btn").addEventListener("click", () => this.onBackFromCategories());


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
                        <div>
                            <h2>${proyect.es.title}</h2>
                            <p>${proyect.es.description}</p>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>                        
                        </div>
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
                        <div>
                            <h2>${proyect.en.title}</h2>
                            <p>${proyect.en.description}</p>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>                        
                        </div>
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

            document.getElementById(idDesktop).addEventListener("click", () => this.handlerToSeeProyect(proyect));
            document.getElementById(idMobile).addEventListener("click", () => this.handlerToSeeProyect(proyect));
        });
    }

    renderProyectContent(proyect){
        let lang = this.languageController.getLanguage();
        let txts = "";
        let sctsDesktop = "";
        let sctsMobile = "";
        if(lang === "es"){
            proyect.es.texts.forEach(txt => {
                txts += `<p>${txt}</p>`
            });
        }
        else{
            proyect.en.texts.forEach(txt => {
                txts += `<p>${txt}</p>`
            });
        }
        Object.entries(proyect.screenshots).forEach(([name, data]) => {
            sctsDesktop += `<img src="${data.link}" id="divProyectView_Desktop_screenshot_${name}">`;
            sctsMobile += `<img src="${data.link}" id="divProyectView_Mobile_screenshot_${name}">`;
        });

        let htmlDesktop =  ""
        if(lang === "es"){
            htmlDesktop = `
            <div id="divProyectView_Desktop">
                <div id="divProyectView_Desktop_firstDiv">
                    <img src="../../res/img/back.png" id="divProyectView_Desktop_backBtn">                
                </div>
                <div id="divProyectView_Desktop_secondDiv">
                    <div id="divProyectView_Desktop_secondDiv_firstDiv">
                        <img src="${proyect.imgPortada}">
                        <p>${proyect.categoria}</p>
                    </div>
                    <div id="divProyectView_Desktop_secondDiv_secondDiv">
                        <div>
                            <h2>${proyect.es.title}</h2>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                        </div>
                        <div>
                            <p>${proyect.es.description}</p>
                        </div>
                    </div>
                </div>
                <div id="divProyectView_Desktop_thirdDiv">
                    <div>
                        ${txts}
                    </div>
                    <div>
                        ${sctsDesktop}
                    </div>
                </div>
            </div>
            <div id="divProyectView_Desktop_viewImageOverlay">
                <div>
                    <img src="../../res/img/close.png" id="divProyectView_Desktop_viewImageOverlay_closeBtn">
                    <img src="" id="divProyectView_Desktop_viewImageOverlay_img">
                    <p id="divProyectView_Desktop_viewImageOverlay_txt"></p>                
                </div>
            </div>
        `
        }
        else{
            htmlDesktop = `
            <div id="divProyectView_Desktop">
                <div id="divProyectView_Desktop_firstDiv">
                    <img src="../../res/img/back.png" id="divProyectView_Desktop_backBtn">                
                </div>
                <div id="divProyectView_Desktop_secondDiv">
                    <div id="divProyectView_Desktop_secondDiv_firstDiv">
                        <img src="${proyect.imgPortada}">
                        <p>${proyect.categoria}</p>
                    </div>
                    <div id="divProyectView_Desktop_secondDiv_secondDiv">
                        <div>
                            <h2>${proyect.en.title}</h2>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                        </div>
                        <div>
                            <p>${proyect.en.description}</p>
                        </div>
                    </div>
                </div>
                <div id="divProyectView_Desktop_thirdDiv">
                    <div>
                        ${txts}
                    </div>
                    <div>
                        ${sctsDesktop}
                    </div>
                </div>
            </div>
            <div id="divProyectView_Desktop_viewImageOverlay">
                <div>
                    <img src="../../res/img/close.png" id="divProyectView_Desktop_viewImageOverlay_closeBtn">
                    <img src="" id="divProyectView_Desktop_viewImageOverlay_img">
                    <p id="divProyectView_Desktop_viewImageOverlay_txt"></p>                
                </div>
            </div>
        `
        }
        
        document.getElementById("sectionDesktop").innerHTML = "";
        document.getElementById("sectionDesktop").innerHTML = htmlDesktop;

        Object.entries(proyect.screenshots).forEach(([name, data]) => {
            let id = "divProyectView_Desktop_screenshot_" + name;
            let link = data.link;

            document.getElementById(id).addEventListener("click", () => {
                this.seeOverlay(link, id);
            });
        });

        document.getElementById("divProyectView_Desktop_backBtn").addEventListener("click", () => this.onBackFromProyectView(proyect.categoria));
        document.getElementById("divProyectView_Desktop_viewImageOverlay_closeBtn").addEventListener("click", () => 
            document.getElementById("divProyectView_Desktop_viewImageOverlay").style.display = "none"
        );




        // ------------------------------------------- MOVILES ---------------------------------------------------------------------------------------------------------------------------------



        let htmlMobile =  ""
        if(lang === "es"){
            htmlMobile = `
            <div id="divProyectView_Mobile">
                <div id="divProyectView_Mobile_firstDiv">
                    <img src="../../res/img/back.png" id="divProyectView_Mobile_backBtn">                
                </div>
                <div id="divProyectView_Mobile_secondDiv">
                    <div id="divProyectView_Mobile_secondDiv_firstDiv">
                        <img src="${proyect.imgPortada}">
                        <p>${proyect.categoria}</p>
                    </div>
                    <div id="divProyectView_Mobile_secondDiv_secondDiv">
                        <div>
                            <h2>${proyect.es.title}</h2>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                        </div>
                        <div>
                            <p>${proyect.es.description}</p>
                        </div>
                    </div>
                </div>
                <div id="divProyectView_Mobile_thirdDiv">
                    <div>
                        ${txts}
                    </div>
                    <div>
                        ${sctsMobile}
                    </div>
                </div>
            </div>
            <div id="divProyectView_Mobile_viewImageOverlay">
                <div>
                    <img src="../../res/img/close.png" id="divProyectView_Mobile_viewImageOverlay_closeBtn">
                </div>
                <div>
                    <img src="" id="divProyectView_Mobile_viewImageOverlay_img">
                    <p id="divProyectView_Mobile_viewImageOverlay_txt"></p>                
                </div>
            </div>
            `
        }
        else{
            htmlMobile = `
            <div id="divProyectView_Mobile">
                <div id="divProyectView_Mobile_firstDiv">
                    <img src="../../res/img/back.png" id="divProyectView_Mobile_backBtn">                
                </div>
                <div id="divProyectView_Mobile_secondDiv">
                    <div id="divProyectView_Mobile_secondDiv_firstDiv">
                        <img src="${proyect.imgPortada}">
                        <p>${proyect.categoria}</p>
                    </div>
                    <div id="divProyectView_Mobile_secondDiv_secondDiv">
                        <div>
                            <h2>${proyect.en.title}</h2>
                            <p>${proyect.dateStart} - ${proyect.dateEnd}</p>
                        </div>
                        <div>
                            <p>${proyect.en.description}</p>
                        </div>
                    </div>
                </div>
                <div id="divProyectView_Mobile_thirdDiv">
                    <div>
                        ${txts}
                    </div>
                    <div>
                        ${sctsMobile}
                    </div>
                </div>
            </div>
            <div id="divProyectView_Mobile_viewImageOverlay">
                <div>
                    <img src="../../res/img/close.png" id="divProyectView_Mobile_viewImageOverlay_closeBtn">
                </div>
                <div>
                    <img src="" id="divProyectView_Mobile_viewImageOverlay_img">
                    <p id="divProyectView_Mobile_viewImageOverlay_txt"></p>                
                </div>
            </div>
            `
        }

        document.getElementById("sectionMobile").innerHTML = "";
        document.getElementById("sectionMobile").innerHTML = htmlMobile;

        Object.entries(proyect.screenshots).forEach(([name, data]) => {
            let id = "divProyectView_Desktop_screenshot_" + name;
            let id2 = "divProyectView_Mobile_screenshot_" + name;
            let link = data.link;

            document.getElementById(id).addEventListener("click", () => {
                this.seeOverlay(link, name);
            });
            document.getElementById(id2).addEventListener("click", () => {
                this.seeOverlay(link, name);
            });
        });
    }


    seeOverlay(captureImg, captureText){ 
        document.getElementById("divProyectView_Desktop_viewImageOverlay_img").src = captureImg;
        document.getElementById("divProyectView_Desktop_viewImageOverlay_txt").innerHTML = captureText;
        document.getElementById("divProyectView_Desktop_viewImageOverlay").style.display = "flex";
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
