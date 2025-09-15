
let actualArticleOfLastArticles = 1;

const texts = {
    es: {
        welcome: "Bienvenido a mi Portfolio",
        welcomeSubText: "Desarrollor android, programador amateur de videojuegos, profesor particular de programación y apasionado de la",
        welcomeSubTextHighligted : "tecnología"
    },
    en: {
        welcome: "Welcome to my porftolio",
        welcomeSubText: "Android developer, amateur game programmer, private programming tutor, and passionate about",
        welcomeSubTextHighligted: "technology"
    }
}




function insertHomeContent(lang){
    let html = 
    `<div id="pageHome_DivMain" class="fade-in">
        <div>
            <h1 class="text-8xl md:text-7xl font-bold text-gray-200 mb-4">
                ${texts[lang].welcome}
            </h1>
            <p class="text-xl md:text-2xl text-gray-400 mb-6">
                ${texts[lang].welcomeSubText}
                <span class="text-green-400 font-semibold">${texts[lang].welcomeSubTextHighligted}</span>
            </p>
        </div>

        <div>
            <div id="pageHome_SubDiv_LastArticles">
                
            </div>
        </div>
    </div>`;
    document.getElementById("sectionMain").innerHTML = html;


    let html2 = `
        <div id="pageHome_DivMainVertical" class="fade-in">
        <div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-200 mb-4">
                ${texts[lang].welcome}
            </h1>
            <p class="text-xl md:text-2xl text-gray-400 mb-6">
                ${texts[lang].welcomeSubText}
                <span class="text-green-400 font-semibold">${texts[lang].welcomeSubTextHighligted}</span>
            </p>
        </div>

        <div>
            <div id="pageHome_SubDiv_LastArticlesVertical">
                
            </div>
        </div>
    </div>`;
    document.getElementById("sectionMainVertical").innerHTML = html2;
}











function insertLastArticles(){
    let txt = "";
    if(getLastArticleN(actualArticleOfLastArticles).txtTxt.length > 220){
        txt = getLastArticleN(actualArticleOfLastArticles).txtTxt.substring(0, 220) + " [...]";
    }
    else{
        txt =  getLastArticleN(actualArticleOfLastArticles).txtTxt;
    }

    let html = `
        <div id="pageHome_CardLastArticles">
            <img id="pageHome_CardLastArticles_imgOfArticle" class="fade-in" src="${getLastArticleN(actualArticleOfLastArticles).imgSrc}">
            <div id="pageHome_CardLastArticles_textsSecion" class="fade-in">
                <h3 id="pageHome_CardLastArticles_titleOfArticle">${getLastArticleN(actualArticleOfLastArticles).txtTitle}</h3>
                <p id="pageHome_CardLastArticles_txtOfArticle">${txt}</p>
                <a id="pageHome_CardLastArticles_seeArticleBtn" class="inline-block px-4 py-2 text-white font-semibold rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
                    Leer más
                </a>
            </div>
            <div id="pageHome_CardLastArticles_dotsAndArrowsSection">
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowLeft">
                    <img src="../imgs/arrow_left.png" id="pageHome_CardLastArticles_arrorLeft">
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_dots">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot1" class="dotScaled">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot2" class="dot">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot3" class="dot">
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowRight">
                    <img src="../imgs/arrow_left.png" id="pageHome_CardLastArticles_arrowRight">
                </div>
            </div>
        </div>
    `;
    let html2 = `
        <div id="pageHome_CardLastArticlesV">
            <img id="pageHome_CardLastArticles_imgOfArticleV" class="fade-in" src="${getLastArticleN(actualArticleOfLastArticles).imgSrc}">
            <div id="pageHome_CardLastArticles_textsSecionV" class="fade-in">
                <h3 id="pageHome_CardLastArticles_titleOfArticleV">${getLastArticleN(actualArticleOfLastArticles).txtTitle}</h3>
                <p id="pageHome_CardLastArticles_txtOfArticleV">${txt}</p>
                <a id="pageHome_CardLastArticles_seeArticleBtnV" class="inline-block px-6 py-2 text-white font-semibold rounded-full shadow-md hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
                    Leer más
                </a>
            </div>
            <div id="pageHome_CardLastArticles_dotsAndArrowsSectionV">
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowLeftV">
                    <img src="../imgs/arrow_left.png" id="pageHome_CardLastArticles_arrorLeftV">
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_dotsV">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot1V" class="dotScaled">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot2V" class="dot">
                    <img src="../imgs/dot.png" id="pageHome_CardLastArticles_dot3V" class="dot">
                </div>
                <div id="pageHome_CardLastArticles_dotsAndArrowsSection_arrowRightV">
                    <img src="../imgs/arrow_left.png" id="pageHome_CardLastArticles_arrowRightV">
                </div>
            </div>
        </div>
    `;
    document.getElementById("pageHome_SubDiv_LastArticles").innerHTML = html;
    document.getElementById("pageHome_SubDiv_LastArticlesVertical").innerHTML = html2;


    /* LISTENERS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    document.getElementById("pageHome_CardLastArticles_arrorLeft").addEventListener("click", () => {
        if(actualArticleOfLastArticles == 1){
            actualArticleOfLastArticles = 3;
        }
        else{
            actualArticleOfLastArticles--;
        }
        changeContentOfLastArticles();
    });
    document.getElementById("pageHome_CardLastArticles_arrowRight").addEventListener("click", () => {
        if(actualArticleOfLastArticles == 3){
            actualArticleOfLastArticles = 1;
        }
        else{
            actualArticleOfLastArticles++;
        }
        changeContentOfLastArticles();
    });
    document.getElementById("pageHome_CardLastArticles_dot1").addEventListener("click", () => {
        actualArticleOfLastArticles = 1;
        changeContentOfLastArticles();
    });
    document.getElementById("pageHome_CardLastArticles_dot2").addEventListener("click", () => {
        actualArticleOfLastArticles = 2;
        changeContentOfLastArticles();
    });
    document.getElementById("pageHome_CardLastArticles_dot3").addEventListener("click", () => {
        actualArticleOfLastArticles = 3;
        changeContentOfLastArticles();
    });

    /* LISTENERS VERTICALES -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    document.getElementById("pageHome_CardLastArticles_arrorLeftV").addEventListener("click", () => {
        if(actualArticleOfLastArticles == 1){
            actualArticleOfLastArticles = 3;
        }
        else{
            actualArticleOfLastArticles--;
        }
        changeContentOfLastArticlesVertical();
    });
    document.getElementById("pageHome_CardLastArticles_arrowRightV").addEventListener("click", () => {
        if(actualArticleOfLastArticles == 3){
            actualArticleOfLastArticles = 1;
        }
        else{
            actualArticleOfLastArticles++;
        }
        changeContentOfLastArticlesVertical();
    });
    document.getElementById("pageHome_CardLastArticles_dot1V").addEventListener("click", () => {
        actualArticleOfLastArticles = 1;
        changeContentOfLastArticlesVertical();
    });
    document.getElementById("pageHome_CardLastArticles_dot2V").addEventListener("click", () => {
        actualArticleOfLastArticles = 2;
        changeContentOfLastArticlesVertical();
    });
    document.getElementById("pageHome_CardLastArticles_dot3V").addEventListener("click", () => {
        actualArticleOfLastArticles = 3;
        changeContentOfLastArticlesVertical();
    });
}


function loopOfLastArticles(){
    if(actualArticleOfLastArticles == 3){
        actualArticleOfLastArticles = 1;
    }
    else{
        actualArticleOfLastArticles++;
    }
    changeContentOfLastArticles();
    changeContentOfLastArticlesVertical();

    setTimeout(loopOfLastArticles, 4000);
}








/* CARGAR CONTENIDO de articulos -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function changeContentOfLastArticles(){
    let txt = "";
    if(getLastArticleN(actualArticleOfLastArticles).txtTxt.length > 150){
        txt = getLastArticleN(actualArticleOfLastArticles).txtTxt.substring(0, 150) + " [...]";
    }
    else{
        txt =  getLastArticleN(actualArticleOfLastArticles).txtTxt;
    }

    if(actualArticleOfLastArticles == 1){ document.getElementById("pageHome_CardLastArticles_dot1").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot1").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot1").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot1").classList.remove("dotScaled"); }

    if(actualArticleOfLastArticles == 2){ document.getElementById("pageHome_CardLastArticles_dot2").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot2").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot2").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot2").classList.remove("dotScaled"); }

    if(actualArticleOfLastArticles == 3){ document.getElementById("pageHome_CardLastArticles_dot3").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot3").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot3").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot3").classList.remove("dotScaled"); }

    document.getElementById("pageHome_CardLastArticles_imgOfArticle").src = getLastArticleN(actualArticleOfLastArticles).imgSrc;
    document.getElementById("pageHome_CardLastArticles_titleOfArticle").textContent = getLastArticleN(actualArticleOfLastArticles).txtTitle;
    document.getElementById("pageHome_CardLastArticles_txtOfArticle").textContent = txt;
    restartFadeIn();
}
/* CARGAR CONTENIDO de articulos VERTICALES -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
function changeContentOfLastArticlesVertical(){
    let txt = "";
    if(getLastArticleN(actualArticleOfLastArticles).txtTxt.length > 50){
        txt = getLastArticleN(actualArticleOfLastArticles).txtTxt.substring(0, 50) + " [...]";
    }
    else{
        txt =  getLastArticleN(actualArticleOfLastArticles).txtTxt;
    }

    if(actualArticleOfLastArticles == 1){ document.getElementById("pageHome_CardLastArticles_dot1V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot1V").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot1V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot1V").classList.remove("dotScaled"); }

    if(actualArticleOfLastArticles == 2){ document.getElementById("pageHome_CardLastArticles_dot2V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot2V").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot2V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot2V").classList.remove("dotScaled"); }

    if(actualArticleOfLastArticles == 3){ document.getElementById("pageHome_CardLastArticles_dot3V").classList.remove("dot") ; document.getElementById("pageHome_CardLastArticles_dot3V").classList.add("dotScaled"); }
    else{ document.getElementById("pageHome_CardLastArticles_dot3V").classList.add("dot") ; document.getElementById("pageHome_CardLastArticles_dot3V").classList.remove("dotScaled"); }

    document.getElementById("pageHome_CardLastArticles_imgOfArticleV").src = getLastArticleN(actualArticleOfLastArticles).imgSrc;
    document.getElementById("pageHome_CardLastArticles_titleOfArticleV").textContent = getLastArticleN(actualArticleOfLastArticles).txtTitle;
    document.getElementById("pageHome_CardLastArticles_txtOfArticleV").textContent = txt;
    restartFadeIn();
}








function restartFadeIn() {
    const elements = [
        document.getElementById("pageHome_CardLastArticles_imgOfArticle"),
        document.getElementById("pageHome_CardLastArticles_textsSecion"),
        document.getElementById("pageHome_CardLastArticles_imgOfArticleV"),
        document.getElementById("pageHome_CardLastArticles_textsSecionV")
    ];

        elements.forEach(el => {
    if(!el) return;

    // Quitar la clase para reiniciar la animación
    el.classList.remove("fade-in");

    // Forzar reflow para que se registre el cambio
    void el.offsetWidth;

    // Añadir la clase para disparar la animación
    el.classList.add("fade-in");
  });

}
