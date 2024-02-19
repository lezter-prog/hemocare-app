<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>DIETARY TIPS</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
        <ion-grid style="background-color: white;">
            <ion-row >
              <ion-row>
                <img src="/public/dietary/57.png" alt="">
             </ion-row> 
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">CREATE YOUR DIET PLAN</h1>
                </ion-text>
                <div style="background-color: white; ">
                    
                     
                    <ion-button fill="clear" router-link="post/dietary/tips" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <img src="/public/care3.webp"/>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">Diet Advice</h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/diet/advice" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <ion-row>
                <img src="/public/ckd/84.png" alt="">
             </ion-row>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">HOW TO DETECT CHRONIC KIDNEY DISEASE (CKD)? </h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/chronic-disease" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <ion-row>
                <img src="/public/reminders/93.png" alt="" style="height:300px; width:500px;">
             </ion-row>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">REMINDERS</h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/reminders" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <ion-row>
                <img src="/public/kidney/100.png" alt="">
             </ion-row>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">Did You know that your kidneys</h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/about-kidneys" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <ion-row>
                <img src="/public/gold/110.png" alt="">
            </ion-row>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">8 Golden Rules</h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/8-golden-rules" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>

            <ion-row >
              <ion-row>
                <img src="/public/nutrition/ENGLISH/127.png" alt="">
            </ion-row>
                <ion-col style="display: flex;justify-content: space-between;flex-direction: row;">
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 23px;">How to read nutrition facts</h1>
                </ion-text>
                <div style="background-color: white; ">
                    <ion-button fill="clear" router-link="post/nutrition-facts" router-direction="forward" >
                       Read Article
                        <ion-icon  slot="end" :icon="chevronForward"></ion-icon>
                   </ion-button>
                </div>
               </ion-col>
            </ion-row>
            

          
        </ion-grid>
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
    IonBackButton,
    IonButtons,
    IonImg
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star,chevronForward } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { useAppWriteAccount } from '../composable/useAppWriteAccount';
  import { ref,onMounted } from 'vue';
  
  
  const { accountSession } =  useAppWriteAccount();
  
  
  const initialize = async () => {
       
       const response = await accountSession();
       console.log(response);
    };
  
      onMounted(()=>initialize())
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
      /* background-color: #A6DAF1; */
    }
    ion-button.records{
      width: 6rem;
      height: 6rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      /* background-color: #A6DAF1; */
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
  