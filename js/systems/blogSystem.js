import { BlogPost } from "../classes/blogPost.js";
import { BlogParser } from "../jsonParser/jsonParserBlog.js";
import { ProjectParser } from "../jsonParser/jsonParserProyect.js";





export class BlogSystem{
    /**
     * @param {BlogParser} blogParser
     * @param {ProjectParser} proyectParser
     */
    constructor(blogParser, proyectParser){
        this.blogParser = blogParser;
        this.proyectParser = proyectParser;
    }

    async loadAllParsers(){
        // Esperamos a que ambos fetch terminen
        await Promise.all([
            this.blogParser.loadBlogs(),
        ]);
    }

    getLastArticleN(index, lang){
        let blogsJsonObject = this.blogParser.getLast(index, lang);
        let blog = new BlogPost({
            id: blogsJsonObject.id,
            title: blogsJsonObject.title,
            description: blogsJsonObject.description,
            imgPortada: blogsJsonObject.imgPortada,
            imgsExtras: blogsJsonObject.imgsExtras,
            link: blogsJsonObject.link,
            labels: blogsJsonObject.labels,
            date: blogsJsonObject.date,
            text: blogsJsonObject.text
        });
        return blog;
    }

    getAllArticles(){
        return this.blogParser.getAll();
    }

    getArticleById(id, lang){
        return this.blogParser.getById(id);
    }
}