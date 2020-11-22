import Vue from 'vue'

import appBar from "./appBar"
import sideBar from "./sideBar"
import footer from "./footer"

console.log(appBar)

Vue.component(appBar.name, appBar)
Vue.component(sideBar.name, sideBar)
Vue.component(footer.name, footer)