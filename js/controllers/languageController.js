
export class LanguageController {
    getLanguage() {
        let nombre = "lang";
        let nombreEQ = nombre + "=";
        let cookies = document.cookie.split(';');
        for (let c of cookies) {
            c = c.trim();
            if (c.indexOf(nombreEQ) === 0) {
            return c.substring(nombreEQ.length, c.length);
            }
        }
        return "es";
    }

    setLanguage(valor) {
        let nombre = "lang";
        let dias = 400;
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000)); // milisegundos
        let expiracion = "expires=" + fecha.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
    }

    changeLanguage() {
        let lang = this.getLanguage();

        if(lang === "es"){ this.setLanguage("en"); }
        else { this.setLanguage("es"); }
    }
}
