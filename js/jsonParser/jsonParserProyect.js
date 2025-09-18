import { Project } from "../classes/proyect.js";




export class ProjectParser {
  constructor(jsonUrl) {
    this.jsonUrl = jsonUrl;  // URL del JSON de proyectos
    this.projects = [];      // Array de objetos Project
  }



  // Cargar y convertir JSON a objetos Project
  async loadProjects() {
    const response = await fetch(this.jsonUrl);
    const jsonArray = await response.json();
    this.projects = jsonArray.map(item => new Project(item));
  }




  // Devolver todos los proyectos
  getAll() {
    return this.projects;
  }

  // Devolver los primeros n proyectos
  getFirst(n) {
    return this.projects.slice(0, n);
  }

  // Devolver un proyecto por id
  getById(id) {
    return this.projects.find(project => project.id == id);
  }

  // Devolver los últimos n proyectos (por defecto 3)
  getLast(n = 3) {
    return this.projects.slice(-n);
  }
}
