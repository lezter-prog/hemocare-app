import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import AdminTabs from '../views/AdminTabs.vue';
import LoginPage from '../views/Login.vue';
import Register from '../views/Register.vue';
import Intake from '../views/fluid-monitor/Intake.vue';
import Records from '../views/fluid-monitor/Record.vue';
import listMedication from '../views/ListOfmedication.vue';
import addNewMedecine from '../views/AddNewMedicine.vue';
import BlogPost from '../views/BlogPost.vue';
import Dietary from '../views/DietaryTips.vue';
import DietAdvice from '../views/DietAdvice.vue';
import Reminders from '../views/Reminders.vue';
import Kidneys from '../views/Kidneys.vue';
import DetectChronicKidneyDisease from '../views/DetectChronicKidneyDisease.vue';
import Admin from '../views/Admin.vue';



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
        path: 'blog',
        component: () => import('@/views/Blog.vue')
      },
      {
        path: 'schedule',
        component: () => import('@/views/Schedule.vue')
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
  {
    path: '/hemo/blog/post',
    name: 'blogPost',
    component: BlogPost
  },
  {
    path: '/hemo/blog/post/dietary/tips',
    name: 'dietary',
    component: Dietary
  },
  {
    path: '/hemo/blog/post/diet/advice',
    name: 'dietAdvice',
    component: DietAdvice
  },
  {
    path: '/hemo/blog/post/chronic-disease',
    name: 'detectchronickidneydisease',
    component: DetectChronicKidneyDisease
  },
  {
    path: '/hemo/blog/post/about-kidneys',
    name: 'kidneys',
    component: Kidneys
  },
  {
    path: '/hemo/blog/post/reminders',
    name: 'remiders',
    component: Reminders
  },
  {
    path: '/hemo/admin/',
    name: 'admin',
    component: AdminTabs,
    children:[
      {
        path: '',
        redirect: 'hemo/admin/fluid'
      },
      {
        path: 'fluid',
        component: () => import('@/views/AdminFluid.vue')
      },
      {
        path: 'medication',
        component: () => import('@/views/AdminMedication.vue')
      },
      {
        path: 'schedule',
        component: () => import('@/views/AdminSchedule.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
