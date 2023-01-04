import { createApp } from "vue";

import "./index.css";

import App from "./App.vue";
import notificationMixin from "container/getNotificationMixins";

createApp(App)
.mixin(notificationMixin)
.mount("#app");
