<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-buttons slot="end">
            <ion-button @click="redirectHome"> <ion-icon :icon="home"></ion-icon> </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" style="background-color: #9FDBF3;">
        
        <!-- <ion-grid style="height: auto;margin-bottom: 8px;">
            <ion-row class="flex-row">
              <ion-col class="fixedColor ion-justify-content-center" style="text-align: left">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>9:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/medication/dializer.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        Dializer
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                        1 Bag
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger">Not</ion-button>
                    <ion-button shape="round" size="small">Take</ion-button>
                   </div>
                   
                </ion-card>
              </ion-col>
              <ion-col class="fixedColor ion-justify-content-center" style="text-align: left">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>11:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/medication/44.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        Erythropoietin
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                        3 ml syringe
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger">Not</ion-button>
                    <ion-button shape="round" size="small">Take</ion-button>
                   </div>
                   
                </ion-card>
              </ion-col>
              
            </ion-row>
        </ion-grid> -->
        <ion-grid v-if="getAll != undefined">
            <ion-row v-for="sched in getAll" class="">
              <ion-col  class="scheduledColor ion-justify-content-center" style="text-align: left;margin-bottom: 10px;">
                <ion-card class="section-color1" style="width: 100%;height: 100%;margin:0;display: flex;flex-direction: column;">
                  <ion-text style="font-size: 25px;">
                    {{ moment(sched.schedule[0]).format('hh:mm a')}}
                    </ion-text>  
                  <ion-text style="font-size: 20px;">
                        {{sched.type}}
                    </ion-text>
                    <ion-text style="font-size: 16px;">
                     {{ moment(sched.schedule[0]).format('MM-DD-YYYY')}} {{sched.schedule.length>1?'-'+sched.schedule.findLast(d=>d):'' }}
                    </ion-text>
                    <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                      <ion-button shape="round" size="small" color="danger" @click="deleteSchedule(sched.$id)">remove</ion-button>
                      <ion-button shape="round" size="small" @click="attend(sched.$id)">Attended</ion-button>
                   </div>
                </ion-card>
                <!-- <ion-card  class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                      <ion-button shape="round" size="small" color="danger" @click="deleteSchedule(sched.$id)">remove</ion-button>
                      <ion-button shape="round" size="small" @click="attend(sched.$id)">Take</ion-button>
                   </div>
                   
                </ion-card> -->
              </ion-col>
              <!-- <ion-col class="scheduledColor ion-justify-content-center" style="text-align: left;margin-top: 10px;">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>11:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        Sample2
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                        3 ml syringe
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger">Not</ion-button>
                    <ion-button shape="round" size="small">Taken</ion-button>
                   </div>
                   
                </ion-card>
              </ion-col>
              <ion-col class="scheduledColor ion-justify-content-center" style="text-align: left;margin-top: 10px">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>11:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        Sample3
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                        3 ml syringe
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger">Not</ion-button>
                    <ion-button shape="round" size="small">Taken</ion-button>
                   </div>
                   
                </ion-card>
              </ion-col>
              <ion-col class="scheduledColor ion-justify-content-center" style="text-align: left;margin-top: 10px">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>11:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        Sample4
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                        3 ml syringe
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger">Not</ion-button>
                    <ion-button shape="round" size="small">Taken</ion-button>
                   </div>
                   
                </ion-card>
              </ion-col> -->
              
            </ion-row>
        </ion-grid>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end" size="large" @click="addNewMedecine">
            <ion-fab-button  >
                <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>
        <ion-infinite-scroll @ionInfinite="ionInfinite">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
    </ion-infinite-scroll>
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
    IonRefresher, IonRefresherContent,
    IonFab, 
    IonFabButton, 
    IonIcon,
    IonCol, 
    IonGrid, 
    IonRow,
    IonText,
    IonButton,
    IonButtons,
    IonBackButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    InfiniteScrollCustomEvent,
    loadingController,
    alertController,
    IonLabel, IonSegment, IonSegmentButton,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    useIonRouter
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star, home } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { useAppWriteSchedule } from '../../composable/useAppWriteSchedule';
  import { useAppWriteAccount } from '../../composable/useAppWriteAccount';
  import { ref,onMounted, onBeforeMount,watch} from 'vue';
  import moment from 'moment';
//   import { useAppwiteFluid } from '../composable/useAppWriteFluid';

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
       
        setTimeout(() => ev.target.complete(), 500);
      };
  const ionRouter = useIonRouter();
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

//   const { checkTodaysEntry, getLast7Days, getValueByDate } = useAppwiteFluid();
  
  
  const { accountSession } =  useAppWriteAccount();
  const { getAllByUser,deleteSched,Attended} = useAppWriteSchedule();

  const month = ref(moment(new Date()).format('MMMM'));
  const day = ref(moment(new Date()).format('DD'));
  const todayBtn = ref("btn-active");
  const yesterdayBtn = ref();
  const sevenDaysAgoBtn = ref();
  const todaySectionShow = ref(false);
  const todayFluid = ref();

  const yesterdaySectionShow = ref(false);
  const yesterdayFluid = ref();

  const sevendaysSectionShow = ref(false);
  const sevendaysFluid = ref();
  const header =  ref();

  
  const getYesterdayValue = ref();

  const getAll =  ref();
  const timesTaken =ref();

  const beforePageDone = ref(false);
  const showSpinner = ref(true);

const options = ref({
  responsive: true,
  maintainAspectRatio: false
});

onMounted(async()=>{
  const data =  (await getAllByUser()).data;
  setTimeout(()=>{
    getAll.value = data; 
  },2000)
 
  console.log(getAll.value);
});

onBeforeMount(()=> {
  
})

const getAllMeds =async () => {
  
}

const addNewMedecine = ()=>{
  ionRouter.navigate('./new', 'forward','replace');
}

const deleteSchedule =async (id:string)=>{
  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: async () => {
        var response = await deleteSched(id);
          console.log(response);
          if(response){
             location.reload();
          }
      },
    },
  ];

  const alert = await alertController.create({
      header: 'Are you sure you want to remove thi schedue ',
      message: 'you are not able revert this action',
      buttons: alertButtons,
    });
    await alert.present();
}

const attend = async(id:string) =>{
  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: async () => {
        var response = await Attended(id);
          console.log(response);
          if(response){
             location.reload();
          }
      },
    },
  ];

  const alert = await alertController.create({
      header: 'You are going to mark this Schedule as Done ',
      message: 'you are not able revert this action',
      buttons: alertButtons,
    });
    await alert.present();

}

const redirectHome = () =>{
  ionRouter.replace('/hemo');
}

  </script>
  
  <style>
  ion-segment {
    --background: #3dc2ff;
  }
  ion-content{
    --background: #4479AF;
    font-family: tt-lake-bold !important;
    text-transform: uppercase;
   }
   .flex-row{
    display: flex;
    flex-direction: column;
    height: 300px;
   }
   .flex-row1{
    display: flex;
    flex-direction: column;
    height: 600px;
   }
   .fixedColor{
    background: #FFB263;
    padding: 10px;
   }
   .scheduledColor{
    background: #9FDBF3;
    padding: 10px;
   }
   ion-fab-button {
    --background: var(--ion-color-primary);
    --background-activated: #87d361;
    --background-hover: #a3e681;
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --color: white;
  }
   .card-color{
      background-color: #9FDBF3;
      border: 5px solid snow;
      border-radius: 20px;
      padding: 10px;
      font-family: tt-lake-bold;
   }
   .card-color:hover{
      background-color: #a59ff3;
      border: 5px solid rgb(69, 68, 103);
      
   }

   .section-color1{
      background-color: snow;
      /* border: 10px solid var(--ion-color-primary); */
      /* border-radius: 20px; */
      padding: 3px;
      font-family: tt-lake-bold;
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

    .btn-active{
      border:5px solid snow;
      border-radius: 4rem;
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

      .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
  </style>
  