import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import {model} from "@/model";

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.MyChoices = model.fetch('choicesItem', `[{"id": "in", "name": "入账"}]`);
window.pushItem = (value: ItemSelected) => {
    let i: number;
    let index: undefined | number;
    for (i = 0; i < window.MyChoices.length; i++) {
        if (window.MyChoices[i].id === value.id) {
            index = i
        }
    }
    if (index) {
        window.MyChoices.splice(index, 1);
    } else {
        window.MyChoices.push(value);
    }
    // if (this.selectedItem.indexOf(value) === -1) {
    //   this.selectedItem.push(value);
    //   console.log(this.selectedItem);
    // } else {
    //   const index = this.selectedItem.indexOf(value);
    //   this.selectedItem.splice(index, 1);
    //   console.log(this.selectedItem);
    // }
    const choicesItem = model.clone(window.MyChoices);
    model.save('choicesItem', choicesItem)
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
