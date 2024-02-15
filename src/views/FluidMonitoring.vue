<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary" style="text-align: center;">
        <ion-title>HELLO!</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="logout"> <ion-icon :icon="logOut"></ion-icon> </ion-button>
        </ion-buttons>
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
              <h1>Fluid Monitoring</h1>
            </ion-text>
            </ion-col>
          </ion-row>
          <ion-row class="ion-margin-top">
            <ion-col class="flex ion-justify-content-center">
              <div class="border-circle">
                <img class="middle-icon" src="/public/glassofwater.png" />
              </div>
              <!-- <ion-button class="mainButton"  router-link="./fluid/intake" router-direction="forward" color="light" shape="round" fill="outline" size="large">
                 
                  <svg fill="#fff" height="800px" width="800px" version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 128 128" xml:space="preserve">
                  <g>
                    
                      <ellipse transform="matrix(2.101440e-02 -0.9998 0.9998 2.101440e-02 52.3718 101.6032)" cx="78.1" cy="24.1" rx="17.3" ry="17.3"/>
                    <path d="M119.4,71.8L91.1,51c-4.2-3.1-9.3-4.9-14.9-5c0,0-20.1-0.5-21-0.3l-27.6,4l-2.8-17.9l36.1,2.9L59,7.7l-37.8,8.5l0.1,1.7
                      c-1.6-1.8-4.1-2.7-6.7-2.2c-4.2,0.7-7.1,4.5-6.3,8.6l5.4,35.1c0.7,4.2,4.5,7.1,8.7,6.4l33.9-5.2l-2.1,57.1l37.7,0.7l1-47.2
                      l14.5,10.6l-0.5,31.6c0,0,0,0-0.1,0.2c-0.1,4.2,3.2,7.7,7.4,7.8c4.2,0.1,7.7-3.2,7.8-7.4l0.7-35.5C123,75.7,121.6,73.1,119.4,71.8z
                      M57.1,26.5l-23.4-9.8l22.4-5L57.1,26.5z"/>
                  </g>
                  </svg>
                </ion-button> -->
               
            </ion-col>
          </ion-row>
          <ion-row style="margin-top: 3rem;">
            <ion-col class="ion-justify-content-center">
              <!-- <ion-text color="light" style="font-family: tt-lake-bold;">
              <h5>FLUID</h5>
              </ion-text>
              <ion-button class="output" shape="round"  size="large" router-link="./fluid/intake" router-direction="forward"  >
                  <ion-icon :icon="water" size="large"></ion-icon>
                </ion-button> -->
                <ion-button shape="round" color="light" size="large" style="width:150px;" router-link="./fluid/intake" router-direction="forward" >
                  <!-- <ion-icon :icon="listSharp" size="large"></ion-icon> -->
                 Fluid
                </ion-button>
            </ion-col>
            <ion-col class="ion-justify-content-center">
              <!-- <ion-text color="light">
                <h5>Records</h5>
              </ion-text>
              <ion-button shape="round" size="large"> Records</ion-button>
              <ion-button class="records" shape="round"  size="large" router-link="./fluid/records" router-direction="forward">
                  <ion-icon :icon="listSharp" size="large"></ion-icon>
                </ion-button> -->
                <ion-button shape="round" color="light" size="large" style="width:150px;" router-link="./fluid/records" router-direction="forward" >
                  <!-- <ion-icon :icon="listSharp" size="large"></ion-icon> -->
                 Record
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
  useIonRouter
 } from '@ionic/vue';
 import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';

import { useAppWriteAccount } from '../composable/useAppWriteAccount';
import { ref,onMounted } from 'vue';
import tiplist from '../composable/TipList.json';
import { Storage } from '@ionic/storage';

  const tips =  ref(tiplist);
  let randomId = Math.floor(Math.random() * tips.value.length) + 1;
tips.value[randomId-1];
const tip = ref(tips.value[randomId-1]);
setInterval(storeTip, 5000);

const { accountSession } =  useAppWriteAccount();
const store = new Storage();
const ionRouter = useIonRouter();


const initialize = async () => {
    await store.create();
     
     const response = await accountSession();
  };

function storeTip(){
  let randomId = Math.floor(Math.random() * tips.value.length) + 1;
  tip.value = tips.value[randomId-1];
}

    onMounted(()=>initialize())

    const logout = async ()=>{
      await store.create();
      await store.clear();
      ionRouter.navigate('/login', 'forward', 'replace');
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
