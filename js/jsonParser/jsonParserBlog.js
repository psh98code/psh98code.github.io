
import { BlogPost } from '../classes/blogPost.js';





export class BlogParser {
    constructor(jsonUrl) {
        this.jsonUrl = jsonUrl;
        this.blogs = [];    
    }




    async loadBlogs() {
        const response = await fetch(this.jsonUrl);
        const jsonArray = await response.json();
        this.blogs = jsonArray.map(item => new BlogPost(item));
    }




    // Devolver todos los blogs
    getAll() {
        return this.blogs;
    }

    // Devolver los primeros n blogs
    getFirst(n) {
        return this.blogs.slice(0, n);
    }

    // Devolver un blog por id
    getById(id) {
        return this.blogs.find(blog => blog.id == id);
    }

    // Devolver los últimos n blogs (por defecto 3)
    getLast(n = 3) {
        return this.blogs.slice(-n);
    }
}