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
     */
    constructor(languageController, blogSystem){
        this.languageController = languageController;
        this.blogSystem = blogSystem;
    }


    renderAll(handlerToGo){
        this.renderDesktopContent();
        this.insertBlogEntries(this.blogSystem.getAllArticles(), 1, handlerToGo);
    }





    renderDesktopContent(){
        let lang = this.languageController.getLanguage();
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







    insertBlogEntries(entries, page, handleGoTo){
        const itemsPerPage = 4; // cantidad de elementos por página
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const entriesToShow = entries.slice(startIndex, endIndex);

        // Dividir en dos arrays de máximo 2 elementos cada uno
        const firstHalf = entriesToShow.slice(0, 2);
        const secondHalf = entriesToShow.slice(2, 4);

        let html = "";
        let html2 = "";

        // Primer grupo
        firstHalf.forEach(entry => {
            html += this.getBlogEntry(entry, () => { handleGoTo(entry.id); });
        });

        // Segundo grupo
        secondHalf.forEach(entry => {
            html2 += this.getBlogEntry(entry, () => { handleGoTo(entry.id); });
        });


        document.getElementById("pagesBlog_Desktop_divMain_entries_row1").innerHTML = html;
        document.getElementById("pagesBlog_Desktop_divMain_entries_row2").innerHTML = html2;
    }



    getBlogEntry(blogEntry, handler){
        let newDescription = "";
        if (blogEntry.description.length > 100) { newDescription = blogEntry.description.substring(0, 100) + "..."; } 
        else { newDescription = blogEntry.description; }

        let html = `
            <div class="cardMiniEntryBlog"> 
                <img src="${blogEntry.imgPortada}">
                <div>
                    <h2>${blogEntry.title}</h2>
                    <p>${newDescription}</p>
                    <button onclick="${handler()}">Ver más</button>
                </div>
            </div>
        `;

        return html;
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