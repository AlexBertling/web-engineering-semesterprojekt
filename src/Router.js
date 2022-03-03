import { Router } from '@vaadin/router';
import { css } from 'lit';

const renderContent = async (context, commands) => {
    if (appConfig) {
        const subject = appConfig.menu[context.params.subject];
        if (subject) {
            const entry = subject.filter(s => s.title == context.params.entry)[0];
            if (entry) {
                if (entry.type == "text") {
                    const section = commands.component('wem-section');
                    section.title = entry.title;
                    section.subtitle = entry.subtitle || "";
                    section.paragraphs = entry.paragraphs || [];
                    return section;
                } else if (entry.type == "component") {
                    //await import(document.baseURI + entry.url);
                    //console.log("import done");
                    const c = commands.component(entry.element);
                    if (entry.attributes) {
                        Object.keys(entry.attributes).forEach(a => c.setAttribute(a, entry.attributes[a]));
                    }
                    return c;
                } else if (entry.type == "html") {
                    const section = commands.component('wem-section');
                    section.title = entry.title;
                    section.subtitle = entry.subtitle || "";
                    const iframe = commands.component("iframe");
                    iframe.src = entry.url;
                    iframe.frameBorder = "0";
                    section.element = iframe;
                    section.paragraphs = [
                        {
                            "content": `<a target="_blank" href="${entry.url}">Link zur Seite</a>`
                        }
                    ]
                    return section;
                }
            }
        }
    }
}

const routes = [
    {
        path: "",
        animate: true, 
        children: [
            { path: "/", component: "wem-start" },
            { path: "/:subject", component: "wem-start" },
            { path: "/:subject/:entry", action: renderContent },
                
            {path: '(.*)', component: 'wem-not-found'}
        ]
    }
];

let appConfig = null;
class WEMRouter extends Router {
    setAppConfig(config){
        appConfig = config;
    }
}

export const router = new WEMRouter();
router.setRoutes(routes);