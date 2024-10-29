import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: "Videoafspiller",
            component: VideoPlayer,
            props: route => ({ video: route.query.video })
        }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')