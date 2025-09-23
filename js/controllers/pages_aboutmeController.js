import {LanguageController} from './languageController.js'



const textsHeaders = {
    "WhoIAm": {
        "es":{ txt : "¿Quien soy?" },
        "en":{ txt: "Who I Am?" }
    },
    "WhatIDo": {
        "es":{ txt : "¿Qué hago?" },
        "en":{ txt: "What I do?" }
    },
    "WhatCanIDo":{
        "es":{ txt : "¿Que puedo hacer?" },
        "en":{ txt: "What can I do?" }
    },
    "WhatIStudy": {
        "es":{ txt : "¿Qué he estudiado?"},
        "en":{ txt : "What I study?"}
    }
}


const textWhoIAm = {
    "es": {
        txt: `
        <p style="color:white;">Soy un <span class="highligtedText">desarrollador joven</span> y <span class="highligtedText">apasionado por la <span class="blackedText">tecnología</span></span>, con <span class="highligtedText">experiencia en desarrollo</span> de <span class="highligtedText blackedText">aplicaciones Android</span>.</p>

        <ul style="color:white; list-style-type: disc; padding-left: 20px;">
            <li>
                Durante mis <span class="underlinedText">prácticas de DAM</span>, <span class="highligtedText">desarrollé una app para</span> el reconocido <span class="highligtedText">grupo de talleres <span class="blackedText">CGA</span></span>, y cuento con <span class="highligtedText">más de un año de experiencia personal</span> creando <span class="highligtedText blackedText">apps nativas en Kotlin</span> para Android. Estoy <span class="highligtedText">familiarizado con el uso de librerías Android</span>, <span class="highligtedText">gestión de proyectos mediante GitHub</span>, <span class="highligtedText">control de versiones</span>, <span class="highligtedText">publicación en Google Play Store</span> y <span class="highligtedText">consumo de APIs REST</span> desde aplicaciones móviles.
            </li>
        </ul>

        <br>
        <p style="color:white;">Me considero una persona <span class="highligtedText">proactiva</span>, con <span class="highligtedText">capacidad de aprendizaje rápido</span> y orientada a la <span class="highligtedText">creación de soluciones eficientes y funcionales</span>.</p>

        <br>
        <p style="color:white;">Además, tengo <span class="highligtedText">experiencia personal en:</span></p>
        <ul style="color:white; list-style-type: disc; padding-left: 20px;">
            <li><span class="highligtedText blackedText">Desarrollo de videojuegos y minijuegos en Unity utilizando C#</span></li>
            <li><span class="highligtedText">Conocimientos en otros lenguajes y frameworks, incluyendo:</span>
                <ul style="color:white; list-style-type: circle; padding-left: 20px;">
                    <li><span class="highligtedText">JavaScript para páginas SPA</span></li>
                    <li><span class="highligtedText">PHP para servidor</span></li>
                    <li><span class="highligtedText">Python básico</span></li>
                    <li><span class="highligtedText">Flutter+Dart para desarrollo móvil</span></li>
                </ul>
            </li>
        </ul>
        `
    },
    "en": {
        txt: `
            <p style="color:white;">I'm a <span class="highligtedText">young and passionate developer</span> with <span class="highligtedText">experience in Android application development</span>.</p>

            
            <ul style="color:white; list-style-type: disc; padding-left: 20px;">
                <li>
                    During my <span class="underlinedText">DAM internship</span>, I <span class="highligtedText">developed an app for</span> the well-known <span class="highligtedText">workshop group <span class="blackedText">CGA</span></span>, and I have <span class="highligtedText">over a year of personal experience</span> creating <span class="highligtedText blackedText">native Android apps in Kotlin</span>. I am <span class="highligtedText">familiar with using Android libraries</span>, <span class="highligtedText">project management via GitHub</span>, <span class="highligtedText">version control</span>, <span class="highligtedText">publishing on the Google Play Store</span>, and <span class="highligtedText">consuming REST APIs</span> from mobile applications.
                </li>
            </ul>

            <br>
            <p style="color:white;">I consider myself <span class="highligtedText">proactive</span>, a <span class="highligtedText">fast learner</span>, and oriented toward <span class="highligtedText">creating efficient and functional solutions</span>.</p>
            
            <br>
            <p style="color:white;">Additionally, I have <span class="highligtedText">personal experience in:</span></p>
            <ul style="color:white; list-style-type: disc; padding-left: 20px;">
                <li><span class="highligtedText blackedText">Developing games and mini-games in Unity using C#</span></li>
                <li><span class="highligtedText">Knowledge of other languages and frameworks, including:</span>
                    <ul style="color:white; list-style-type: circle; padding-left: 20px;">
                        <li><span class="highligtedText">JavaScript for SPA pages</span></li>
                        <li><span class="highligtedText">PHP for backend development</span></li>
                        <li><span class="highligtedText">Basic Python</span></li>
                        <li><span class="highligtedText">Flutter+Dart for mobile development</span></li>
                    </ul>
                </li>
            </ul>
        `
    }
}
const textsWhatIDo={
    "Clases":{
        "es": {
            txt: `
                <div>
                    <p>Desde hace <span class="highligtedText">+2 años</span> doy clases online a través de la plataforma 
                        <a style="font-style:underline;" href="https://www.classgap.com/es"><span class="underlinedText">classgap</span></a> tanto <span class="highligtedText">online</span> como <span class="highligtedText">presencialmente</span> (aunque principalmente online), contando con <span class="highligtedText">amplia experiencia</span> en <span class="highligtedText">apoyo lectivo e individualizado</span> con las asignaturas de los <span class="highligtedText">CFGS DAM y DAW</span>, llegando a ayudar puntualmente a <span class="highligtedText">alumnos universitarios de ingeniería informática</span> con <span class="blackedText">Java</span> u otras áreas de la <span class="highligtedText">programación y el desarrollo</span>.
                    </p>
                    <br>
                    <p>Cuento con <span class="highligtedText">+400 horas de clase impartidas</span> hasta ahora, y una <span class="highligtedText">valoración media de 5/5 estrellas</span> por parte de mis alumnos (valoraciones más abajo).</p>
                </div>
            `
        },
        "en": {
            txt: `
                <div>
                    <p>For <span class="highligtedText">over 2 years</span>, I have been teaching online through the platform 
                        <a style="font-style:underline;" href="https://www.classgap.com/es"><span class="underlinedText">classgap</span></a>, both <span class="highligtedText">online</span> and <span class="highligtedText">in-person</span> (although mainly online), with <span class="highligtedText">extensive experience</span> in <span class="highligtedText">individualized academic support</span> for the subjects of <span class="highligtedText">CFGS DAM and DAW</span>, occasionally helping <span class="highligtedText">university students in computer engineering</span> with <span class="blackedText">Java</span> and other areas of <span class="highligtedText">programming and development</span>.
                    </p>
                    <br>
                    <p>I have completed <span class="highligtedText">over 400 hours of teaching</span> so far, with an <span class="highligtedText">average rating of 5/5 stars</span> from my students (ratings below).</p>
                </div>
            `
        }
    },
    "Android": {
        "es": {
            txt: `
                <p>Desarrollo <span class="highligtedText">aplicaciones</span> de forma regular de manera personal, con la intención de publicarlas en la <span class="highligtedText">Play Store</span> en el futuro. Actualmente me encuentro trabajando en varios <span class="highligtedText">proyectos personales</span> que estarán disponibles en la Play Store más adelante, lo que me permite experimentar y mejorar continuamente mis habilidades en <span class="highligtedText">desarrollo Android nativo</span> y en el uso de <span class="highligtedText">librerías y herramientas propias de la plataforma</span>.</p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        Durante mis <span class="underlinedText">prácticas</span>, desarrollé la app para el reconocido grupo de talleres <span class="highligtedText blackedText">CGA</span>, la cual he tenido que actualizar en un par de ocasiones con nuevas <span class="highligtedText">versiones</span> para mejorar <span class="highligtedText">funcionalidades</span> y adaptarla a nuevas necesidades. Esto me permitió ganar experiencia en la <span class="highligtedText">gestión de versiones</span> y el <span class="highligtedText">mantenimiento de apps</span> en un entorno real.
                    </li>
                    <br>
                    <li>
                        Además de mi <span class="highligtedText">proyecto final de grado (TFG)</span>, que consistió en una app de tipo <span class="highligtedText">red social funcional</span>, he ayudado a varios alumnos a desarrollar sus propios TFG de <span class="highligtedText">apps Android funcionales y escalables</span>, orientadas a <span class="highligtedText">proyectos realistas</span> y diseñadas para convertirse en un <span class="highligtedText">producto mínimo viable (MVP)</span> al finalizar el TFG.
                    </li>
                </ul>
            `
        },
        "en": {
            txt: `
                <p>I regularly develop <span class="highligtedText">applications</span> personally, intending to publish them on the <span class="highligtedText">Play Store</span> in the future. I am currently working on several <span class="highligtedText">personal projects</span> that will be available on the Play Store later, allowing me to continuously experiment and improve my skills in <span class="highligtedText">native Android development</span> and using <span class="highligtedText">platform-specific libraries and tools</span>.</p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        During my <span class="underlinedText">internship</span>, I developed the app for the well-known workshop group <span class="highligtedText blackedText">CGA</span>, which I have had to update a couple of times with new <span class="highligtedText">versions</span> to improve <span class="highligtedText">features</span> and adapt it to new needs. This allowed me to gain experience in <span class="highligtedText">version control</span> and <span class="highligtedText">app maintenance</span> in a real environment.
                    </li>
                    <br>
                    <li>
                        In addition to my <span class="highligtedText">final degree project (TFG)</span>, which consisted of a <span class="highligtedText">functional social network app</span>, I have helped several students develop their own TFGs for <span class="highligtedText">functional and scalable Android apps</span>, oriented to <span class="highligtedText">realistic projects</span> and designed to become a <span class="highligtedText">minimum viable product (MVP)</span> by the end of the TFG.
                    </li>
                </ul>
            `
        }
    },
    "Web":{
        "es":{
            "txt": `
                <p>He desarrollado varias <span class="highligtedText">páginas web</span>, especialmente <span class="highligtedText">SPAs</span>, tanto para varios TFG de alumnos como para mí mismo, principalmente para <span class="highligtedText">uso personal en mi entorno local</span> (servidor propio en mi PC). Esto incluye también el <span class="highligtedText">proyecto de desarrollo de esta misma página web</span> desde la que estás leyendo esto.</p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        Actualmente, tengo <span class="highligtedText">proyectos personales</span> y <span class="highligtedText">propuestas de particulares futuras</span> para realizar <span class="highligtedText">proyectos con PHP y servidor</span>. Las páginas y apps web que he desarrollado para mí mismo incluían <span class="highligtedText">PHP + phpMyAdmin con MySQL</span>, además de la experiencia obtenida en las <span class="highligtedText">prácticas que realicé en DAW</span> durante mis estudios.
                    </li>
                    <br>
                    <li>
                        Me gusta bastante el <span class="highligtedText">desarrollo web</span> y es un campo en el que me encuentro actualmente <span class="highligtedText">mejorando y aprendiendo</span> continuamente. Aunque mi preferencia sigue siendo el <span class="highligtedText">desarrollo Android</span>, el <span class="highligtedText">desarrollo web</span> no se queda corto y me gustaría <span class="highligtedText">aprender más</span> en este ámbito y <span class="highligtedText">mejorar como desarrollador web</span>.
                    </li>
                </ul>

            `
        },
        "en":{
            "txt": `
                <p>I have developed several <span class="highligtedText">web pages</span>, especially <span class="highligtedText">SPAs</span>, both for various students' TFGs and for myself, mainly for <span class="highligtedText">personal use on my local environment</span> (own server on my PC). This also includes the <span class="highligtedText">project of developing this very website</span> you are reading now.</p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        Currently, I have <span class="highligtedText">personal projects</span> and <span class="highligtedText">future proposals from individuals</span> to develop <span class="highligtedText">PHP and server-based projects</span>. The web pages and apps I have developed for myself included <span class="highligtedText">PHP + phpMyAdmin with MySQL</span>, in addition to the experience gained during the <span class="highligtedText">internship I completed in DAW</span>.
                    </li>
                    <br>
                    <li>
                        I really enjoy <span class="highligtedText">web development</span> and it is an area in which I am currently <span class="highligtedText">improving and learning</span> continuously. Although my preference remains <span class="highligtedText">Android development</span>, <span class="highligtedText">web development</span> is by no means lacking, and I would like to <span class="highligtedText">learn more</span> in this field and <span class="highligtedText">improve as a web developer</span>.
                    </li>
                </ul>
                <br>
            `
        }
    },
    "Games":{
        "es":{
            "txt": `
                <p>
                    He estudiado <span class="highligtedText">Unity</span> y el flujo general del <span class="highligtedText">desarrollo de un videojuego</span>, desde la idea inicial hasta su implementación jugable. 
                    A lo largo de mi aprendizaje he creado varios <span class="highligtedText">minijuegos como proyectos personales</span>, lo que me ha permitido practicar 
                    <span class="highligtedText">programación en C#</span>, diseño de mecánicas, animaciones y gestión de escenas.
                </p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        En estos proyectos he trabajado con <span class="highligtedText">físicas, detección de colisiones e interfaces</span>, además de experimentar con distintos géneros para afianzar mis habilidades.
                    </li>
                    <br>
                    <li>
                        En mi tiempo libre sigo <span class="highligtedText">formándome y practicando</span>, explorando nuevas funcionalidades de Unity, 
                        aplicando <span class="highligtedText">buenas prácticas de optimización</span> y aprendiendo sobre patrones de diseño aplicados al desarrollo de videojuegos.
                    </li>
                    <br>
                    <li>
                        Mi objetivo es seguir creciendo en este ámbito y poder llevar a cabo <span class="highligtedText">proyectos más completos y colaborativos</span>, 
                        aportando <span class="highligtedText">creatividad, dedicación y capacidad de resolución de problemas</span>.
                    </li>
                </ul>
                <br>
                <div id="youWannaSeeMyGames">
                    <img src="../../res/img/gaming.png">
                    <a href="https://itsth3it3r4tor.itch.io/">¿Quieres ver mis juegos?</a>
                    <img src="../../res/img/gaming2.png">
                <div>
            `
        },
        "en":{
            "txt": `
                <p>
                    I have studied <span class="highligtedText">Unity</span> and the overall process of <span class="highligtedText">video game development</span>, from the initial idea to a playable implementation. 
                    Throughout my learning, I have created several <span class="highligtedText">mini-games as personal projects</span>, which allowed me to practice 
                    <span class="highligtedText">C# programming</span>, game mechanics design, animations, and scene management.
                </p>
                <br>
                <ul style="list-style-position: inside; padding-left: 20px; list-style-type: disc;">
                    <li>
                        In these projects, I worked with <span class="highligtedText">physics, collision detection, and user interfaces</span>, as well as experimenting with different genres to strengthen my skills.
                    </li>
                    <br>
                    <li>
                        In my free time, I continue <span class="highligtedText">learning and practicing</span>, exploring new Unity features, 
                        applying <span class="highligtedText">best practices in optimization</span>, and studying design patterns applied to game development.
                    </li>
                    <br>
                    <li>
                        My goal is to keep growing in this field and to develop <span class="highligtedText">larger and more collaborative projects</span>, 
                        bringing <span class="highligtedText">creativity, dedication, and problem-solving skills</span>.
                    </li>
                </ul>
            `
        }
    }
}
const txtWhatCanIDo={
    "es": { txt : `
            Soy desarrollador con experiencia en el desarrollo de aplicaciones Android completas, desde la concepción de la idea hasta la publicación final. Domino la integración de API REST, lo que me permite crear aplicaciones conectadas y dinámicas. Además, poseo sólidos conocimientos en desarrollo web, lo que me otorga una visión más amplia a la hora de construir soluciones multiplataforma.
            <br>
            También cuento con nociones en desarrollo de videojuegos, lo que me ha permitido experimentar con dinámicas de interacción, motores gráficos y lógicas de juego. Trabajo de manera eficiente en entornos colaborativos siguiendo metodologías SCRUM, y estoy completamente familiarizado con el ciclo de vida de una aplicación, desde cero hasta su entrega final y mantenimiento.                            
        `},
    "en": { txt: `
            I am a developer with experience in building complete Android applications, from the initial concept to the final release. I am proficient in integrating REST APIs, which allows me to create connected and dynamic applications. In addition, I have solid knowledge of web development, giving me a broader perspective when building cross-platform solutions.
            <br>
            I also have basic knowledge of video game development, which has allowed me to experiment with interaction dynamics, game engines, and gameplay logic. I work efficiently in collaborative environments following SCRUM methodologies, and I am fully familiar with the entire application development lifecycle, from scratch to final delivery and maintenance.        
        `}
}
const txtWhatIStudy={
    "titles": {
        "es": {
            txt : `
                <h2>Formación reglada</h2>
                <div class="formacionDIV">
                    <h3>CFGM - Sistemas microinformáticos y redes</h3>
                    <ul>
                        <li>Ciclo formativo de grado medio</li>
                        <li>2019-2021</li>
                    </ul>
                </div>
                <div class="formacionDIV">
                    <h3>CFGS - Desarrollo de aplicaciones multiplataforma</h3>
                    <ul>
                        <li>Ciclo formativo de grado superior</li>
                        <li>2022-2024</li>
                    </ul>
                </div>
                <div class="formacionDIV">
                    <h3>CFGS - Desarrollo de aplicaciones web</h3>
                    <ul>
                        <li>Ciclo formativo de grado superior</li>
                        <li>2024-2025</li>
                    </ul>                        
                </div>            
            `
        },
        "en": {
            txt : `
                <h2>Formal Education</h2>
                <div class="formacionDIV">
                    <h3>CFGM - Computer Systems and Networks</h3>
                    <ul>
                        <li>Intermediate Vocational Training</li>
                        <li>2019-2021</li>
                    </ul>
                </div>
                <div class="formacionDIV">
                    <h3>CFGS - Cross-Platform Application Development</h3>
                    <ul>
                        <li>Advanced Vocational Training</li>
                        <li>2022-2024</li>
                    </ul>
                </div>
                <div class="formacionDIV">
                    <h3>CFGS - Web Application Development</h3>
                    <ul>
                        <li>Advanced Vocational Training</li>
                        <li>2024-2025</li>
                    </ul>                        
                </div>            
            `
        }
    },
    "titlesComplementary": {
        "es": {
            txt : `
                         
            `
        },
        "en": {
            txt : `
                        
            `
        }
    }
}







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
        const lang = this.languageController.getLanguage();

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
                                ${textsHeaders["WhoIAm"][lang].txt}
                            </button>
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhatIDo" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ${textsHeaders["WhatIDo"][lang].txt}
                            </button>
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ${textsHeaders["WhatCanIDo"][lang].txt}                                
                            </button>
                            <button id="cardAboutMe_Desktop_sectionButtons_btnWhatIStudy" class="cardAboutMeButton px-5 py-2 m-2 rounded-xl font-semibold text-white text-lg tracking-wide bg-gradient-to-r  hover:from-blue-600 hover:to-indigo-700 hover:scale-105 active:scale-95 shadow-md transition-transform duration-200">
                                ${textsHeaders["WhatIStudy"][lang].txt}  
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
        document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatIStudy").addEventListener("click", () => { this.changeContentOfCard("WhatIStudy"); });




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
        this.changeContentOfCard("whoIAm");
    }












    changeContentOfCard(type){
        const lang = this.languageController.getLanguage();
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
                        ${textWhoIAm[lang].txt}
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
                        ${textsWhatIDo[lang].txt}
                    </div>
                `;                
            ;
            break;
            case "WhatCanIDo":
                document.getElementById("cardAboutMe_Desktop_sectionButtons_btnWhatCanIDo").classList.add("btnSelected");
                html = `
                    <div id="div_WhatCanIDo_Desktop_Section">
                        <div id="div_WhatCanIDo_Desktop_Sec1">
                            ${txtWhatCanIDo[lang].txt}
                        </div>
                        <div><div></div></div>
                        <div id="div_WhatCanIDo_Desktop_Sec2">
                            Habilidades
                            <div>
                                <div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ●●●●●</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                </div>
                                <div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ●●●●●</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                    <div>Java ○○○○○</div>
                                </div>                            
                            </div>
                        </div>                    
                    </div>
                `;
            ;
            break;
            case "WhatIStudy":
                html = `
                    <div id="div_WhatIStudy_Desktop_Section">
                        <div id="div_WhatIStudy_Desktop_Sec1">
                            ${txtWhatIStudy["titles"][lang].txt}
                        </div>  
                        <div><div></div></div>
                        <div id="div_WhatIStudy_Desktop_Sec2">
                            <h2>Formación complementaria</h2>
                            <div class="formacionDIV">
                            </div>
                            <div class="formacionDIV">
                            </div>
                            <div class="formacionDIV">
                            </div>
                        </div>                
                    </div>
                `
            ;
            break;
        }
        document.getElementById("cardAboutMe_Desktop_sectionContent").innerHTML = html;
        
        if(type === "WhatIDo"){
            document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
            `
                <div id="subDiv_AndroidSec"> 
                    <div>${textsWhatIDo["Android"][lang].txt}</div> 
                        <div style="display:flex;justify-content:center;flex-direction:column;">
                            <div id="screenshotsOfApps_Div"> 
                                <div class="scrolleableImagesVerticalWrapper"> 
                                    <div class="scrolleableImagesVertical"> 
                                        <div>
                                            <img src="../../res/img/app_TranScript.png"> 
                                            <p>App Transcript (Propia)</p>
                                        </div> 
                                        <div> 
                                            <img src="../../res/img/app_fotoVerse.png">
                                            <p>App FotoVerse (TFG DAM)</p> 
                                        </div> 
                                        <div> 
                                            <img src="../../res/img/app_APPCGA.png"> 
                                            <p>App CGA (Prácticas DAM)</p> 
                                        </div>  
                                    </div> 
                                </div>
                            </div>
                            <div id="imgAndroidArrowDown">
                                <img src="../../res/img/arrow.png" class="arrowDown">                                    
                            </div>
                        </div>
                    </div>
                </div>                
            `;
        }
        if(type === "WhatIDo"){
            document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.add("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `
                        <div id="subDiv_AndroidSec"> 
                            <div>${textsWhatIDo["Android"][lang].txt}</div> 
                                <div style="display:flex;justify-content:center;flex-direction:column;">
                                    <div id="screenshotsOfApps_Div"> 
                                        <div class="scrolleableImagesVerticalWrapper"> 
                                            <div class="scrolleableImagesVertical"> 
                                                <div>
                                                    <img src="../../res/img/app_TranScript.png"> 
                                                    <p>App Transcript (Propia)</p>
                                                </div> 
                                                <div> 
                                                    <img src="../../res/img/app_fotoVerse.png">
                                                    <p>App FotoVerse (TFG DAM)</p> 
                                                </div> 
                                                <div> 
                                                    <img src="../../res/img/app_APPCGA.png"> 
                                                    <p>App CGA (Prácticas DAM)</p> 
                                                </div>  
                                            </div> 
                                        </div>
                                    </div>
                                    <div id="imgAndroidArrowDown">
                                        <img src="../../res/img/arrow.png" class="arrowDown">                                    
                                    </div>
                                </div>
                            </div>
                        </div>                
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.add("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML =     
                    `
                        ${textsWhatIDo["Web"][lang].txt}
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnGames").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.add("btnSelected");  
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `
                        ${textsWhatIDo["Games"][lang].txt}
                    `;
            });
            document.getElementById("div_whatIDo_Desktop_Btns_btnClases").addEventListener("click", () => {
                document.getElementById("div_whatIDo_Desktop_Btns_btnAndroid").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnWeb").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnGames").classList.remove("btnSelected");
                document.getElementById("div_whatIDo_Desktop_Btns_btnClases").classList.add("btnSelected"); 
                document.getElementById("div_whatIDo_Desktop_Text").innerHTML = 
                    `
                    ${textsWhatIDo["Clases"][lang].txt}
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























