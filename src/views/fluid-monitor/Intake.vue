<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>Intake</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpenHelp(true)" color="light" shape="round" fill="outline" size="small">
              <ion-icon :icon="help"></ion-icon>
            </ion-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="ruler">
          <img src="/public/ruler.png" style="width: 100%;height: 99%;" alt="">
        </div>
        <div class="monitoring-page">
          <div class="water-ctr">
            <div :class="liquid"></div>
          </div>
        </div>
        <div class="in-water">
              <ion-grid style="position: relative;">
                <ion-row class="">
                  <ion-col class=" ion-justify-content-center">
                    <ion-text color="light" style="font-size: 21px;">
                      {{currentDate}}
                    </ion-text>
                  </ion-col>
                </ion-row>
                <ion-row style="margin-top: 4rem;">
                  <ion-col class="ion-justify-content-center" style="display: flex;flex-direction: column;">
                    <ion-text :class="measurement" >
                      {{ count }}<span style="font-size: 2rem;">ml</span>
                    </ion-text>
                    <ion-text v-if="exceedimgLimit" >
                      WARNING: EXCEEDING LIMIT
                    </ion-text>
                  </ion-col>
                </ion-row>
                <ion-row class="ion-margin-top">
                  <ion-col class="health-tips  ion-justify-content-center">
                    <ion-text class="" >
                      this is a sample health tip for the sample user
                    </ion-text>
                  </ion-col>
                </ion-row>
                <!-- <ion-row class="bottom-row ">
                  <ion-col class="  ion-justify-content-center">
                    <ion-button @click="addFluid" class="intake"  color="#9FDBF3"  shape="round"  size="large">
                      <ion-icon :icon="add" class="large-icon" aria-hidden="true"></ion-icon>
                    </ion-button>
                  </ion-col>
                  <ion-col class="  ion-justify-content-center">
                    <ion-button @click="minusFluid" class="remove" color="#9FDBF3" shape="round" size="large">
                      <ion-icon :icon="remove" class="large-icon" size="large" ></ion-icon>
                    </ion-button>
                  </ion-col>
                </ion-row> -->
            </ion-grid>
            </div>
            <div class="buttons">
                  <ion-button @click="addFluid" class="intake"  color="#9FDBF3"  shape="round"  size="large">
                      <ion-icon :icon="add" class="large-icon" aria-hidden="true"></ion-icon>
                    </ion-button>
                  <ion-button @click="minusFluid" class="remove" color="#9FDBF3" shape="round" size="large">
                      <ion-icon :icon="remove" class="large-icon" size="large" ></ion-icon>
                    </ion-button>

            </div>
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
       
        <ion-alert
          :is-open="isOpen"
          header="Warning"
          sub-header="Fuild Exceeded"
          message="You have reached the maximum amount of fluid per day"
          :buttons="alertButtons"
          @didDismiss="setOpen(false)"
        ></ion-alert>
        <ion-alert
          :is-open="isOpenHelp"
          header="Information"
          sub-header=""
          message="Tap the plus button input the fluid intake, every tap is equivalent to 250ml fluid, tap the minus button to decrease"
          :buttons="alertButtons"
          @didDismiss="setOpenHelp(false)"
          
        ></ion-alert>
        <ion-alert
          :is-open="screenSizeAlert"
          header="Warning"
          sub-header="Screen width/height is too wide"
          message="please use normal width/height size device"
          :buttons="redirect"
          @didDismiss="setOpen(false)"
        ></ion-alert>
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
    IonAlert,
    IonBackButton,
    useIonRouter
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, ellipsisVertical, water, listSharp, logOut, remove ,help} from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { ref,onMounted, onBeforeMount} from 'vue'
  import moment from 'moment';
  import { useAppwiteFluid } from '../../composable/useAppWriteFluid';

  const { checkTodaysEntry,inputFluid,reduceFluid  } = useAppwiteFluid();

  const ionRouter = useIonRouter();

  const isOpen = ref(false);
  const isOpenHelp = ref(false);
  const screenSizeAlert = ref(false);
  const exceedimgLimit = ref(false);
  const alertButtons = ['Continue'];
  const redirect = [{
      text: 'OK',
      role: 'confirm',
      handler: () => {
        ionRouter.navigate('/hemo/', 'forward', 'replace');
      },
    },];
  const liquid = ref('water');
  const count = ref(0);
  const currentDate = ref(moment(new Date()).format('MMM-DD-YYYY'));
  const measurement = ref("measurement");
  const innerWeight = ref(window.innerWidth);
  const innerHeight = ref(window.innerHeight);

  onBeforeMount(async () => {
    const response =  await checkTodaysEntry();
    count.value = response.data?.documents[0].total_fluid_taken_ml;
    if(count.value>0){
      measurement.value="measurement-good"
    }else if(count.value>1000){
      measurement.value="measurement-bad"
    }
    
  })

  onMounted(async () => {
    if(innerWeight.value >600 || innerHeight.value >900){
      screenSizeAlert.value =true;
    }
  });

  const addFluid = async ()=>{
    const input = await inputFluid();
    count.value = count.value+250;
    if(count.value>0){
      measurement.value="measurement-good"
    }
    if(count.value>1000){
      exceedimgLimit.value=true;
      measurement.value="measurement-bad"
      setOpen(true);
      liquid.value = "water-over"
    }else{
      liquid.value = "water-"+count.value
    }
  }

  const minusFluid = async ()=>{
    console.log(count.value);
    if(count.value>0){
      measurement.value="measurement-good"
    }
    if(count.value ==0){
      // liquid.value = "liquid-"+0;
      // count.value = 0;
    }else{
      const reduce = await reduceFluid();
      count.value = count.value-250;
        if(count.value>1000){
          measurement.value="measurement-bad"
          liquid.value = "water-"+1000
        }else{
          if(count.value == 0){
            liquid.value = "water";
            measurement.value="measurement";
          }else{
            liquid.value = "water-"+count.value
          }
          exceedimgLimit.value=false;
          
        }
    }
  }

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };

  const setOpenHelp = (state: boolean) => {
    isOpenHelp.value = state;
  };

  
  </script>
  
  <style>
  ion-content{
    --background: #4479AF;
    font-family: tt-lake-bold !important;
    text-transform: uppercase;
  }
  .cup-row{
    height: 20rem;
  }
  .flex{
    display: flex;
  }
  
  
   ion-col {
      text-align: center;
    }
    ion-button.intake{
      width: 6rem;
      height: 4rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      background: #9FDBF3 !important;
      color: #fff;
    }
    ion-icon.large-icon{
     font-size: 50px !important;
    }
    ion-button.remove{
      width: 6rem;
      height: 4rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      background: #9FDBF3;
      color: #fff;
    }

    ion-text.ml-class h1{
        margin-top:4rem;
    }
    .health-tips{
      padding: 10% 30%;
      font-size: 1.4rem;  
      color: #fff;
      text-transform: uppercase;
    }
    .bottom-row{
      display: flex;
      width: 100%;
      margin-top: 60%;
      align-items: flex-end;
    }
    .buttons{
      display: flex;
      gap: 30%;
      position: absolute;
      height: 100%;
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      z-index: 20;
      padding-bottom: 30px;
    }
    .measurement{
      font-size: 4rem;
      color: #fff;
    }

    .measurement-good{
      font-size: 4rem;
      color: #000;
    }
    .measurement-bad{
      font-size: 4rem;
      color: var(--ion-color-danger);
    }

    .measuring{
      position: absolute;
      border:1px solid rgb(86, 85, 85);
      background-color: rgb(70, 126, 148);
      border-radius: 10px 10px;
      margin: 0 4rem;
      width: 12.5rem;
      height: 17rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-clip-path: polygon(0 0, 100% 0,90% 100%,10% 100%);
      clip-path:  polygon(0 0, 100% 0,90% 100%,10% 100%);
      
    }

    .top-of-cup{
      position:absolute;
      width:100%;
      height: 5%;
      border-radius: 10px 10px 10px 10px;
     
      background-color: rgba(233, 233, 233, 0.756);
    }

    .liquid-ctr{
      top:10px;
      width: 90%;
      height: 90%;
      overflow: hidden;
      background-color: rgba(98, 157, 208, 0.272);
      -webkit-clip-path: polygon(0 0, 100% 0,90% 100%,10% 100%);
      clip-path:  polygon(0 0, 100% 0,90% 100%,10% 100%);
      position: relative;
    }
    .liquid-lable{
      color: #fff;
      font-weight: 200;
      width: 170px;
      height: 10px;
      top:-400px;
      position: relative;
      z-index: 10;
    }

    .monitoring-page{
      width: 100%;
      height: 100%;
      background-color: #9FDBF3;
      display: flex;
      flex-direction: column;
      position: absolute;
    }
    .ruler{
      top:0;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 11;
    }
    .water-ctr{
      top:0;
      width: 100%;
      height: 100%;
      overflow:hidden;
      /* background-image: url('/public/ruler.png'); */
      position: relative;
    }
    .water{
      width: 3000px;
      height: 100%;
      top:65vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }

    
    .water-250{
      width: 3000px;
      height: 100%;
      top:58vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }

    .water-500{
      width: 3000px;
      height: 100%;
      top:40vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }

    .water-750{
      width: 3000px;
      height: 100%;
      top:25vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }
    .water-1000{
      width: 3000px;
      height: 100%;
      top:9vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }
    .water-over{
      width: 3000px;
      height: 100%;
      top:0vh;
      left: 0;
      background-image: url('/public/WaterWaves.png');
      background-repeat: no-repeat;
      background-size: 800px 100%;
      position: relative;
      animation: filling 3s linear infinite;
      z-index: 1;
    }
    .in-water{
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      z-index: 11;
    }


    @keyframes filling {
      0%{
        background-position-x: 0px; 
      }
      100%{
        background-position-x: -100px; 
      }
      
    }

    @media (min-width: 280px) {

     
    }
  </style>
  