<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>Reminders</ion-title>
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
                <img src="/public/reminders/93.png" alt="">
            </ion-row>

            <ion-grid>
                <ion-row>
             <ion-col style="text-align: left;">
            <ul>
                <li>Drink enough water and fluids to urinate at least 2 to 2.5 liters daily</li>
                <li>Low Purine Diet 
                    <br>
                    <span style="color: red;">FOODS HIGH IN PURINE:</span>
                </li>
                <li>Alcohol, nuts, red meat, organ meat, shell fish, fish sauces, small fish.</li>
                
                
                <li>Decrease food rich in oxalate <span style="color: red;">FOODS HIGH IN OXALATE: </span> spinach, potato, okra, nuts, cashew, seeds, grains, legumes, tea. </li>
                
            </ul>
        </ion-col>
        
                <ion-col size="auto"><img src="/public/reminders/94.png" alt="" width="150" height="265"></ion-col>
                </ion-row>
            </ion-grid>
            
           
            <ion-grid>
                <ion-row>
                <ion-col style="text-align: left;"><ion-text class="" style="text-transform: none;font-weight: normal;">
                    <ul>
                        <li><span style="color: red;">DO NOT </span>go on a low calcium diet. Enough calcium is needed in the intestines to bind any oxalate ingested</li>

                    </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/reminders/95.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-grid>
                <ion-row>
                <ion-col style="text-align: left;"><ion-text class="" style="text-transform: none;font-weight: normal;">
                    <ul>
                        <li> Stone formers should not take vitamin C supplements, as it would be an oxalate source of Calcium Oxalate (CaOx) stone formation</li>

                    </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/reminders/96.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid>
                <ion-row>
                <ion-col style="text-align: left;"><ion-text class="" style="text-transform: none;font-weight: normal;">
                    <ul>
                        <li>Increase citrus fruits like calamansi or lemon in diet.</li>

                    </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/reminders/97.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid>
                <ion-row>
                <ion-col style="text-align: left;"><ion-text class="" style="text-transform: none;font-weight: normal;">
                    <ul>
                        <li>Low salt diet: limit salt intake to less than 1 teaspoon per day</li>

                    </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/reminders/98.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                <ion-col style="text-align: left;"><ion-text class="" style="text-transform: none;font-weight: normal;">
                    <ul>
                        <li>Consult your doctor for proper medication and monitoring</li>

                    </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/reminders/99.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>
           
            
            
          

           
           
           
            
            


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
  