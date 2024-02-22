<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button @click="logout"> <ion-icon :icon="logOut"></ion-icon> </ion-button>
          </ion-buttons>
      </ion-toolbar>
        <!-- <ion-searchbar show-clear-button="focus" value="Search"></ion-searchbar> -->
     </ion-header>
      <ion-content :fullscreen="true">
        
        <ion-grid>
          <ion-row >
            <ion-col class="ion-text-left">{{ name }}</ion-col>
          </ion-row>
          <ion-row >
            <ion-col >Schedules</ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-list>
              <ion-item v-for="sched in filteredSchedules">
                <ion-label>{{ sched.type+' - '}} {{ moment(sched.schedule[0]).format('MM-DD-YYYY')}} {{sched.schedule.length>1?' to '+sched.schedule.findLast(d=>d):'' }}  <ion-badge slot="end"><ion-label>{{ sched.status == null?"No Status":sched.status }}</ion-label></ion-badge> </ion-label>
              </ion-item>
            </ion-list>
        </ion-grid>
        <!-- <ExploreContainer name="Tab 1 page" /> -->
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage,
     IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonFab, 
    IonFabButton, 
    IonIcon,
    IonCol, 
    IonGrid, 
    IonRow,
    IonText,
    IonButton,
    IonButtons,
    IonSearchbar,
    IonItem, 
    IonLabel, 
    IonList,
    IonAccordion,
    IonAccordionGroup,
    IonBackButton,
    useIonRouter,
    loadingController

   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { useAppWriteAccount } from '../composable/useAppWriteAccount';
  import { useAppWriteSchedule } from '../composable/useAppWriteSchedule';
  import { ref,onMounted,watch,defineProps } from 'vue';
  import { Storage } from '@ionic/storage';
  import {useRouter} from "vue-router";
  import moment from 'moment';


  const props = defineProps({
    userId:{
      type: String
    },
    name:{
      type:String
    },
  })
  
  const { accountSession, getAllUsers } =  useAppWriteAccount();
  const { getAllByUserAllStatus  } =  useAppWriteSchedule();
  const store = new Storage();
  const ionRouter = useIonRouter();

  const userid = ref(useRouter().currentRoute.value.query.userId);
  const name = ref(useRouter().currentRoute.value.query.name);
  const schedules = ref();
  const filteredSchedules= ref();

  
  const initialize = async() => {
      showLoading();
      schedules.value = (await getAllByUserAllStatus(userid.value??'')).data;
      setTimeout(()=>{
        filteredSchedules.value =schedules.value;
        },3000)
      
      console.log(schedules.value);


      // filteredUsers.value = await InitializeFluidIntakes();
  }
onMounted(()=>initialize());


      
  const logout = async ()=>{
      await store.create();
      await store.clear();
      ionRouter.navigate('/login', 'forward', 'replace');
    }
    const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'Loading...',
          duration: 3000,
        });

        loading.present();
      };
  </script>
  
  <style>
   ion-content{
    --background: #4479AF;
    font-family: tt-lake-bold !important;
    text-transform: uppercase;
   }
  
   ion-col {
      text-align: center;
    }
    ion-button.output{
      width: 6rem;
      height: 6rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      background-color: #A6DAF1;
    }
    ion-button.records{
      width: 6rem;
      height: 6rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      background-color: #A6DAF1;
    }
    ion-button.mainButton{
        width: 15rem;
        height: 15rem;
        border-radius: 4rem !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    ion-button.mainButton ion-icon{
      width:200px;
      height: 300px;
    }
    .mb-3{
      margin-bottom: 3rem;
    }
    .border-circle{
      border:5px solid white;
      padding: 2rem;
      border-radius: 10rem;
      border-style: dotted;
      animation: flip 2s;
        animation-iteration-count:1;
        animation-fill-mode: forwards;
        animation-direction:alternate;
    }
    .middle-icon{
      width:6rem;
      height: 6rem;
    }
  
    @keyframes flip {
        0%{
          transform: rotateY(200deg);
        }
        25%{
          transform: rotateY(360deg);
        }
        50%{
          transform: rotateY(200deg);
        }
        100%{
          transform: rotateY(360deg);
        }
        
      }
  </style>
  