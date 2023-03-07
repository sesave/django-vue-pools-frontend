import { createWebHistory, createRouter } from "vue-router";
import PollsList from "../components/Polls/PollsList";
import PollDetail from "../components/Poll/PollDetail";
import PollResults from "../components/Poll/PollResults";

const routes = [
  {
    path: "/",
    name: "Polls",
    component: PollsList,
  },
  {
    path: "/poll/:id",
    name: "Poll Details",
    component: PollDetail,
  },
  {
    path: "/results/:id/",
    name: "Poll Results",
    component: PollResults,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
