<template>
  <ion-page>
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" style="height: 80px " >
        <ion-tab-button tab="fluid" href="/hemo/fluid" style="background-color: #A6DAF1;" >
          <!-- <ion-icon aria-hidden="true" :icon="water" /> -->
          <img src="/public/fluidIcon.png" width="50" style="" alt="">
          <ion-label class="tt-lake-bold" color="light">Fluid Monitoring</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/hemo/medication" style="background-color: #A6DAF1;" >
          <!-- <ion-icon aria-hidden="true" :icon="addCircle" /> -->
          <div class="" >
            <img src="/public/medecine1.png" width="50" style="" alt="">
          </div>
          <ion-label class="tt-lake-bold" color="light">Medication</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/hemo/blog" style="background-color: #A6DAF1;"> 
          <!-- <ion-icon aria-hidden="true" :icon="listCircle"  /> -->
          <img src="/public/tips.png" width="50" style="" alt="">
          <ion-label class="tt-lake-bold" color="light">Tips</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/hemo/schedule" style="background-color: #A6DAF1;" >
          <!-- <ion-icon aria-hidden="true" :icon="at" /> -->
          <img src="/public/sched.png" width="50" style="" alt="">
          <ion-label class="tt-lake-bold" color="light">Schedule</ion-label>
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
