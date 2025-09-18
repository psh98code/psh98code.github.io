



export class BlogSystem{
    constructor(){
        this.blog_articles = [
            {
                imgSrc: "../../res/img/en.png",
                txtTitle: "Prueba 1",
                txtTxt: "Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog Esto es una prueba de articulo del blog"
            },
            {
                imgSrc: "../../res/img/en.png",
                txtTitle: "Prueba 2",
                txtTxt: "Esto es una prueba de articulo del blog"
            },
            {
                imgSrc: "../../res/img/es.png",
                txtTitle: "Prueba 3",
                txtTxt: "Esto es una prueba de articulo del blog"
            }
        ];
    }

    getLastArticleN(index){
        return this.blog_articles[this.blog_articles.length - index];
    }
}