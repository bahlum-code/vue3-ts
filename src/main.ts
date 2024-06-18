import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//plugins
import dateFns from './plugins/date-fns'
import vueuse from './plugins/vueuse'

const app = createApp(App);


app.use(dateFns);
app.use(vueuse);

app.mount('#app');
