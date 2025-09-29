import { LanguageController } from './languageController.js';




export class ContactController{
    /**
     * @param {LanguageController} languageController
     */
    constructor(languageController){
        this.languageController = languageController;
    }




    renderAll(){
        this.renderDesktopContent();
    }

    renderDesktopContent(){
        let lang = this.languageController.getLanguage();
        let txtTitle = {"es": {txt: "Contacta conmigo"}, "en": {txt: "Contact me"}}
        let contactContent = {
            "es": {
                txt: `¡Hola! Puedes contactar conmigo para diversas razones: ofertas laborales, proyectos puntuales como el desarrollo de una web o aplicación, clases particulares o cursos a medida de Kotlin, Java u otros lenguajes para particulares. Estoy abierto a colaboraciones, consultorías y cualquier iniciativa relacionada con desarrollo de software.\n\nMándame un correo mediante el formulario o envíame un WhatsApp mediante el botón flotante.`
            },
            "en": {
                txt: `Hello! You can reach out to me for several reasons: job opportunities, specific projects like developing a website or an app, private lessons or customized courses in Kotlin, Java, or other programming languages for individuals. I am open to collaborations, consultations, and any initiative related to software development.\n\nSend me an email via the form or a WhatsApp via the floating button.`
            }
        };
        let txtEmail = {
            "es": { txt: "Envíame un correo" },
            "en": { txt: "Send me an email" }
        };
        let optionsOfSelect = {
            "es": { txt0: "Seleccione uno", txt1: "Empresa", txt2: "Particular"},
            "en": { txt0: "Select one", txt1: "Company", txt2: "Individual" }
        };
        let typeOfContact = {
            "es": {txt: "Tipo de contacto"},
            "en": {txt: "Contact type"}
        }
        const offerType = {
            "es": {
                txt: "Tipo de oferta",
                options: {
                    txt0 : "Seleccione uno",
                    txt1: "Oferta laboral",
                    txt2: "Clases particulares",
                    txt3: "Curso a medida",
                    txt4: "Proyecto puntual"
                }
            },
            "en": {
                txt: "Offer type",
                options: {
                    txt0: "Select one",
                    txt1: "Job offer",
                    txt2: "Private lessons",
                    txt3: "Tailored course",
                    txt4: "Specific project"
                }
            }
        };

        document.getElementById("sectionDesktop").innerHTML = "";
        let html = `
            <div id="pages_contact_Desktop_DivMain">
                <div>
                    <h1 class="text-3xl md:text-6xl font-bold text-gray-200 mb-4 text-center">${txtTitle[lang].txt}</h1>
                    <p class="text-base md:text-lg text-gray-400 mb-6 text-center mx-auto">${contactContent[lang].txt}</p>
                </div>
                <div id="cardContactMe">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-200 mb-3 text-center">${txtEmail[lang].txt}</h2>
                    <form id="contactForm_Desktop" class=" p-6 shadow-lg rounded-lg" action="https://formspree.io/f/mldpgyny" method="POST">
                        <div class="flex flex-col">
                            <div>
                                <label for="contactType_Desktop" class="font-semibold text-lg">${typeOfContact[lang].txt}</label>
                                <select id="contactType_Desktop" name="Tipo de contacto" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                                    <option value="none" selected>${optionsOfSelect[lang].txt0}</option>
                                    <option value="empresa">${optionsOfSelect[lang].txt1}</option>
                                    <option value="particular">${optionsOfSelect[lang].txt2}</option>
                                </select>
                            </div>
                            <div>
                                <label for="offerType_Desktop" class=" font-semibold text-lg">${offerType[lang].txt}</label>
                                <select id="offerType_Desktop" name="Tipo de oferta" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                                    <option value="none" selected>${offerType[lang].options.txt0}</option>                                   
                                    <option value="jobOffer">${offerType[lang].options.txt1}</option>
                                    <option value="privateLessons">${offerType[lang].options.txt2}</option>
                                    <option value="privateCourses">${offerType[lang].options.txt3}</option>
                                    <option value="specificProject">${offerType[lang].options.txt4}</option>
                                </select>
                            </div>
                        </div>
                        <div id="contactForm_Desktop_Content_DataPersonal">
                        </div>
                        <div id="contactForm_Desktop_Content_DataProyect">
                        </div>
                        <div class="field-group">
                            <input type="submit" value="Enviar" id="btnSubmit_Desktop">
                        </div>
                    </form>
                </div>
            </div>
            <div id="contactMeButtonWhatsapp">
                <img src="../../res/img/whatsapp.png">
            </div>
            <div id="errorDivMsgContact_Desktop">
                <div id="errorDivMsgContact_Desktop_CARD">
                    <h1 class="text-2xl font-bold text-center text-red-600 mb-4">¡Revisa tus errores!</h1>
                    <div id="errorDivMsgContact_Desktop_Content">
                    </div>
                    <div>
                        <h2 id="errorDivMsgContact_Desktop_CloseBtn">Cerrar</h2>
                    </div>                
                </div>
            </div>
        `;
        document.getElementById("sectionDesktop").innerHTML = html;



        const contactTypeSelect = document.getElementById("contactType_Desktop");
        contactTypeSelect.addEventListener("change", (e) => {
            const contactTexts = {
                "es": {
                    particularName: "Nombre y Apellidos",
                    particularPhone: "Teléfono (opcional)",
                    particularEmail: "Email",
                    empresaName: "Nombre de la empresa",
                    empresaLocation: "Localización (opcional)",
                    empresaPhone: "Teléfono (opcional)",
                    empresaEmail: "Email"
                },
                "en": {
                    particularName: "Full Name",
                    particularPhone: "Phone (optional)",
                    particularEmail: "Email",
                    empresaName: "Company Name",
                    empresaLocation: "Location (optional)",
                    empresaPhone: "Phone (optional)",
                    empresaEmail: "Email"
                }
            };

            // Supongamos que lang puede ser "es" o "en"
            let html = "";
            document.getElementById("contactForm_Desktop_Content_DataPersonal").innerHTML = "";

            if(e.target.value == "particular"){
                html = `
                    <div class="field-group">
                        <input type="text" id="particularName" name="Nombre del particular" placeholder="${contactTexts[lang].particularName}" class="input-field">
                    </div>
                    <div class="field-group flex gap-4">
                        <input type="tel" id="particularPhone" name="Telefono del particular" placeholder="${contactTexts[lang].particularPhone}" class="input-field flex-1">
                        <input type="email" id="particularEmail" name="Email del particular" placeholder="${contactTexts[lang].particularEmail}" class="input-field flex-1">
                    </div>
                `;
                document.getElementById("contactForm_Desktop_Content_DataPersonal").style.display = "flex";
            } 
            else if(e.target.value == "empresa") {
                html = `
                    <div class="field-group flex gap-4">
                        <input type="text" id="empresaName" name="Nombre de la empresa" placeholder="${contactTexts[lang].empresaName}" class="input-field flex-1">
                        <input type="text" id="empresaLocation" name="Localizacion de la empresa" placeholder="${contactTexts[lang].empresaLocation}" class="input-field flex-1">
                    </div>
                    <div class="field-group flex gap-4">
                        <input type="tel" id="empresaPhone" name="Telefono de la empresa" placeholder="${contactTexts[lang].empresaPhone}" class="input-field flex-1">
                        <input type="email" id="empresaEmail" name="Email de la empresa" placeholder="${contactTexts[lang].empresaEmail}" class="input-field flex-1">
                    </div>
                `;
                document.getElementById("contactForm_Desktop_Content_DataPersonal").style.display = "flex";
            }
            else{
                document.getElementById("contactForm_Desktop_Content_DataPersonal").style.display = "none";
            }
            document.getElementById("contactForm_Desktop_Content_DataPersonal").innerHTML = html;
        });

        const proyectTypeSelect = document.getElementById("offerType_Desktop");
        proyectTypeSelect.addEventListener("change", (e) => {
        const offerTexts = {
            "es": {
                jobTitle: "Puesto laboral",
                jobDescription: "Descripción de la oferta laboral",
                jobRequirements: "Requisitos / habilidades necesarias",
                studentCourse: "Curso / carrera del estudiante",
                studentSubjects: "Áreas / asignaturas en las que necesita ayuda",
                customCourseTitle: "Curso a medida de",
                customCourseDescription: "Descripción de lo que desea aprender",
                projectName: "Nombre del proyecto",
                projectBudget: "Presupuesto máximo (€)",
                projectTechnologies: "Lenguajes / tecnologías necesarios",
                projectDescription: "Descripción del proyecto"
            },
            "en": {
                jobTitle: "Job position",
                jobDescription: "Job offer description",
                jobRequirements: "Requirements / skills needed",
                studentCourse: "Student course / degree",
                studentSubjects: "Subjects / areas where help is needed",
                customCourseTitle: "Tailored course in",
                customCourseDescription: "Description of what you want to learn",
                projectName: "Project name",
                projectBudget: "Maximum budget (€)",
                projectTechnologies: "Required languages / technologies",
                projectDescription: "Project description"
            }
        };
        let html = "";
        document.getElementById("contactForm_Desktop_Content_DataProyect").innerHTML = "";

        switch(e.target.value) {
            case "jobOffer":
                html = `
                    <div class="field-group">
                        <input id="puestoLaboral" name="Puesto laboral" type="text" placeholder="${offerTexts[lang].jobTitle}" class="input-field">
                    </div>
                    <div class="field-group">
                        <textarea id="descripcionOferta" name="Descripción de la oferta laboral" placeholder="${offerTexts[lang].jobDescription}" class="input-field"></textarea>
                        <textarea id="requisitosHabilidades" name="Requisitos o habilidades necesarias" placeholder="${offerTexts[lang].jobRequirements}" class="input-field"></textarea>
                    </div>
                `;
                break;

            case "privateLessons":
                html = `
                    <div class="field-group">
                        <input id="cursoEstudiante" name="Curso del estudiante" type="text" placeholder="${offerTexts[lang].studentCourse}" class="input-field">
                    </div>
                    <div class="field-group">
                        <textarea id="areasAsignaturas" name="Áreas o asignaturas" placeholder="${offerTexts[lang].studentSubjects}" class="input-field"></textarea>
                    </div>
                `;
                break;

            case "privateCourses":
                html = `
                    <div class="field-group">
                        <input id="cursoPersonalizado" name="Curso a medida" type="text" placeholder="${offerTexts[lang].customCourseTitle}" class="input-field">
                    </div>
                    <div class="field-group">
                        <textarea id="descripcionCurso" name="Descripción del curso" placeholder="${offerTexts[lang].customCourseDescription}" class="input-field"></textarea>
                    </div>
                `;
                break;

            case "specificProject":
                html = `
                    <div class="field-group flex gap-4">
                        <input id="nombreProyecto" name="Nombre del proyecto" type="text" placeholder="${offerTexts[lang].projectName}" class="input-field">
                        <input id="presupuestoProyecto" name="Presupuesto máximo" type="text" placeholder="${offerTexts[lang].projectBudget}" class="input-field">
                    </div>
                    <div class="field-group">
                        <input id="tecnologiasProyecto" name="Lenguajes o tecnologías" type="text" placeholder="${offerTexts[lang].projectTechnologies}" class="input-field">
                        <textarea id="descripcionProyecto" name="Descripción del proyecto" placeholder="${offerTexts[lang].projectDescription}" class="input-field"></textarea>
                    </div>
                `;
                break;

            case "none":
                document.getElementById("contactForm_Desktop_Content_DataProyect").style.display = "none";                                        
                break;
        }

        if(e.target.value !== "none") {
            document.getElementById("contactForm_Desktop_Content_DataProyect").style.display = "flex";
        }

        document.getElementById("contactForm_Desktop_Content_DataProyect").innerHTML = html;
    });

// ---------------------------------------------- BOTON DE ENVIAR -------------------------------------------------
document.getElementById("btnSubmit_Desktop").addEventListener("click", (e) => {
    const lang = document.documentElement.lang || "es"; 
    const contactType = document.getElementById("contactType_Desktop").value;
    const offerType = document.getElementById("offerType_Desktop")?.value;
    const inputs = document.querySelectorAll(".input-field, .text-area-field");

    let formData = {};
    inputs.forEach(input => {
        formData[input.id] = input.value; // ahora usamos el ID
    });

    let ok = true;
    let errors = [];
    const errorDivContent = document.getElementById("errorDivMsgContact_Desktop_Content");

    const errorTexts = {
        es: {
            selectContact: "Debes seleccionar un tipo de contacto",
            selectOffer: "Debes seleccionar un tipo de oferta",
            puestoLaboral: "Debes indicar el puesto laboral.",
            descripcionOferta: "Debes describir en qué consiste la oferta.",
            requisitosHabilidades: "Debes indicar los requisitos o habilidades.",
            cursoEstudiante: "Debes indicar el curso del estudiante.",
            areasAsignaturas: "Debes indicar las áreas o asignaturas a reforzar.",
            cursoPersonalizado: "Debes indicar de qué es el curso.",
            descripcionCurso: "Debes describir lo que quieres aprender.",
            nombreProyecto: "Debes indicar el nombre del proyecto.",
            presupuestoProyecto: "Debes indicar el presupuesto máximo.",
            tecnologiasProyecto: "Debes indicar los lenguajes o tecnologías necesarias.",
            descripcionProyecto: "Debes describir el proyecto.",
            particularName: "Debes indicar tu nombre y apellidos.",
            particularEmail: "Debes indicar tu email.",
            companyName: "Debes indicar el nombre de la empresa.",
            companyEmail: "Debes indicar el email de contacto."
        },
        en: { /* ... equivalente en inglés ... */ }
    };

    if(contactType == "none"){
        ok = false; 
        errors.push(errorTexts[lang].selectContact);
    } else if(offerType == "none"){
        ok = false; 
        errors.push(errorTexts[lang].selectOffer);
    } else {
        // Validaciones según oferta
        if (offerType === "jobOffer") {
            if (!formData["puestoLaboral"]) ok = false, errors.push(errorTexts[lang].puestoLaboral);
            if (!formData["descripcionOferta"]) ok = false, errors.push(errorTexts[lang].descripcionOferta);
            if (!formData["requisitosHabilidades"]) ok = false, errors.push(errorTexts[lang].requisitosHabilidades);
        } 
        else if (offerType === "privateLessons") {
            if (!formData["cursoEstudiante"]) ok = false, errors.push(errorTexts[lang].cursoEstudiante);
            if (!formData["areasAsignaturas"]) ok = false, errors.push(errorTexts[lang].areasAsignaturas);
        } 
        else if (offerType === "privateCourses") {
            if (!formData["cursoPersonalizado"]) ok = false, errors.push(errorTexts[lang].cursoPersonalizado);
            if (!formData["descripcionCurso"]) ok = false, errors.push(errorTexts[lang].descripcionCurso);
        } 
        else if (offerType === "specificProject") {
            if (!formData["nombreProyecto"]) ok = false, errors.push(errorTexts[lang].nombreProyecto);
            if (!formData["presupuestoProyecto"]) ok = false, errors.push(errorTexts[lang].presupuestoProyecto);
            if (!formData["tecnologiasProyecto"]) ok = false, errors.push(errorTexts[lang].tecnologiasProyecto);
            if (!formData["descripcionProyecto"]) ok = false, errors.push(errorTexts[lang].descripcionProyecto);
        }

        // Validación tipo de contacto
        if(contactType =="particular") {
            const name = formData["particularName"];
            const email = formData["particularEmail"];
            if(!name) ok = false, errors.push(errorTexts[lang].particularName);
            if(!email) ok = false, errors.push(errorTexts[lang].particularEmail);
        } else {
            const companyName = formData["empresaName"];
            const email = formData["empresaEmail"];
            if(!companyName) ok = false, errors.push(errorTexts[lang].companyName);
            if(!email) ok = false, errors.push(errorTexts[lang].companyEmail);
        }
    }

    if(!ok){
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("errorDivMsgContact_Desktop").style.display = "flex";
        errorDivContent.innerHTML = "";
        errors.forEach(err => {
            const p = document.createElement("p");
            p.textContent = err;
            errorDivContent.appendChild(p);
        });
    } else {
        // aquí iría el envío del formulario
    }
});

                
        document.getElementById("errorDivMsgContact_Desktop_CloseBtn").addEventListener("click", () => {
            document.getElementById("errorDivMsgContact_Desktop").style.display = "none";
        })
    }

    renderMobileContent(){
        let lang = this.languageController.getLanguage();

    }
}