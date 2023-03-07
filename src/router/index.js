import { createWebHistory, createRouter } from "vue-router";
import PollsList from "../components/Polls/PollsList";
import PollDetail from "../components/Poll/PollDetail";

const routes = [
  {
    path: "/",
    name: "Polls",
    component: PollsList,
  },
  {
    path: "/poll/:id",
    name: "Poll Detaisl",
    component: PollDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
