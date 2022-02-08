import { Router } from '@vaadin/router';

const routes = [
    {
        path: "",
        animate: true, 
        children: [
            { path: "/", component: "wem-navigator" },
            { path: "/:subject", 
                component: "wem-start",
                children: [
                    { 
                        path: "/:entry", 
                        component:"wem-start"
                    }
                ]
            },
        ]
    }
];

export const router = new Router();
router.setRoutes(routes);