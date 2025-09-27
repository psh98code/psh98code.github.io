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
     */
    constructor(languageController, blogSystem){
        this.languageController = languageController;
        this.blogSystem = blogSystem;
        this.actualPage = 1;
    }


    renderAll(handlerToGo, handleToChangePage){
        this.renderDesktopContent();
        this.insertBlogEntries(this.blogSystem.getAllArticles(), this.actualPage, handlerToGo, handleToChangePage);
        this.handleGoTo = handlerToGo;
        this.handleToChangePage = handleToChangePage;
    }

    changeActualPage(index){
        this.actualPage = index;
        this.renderDesktopContent();
        this.insertBlogEntries(this.blogSystem.getAllArticles(), this.actualPage, this.handlerToGo, this.handleToChangePage);
    }







    renderBlogEntry(entryId){
        let entry = this.blogSystem.get // SEGUIR

        let lang = this.languageController.getLanguage();
        document.getElementById("sectionDesktop").innerHTML = ""; 
        
        let html = `
            <div id="pagesBlog_Desktop_divMainSeeBlogEntry">
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_BackDiv"> 
                    <img src="">
                </div>
                <div id="pagesBlog_Desktop_divMainSeeBlogEntry_ContentDiv">

                </div>
            <div>
        `;

        document.getElementById("sectionDesktop").innerHTML = hmtl;         
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






    insertBlogEntries(entries, page, handleGoTo, handleToChangePage) {
        console.log(entries);
        const itemsPerPage = 4;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const entriesToShow = entries.slice(startIndex, endIndex);

        const firstHalf = entriesToShow.slice(0, 2);
        const secondHalf = entriesToShow.slice(2, 4);

        const row1 = document.getElementById("pagesBlog_Desktop_divMain_entries_row1");
        const row2 = document.getElementById("pagesBlog_Desktop_divMain_entries_row2");

        // limpiar antes de insertar
        row1.innerHTML = "";
        row2.innerHTML = "";

        // Primer grupo
        firstHalf.forEach(entry => {
            console.log("ASDASDAS "+entry.id);
            const card = this.getBlogEntry(entry, () => handleGoTo(entry.id));
            row1.appendChild(card);
        });

        // Segundo grupo
        secondHalf.forEach(entry => {
            const card = this.getBlogEntry(entry, () => handleGoTo(entry.id));
            row2.appendChild(card);
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



    /*

        export class BlogPost {
            constructor({ id, title, description, imgPortada, imgsExtras = [], link = "", text = "" }) {
                this.id = id;                     // número
                this.title = title;               // string
                this.description = description;   // string
                this.imgPortada = imgPortada;     // string
                this.imgsExtras = imgsExtras;     // array de strings
                this.link = link;                 // string
                this.text = text;                 // string
            }
        }

    */
}