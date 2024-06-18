import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import dateFns from './plugins/date-fns'

const app = createApp(App);


app.use(dateFns);

app.mount('#app');
