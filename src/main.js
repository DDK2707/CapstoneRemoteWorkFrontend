import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import swal from 'sweetalert2'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from "axios"
import store from './store/modules'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://ddk-capstone-backend.herokuapp.com/"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyADLxDH2fGy9FCnUwA_CP6E8ZHYt3nHqEU",
    authDomain: "capstone-front-end-44bf6.firebaseapp.com",
    projectId: "capstone-front-end-44bf6",
    storageBucket: "capstone-front-end-44bf6.appspot.com",
    messagingSenderId: "925434818631",
    appId: "1:925434818631:web:a0623aef032353e2ea4162",
    measurementId: "G-ZX07FHCWB4"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  window.Swal = swal

Vue.config.productionTip = false
app.create({
  store, router, render: h => h(App)
}).use(VueSweetalert2).$mount('#app')
