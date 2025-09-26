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
            this.proyectParser.loadProjects()
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
            text: blogsJsonObject.text
        });
        return blog;
    }

    getAllArticles(){
        return this.blogParser.getAll();
    }
}