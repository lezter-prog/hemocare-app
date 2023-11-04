import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import LoginPage from '../views/Login.vue';
import Register from '../views/Register.vue';
import Intake from '../views/fluid-monitor/Intake.vue';
import Records from '../views/fluid-monitor/Record.vue';
import listMedication from '../views/ListOfmedication.vue';
import addNewMedecine from '../views/AddNewMedicine.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/loading'
  },
  {
    path: '/hemo/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/hemo/fluid'
      },
      {
        path: 'fluid',
        component: () => import('@/views/FluidMonitoring.vue')
      },
      {
        path: 'medication',
        component: () => import('@/views/Medication.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () =>  import('@/views/Loader.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/hemo/fluid/intake',
    name: 'Intake',
    component: Intake
  },
  {
    path: '/hemo/fluid/records',
    name: 'Records',
    component: Records
  },
  {
    path: '/hemo/medication/list',
    name: 'listMedication',
    component: listMedication
  },
  {
    path: '/hemo/medication/new',
    name: 'newMedecine',
    component: addNewMedecine
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
