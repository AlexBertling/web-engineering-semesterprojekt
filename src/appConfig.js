import Einkaufsliste from "./Einkaufsliste.js";
import Rednerliste from "./Rednerliste.js";

export const appConfig = {
    "header": "Web Engineering Solution Navigator",
    "menu": {
        "HTTP-URI-HTML-CSS": [
            {
                "title": "Erfolgsprinzipien des WWW",
                "type": "text"
            },
            {
                "title": "HTTP",
                "type": "text"
            },
            {
                "title": "Wireframe Tribute Page",
                "type": "html",
                "url": "/assets/a13.html"
            },
            {
                "title": "Wireframe Survey Form",
                "type": "html",
                "url": "/assets/a14.html"
            },
            {
                "title": "Wireframe Product Landing Page",
                "type": "html",
                "url": "/assets/a15.html"
            }
        ],
        "Modular Web": [
            {
                "title": "Einkaufsliste",
                "type": "component",
                "url":  "src/Einkaufsliste.js",
                "element": "wem-einkaufsliste"
            },
            {
                "title": "Rednerliste",
                "type": "component",
                "url":  "src/Rednerliste.js",
                "element": "wem-rednerliste"
            }
        ]
    }
}