import { createRouter, createWebHistory } from "vue-router";

//importiamo le pagine 

import HomePage from './pages/Home.vue';
import ProjectsPage from './pages/Projects.vue';
import AboutPage from './pages/About.vue';
import ContactsPage from './pages/Contacts.vue';




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
        path:'/about',
        name:'about',
        component: AboutPage,
        
    },
    {
        path:'/contacts',
        name:'contacts',
        component: ContactsPage,
        
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };