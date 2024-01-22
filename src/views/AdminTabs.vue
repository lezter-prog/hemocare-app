<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom" >
          <ion-tab-button tab="fluid" href="/hemo/admin/fluid" >
            <ion-icon aria-hidden="true" :icon="water" />
            <ion-label>Fluid Monitoring</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="tab2" href="/hemo/admin/medication" >
            <ion-icon aria-hidden="true" :icon="addCircle" />
            <ion-label>Medication</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="schedule" href="/hemo/admin/schedule" > 
            <ion-icon aria-hidden="true" :icon="listCircle" />
            <ion-label>Schedule</ion-label>
          </ion-tab-button>
          
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, square, home, informationCircle, listCircle,addCircle,water,grid,at} from 'ionicons/icons';
  </script>
  
  <style>
  
  .tabcolor{
    background-color: #A6DAF1
  }
  
  </style>
  