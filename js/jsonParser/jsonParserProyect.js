import { Project } from "../classes/proyect.js";

export class ProjectParser {
  constructor(jsonUrl) {
    this.jsonUrl = jsonUrl;  // URL del JSON de proyectos
    this.projects = [];      // Array con datos crudos del JSON
  }

  // Cargar JSON y guardarlo tal cual
  async loadProjects() {
    const response = await fetch(this.jsonUrl);
    this.projects = await response.json();
  }

  // Convertir objeto crudo en instancia de Project
  mapToProject(item) {
    return new Project({
      id: item.id,
      imgPortada: item.imgPortada,
      categoria: item.categoria,
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
      collaborators: item.collaborators,
      screenshots: item.screenshots,
      link: item.link,
      es: item.es,
      en: item.en
    });
  }

  // Devolver todos los proyectos en un idioma
  getAll(lang = "es") {
    return this.projects.map(item => this.mapToProject(item));
  }

  // Devolver los primeros n proyectos
  getFirst(n, lang = "es") {
    return this.getAll(lang).slice(0, n);
  }

  // Devolver un proyecto por id
  getById(id, lang = "es") {
    const project = this.projects.find(item => item.id == id);
    return project ? this.mapToProject(project) : null;
  }

  // Devolver los últimos n proyectos (por defecto 3)
  getLast(n = 3, lang = "es") {
    return this.getAll(lang).slice(-n);
  }

    // Filtrar proyectos por categoría
  getByCategory(categoria, lang = "es") {
      return this.getAll(lang).filter(project => project.categoria === categoria);
  }

}
