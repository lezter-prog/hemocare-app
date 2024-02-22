<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-title>HELLO!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
        <ion-grid>
            <ion-row class="mb-3">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                <h1>Schedule</h1>
              </ion-text>
              </ion-col>
            </ion-row>
            <ion-row class="ion-margin-top">
              <ion-col class="flex ion-justify-content-center">
                <div class="border-circle">
                  <img class="middle-icon" src="/public/schedule.png" />
                </div>
              </ion-col>
            </ion-row>
            <ion-row style="margin-top: 3rem;">
             
              <ion-col class="ion-justify-content-center">
                <!-- <ion-button shape="round" size="large"> Records</ion-button> -->
                <ion-button shape="round" color="light" size="large"  router-link="/hemo/schedule/list" router-direction="forward">
                    <!-- <ion-icon :icon="listSharp" size="large"></ion-icon> -->
                    Schedule
                  </ion-button>
              </ion-col>
            </ion-row>
           
            <ion-row style="margin: 3rem 0 1rem 1rem;">
             <ion-col size="10" class="ion-justify-content-center ">
               <!-- <ion-button shape="round" size="large"> Records</ion-button> -->
               <ion-card style="margin: 0;">
  
                <ion-card-content style="text-transform: none;">
                {{ tip }}
                </ion-card-content>
              </ion-card>
             </ion-col>
             <ion-col class="">
                <img src="/public/kidney1.png" height="70" alt="">
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
    IonCard,
    IonCardContent
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { useAppWriteAccount } from '../composable/useAppWriteAccount';
  import { ref,onMounted } from 'vue';
  import tiplist from '../composable/TipList.json';
  
  const { accountSession } =  useAppWriteAccount();
  
  const tips =  ref(tiplist);
  let randomId = Math.floor(Math.random() * tips.value.length) + 1;
  tips.value[randomId-1];
  const tip = ref(tips.value[randomId-1]);
  setInterval(storeTip, 5000);
  
  const initialize = async () => {
       
       const response = await accountSession();
       console.log(response);
       
    };
  
      onMounted(()=>initialize())
  
      
  
  function storeTip(){
    let randomId = Math.floor(Math.random() * tips.value.length) + 1;
    tip.value = tips.value[randomId-1];
  }
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
  