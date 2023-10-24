<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-title>HELLO!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" style="background-color: #9FDBF3;">
        <ion-grid>
            <ion-row class="">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                <h1>My Records</h1>
              </ion-text>
              </ion-col>
            </ion-row>
            <ion-row style="">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light" style="font-family: tt-lake-bold;">
                <h5 >FLUID</h5>
                </ion-text>

                <ion-card class="card-color" style="height: 65%;">
                  <img src="/public/watericon.png" style="width: 100%;height: 100%;" alt="">
                </ion-card>
                
              </ion-col>
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                  <h5>Records</h5>
                </ion-text>
                <!-- <ion-button shape="round" size="large"> Records</ion-button> -->
                <ion-card class="card-color" style="height: 65%;">
                  <ion-text color="light">
                        <h5 style="margin:0">{{month}}</h5>
                      </ion-text>
                      <ion-text color="light" >
                        <h1 style="font-size: calc(5vw + 5vh + 8vmin); margin:0">{{ day }}</h1>
                      </ion-text>
                  
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row class="">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                <h1>Fluid Monitoring</h1>
              </ion-text>
              </ion-col>
            </ion-row>
           
            <ion-row class="ion-margin-top">
              <ion-col class="flex ion-justify-content-center" style="column-gap: 10px;" >
                <ion-button :class="todayBtn" @click="buttonActive('today')" shape="round" >Today</ion-button>
                <ion-button :class="yesterdayBtn" @click="buttonActive('yesterday')" shape="round">Yesterday</ion-button>
                <ion-button :class="sevenDaysAgoBtn" @click="buttonActive('sevendaysAgo')" shape="round">Last 7d</ion-button>
              </ion-col>
            </ion-row>
           
            <ion-row v-if="todaySectionShow" class="">
              <ion-col class="flex ion-justify-content-center">
                <ion-card class="section-color" style="width: 100%;height: 100%;margin:0">
                  <ion-text color="light">
                        <h5 style="margin:0"></h5>
                      </ion-text>
                      <ion-text color="black" >
                        <h1 style="font-size: calc(5vw + 5vh + 8vmin); margin:0">{{ todayFluid }}<span style="font-size: 2rem;">ml</span></h1>
                      </ion-text>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row v-if="yesterdaySectionShow" class="">
              <ion-col class="flex ion-justify-content-center">
                <ion-card class="section-color" style="width: 100%;height: 100%;margin:0">
                  <ion-text color="light">
                        <h5 style="margin:0"></h5>
                      </ion-text>
                      <ion-text color="black" >
                        <h1 style="font-size: calc(5vw + 5vh + 8vmin); margin:0">{{ yesterdayFluid }}<span style="font-size: 2rem;">ml</span></h1>
                      </ion-text>
                </ion-card>
              </ion-col>
            </ion-row>
            <ion-row v-if="sevendaysSectionShow" class="">
              <ion-col class="flex ion-justify-content-center">
                <ion-card class="section-color" style="width: 100%;height: 100%;margin:0">
                  <Bar :data="sevendaysFluid" :options="options" />
                </ion-card>
              </ion-col>
            </ion-row>
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
    IonLabel, IonSegment, IonSegmentButton,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  import { useAppWriteAccount } from '../../composable/useAppWriteAccount';
  import { ref,onMounted, onBeforeMount} from 'vue';
  import moment from 'moment';
  import { useAppwiteFluid } from '../../composable/useAppWriteFluid';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const { checkTodaysEntry, getLast7Days, getValueByDate } = useAppwiteFluid();
  
  
  const { accountSession } =  useAppWriteAccount();

  const month = ref(moment(new Date()).format('MMMM'));
  const day = ref(moment(new Date()).format('DD'));
  const todayBtn = ref("btn-active");
  const yesterdayBtn = ref();
  const sevenDaysAgoBtn = ref();
  const todaySectionShow = ref(true);
  const todayFluid = ref();

  const yesterdaySectionShow = ref(false);
  const yesterdayFluid = ref();

  const sevendaysSectionShow = ref(false);
  const sevendaysFluid = ref();

const options = ref({
  responsive: true,
  maintainAspectRatio: false
});

  const buttonActive = async (btn:String) =>{

    if(btn == "today"){
      todaySectionShow.value=true;
      yesterdaySectionShow.value=false;
      sevendaysSectionShow.value=false;
      todayBtn.value = "btn-active";
      yesterdayBtn.value = "";
      sevenDaysAgoBtn.value="";
    }else if(btn == "yesterday"){
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate()-1);
      const getYesterdayValue = await getValueByDate(yesterday);
      todaySectionShow.value=false;
      yesterdaySectionShow.value=true;
      sevendaysSectionShow.value=false;

      yesterdayFluid.value = getYesterdayValue.data?.documents[0].total_fluid_taken_ml;
      todayBtn.value = "";
      yesterdayBtn.value = "btn-active";
      sevenDaysAgoBtn.value="";
    }else{
      const header =  await getLast7Days();
      todaySectionShow.value=false;
      yesterdaySectionShow.value=false;
      sevendaysSectionShow.value=true;
      todayBtn.value = "";
      yesterdayBtn.value = "";
      sevenDaysAgoBtn.value="btn-active";

      sevendaysFluid.value = {
        labels: Last7DaysDates(),
        datasets: [
          {
            label: 'Fluid Intake',
            backgroundColor: '#f87979',
            data: header.data?.value
          }
        ]
      }
    }

  }
  
  
  const initialize = async () => {
       const response = await accountSession();
       console.log(response);
    };
  
    onBeforeMount(async () => {
    const response =  await checkTodaysEntry();

    todayFluid.value = response.data?.documents[0].total_fluid_taken_ml;


   
    
  })
      onMounted(()=>initialize())

  const Last7DaysDates = ()=> {
    var result = [];
    for (var i=6; i>0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( moment(d).format('MMM-DD-YYYY'))
    }

    return result;
  }
  </script>
  
  <style>
  ion-segment {
    --background: #3dc2ff;
  }
   ion-content{
    --background: #9FDBF3;
    font-family: tt-lake-bold !important;
    text-transform: uppercase;
   }

   .card-color{
      background-color: #9FDBF3;
      border: 5px solid snow;
      border-radius: 20px;
      padding: 10px;
      font-family: tt-lake-bold;
   }

   .section-color{
      background-color: snow;
      border: 10px solid var(--ion-color-primary);
      border-radius: 20px;
      padding: 10px;
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
  </style>
  