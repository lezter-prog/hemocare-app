<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>   How to read Nutrition Facts</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
        <ion-grid style="background-color: white;">
            
            <ion-row>
                <img src="/public/nutrition/ENGLISH/127.png" alt="">
            </ion-row>
            <ion-text class="" style="text-transform: none;font-weight: normal; font-size: x-large;">
                What does a Nutrition Facts label do?
            </ion-text>
            
            <ion-grid>
                <ion-row>
                    <ion-col style="text-align: left;">
                    
                    <ion-text class="" style="text-transform: none;font-weight: normal;">
                        A Nutrition Facts label lists the nutritional content, the serving size, and the calories for a 
                        recommended serving of a food product. This helps consumers make the best decision on how
                         much to eat, maybe when they want to eat this food, or how they can better balance their 
                         food choices throughout the day. In addition to the Nutrition Facts label, there is also 
                         an ingredients label. This lists all ingredients in the food product from the largest amount 
                         at the beginning to the smallest amounts of ingredients at the end. This is where consumers can 
                         find information about what is in their food, such as allergies or if a product is a whole grain item.
                       </ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-row>
                <img src="/public/nutrition/ENGLISH/128.png" alt="">
                <ion-row>
                <img src="/public/nutrition/ENGLISH/129.png" alt="">
            </ion-row>
            </ion-row>
            <ion-row>
                <img src="/public/nutrition/ENGLISH/130.png" alt="">
            </ion-row>
            <ion-row>
                <img src="/public/nutrition/ENGLISH/131.png" alt="">
            </ion-row>
            <ion-row>
                <img src="/public/nutrition/ENGLISH/132.png" alt="">
            </ion-row>
            <ion-row>
                <img src="/public/nutrition/ENGLISH/133.png" alt="">
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
    IonTextarea,
    IonLabel,
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
  