export class BlogPost {
  constructor({ id, title, description, imgPortada, imgsExtras = [], link = "", labels = [], date = "", text = "" }) {
    this.id = id;                     // número
    this.title = title;               // string
    this.description = description;   // string
    this.imgPortada = imgPortada;     // string
    this.imgsExtras = imgsExtras;     // array de strings
    this.link = link;                 // string
    this.text = text;                 // string
    this.date = date;
    this.labels = labels;
  }
}
