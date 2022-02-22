import Einkaufsliste from "./components/Einkaufsliste.js";
import Rednerliste from "./components/Rednerliste.js";
import Navigator from "./components/Navigator.js";

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
                "paragraphs": [
                    {
                        "title": "Aufgabe 1",
                        "content": "Make a function that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order. <code><br>my_pubsub = pubsub(); <br>my_pubsub.subscribe(alert); <br>my_pubsub.publish(\"It works!\"); // alert(\"It works!\") </code>",
                        "code": `
                            const pubsub = () => {
                                var functions = [];
                                return {
                                    subcribe: (f) => functions.push(f),
                                    publish: (p) => functions.forEach(el => el(p))
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 2",
                        "content": "Make a factory that makes functions that generate unique symbols. <code><br>gensym = gensymf('G'); <br>gensym() // 'G0' <br>gensym() // 'G1' <br>gensym() // 'G2' <br>gensym() // 'G3' <br></code>",
                        "code": `
                            const gensymf = (p) => {
                                var pre = p, i=0;
                                return function() {
                                    return pre+i++;
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 3",
                        "content": "Write a function that adds from many invocations, until it sees an empty invocation. <code><br>addg(3)(4)(5)() // 12 <br>addg(1)(2)(4)(8)() // 15 </code>",
                        "code": `
                            const addg = (function () {
                                var sum = 0;
                                function addToSum (x) {
                                    if(x) { 
                                        sum += x;
                                        return addToSum;
                                    } else {
                                        let res = sum;
                                        sum = 0;
                                        return res;
                                    }
                                }
                                return addToSum;
                            })();`
                    },
                    {
                        "title": "Aufgabe 4",
                        "content": "Write a function that will take a binary function and apply it to many invocations. <code><br>applyg(add)(3)(4)(5)() // 12 <br>applyg(add)(1)(2)(4)(8)() // 15 </code></p>",
                        "code": `
                            const applyg = (f) => {
                                var result = 0;
                                function apply(x) {
                                    if(x) {
                                        result = f(result,x);
                                        return apply;
                                    } else {
                                        let res = result;
                                        result = 0;
                                        return res;
                                    }
                                }
                                return apply;
                            }`
                    },
                    {
                        "title": "Aufgabe 5",
                        "content": "Write a function <code>m</code> that takes a value and an optional source string and returns them in an object. <code><br>JSON.stringify(m(1)) // {\"value\": 1, \"source\": \"1\"} <br>JSON.stringify(m(Math.PI, \"pi\")) // {\"value\": 3.14159..., \"source\": \"pi\"} </code>",
                        "code": `
                            const m = (v,s) => {
                                if(!s) s = v;
                                return {
                                    "value": v,
                                    "source": s
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 6",
                        "content": "Write a function <code>addm</code> that takes two m objects and returns an <code>m</code> object. <code><br>JSON.stringify(addm(m(3), m(4))) // {\"value\": 7, \"source\": \"(3+4)\"} </code>",
                        "code": `
                            const addm = (m1,m2) => {
                                return {
                                    "value": m1.value+m2.value,
                                    "source": "("+m1.source+"+"+m2.source+")"
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 7",
                        "content": "Write a function <code>binarymf</code> that takes a binary function and a string and returns a function that acts on m objects. <code><br>addm = binarymf(add, \"+\"); <br>JSON.stringify(addm(m(3), m(4))) // {\"value\": 7, \"source\": \"(3+4)\"} </code>",
                        "code": `
                            const binarymf = (f,op) => {
                                return function(m1,m2) {
                                    return {
                                        "value": f(m1.value, m2.value),
                                        "source": "(" + m1.source + op + m2.source + ")"
                                    }
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 8",
                        "content": "Modify function <code>binarymf</code> so that the functions it produces can accept arguments that are either numbers or m objects. <code><br>addm = binarymf(add, \"+\"); <br>JSON.stringify(addm(3, 4)) // {\"value\": 7, \"source\": \"(3+4)\"} </code>",
                        "code": `
                            const binarymf = (f,op) => {
                                return function(m1,m2) {
                                    if(typeof m1 === "number") m1 = m(m1);
                                    if(typeof m2 === "number") m2 = m(m2);
                                    return {
                                        "value": f(m1.value, m2.value),
                                        "source": "(" + m1.source + op + m2.source + ")"
                                    }
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 9",
                        "content": "Write function <code>unarymf</code>, which is like <code>binarymf</code> except that it acts on unary functions. <code><br>squarem = unarymf(square, \"square\"); <br>JSON.stringify(squarem(4)) // {\"value\": 16, \"source\": \"(square 4)\"} </code>",
                        "code": `
                            const unarymf = (f,op) => {
                                return function(m1) {
                                    if(typeof m1 === "number") m1 = m(m1);
                                    return {
                                        "value": f(m1.value),
                                        "source": "(" + op + " " + m1.value + ")"
                                    }
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 10",
                        "content": "Write a function that takes the lengths of two sides of a triangle and computes the length of the hypotenuse. (Hint: c2 = a2 + b2) <code><br>hyp(3, 4) // 5 </code>",
                        "code": `
                            const hyp = (a,b) => Math.sqrt(square(a)+square(b));`
                    },
                    {
                        "title": "Aufgabe 11",
                        "content": "Write a function that evaluates array expressions. <code><br>hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ]; <br>exp(hypa) // 5 </code>",
                        "code": `
                            const exp = (arr) => {
                                if (arr.length == 2) { // unary
                            
                                    let arg = arr[1];
                                    if(arg instanceof Array) arg = exp(arg);
                                    return arr[0](arg);
                            
                                } else if (arr.length == 3) { // binary
                            
                                    let arg1 = arr[1];
                                    let arg2 = arr[2];
                                    if(arg1 instanceof Array) arg1 = exp(arg1);
                                    if(arg2 instanceof Array) arg2 = exp(arg2);
                                    return arr[0](arg1,arg2);
                            
                                }
                            }`
                    },
                    {
                        "title": "Aufgabe 12",
                        "content": "Make a function that stores a value in a variable. <code><br>var variable; store(5); // variable === 5 </code>",
                        "code": `
                            const store = (x) => window[Object.keys(window).at(-1)] = x`
                    },
                    {
                        "title": "Aufgabe 13",
                        "content": "Make a function that takes a binary function, two functions that provide operands, and a function that takes the result. <code><br>quatre( add, identityf(3), identityf(4), store ); // variable === 7 </code>",
                        "code": `
                            const quatre = (f,op1,op2,s) => s(f(op1(),op2()));`
                    },
                    {
                        "title": "Aufgabe 14",
                        "content": "Make a function that takes a unary function, and returns a function that takes an argument and a callback. <code><br>sqrtc = unaryc(Math.sqrt); sqrtc(81, store) // variable === 9 </code>",
                        "code": `
                            const unaryc = (f) => {
                                return (x,cb) => cb(f(x))
                            }`
                    },
                    {
                        "title": "Aufgabe 15",
                        "content": "Make a function that takes a binary function, and returns a function that takes two arguments and a callback. <code><br>addc = binaryc(add); addc(4, 5, store) // variable === 9 <br>mulc = binaryc(mul); mulc(2, 3, store) // variable === 6 </code>",
                        "code": `
                            const binaryc = (f) => {
                                return (op1,op2,cb) => cb(f(op1,op2))
                            }`
                    },
                ]
            }
        ],
        "DOM": [
            {
                "title": "Einkaufsliste",
                "type": "html",
                "url": "/assets/a41.html"
            },
            {
                "title": "Rednerliste mit Zeitmessung",
                "type": "html",
                "url": "/assets/a42.html"
            },
            {
                "title": "Tabellenkalkulation mit den Bordmitteln des Webs",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "TODO",
                    }
                ]
            },
            {
                "title": "HTML-Editor",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "TODO",
                    }
                ]
            },
        ],
        "Asynchron": [
            {
                "title": "Promises",
                "type": "html",
                "url": "/assets/a51.html"
            },
            {
                "title": "async / await",
                "type": "html",
                "url": "/assets/a52.html"
            },
            {
                "title": "Web Worker",
                "type": "html",
                "url": "/assets/a53.html"
            },
        ],
        "SVG": [
            {
                "title": "Statistik-Balkendiagramm",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "TODO",
                    }
                ]
            },
            {
                "title": "Bezier-Animation",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "TODO",
                    }
                ]
            },
            {
                "title": "Kalligraphie-Editor",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "TODO",
                    }
                ]
            },
        ],
        "Node & npm & Deno": [
            {
                "title": "File Generatoren",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "Aufgabe",
                        "content": "Schreiben Sie in Node.js zwei Kommandozeilen-Tools, um große Dateien zu erzeugen.",
                        "code": `
                            node number_file_gen.js 20_000`
                    },
                    {
                        "content": "soll eine Datei mit 20.000 Zeilen erzeugen. In jeder Zeile soll die Zeilennummer und ein Punkt stehen. 20.000 ist dabei ein Parameter des Tools. Jede andere Zahl soll ebenfalls erlaubt sein.",
                        "code": `
                            node alpha_file_gen.js 123456`
                    },
                    {
                        "content": "soll eine Datei mit 123456 Zeilen erzeugen. In jeder Zeile soll eine Variation mit Wiederholung aller Großbuchstaben (ohne Umlaute) in folgender Reihenfolge stehen:",
                        "code": `
                            A
                            B
                            C
                            ...
                            Z
                            AA
                            AB
                            AC
                            AD
                            ...`
                    },
                    {
                        "content": "usw. Implementieren Sie Ihre Kommandozeilen-Tools in modernem ECMAScript 2021."
                    },
                    {
                        "title": "Lösung",
                        "content": "number_file_gen.js",
                        "code": `
                            const yargs = require("yargs");
                            const fs = require("fs").promises;
                            
                            const number = yargs.argv._[0]
                            
                            if (!number) {
                                console.log("Please provide a Number as First Parameter.");
                                return;
                            }
                            
                            const FILE = "number_file.txt";
                            
                            (async _=> {
                                await fs.writeFile(FILE, "");
                                for(let i=1; i<=number; i++) {
                                    await fs.appendFile(FILE, i + ".\\n");
                                }
                            })();`
                    },
                    {
                        "content": "alpha_file_gen.js",
                        "code": `
                            const yargs = require("yargs");
                            const fs = require("fs").promises;

                            const number = yargs.argv._[0]

                            if (!number) {
                                console.log("Please provide a Number as First Parameter.");
                                return;
                            }

                            const FILE = "alpha_file.txt";

                            (async _=> {
                                await fs.writeFile(FILE, "");
                                for(let i=1; i<=number; i++) {

                                    let x = i, s = "";
                                    do {
                                        const n = Math.floor(x-1) % 26 + 65;
                                        s = String.fromCharCode(n) + s;
                                        x = (x-1) / 26;
                                    } while (x >= 1);

                                    await fs.appendFile(FILE, s + "\\n");
                                }
                            })();`
                    }
                ]
            },
            {
                "title": "Performance Merge",
                "type": "text",
                "paragraphs": [
                    {
                        "title": "Aufgabe",
                        "content": "Schreiben Sie in Node.js zwei Programme merge_files.js und merge_streams.js, um große Dateien zu zeilenweise zusammenzuführen, merge_files.js mit fs.readFile und merge_streams.js mit Streams, also createReadFileStream und pipeline.",
                        "code": `
                            node merge_files.js big_file1.txt big_file2.txt
                            node merge_streams.js big_file1.txt big_file2.txt
                        `
                    },
                    {
                        "content": "Implementieren Sie Ihre beiden Programme merge_files.js und merge_streams.js in modernem ECMAScript 2021. Messen Sie anschließend die Performanz beider Programme.",
                    },
                    {
                        "title": "Lösung",
                        "content": "merge_files.js",
                        "code": `
                            const yargs = require("yargs");
                            const fs = require("fs").promises;
                            const { performance } = require('perf_hooks');
                            
                            const args = yargs.argv._
                            
                            if (args.length != 2) {
                                console.log("Please provide two File Names as Parameters.");
                                return;
                            }
                            
                            const filename1 = args[0],
                                filename2 = args[1];
                            
                            const FILE = "merge_file.txt";
                            
                            (async _=> {
                            
                                const startTime = performance.now();
                            
                                const [ text1, text2 ] = await Promise.all([
                                    fs.readFile(filename1,'utf8'),
                                    fs.readFile(filename2,'utf8'),
                                    fs.writeFile(FILE, "")
                                ]);
                            
                                const lines1 = text1.split("\\n");
                                const lines2 = text2.split("\\n");
                            
                                let count = 0;
                                for ( const line of lines1 ){
                                    await fs.appendFile(FILE, line + lines2[count++] + "\\n");
                                }
                            
                                const endTime = performance.now();
                                console.log(\`Merge took \${(endTime - startTime).toFixed(2)} milliseconds\`);
                            })();`
                    },
                    {
                        "content": "merge_streams.js",
                        "code": `
                            const yargs = require("yargs");
                            const fs = require("fs");
                            const { pipeline } = require('stream/promises');
                            const { performance } = require('perf_hooks');

                            const args = yargs.argv._

                            if (args.length != 2) {
                                console.log("Please provide two File Names as Parameters.");
                                return;
                            }

                            const filename1 = args[0],
                                filename2 = args[1];

                            const FILE = "merge_streams.txt";

                            async function readFileStreamIntoArray(filename) {
                                let lines = [];
                                await pipeline(
                                    fs.createReadStream(filename, "utf8"),
                                    async function (source) {
                                        source.setEncoding('utf8');
                                        for await (const chunk of source) {
                                            const chunkArr = chunk.split("\\n");
                                            lines[lines.length-1] += chunkArr[0];
                                            lines.push(...chunkArr.slice(1));
                                        }
                                    }
                                );
                                return lines;
                            }

                            async function run() {

                                const startTime = performance.now();

                                const lines1 = await readFileStreamIntoArray(filename1),
                                    lines2 = await readFileStreamIntoArray(filename2);
                                
                                const writeStream = fs.createWriteStream(FILE);
                                let count = 0;
                                for ( const line of lines1 ){
                                    await writeStream.write(line + lines2[count++] + "\\n");
                                }
                                
                                const endTime = performance.now();
                                console.log(\`Merge took \${(endTime - startTime).toFixed(2)} milliseconds\`);
                            }
                            run().catch(console.error);

                            fs.writeFileSync(FILE, "");`
                    },
                    {
                        "title": "Ergebnisse der Performanzmessung:",
                        "content": `
                            100000 Zeilen je Datei.<br>
                            Merge_File: 53605.70ms<br>
                            Merge_Streams: 185.02ms<br>
                            <br>
                            Streams sind extrem viel schneller.`
                    }
                ]
            },
            {
                "title": "Merge Service",
                "type": "html",
                "url": "https://wem-merge-service.azurewebsites.net/index.html"
            }
        ],
        "Modular Web": [
            {
                "title": "Einkaufsliste",
                "type": "component",
                "url":  "src/components/Einkaufsliste.js",
                "element": "wem-einkaufsliste"
            },
            {
                "title": "Rednerliste",
                "type": "component",
                "url":  "src/components/Rednerliste.js",
                "element": "wem-rednerliste"
            },
            {
                "title": "Navigator",
                "type": "component",
                "url":  "src/components/Navigator.js",
                "element": "wem-navigator",
                "attributes": {
                    "styleMode": "grid",
                    "dataUrl": "/assets/navigator.json"
                }
            }
        ]
    }
}