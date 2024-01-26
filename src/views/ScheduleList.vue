<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>HELLO!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" style="background-color: #9FDBF3;">
        
        <ion-grid style="height: auto;margin-bottom: 8px;">
            <ion-row class="flex-row">
              <ion-col class="fixedColor ion-justify-content-center" style="text-align: left">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0">
                    <ion-text>
                        <h1>9:00AM</h1>
                    </ion-text>
                </ion-card>
                <ion-card class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
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
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
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
        </ion-grid>
        <ion-grid v-if="getAll != undefined">
            <ion-row v-for="med in getAll" class="">
              <ion-col  class="scheduledColor ion-justify-content-center" style="text-align: left;margin-bottom: 10px;">
                <ion-card class="section-color1" style="width: 100%;height: 50%;margin:0;display: flex;flex-direction: column;">
                    <ion-text style="font-size: larger;">
                        {{getAllScheduleDesc(med.schedule)}}
                    </ion-text>
                    <ion-text>
                      Times Taken today:{{med.taken_times??0}}
                    </ion-text>
                    <ion-text>
                      Last Taken: {{ med.last_datetime_taken }}
                    </ion-text>
                </ion-card>
                <ion-card  class="section-color1" style="width: 100%;height: 44%;margin:2% 0px 0px 0px;display: flex;">
                   <img src="/public/dializer.png" style="width: 20%;height: 100%;" alt="">
                   <div class="label-medication" style="display: flex;flex-direction: column;">
                    <ion-text style="font-size: 20px;">
                        {{  med.name }}
                    </ion-text>
                    <ion-text style="font-size: 15px;">
                       {{med.volume}}
                    </ion-text>
                   </div>
                   <div class="medicationStatus" style="width: 100%;display: flex;flex-direction: row-reverse;align-items: flex-end;">
                    <ion-button shape="round" size="small" color="danger" @click="deleteSchedule(med.$id)">remove</ion-button>
                    <ion-button shape="round" size="small" @click="takeAMedecine(med.$id,med.schedule,med.taken_times??0)">Take</ion-button>
                   </div>
                   
                </ion-card>
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
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { useAppWriteMedication } from '../composable/useAppWriteMedecine';
  import { useAppWriteAccount } from '../composable/useAppWriteAccount';
  import { ref,onMounted, onBeforeMount,watch} from 'vue';
  import moment from 'moment';
  import { useAppwiteFluid } from '../composable/useAppWriteFluid';

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
       
        setTimeout(() => ev.target.complete(), 500);
      };
  const ionRouter = useIonRouter();
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const { checkTodaysEntry, getLast7Days, getValueByDate } = useAppwiteFluid();
  
  
  const { accountSession } =  useAppWriteAccount();
  const { inputMedication, getAllMedecines, takeMedecine, checkBeforeTake, check, deleteMedecine} = useAppWriteMedication();

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

onMounted(()=>{
  console.log(getAll.value);
});

onBeforeMount(()=> {
  console.log(getAll.value)
  getAllMeds();
})

const getAllMeds =async () => {
  const data =  (await getAllMedecines())?.data;
  getAll.value = data; 
  console.log(getAll.value);
}

const addNewMedecine = ()=>{
  ionRouter.navigate('./new', 'forward','replace');
}

const takeAMedecine =async (id:string,schedule:string,timesTaken:number)=>{
  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: async () => {
        var response = await takeMedecine(id,schedule);
          console.log(response);
          if(response){
             location.reload();
          }
      },
    },
  ];

  const alert = await alertController.create({
      header: 'You are going to take this medecine',
      message: 'you cant revert this action',
      buttons: alertButtons,
    });
    const alert2 = await alertController.create({
      header: 'You have reach the maximum number of medecine this today',
      message: '',
      buttons: ['OK'],
    });

    if(schedule == "onceADay" && timesTaken >=1){
      await alert2.present();
    }else if(schedule == "twiceADay" && timesTaken >=2){
      await alert2.present();
    }else if(schedule == "everyFourHours" && timesTaken >=6){
      await alert2.present();
    }else if(schedule == "everySixHours" && timesTaken >=4){
      await alert2.present();
    }else{
      if(schedule != "" && timesTaken >=1){
        await alert2.present();
      }else{
        await alert.present();
      }
      
    }
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
        var response = await deleteMedecine(id);
          console.log(response);
          if(response){
             location.reload();
          }
      },
    },
  ];

  const alert = await alertController.create({
      header: 'Are you sure you want to remove thi medecine in you schedule',
      message: 'you are not able revert this action',
      buttons: alertButtons,
    });
    const alert2 = await alertController.create({
      header: 'You have reach the maximum number of medecine this today',
      message: '',
      buttons: ['OK'],
    });
    await alert.present();
}

const checkTimesTaken = async(id:string)=>{
  var res =  await check(id);
  var count = res.data?.length;
  return "Taken "+count+"x last take was";
}

const getTimes =async (id:string) => {
  var res =  await check(id);
  var count = res.data?.length;
  return "Taken "+count+"x last take was";
}

const getAllScheduleDesc = (schedule:string) =>{
  var response = "";
  switch(schedule){
    case "oneceADay":
      response ="Once a Day"
      break;
    case "twiceADay":
      response ="Twice a day"
      break;
    case "everyFourHours":
      response ="Every four hours"
      break;
    case "everySixHours":
      response ="Every six hours"
      break;
    default:
      response=schedule;
      break;

  }
  return response;
}

  const buttonActive = async (btn:String) =>{

    if(btn == "today"){
      todaySectionShow.value=true;
      yesterdaySectionShow.value=false;
      sevendaysSectionShow.value=false;
      todayBtn.value = "btn-active";
      yesterdayBtn.value = "";
      sevenDaysAgoBtn.value="";
    }else if(btn == "yesterday"){
     
      todaySectionShow.value=false;
      yesterdaySectionShow.value=true;
      sevendaysSectionShow.value=false;
      // yesterdayFluid.value = getYesterdayValue.value.data?.documents[0].total_fluid_taken_ml;
      todayBtn.value = "";
      yesterdayBtn.value = "btn-active";
      sevenDaysAgoBtn.value="";
    }else{
      todaySectionShow.value=false;
      yesterdaySectionShow.value=false;
      sevendaysSectionShow.value=true;
      todayBtn.value = "";
      yesterdayBtn.value = "";
      sevenDaysAgoBtn.value="btn-active";
      // console.log(header.value);
    }

  }

  const getFormattedDate= (date:string) =>{
   console.log(date)
    if(date ==undefined){
      return "";
    }
    var d = new Date(date);
    return moment(d).format('MM-DD-YYYY hh:ss a');
    // return "sample"
  }
  
  watch(getAll, async (data, oldData) => {
    console.log(data);
    console.log(oldData);
    if(data !=oldData){
      console.log("IN")
      getAll.value =undefined;
      getAll.value=data;
    }
})

// watch( () => getAll, async (data) => {
//   console.log(data.value);
//   if (data.value != undefined) {
//     getAll.value=data.value;
//   }
// },{ deep: true })

// const clickWater = ()=>{
//   ionRouter.navigate('/hemo/fluid/intake', 'forward', 'replace');
// }
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
  