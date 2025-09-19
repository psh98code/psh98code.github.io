import { BlogPost } from '../classes/blogPost.js';

export class BlogParser {
    constructor(jsonUrl) {
        this.jsonUrl = jsonUrl;
        this.blogs = [];    
    }

    async loadBlogs() {
        const response = await fetch(this.jsonUrl);
        this.blogs = await response.json(); 
    }

    // Devolver todos los blogs en un idioma
    getAll(lang = "es") {
        return this.blogs.map(item => new BlogPost({
            id: item.id,
            imgPortada: item.imgPortada,
            imgsExtras: item.imgsExtras,
            link: item.link,
            title: item[lang].title,
            description: item[lang].description,
            text: item[lang].text
        }));
    }

    // Devolver los primeros n blogs
    getFirst(n, lang = "es") {
        return this.getAll(lang).slice(0, n);
    }

    // Devolver un blog por id
    getById(id, lang = "es") {
        const blog = this.blogs.find(item => item.id == id);
        return blog ? new BlogPost({
            id: blog.id,
            imgPortada: blog.imgPortada,
            imgsExtras: blog.imgsExtras,
            link: blog.link,
            title: blog[lang].title,
            description: blog[lang].description,
            text: blog[lang].text
        }) : null;
    }

    // Devolver el último n blog
    getLast(n , lang = "es") {
        const blogs = this.getAll(lang);
        if (n < 1 || n > blogs.length) return null;
        return blogs[blogs.length - n];    }
}
