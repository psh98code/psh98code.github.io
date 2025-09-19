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

  // Devolver todos los proyectos en un idioma
  getAll(lang = "es") {
    return this.projects.map(item => new Project({
      id: item.id,
      imgPortada: item.imgPortada,
      imgsExtras: item.imgsExtras,
      link: item.link,
      title: item[lang].title,
      description: item[lang].description,
      text: item[lang].text
    }));
  }

  // Devolver los primeros n proyectos
  getFirst(n, lang = "es") {
    return this.getAll(lang).slice(0, n);
  }

  // Devolver un proyecto por id
  getById(id, lang = "es") {
    const project = this.projects.find(item => item.id == id);
    return project ? new Project({
      id: project.id,
      imgPortada: project.imgPortada,
      imgsExtras: project.imgsExtras,
      link: project.link,
      title: project[lang].title,
      description: project[lang].description,
      text: project[lang].text
    }) : null;
  }

  // Devolver los últimos n proyectos (por defecto 3)
  getLast(n = 3, lang = "es") {
    return this.getAll(lang).slice(-n);
  }
}
