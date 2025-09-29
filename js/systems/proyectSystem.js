import { Project } from "../classes/proyect.js";
import { ProjectParser} from "../jsonParser/jsonParserProyect.js";



export class ProyectSystem{
    /**
     * @param {LanguageController} languageController
     * @param {ProjectParser} proyectParser
     */
    constructor(languageController, proyectParser){
        this.LanguageController = languageController;
        this.proyectParser = proyectParser;
    }


    async loadAllParsers(){
        // Esperamos a que ambos fetch terminen
        await Promise.all([
            this.proyectParser.loadProjects()
        ]);
    }



    getAllProyects(){
        return this.proyectParser.getAll();
    }

    getProyectById(id){
        return this.proyectParser.getById(id);
    }

    getAllProyectsOfCategory(category){
        return this.proyectParser.getByCategory(category);
    }

    getNumberOfProyectsByCategory(category){
        return this.proyectParser.getByCategory(category).length;
    }
}