export class Project {
  constructor({ id, title, description, imgPortada, screenshots = {}, link = "", texts = {} }) {
    this.id = id;                     // string
    this.title = title;               // string
    this.description = description;   // string
    this.imgPortada = imgPortada;     // string
    this.screenshots = screenshots;   // objeto con capturas
    this.link = link;                 // string
    this.texts = texts;               // objeto con textos extra
  }
}