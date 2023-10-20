<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-title>HELLO!</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row class="mb-3">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                <h1>My Records</h1>
              </ion-text>
              </ion-col>
            </ion-row>
            <ion-row style="margin-top: 3rem;">
              <ion-col class="ion-justify-content-center">
                <ion-text color="light" style="font-family: tt-lake-bold;">
                <h5>FLUID</h5>
                </ion-text>
                <ion-button class="output" shape="round"  size="large" router-link="./fluid/intake" router-direction="forward"  >
                    <ion-icon :icon="water" size="large"></ion-icon>
                  </ion-button>
              </ion-col>
              <ion-col class="ion-justify-content-center">
                <ion-text color="light">
                  <h5>Records</h5>
                </ion-text>
                <!-- <ion-button shape="round" size="large"> Records</ion-button> -->
                <ion-button class="records" shape="round"  size="large">
                    <ion-icon :icon="listSharp" size="large"></ion-icon>
                  </ion-button>
              </ion-col>
            </ion-row>
           
            <ion-row class="ion-margin-top">
              <ion-col class="flex ion-justify-content-center">
                <ion-segment value="default" color="light">
                    <ion-segment-button value="today">
                    <ion-label>Today</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="yesterday">
                    <ion-label>Yesterday</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="lastSeverDays">
                    <ion-label>7 Days</ion-label>
                    </ion-segment-button>
                </ion-segment>
              </ion-col>
            </ion-row>
           
            <ion-row class="ion-margin-top">
              <ion-col class="flex ion-justify-content-center">
                Sample
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
    IonLabel, IonSegment, IonSegmentButton
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { useAppWriteAccount } from '../../composable/useAppWriteAccount';
  import { ref,onMounted } from 'vue';
  
  const { accountSession } =  useAppWriteAccount();
  
  
  const initialize = async () => {
       const response = await accountSession();
       console.log(response);
    };
  
      onMounted(()=>initialize())
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
  