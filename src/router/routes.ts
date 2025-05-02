import DonePage from 'src/pages/DonePage.vue';
import InfoPage from 'src/pages/InfoPage.vue';
import OnsPage from 'src/pages/OnsPage.vue';
import PlanPage from 'src/pages/PlanPage.vue';
import SummaryPage from 'src/pages/SummaryPage.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Info',
    component: InfoPage,
  },
  {
    path: '/plan',
    name: 'Plan',
    component: PlanPage,
  },
  {
    path: '/ons',
    name: 'Ons',
    component: OnsPage,
  },
  {
    path: '/sum',
    name: 'Summary',
    component: SummaryPage,
  },
  {
    path: '/done',
    name: 'Done',
    component: DonePage
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
