// Importa la creación del SPA
import { createApp } from 'vue';

// Importa main
import App from './App.vue';

// Importa el almacenamiento mediante Vuex
import store from './store';

// Crea la instancia 
const app = createApp(App);

app.use(store);
// Monta la aplicación 
app.mount('#app');
