import { Router } from '@vaadin/router';

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
                    return commands.component(entry.element);
                } else if (entry.type == "html") {
                    const iframe = commands.component("iframe");
                    iframe.src = entry.url;
                    iframe.frameBorder = "0";
                    return iframe;
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
            { path: "/:subject", 
                children: [
                    { 
                        path: "/:entry", 
                        action: renderContent
                    }
                ]
            },
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