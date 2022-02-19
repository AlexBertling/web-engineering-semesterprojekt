import Einkaufsliste from "./Einkaufsliste.js";
import Rednerliste from "./Rednerliste.js";

export const appConfig = {
    "header": "Web Engineering Solution Navigator",
    "menu": {
        "HTTP-URI-HTML-CSS": [
            {
                "title": "Erfolgsprinzipien des WWW",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
                        "content": "- zu vage, Evolvierbarkeit falsch verstanden<br>- keine referentielle Integrität gesichert, also Broken Links möglich"
                    },
                    {
                        "title": "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
                        "content": "- Evolvierbarkeit: orthognoale Technologien können sich unabhängig voneinander, ohne zentralle Kontrolle, weiterentwickeln<br>- Offenheit: durch Verzicht auf referentielle Integrität ist das WWW ist beliebig erweiterbar"
                    },
                    {
                        "title": "Was wäre der Preis für die garantierte Verhinderung von “broken links”?",
                        "content": "- Zentrale Kontrolle<br>- Geschlossenheit"
                    }
                ]
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