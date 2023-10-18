import { createRouter, createWebHistory } from "vue-router";

//importiamo le pagine 

import HomePage from './pages/Home.vue';
import ProjectsPage from './pages/Projects.vue';
import AboutPage from './pages/About.vue';
import ContactsPage from './pages/Contacts.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ProjectShowPage from './pages/ProjectShow.vue'




const routes = [
    {
        path:'/',
        name:'home',
        component: HomePage,
        
    },
    {
        path:'/projects',
        name:'projects',
        component: ProjectsPage,
        
    },
    {
        path:'/project/:slug',
        name:'project.show',
        component: ProjectShowPage,
        
    },
    {
        path:'/about',
        name:'about',
        component: AboutPage,
        
    },
    {
        path:'/contacts',
        name:'contacts',
        component: ContactsPage,
        
    },


    // Utilizziamo questa rotta per tutte le rotte che non sono definite
    // inoltre la mettiamo sotto tutte le altrre rotte
    {
        path: "/:pathMatch(.*)*",
        name: 'not-found',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };