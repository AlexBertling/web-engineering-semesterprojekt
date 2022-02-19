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
                "type": "text",
                "paragraphs": [
                    {
                        "title": "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?",
                        "content": "Anfrage erfolgreich, Ergebnis wird in Antwort übertragen."
                    },
                    {
                        "title": "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?",
                        "content": "Die angeforderte Ressource steht ab sofort unter der im „Location“-Header-Feld angegebenen Adresse bereit (auch Redirect genannt). Die alte Adresse ist nicht länger gültig. "
                    },
                    {
                        "title": "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                        "content": "Die Anfrage-Nachricht war fehlerhaft aufgebaut.<br>-> Anfrage verändern."
                    },
                    {
                        "title": "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?",
                        "content": "Die Anfrage wurde mangels Berechtigung des Clients nicht durchgeführt, bspw. weil der authentifizierte Benutzer nicht berechtigt ist oder eine als HTTPS konfigurierte URL nur mit HTTP aufgerufen wurde. <br>-> Authentifizierung nutzen."
                    }
                ]
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
        "Responsives Web": [
            {
                "title": "Flexbox Desktop-First",
                "type": "html",
                "url":  "/assets/a21.html",
            },
            {
                "title": "Grid Mobile-First",
                "type": "html",
                "url":  "/assets/a22.html",
            },
            {
                "title": "Holy Grail Flexbox",
                "type": "html",
                "url":  "/assets/a23flex.html",
            },
            {
                "title": "Holy Grail Grid",
                "type": "html",
                "url":  "/assets/a23grid.html",
            },
            {
                "title": "Landing Page Responsiv mit Grid",
                "type": "html",
                "url":  "/assets/a24.html",
            },
        ],
        "JavaScript": [
            {
                "title": "Funktionen in JavaScript",
                "type": "text", 
                "paragraphs": [
                    {
                        "title": "Aufgabe 1",
                        "content": "Schreiben Sie eine Funktion <code>identity_function()</code>, die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.",
                        "code": `
                            const identity_function = (arg) => {
                                return () => arg;
                            }`
                    },
                    {
                        "title": "Aufgabe 2",
                        "content": "Schreiben Sie eine Addier-Funktion <code>addf()</code>, so dass <code>addf(x)(y)</code> genau <code>x + y</code> zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. <code>addf(x)</code> liefert eine Funktion, die auf <code>y</code> angewandt wird.)",
                        "code": `
                            const addf = (x) => {
                                return (y) => x + y;
                            }`
                    },
                    {
                        "title": "Aufgabe 3",
                        "content": "Schreiben Sie eine Funktion <code>applyf()</code>, die aus einer binären Funktion wie <code>add(x,y)</code> eine Funktion <code>addf</code>berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. <code>addf = applyf(add); addf(x)(y)</code> soll <code>add(x,y)</code> liefern. Entsprechend <code>applyf(mul)(5)(6)</code> soll <code>30</code> liefern, wenn <code>mul</code> die binäre Multiplikation ist.",
                        "code": `
                            const applyf = (fun) => {
                                return (x) => {
                                    return (y) => {
                                        return fun(x,y)
                                    }
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 4",
                        "content": "Schreiben Sie eine Funktion <code>curry()</code> (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. <code>add3 = curry(add, 3);</code><code>add3(4)</code> ergibt <code>7</code>. <code>curry(mul, 5)(6)</code> ergibt <code>30</code>.",
                        "code": `
                            const curry = (fun, x) => {
                                return (y) => fun(x,y);
                            }`
                    },
                    {
                        "title": "Aufgabe 5",
                        "content": "Erzeugen Sie die <code>inc</code>-Funktion mit Hilfe einer der Funktionen <code>addf, applyf</code> und <code>curry</code> aus den letzten Aufgaben, ohne die Funktion <code>inc()</code> selbst zu implementieren. (<code>inc(x)</code> soll immer <code>x + 1</code> ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der <code>inc()</code>-Implementierung zu schreiben?",
                        "code": `
                            const inc1 = (x) => addf(x)(1);

                            const inc2 = (x) => applyf(add)(x)(1);
                            
                            const inc3 = (x) => curry(add,x)(1);`
                    },
                    {
                        "title": "Aufgabe 6",
                        "content": "Schreiben Sie eine Funktion <code>methodize()</code>, die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.",
                        "code": `
                            const methodize = (fun) => function(y) { return fun(this.valueOf(), y) }`
                    },
                    {
                        "title": "Aufgabe 7",
                        "content": "Schreiben Sie eine Funktion <code>demethodize()</code>, die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.",
                        "code": `
                            const demethodize = (fun) => (x,y) => fun.apply(x,[y])`
                    },
                    {
                        "title": "Aufgabe 8",
                        "content": "Schreiben Sie eine Funktion <code>twice()</code>, die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.",
                        "code": `
                            const twice = (fun) => (x) => fun(x,x)`
                    },
                    {
                        "title": "Aufgabe 9",
                        "content": "Schreiben Sie eine Funktion <code>composeu()</code>, die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.",
                        "code": `
                            const composeu = (fun1,fun2) => (x) => fun2(fun1(x))`
                    },
                    {
                        "title": "Aufgabe 10",
                        "content": "Schreiben Sie eine Funktion <code>composeb()</code>, die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.",
                        "code": `
                            const composeb = (fun1,fun2) => (x,y,z) => fun2(fun1(x,y),z)`
                    },
                    {
                        "title": "Aufgabe 11",
                        "content": "Schreiben Sie eine Funktion <code>once()</code>, die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.",
                        "code": `
                            const once = function(f){
                                var fired = false;
                                return function(x,y){
                                    if(!fired) {
                                        fired = true;
                                        return f(x,y);
                                    } else {
                                        throw "Already Fired";
                                    }
                                };
                            }`
                    },
                    {
                        "title": "Aufgabe 12",
                        "content": "Schreiben Sie eine Fabrik-Funktion <code>counterf()</code>, die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.",
                        "code": `
                            const counterf = (x) => {
                                return {
                                    inc: () => ++x,
                                    dec: () => --x
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 13",
                        "content": "Schreiben Sie eine rücknehmbare Funktion <code>revocable()</code>, die als Parameter eine Funktion nimmt und diese bei Aufruf ausführt. Sobald die Funktion aber mit <code>revoke()</code> zurück genommen wurde, führt ein erneuter Aufruf zu einem Fehler. Z.B. <code><br>temp = revocable(alert); <br>temp.invoke(7); // führt zu alert(7); <br>temp.revoke(); <br>temp.invoke(8); // Fehlerabbruch!</code>",
                        "code": `
                            const revocable = function(f) {
                                var func = f;
                                return {
                                    invoke: (p) => func(p),
                                    revoke: () => func = null
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 14",
                        "content": "Implementieren Sie ein \"Array Wrapper\"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.",
                        "code": `
                            const vector = () => {
                                var array = [];
                                return {
                                    append: (el) => array.push(el),
                                    store: (i,el) => array[i] = el,
                                    get: (i) => array[i]
                                }
                            }`
                    },
                ]
            },
            {
                "title": "Advanced Functional JavaScript Programming",
                "type": "text", 
                "paragraphs": []
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