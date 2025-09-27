import {LanguageController} from './languageController.js'
import { BlogSystem } from '../systems/blogSystem.js';



const filterTxts = {
    "es": {
        txt: "Filtros"
    },
    "en": {
        txt: "Filters"
    }
}





export class BlogController{
    /**
     * @param {LanguageController} languageController
     * @param {BlogSystem} blogSystem
     * @param actualPage
     * @param handleGoTo
     * @param handleToChangePage
     * @param onBack
     */
    constructor(languageController, blogSystem){
        this.languageController = languageController;
        this.blogSystem = blogSystem;
        this.actualPage = 1;
    }


    renderAll(handlerToGo, handleToChangePage, onBack){
        this.renderDesktopContent();
        this.renderMobileContent();
        this.insertBlogEntries(this.blogSystem.getAllArticles(), this.actualPage, handlerToGo, handleToChangePage);
        this.handleGoTo = handlerToGo;
        this.handleToChangePage = handleToChangePage;
        this.onBack = onBack;
    }

    changeActualPage(index){
        this.actualPage = index;
        this.renderDesktopContent();
        this.renderMobileContent();
        this.insertBlogEntries(this.blogSystem.getAllArticles(), this.actualPage, this.handlerToGo, this.handleToChangePage);
    }







    renderBlogEntry(entryId){
        this.renderBlogEntryDesktop(entryId);
        this.renderBlogEntryMobile(entryId);
    }
    renderBlogEntryDesktop(entryId){
        let lang = this.languageController.getLanguage();
        let entry = this.blogSystem.getArticleById(entryId, lang);
        document.getElementById("sectionDesktop").innerHTML = ""; 
        let htmlText = this.getTextParagrahpsOfEntry(entry);
        let textVisitLink = {
            "es": {txt: "Visitar enlace externo del artículo"},
            "en": {txt: "Visit external link of article"}
        }

        let html = ""; 
        if(entry.link === undefined || entry.link === ""){
            html = `
            <div id="pagesBlog_Desktop_divMainSeeBlogEntry">
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv"> 
                    <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv_1">
                        <img src="../../res/img/back.png" id="backBtn_OfEntryBlog">
                    </div>
                    <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv_2">
                        <h1 class="text-4xl font-bold text-gray-300 mb-4 text-center">${entry.title}</h1>
                        <img src="${entry.imgPortada}">
                        <div id="divOfLabelsAndDate">
                            <div>
                                ${this.getLabelsOfEntry(entry)}
                            </div>
                            <div>
                                <p class="text-1xl font-medium text-gray-400 mb-2">${entry.date}</p>                            
                            </div>
                        </div>
                    </div>                    
                </div>
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_DescriptionDiv">
                    <h3 class="text-xl font-medium text-gray-400 mb-2">${entry.description}</h3>
                </div>
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_ContentDiv">
                    ${htmlText}
                </div>
            <div>
        `;
        }   
        else{
            html = `
            <div id="pagesBlog_Desktop_divMainSeeBlogEntry">
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv"> 
                    <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv_1">
                        <img src="../../res/img/back.png" id="backBtn_OfEntryBlog">
                    </div>
                    <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv_2">
                        <h1 class="text-4xl font-bold text-gray-300 mb-4 text-center">${entry.title}</h1>
                        <a href="${entry.link}" id="linkBtnOfEntryBlog" target="_blank">${textVisitLink[lang].txt}</a>
                        <img src="${entry.imgPortada}">
                        <div id="divOfLabelsAndDate">
                            <div>
                                ${this.getLabelsOfEntry(entry)}
                            </div>
                            <div>
                                <p class="text-1xl font-medium text-gray-400 mb-2">${entry.date}</p>                            
                            </div>
                        </div>
                    </div>                    
                </div>
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_DescriptionDiv">
                    <h3 class="text-xl font-medium text-gray-400 mb-2">${entry.description}</h3>
                    <hr>
                </div>
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_ContentDiv">
                    ${htmlText}
                </div>
            <div>
        `;
        }
        
        document.getElementById("sectionDesktop").innerHTML = html;  
        document.getElementById("backBtn_OfEntryBlog").addEventListener("click", () => { this.onBack() }) 
    }
    renderBlogEntryMobile(entryId){
        let lang = this.languageController.getLanguage();
        let entry = this.blogSystem.getArticleById(entryId, lang);
        document.getElementById("sectionMobile").innerHTML = ""; 
        let htmlText = this.getTextParagrahpsOfEntry(entry);
        let textVisitLink = {
            "es": {txt: "Visitar enlace externo del artículo"},
            "en": {txt: "Visit external link of article"}
        }

        let html = ""; 
        if(entry.link === undefined || entry.link === ""){
            html = `
            <div id="pagesBlog_Mobile_divMainSeeBlogEntry">
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv"> 
                    <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv_1">
                        <img src="../../res/img/back.png" id="backBtn_OfEntryBlog">
                    </div>
                    <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv_2">
                        <h1 class="text-4xl font-bold text-gray-300 mb-4 text-center">${entry.title}</h1>
                        <img src="${entry.imgPortada}">
                        <div id="divOfLabelsAndDate">
                            <div>
                                ${this.getLabelsOfEntry(entry)}
                            </div>
                            <div>
                                <p class="text-1xl font-medium text-gray-400 mb-2">${entry.date}</p>                            
                            </div>
                        </div>
                    </div>                    
                </div>
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_DescriptionDiv">
                    <h3 class="text-xl font-medium text-gray-400 mb-2">${entry.description}</h3>
                </div>
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_ContentDiv">
                    ${htmlText}
                </div>
            <div>
        `;
        }   
        else{
            html = `
            <div id="pagesBlog_Mobile_divMainSeeBlogEntry">
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv"> 
                    <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv_1">
                        <img src="../../res/img/back.png" id="backBtn_OfEntryBlog">
                    </div>
                    <div id="pagesBlog_Mobile_divMainSeeBlogEntry_BackDiv_2">
                        <h1 class="text-4xl font-bold text-gray-300 mb-4 text-center">${entry.title}</h1>
                        <img src="${entry.imgPortada}">
                        <div id="divOfLabelsAndDate">
                            <div>
                                ${this.getLabelsOfEntry(entry)}
                            </div>
                            <div>
                                <p class="text-1xl font-medium text-gray-400 mb-2">${entry.date}</p>                            
                            </div>
                        </div>
                    </div>                    
                </div>
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_DescriptionDiv">
                    <h3 class="text-xl font-medium text-gray-400 mb-2">${entry.description}</h3>
                    <hr>
                </div>
                <div id="pagesBlog_Mobile_divMainSeeBlogEntry_ContentDiv">
                    ${htmlText}
                    <a href="${entry.link}" id="linkBtnOfEntryBlogMobile" target="_blank">${textVisitLink[lang].txt}</a>
                </div>
            <div>
        `;
        }

        document.getElementById("sectionMobile").innerHTML = html;
        document.getElementById("backBtn_OfEntryBlog").addEventListener("click", () => { this.onBack() }) 
    }

    getTextParagrahpsOfEntry(entry)
    {
        let totalImages = entry.imgsExtras.length;
        let entryText = entry.text.split(/\r?\n/).filter(p => p.trim() !== "");

        let htmlText = "";

        // Primer párrafo
        if (entryText.length > 0) {
            htmlText += `<p class="prose max-w-4xl mx-auto p-1 rounded-lg shadow-md>${entryText[0]}</p>\n`;
        }

        // Párrafos restantes (excepto el primero)
        let remainingParagraphs = entryText.slice(1);
        let paragraphsPerImage = totalImages > 0 ? Math.ceil(remainingParagraphs.length / totalImages) : remainingParagraphs.length;

        let imgIndex = 0;
        for (let i = 0; i < remainingParagraphs.length; i++) {
            htmlText += `<p class="prose max-w-4xl mx-auto p-1 rounded-lg shadow-md>${remainingParagraphs[i]}</p>\n`;

            // Insertar imagen si toca
            if (totalImages > 0 && (i + 1) % paragraphsPerImage === 0 && imgIndex < totalImages) {
                htmlText += `<img src="${entry.imgsExtras[imgIndex]}" alt="Imagen ${imgIndex + 1}">\n`;
                imgIndex++;
            }
        }

        // Último párrafo igual al primero
        if (entryText.length > 0) {
            htmlText += `<p class="prose max-w-4xl mx-auto p-1 rounded-lg shadow-md">${entryText[0]}</p>\n`;
        }

        return htmlText;
    }   
    getLabelsOfEntry(entry){
        console.log("MMMM - " + JSON.stringify(entry, null, 2));

        let html = ``;
        entry.labels.forEach(lbl => {
            console.log("MMMM - " + lbl);

            html += `<div class="labelDiv lbl_${lbl}">${lbl}</div>`
        });

        return html;
    }





    renderDesktopContent(){
        let lang = this.languageController.getLanguage();
        document.getElementById("sectionDesktop").innerHTML = ""; 

        let html = `
            <div id="pagesBlog_Desktop_divMain">
                <div id="pagesBlog_Desktop_divMain_title">
                    <div class="text-4xl font-bold text-center text-gray-400 tracking-wide uppercase">BLOG</div>
                </div>
                <div id="pagesBlog_Desktop_divMain_searchAndFilter">
                    <div id="pagesBlog_Desktop_divMain_searchAndFilter_empty"> 
                    </div>
                    <div id="pagesBlog_Desktop_divMain_searchAndFilter_search"> 
                        <div class="input-wrapper">
                            <input type="text" placeholder="Buscar...">
                            <img src="../../res/img/search.png" alt="buscar">
                        </div>
                    </div>
                    <div id="pagesBlog_Desktop_divMain_searchAndFilter_filter" class="text-2xl font-bold text-center text-gray-400 tracking-wide"> 
                        <img src="../../res/img/filter.png">${filterTxts[lang].txt}
                    </div>
                </div>
                <div id="pagesBlog_Desktop_divMain_entries">
                    <div id="pagesBlog_Desktop_divMain_entries_row1"></div>
                    <div id="pagesBlog_Desktop_divMain_entries_row2"></div>
                </div>
                <div id="pagesBlog_Desktop_divMain_pages">
                    
                </div>
            </div>
        `;
        document.getElementById("sectionDesktop").innerHTML = html;
    }
    renderMobileContent(){
        let lang = this.languageController.getLanguage();
        document.getElementById("sectionMobile").innerHTML = ""; 

        let html = `
            <div id="pagesBlog_Mobile_divMain">
                <div id="pagesBlog_Mobile_divMain_title">
                    <div class="text-4xl font-bold text-center text-gray-400 tracking-wide uppercase">BLOG</div>
                </div>
                <div id="pagesBlog_Mobile_divMain_searchAndFilter">
                    <div id="pagesBlog_Mobile_divMain_searchAndFilter_empty"> 
                    </div>
                    <div id="pagesBlog_Mobile_divMain_searchAndFilter_search"> 
                        <div class="input-wrapper">
                            <input type="text" placeholder="Buscar...">
                            <img src="../../res/img/search.png" alt="buscar">
                        </div>
                    </div>
                    <div id="pagesBlog_Mobile_divMain_searchAndFilter_filter" class="text-2xl font-bold text-center text-gray-400 tracking-wide"> 
                        <img src="../../res/img/filter.png">
                    </div>
                </div>
                <div id="pagesBlog_Mobile_divMain_entries">
                </div>
                <div id="pagesBlog_Mobile_divMain_pages">
                    
                </div>
            </div>
        `;
        document.getElementById("sectionMobile").innerHTML = html;
    }






    insertBlogEntries(entries, page, handleGoTo, handleToChangePage) {
        console.log(entries);
        const itemsPerPage = 4;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const entriesToShow = entries.slice(startIndex, endIndex);

        const firstHalf = entriesToShow.slice(0, 2);
        const secondHalf = entriesToShow.slice(2, 4);

        const row1Desktop = document.getElementById("pagesBlog_Desktop_divMain_entries_row1");
        const row2Desktop = document.getElementById("pagesBlog_Desktop_divMain_entries_row2");
        const divMobile = document.getElementById("pagesBlog_Mobile_divMain_entries");

        // limpiar antes de insertar
        row1Desktop.innerHTML = "";
        row2Desktop.innerHTML = "";
        divMobile.innerHTML = "";

        // Primer grupo
        firstHalf.forEach(entry => {
            console.log("ASDASDAS "+entry.id);
            const card = this.getBlogEntry(entry, () => handleGoTo(entry.id));
            row1Desktop.appendChild(card);
        });

        // Segundo grupo
        secondHalf.forEach(entry => {
            const card = this.getBlogEntry(entry, () => handleGoTo(entry.id));
            row2Desktop.appendChild(card);
        });

        entriesToShow.forEach(entry => {
            const card = this.getBlogEntry(entry, () => handleGoTo(entry.id));
            divMobile.appendChild(card);
        });

        this.setPagesNumbers(entries, page, handleToChangePage);
    }





    setPagesNumbers(entries, page, handleToChangePage){
        let numPages = 0;
        if(entries.length % 4 == 0){
            numPages = entries.length / 4;
        }
        else{
            numPages = entries.length / 4;
        }
        /* -------------------------------------------------------------- DESKTOP ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        let fatherDiv = document.getElementById("pagesBlog_Desktop_divMain_pages");
        for (let index = 1; index < numPages+1; index++) {
            let div = document.createElement("div");
            if(index === page){ 
                div.classList.add("pageNum");
                div.classList.add("pageNumActual");
                div.innerHTML = `${index}`;
                div.addEventListener("click", () => handleToChangePage(index));
            }
            else { 
                div.classList.add("pageNum");
                div.innerHTML = `${index}`;
                div.addEventListener("click", () => handleToChangePage(index));
            }
            fatherDiv.appendChild(div);
        }
        /* -------------------------------------------------------------- MOBILE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
        let fatherDiv2 = document.getElementById("pagesBlog_Mobile_divMain_pages");
        for (let index = 1; index < numPages+1; index++) {
            let div = document.createElement("div");
            if(index === page){ 
                div.classList.add("pageNum");
                div.classList.add("pageNumActual");
                div.innerHTML = `${index}`;
                div.addEventListener("click", () => handleToChangePage(index));
            }
            else { 
                div.classList.add("pageNum");
                div.innerHTML = `${index}`;
                div.addEventListener("click", () => handleToChangePage(index));
            }
            fatherDiv2.appendChild(div);
        }

    }




    getBlogEntry(blogEntry, handler) {
        let newDescription = blogEntry.description.length > 75
            ? blogEntry.description.substring(0, 75) + "..."
            : blogEntry.description;

        const div = document.createElement("div");
        div.classList.add("cardMiniEntryBlog");
        div.innerHTML = `
            <img src="${blogEntry.imgPortada}">
            <div>
                <h2>${blogEntry.title}</h2>
                <p>${newDescription}</p>
                <button>Ver más</button>
            </div>
        `;

        // asignar el evento correctamente
        div.querySelector("button").addEventListener("click", () => handler(blogEntry.id));

        return div;
    }
}