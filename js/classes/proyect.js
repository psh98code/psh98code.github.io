export class Project {
  constructor({
    id,
    imgPortada = "",
    categoria = "",
    dateStart = "",
    dateEnd = "",
    collaborators = {},
    screenshots = {},
    link = "",
    es = { title: "", description: "", texts: {} },
    en = { title: "", description: "", texts: {} }
  }) {
    this.id = id;                   // string
    this.imgPortada = imgPortada;   // string
    this.categoria = categoria;     // string
    this.dateStart = dateStart;     // string
    this.dateEnd = dateEnd;         // string
    this.collaborators = collaborators; // objeto con colaboradores
    this.screenshots = screenshots; // objeto con capturas
    this.link = link;               // string
    this.es = es;                   // objeto con datos en español
    this.en = en;                   // objeto con datos en inglés
  }
}