import { createApp } from "vue";

import "./index.css";
import getNotificationMixins from "./mixins/getNotificationMixins.js";

import App from "./App.vue";

createApp(App)
.mixin(getNotificationMixins)
.mount("#app");
