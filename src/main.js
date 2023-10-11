import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";

import ProjectLayout from "@/components/UI/ProjectLayout.vue";

const app = createApp(App);

app.component("project-layout", ProjectLayout);

app.use(MotionPlugin);

app.use(router);

app.mount("#app");
