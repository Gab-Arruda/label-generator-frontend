import { createRouter, createWebHistory } from 'vue-router';
import GenerateLabelPage from '../pages/GenerateLabelPage.vue';
import Label from '../components/generate_label/Label.vue';

const routes = [
  {
    path: '/',
    name: 'GenerateLabelPage',
    component: GenerateLabelPage
  },
  {
    path: '/label',
    name: 'label',
    component: Label
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
