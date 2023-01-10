import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faArrowRight);

createApp(App).mount('#app')
