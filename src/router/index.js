import { createRouter, createWebHistory } from "vue-router";

import Portfolio from "../views/core/Portfolio";

import WeatherApp from "@/views/WeatherApp";
import TaskTracker from "@/views/TaskTracker";

const routes = [
  { path: "/", component: Portfolio },
  { path: "/project/weather-app", component: WeatherApp },
  { path: "/project/task-tracker", component: TaskTracker },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
