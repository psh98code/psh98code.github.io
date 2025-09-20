




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
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhoIAm" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ¿Quien soy?
                            </button>
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhatIDo" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ¿Qué hago?
                            </button>
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ¿Que puedo hacer?
                            </button>
                            <button id="" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ¿?
                            </button>
                        </div>
                        <div id="cardAboutMe_Desktop_sectionContent">
                        </div>
                    </div>
                    
                </div>

                <div id="sectionDonwloadCV_Desktop">
                        <button id="buttonDonwloadCV_Desktop"><img src="../../res/img/download.png">Descarga mi CV</button>
                </div>
            </div>
        `;
        document.getElementById("sectionDesktop").innerHTML = html;
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhoIAm").addEventListener("click", () => { this.changeContentOfCard("whoIAm"); });
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatIDo").addEventListener("click", () => { this.changeContentOfCard("WhatIDo"); });
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo").addEventListener("click", () => { this.changeContentOfCard("WhatCanIDo"); });




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
                                  
                </div>

                <div id="sectionDonwloadCV_Mobile">
                        <button id="buttonDonwloadCV_Mobile"><img src="../../res/img/download.png">Descarga mi CV</button>                  
                    </div>  
            </div>            
        `;
        document.getElementById("sectionMobile").innerHTML = html2;       
        
        




        this.initScrollableImages();

    }





    changeContentOfCard(type){
        let html = ``;
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhoIAm").classList.remove("btnSelected");
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatIDo").classList.remove("btnSelected");
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo").classList.remove("btnSelected");

        switch(type){
            case "whoIAm":
                document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhoIAm").classList.add("btnSelected");
                html = `
                    <div id="div_whoIAm_Desktop_Photo">
                        <img src="../../res/img/me.jpg">
                        <div>
                            <p style="color:green;"><span class="font-semibold text-blue-600">Nombre:</span> Pablo Simón Hernández</p>
                            <p style="color:green;"><span class="font-semibold text-blue-600">Edad:</span> 27</p>
                            <p style="color:green;"><span class="font-semibold text-blue-600">Localidad:</span> Talavera de la Reina, Toledo</p>
                            <p style="color:green;"><span class="font-semibold text-blue-600">Rol:</span> Desarrollador de software</p>                        
                        </div>
                    </div>
                    <div id="div_whoIAm_Desktop_Text" class="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet tristique commodo, justo neque tincidunt sapien, vel placerat augue lorem a orci. Integer at enim nec metus malesuada tincidunt. Morbi sodales lorem ut ligula posuere, in iaculis orci facilisis. Praesent posuere leo sit amet risus posuere, eget maximus sem sagittis. Suspendisse potenti. Duis ac risus vitae nunc egestas malesuada. Cras mattis, sem quis tempus condimentum, purus nibh gravida arcu, ut faucibus purus nulla at est.
                    </div>
                `;
            ;
            break;
            case "WhatIDo":
                document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatIDo").classList.add("btnSelected");
                html = `
                    <div id="div_whatIDo_Desktop_Btns">
                        <button class="btnSelected" id="div_whatIDo_Desktop_Btns_btnAndroid">Desarrollo Android</button>
                        <button id="div_whatIDo_Desktop_Btns_btnWeb">Desarrollo Web</button>
                        <button id="div_whatIDo_Desktop_Btns_btnGames">Desarrollo de videojuegos</button>
                        <button id="div_whatIDo_Desktop_Btns_btnClases">Profesor particular</button>
                    </div>
                    <div id="div_whatIDo_Desktop_Text" class="text-gray-500">
                        Inicialmente el texto Android
                    </div>
                `;                
            ;
            break;
            case "WhatCanIDo":
                document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo").classList.add("btnSelected");
                html = `
                    <div id="div_WhatCanIDo_Desktop_Sec1">
                        <h2>FORMACION</h2>
                        <div class="formacionDIV">
                        </div>
                        <div class="formacionDIV">
                        </div>
                        <div class="formacionDIV">
                        </div>
                    </div>
                    <div id="div_WhatCanIDo_Desktop_Sec2">
                    </div>
                    <div id="div_WhatCanIDo_Desktop_Sec3">
                    </div>
                `;
            ;
            break;
        }

        document.getElementById("cardAboutMe_Desktop_sectionContent").innerHTML = html;
        if(type === "WhatIDo"){
            document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.add("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `seccion Android: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.add("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML =     
                    `seccion WEB: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnGames").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.add("btnSelected");  
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `seccion Games: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnClases").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.add("btnSelected"); 
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `<p>Desde hace +2 años doy clases online a través de la plataforma <a style="font-style:underline;" href="https://www.classgap.com/es">classgap</a> tanto online como presencialmente (aunque principalmente online), contanto con amplia experiencia en apoyo lectivo e individualizado con las asignaturas de los CFGS DAM y DAW, llegando a ayudar puntualmente a alumnos universitarios de ingeniería informática con Java u otras áreas de la programación y el desarrollo.</p>
                     <br><p>Cuento con +400 horas de clase impartidas hasta ahora, y una valoración media de 5/5 estrellas por parte de mis alumnos (valoraciones mas abajo).</p>
                     <div class="scrolleableImages">
                        <img src="../../res/img/testimonio1.png">
                        <img src="../../res/img/testimonio2.png">
                        <img src="../../res/img/testimonio3.png">
                        <img src="../../res/img/testimonio4.png">
                        <img src="../../res/img/testimonio5.png">
                        <img src="../../res/img/testimonio6.png">
                        <img src="../../res/img/testimonio7.png">
                     </div>
                `;       
                
                this.initScrollableImages();
            });
        }


        
    }












    initScrollableImages(selector = '.scrolleableImages') {
        const slider = document.querySelector(selector);
        if (!slider) return;

        // Evita arrastre nativo de imágenes
        slider.querySelectorAll('img').forEach(img => {
            img.draggable = false;
            img.addEventListener('dragstart', e => e.preventDefault());
        });

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onDown = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX; // 👈 usamos pageX
            scrollLeft = slider.scrollLeft;
            if (e.pointerId) {
                slider.setPointerCapture && slider.setPointerCapture(e.pointerId);
            }
            e.preventDefault();
        };

        const onMove = (e) => {
            if (!isDown) return;
            const x = e.pageX;
            const walk = (x - startX) * 1.2; // 👈 sensibilidad
            slider.scrollLeft = scrollLeft - walk;
            // console.log("dragging", walk); // debug opcional
        };

        const onUp = (e) => {
            isDown = false;
            slider.classList.remove('active');
            try {
                slider.releasePointerCapture && slider.releasePointerCapture(e.pointerId);
            } catch (_) {}
        };

        // Listeners
        slider.addEventListener('pointerdown', onDown);
        slider.addEventListener('pointermove', onMove);
        slider.addEventListener('pointerup', onUp);
        slider.addEventListener('pointercancel', onUp);
        slider.addEventListener('pointerleave', onUp);

        // Aseguramos estilo necesario
        slider.style.touchAction = 'pan-y'; // 👈 evita conflicto con scroll horizontal
    }

}