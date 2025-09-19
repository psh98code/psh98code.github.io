




export class AboutMeController{
    /**
     * @param {LanguageController} languageController
     */
    constructor(languageController){
        this.languageController = languageController
    }



    renderAll(){
        this.renderdivMain();
    }




    renderdivMain(){
        let html = `
            <div id="divMainAboutMe_Desktop">
                <div id="divMainAboutMe_Desktop_title">
                    <div class="text-white text-4xl font-bold text-center mb-5 drop-shadow-lg tracking-wider">
                        ¿Quieres conocerme?
                    </div>
                </div>
                <div id="divMainAboutMe_Desktop_content">
                    <div id="cardAboutMe_Desktop">
                        <div id="cardAboutMe_Desktop_sectionButtons">
                            <button class="cardAboutMeButton">¿Quien soy?</button>
                            <button class="cardAboutMeButton">¿Qué hago?</button>
                            <button class="cardAboutMeButton">¿Que puedo hacer?</button>
                            <button class="cardAboutMeButton">¿?</button>
                        </div>
                        <div id="cardAboutMe_Desktop_sectionContent">
                        </div>
                    </div>
                    <div id="sectionDonwloadCV_Desktop">
                        <button id="buttonDonwloadCV_Desktop">
                    </div>
                </div>
            </div>
        `;
        document.getElementById("sectionDesktop").innerHTML = html;

        let html2 = `
            <div id="divMainAboutMe_Mobile">
                <div class="divMainAboutMe_Mobile_title">
                    ¿Quieres conocerme?
                </div>
                <div class="divMainAboutMe_Mobile_content">
                    <div id="cardAboutMe_Mobile">
                        <div id="cardAboutMe_Mobile_sectionButtons">
                        </div>
                        <div id="cardAboutMe_Mobile_sectionContent">
                        </div>                    
                    </div>
                    <div id="sectionDonwloadCV_Mobile">
                        <button id="buttonDonwloadCV_Mobile">                    
                    </div>                
                </div>
            </div>            
        `;
        document.getElementById("sectionMobile").innerHTML = html2;        
    }
}