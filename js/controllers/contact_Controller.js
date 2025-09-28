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
            "es": { txt1: "Empresa", txt2: "Particular"},
            "en": { txt1: "Company", txt2: "Individual" }
        };
        let typeOfContact = {
            "es": {txt: "Selecciona tipo de contacto"},
            "en": {txt: "Select contact type"}
        }
        const offerType = {
            "es": {
                txt: "Tipo de oferta",
                options: {
                    txt1: "Oferta laboral",
                    txt2: "Clases particulares",
                    txt3: "Curso a medida",
                    txt4: "Proyecto puntual"
                }
            },
            "en": {
                txt: "Offer type",
                options: {
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
                    <h1 class="text-3xl md:text-6xl font-bold text-gray-200 mb-4 text-left">${txtTitle[lang].txt}</h1>
                    <br>
                    <p class="text-base md:text-lg text-gray-400 mb-6 text-left max-w-2xl mx-auto">${contactContent[lang].txt}</p>
                </div>
                <div id="cardContactMe">
                    <h2 class="text-2xl md:text-2xl font-semibold text-gray-300 mb-3 text-center">${txtEmail[lang].txt}</h2>
                    <form id="contactForm_Desktop" class="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
                        <div class="flex flex-col">
                            <label for="contactType_Desktop" class="text-gray-700 font-semibold mb-2">${typeOfContact[lang].txt}</label>
                            <select id="contactType_Desktop" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                                <option value="empresa" selected>${optionsOfSelect[lang].txt1}</option>
                                <option value="particular">${optionsOfSelect[lang].txt2}</option>
                            </select>
                            <label for="offerType_Desktop" class="text-gray-700 font-semibold mb-2">${offerType[lang].txt}</label>
                            <select id="offerType_Desktop" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                                <option value="jobOffer" selected>${offerType[lang].options.txt1}</option>
                                <option value="privateLessons">${offerType[lang].options.txt2}</option>
                                <option value="privateCourses">${offerType[lang].options.txt3}</option>
                                <option value="specificProject">${offerType[lang].options.txt4}</option>
                            </select>
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
                <img src="../../res/img/close.png" id="errorDivMsgContact_Desktop_CloseBtn">
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

            if(e.target.value === "Particular" || e.target.value === "Individual"){
                html = `
                    <div class="field-group">
                        <input type="text" id="particularName" placeholder="${contactTexts[lang].particularName}" class="input-field">
                    </div>
                    <div class="field-group flex gap-4">
                        <input type="tel" id="particularPhone" placeholder="${contactTexts[lang].particularPhone}" class="input-field flex-1">
                        <input type="email" id="particularEmail" placeholder="${contactTexts[lang].particularEmail}" class="input-field flex-1">
                    </div>
                `;
            } 
            else {
                html = `
                    <div class="field-group flex gap-4">
                        <input type="text" id="empresaName" placeholder="${contactTexts[lang].empresaName}" class="input-field flex-1">
                        <input type="text" id="empresaLocation" placeholder="${contactTexts[lang].empresaLocation}" class="input-field flex-1">
                    </div>
                    <div class="field-group flex gap-4">
                        <input type="tel" id="empresaPhone" placeholder="${contactTexts[lang].empresaPhone}" class="input-field flex-1">
                        <input type="email" id="empresaEmail" placeholder="${contactTexts[lang].empresaEmail}" class="input-field flex-1">
                    </div>
                `;
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

            switch(e.target.value) {
                case offerType["es"].options.txt1:
                case offerType["en"].options.txt1:
                    html = `
                        <div class="field-group">
                            <input type="text" placeholder="${offerTexts[lang].jobTitle}" class="input-field">
                        </div>
                        <div class="field-group">
                            <textarea placeholder="${offerTexts[lang].jobDescription}" class="input-field"></textarea>
                        </div>
                        <div class="field-group">
                            <textarea placeholder="${offerTexts[lang].jobRequirements}" class="input-field"></textarea>
                        </div>
                    `;
                    break;

                case offerType["es"].options.txt2:
                case offerType["en"].options.txt2:
                    html = `
                        <div class="field-group">
                            <input type="text" placeholder="${offerTexts[lang].studentCourse}" class="input-field">
                        </div>
                        <div class="field-group">
                            <textarea placeholder="${offerTexts[lang].studentSubjects}" class="input-field"></textarea>
                        </div>
                    `;
                    break;

                case offerType["es"].options.txt3:
                case offerType["en"].options.txt3:
                    html = `
                        <div class="field-group">
                            <input type="text" placeholder="${offerTexts[lang].customCourseTitle}" class="input-field">
                        </div>
                        <div class="field-group">
                            <textarea placeholder="${offerTexts[lang].customCourseDescription}" class="input-field"></textarea>
                        </div>
                    `;
                    break;

                case offerType["es"].options.txt4:
                case offerType["en"].options.txt4:
                    html = `
                        <div class="field-group flex gap-4">
                            <input type="text" placeholder="${offerTexts[lang].projectName}" class="input-field flex-1">
                            <input type="text" placeholder="${offerTexts[lang].projectBudget}" class="input-field flex-1">
                        </div>
                        <div class="field-group">
                            <input type="text" placeholder="${offerTexts[lang].projectTechnologies}" class="input-field">
                        </div>
                        <div class="field-group">
                            <textarea placeholder="${offerTexts[lang].projectDescription}" class="input-field"></textarea>
                        </div>
                    `;
                    break;
            }

            document.getElementById("contactForm_Desktop_Content_DataProyect").innerHTML = html;
        });
        document.getElementById("btnSubmit_Desktop").addEventListener("click", () => {
            const contactType = document.getElementById("contactType_Desktop").value;
            const offerType = document.getElementById("offerType_Desktop")?.value; // si existe
            const inputs = document.querySelectorAll(".input-field, .text-area-field"); // incluye inputs y textareas
           
            let formData = {};
            inputs.forEach(input => {
                formData[input.id] = input.value;
            });

            let ok = true;
            let errors = [];
            const errorDiv = document.getElementById("errorDivMsgContact_Desktop");

            // Manejo según tipo de oferta
            if (offerType === "Oferta laboral" || offerType === "Job offer") {
                // Aquí accedes a los campos específicos de oferta laboral
                const jobPosition = formData["jobPosition"];
                const jobDescription = formData["jobDescription"];
                const jobRequirements = formData["jobRequirements"];

                if (!jobPosition) { ok = false; errors.push("Debes indicar el puesto laboral."); }
                if (!jobDescription) { ok = false; errors.push("Debes describir en qué consiste la oferta."); }
                if (!jobRequirements) { ok = false; errors.push("Debes indicar los requisitos o habilidades."); }

                    // Validación según tipo de contacto
                    if (contactType === "Particular" || contactType === "Individual") {
                        const name = formData["particularName"];
                        const email = formData["particularEmail"];

                        if (!name) { ok = false; errors.push("Debes indicar tu nombre y apellidos."); }
                        if (!email) { ok = false; errors.push("Debes indicar tu email."); }
                    } 
                    else if (contactType === "Empresa" || contactType === "Company") {
                        const companyName = formData["empresaName"];
                        const email = formData["empresaEmail"];

                        if (!companyName) { ok = false; errors.push("Debes indicar el nombre de la empresa."); }
                        if (!email) { ok = false; errors.push("Debes indicar el email de contacto."); }
                    }

                if(ok){

                }
            } 
            else if (offerType === "Clases particulares" || offerType === "Private lessons") {
                // Campos de clases particulares
                const studentCourse = formData["studentCourse"];
                const studentSubjects = formData["studentSubjects"];

                if (!studentCourse) { ok = false; errors.push("Debes indicar el curso del estudiante."); }
                if (!studentSubjects) { ok = false; errors.push("Debes indicar las áreas, lenguajes o asignaturas a reforzar."); }

                    // Validación según tipo de contacto
                    if (contactType === "Particular" || contactType === "Individual") {
                        const name = formData["particularName"];
                        const email = formData["particularEmail"];

                        if (!name) { ok = false; errors.push("Debes indicar tu nombre y apellidos."); }
                        if (!email) { ok = false; errors.push("Debes indicar tu email."); }
                    } 
                    else if (contactType === "Empresa" || contactType === "Company") {
                        const companyName = formData["empresaName"];
                        const email = formData["empresaEmail"];

                        if (!companyName) { ok = false; errors.push("Debes indicar el nombre de la empresa."); }
                        if (!email) { ok = false; errors.push("Debes indicar el email de contacto."); }
                    }                
            } 
            else if (offerType === "Curso a medida" || offerType === "Tailored course") {
                // Campos de curso a medida
                const courseTopic = formData["courseTopic"];
                const courseDescription = formData["courseDescription"];

                if (!courseTopic) { ok = false; errors.push("Debes indicar de qué es el curso."); }
                if (!courseDescription) { ok = false; errors.push("Debes describir lo que quieres aprender."); }

                    // Validación según tipo de contacto
                    if (contactType === "Particular" || contactType === "Individual") {
                        const name = formData["particularName"];
                        const email = formData["particularEmail"];

                        if (!name) { ok = false; errors.push("Debes indicar tu nombre y apellidos."); }
                        if (!email) { ok = false; errors.push("Debes indicar tu email."); }
                    } 
                    else if (contactType === "Empresa" || contactType === "Company") {
                        const companyName = formData["empresaName"];
                        const email = formData["empresaEmail"];

                        if (!companyName) { ok = false; errors.push("Debes indicar el nombre de la empresa."); }
                        if (!email) { ok = false; errors.push("Debes indicar el email de contacto."); }
                    }                
            } 
            else if (offerType === "Proyecto puntual" || offerType === "Specific project") {
                // Campos de proyecto puntual
                const projectName = formData["projectName"];
                const projectBudget = formData["projectBudget"];
                const projectTechnologies = formData["projectTechnologies"];
                const projectDescription = formData["projectDescription"];

                if (!projectName) { ok = false; errors.push("Debes indicar el nombre del proyecto."); }
                if (!projectBudget) { ok = false; errors.push("Debes indicar el presupuesto máximo."); }
                if (!projectTechnologies) { ok = false; errors.push("Debes indicar los lenguajes o tecnologías necesarias."); }
                if (!projectDescription) { ok = false; errors.push("Debes describir el proyecto."); }

                    // Validación según tipo de contacto
                    if (contactType === "Particular" || contactType === "Individual") {
                        const name = formData["particularName"];
                        const email = formData["particularEmail"];

                        if (!name) { ok = false; errors.push("Debes indicar tu nombre y apellidos."); }
                        if (!email) { ok = false; errors.push("Debes indicar tu email."); }
                    } 
                    else if (contactType === "Empresa" || contactType === "Company") {
                        const companyName = formData["empresaName"];
                        const email = formData["empresaEmail"];

                        if (!companyName) { ok = false; errors.push("Debes indicar el nombre de la empresa."); }
                        if (!email) { ok = false; errors.push("Debes indicar el email de contacto."); }
                    }                
            }


            if(!ok){
                errorDiv.style.display = "block"; // asegurarse de que el div sea visible
                errors.forEach(err => {
                    const p = document.createElement("p");
                    p.textContent = err;
                    errorDiv.appendChild(p);
                });
            }
        });
        document.getElementById("errorDivMsgContact_Desktop_CloseBtn").addEventListener("click", () => {
            errorDiv.style.display = "none";
        })
    }

    renderMobileContent(){
        let lang = this.languageController.getLanguage();

    }
}