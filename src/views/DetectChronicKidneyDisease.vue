<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>How to detect chronic kidney disease</ion-title>
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
                <img src="/public/ckd/84.png" alt="">
            </ion-row>
            
            <ion-grid>
                <ion-row>
                <ion-col size="auto"><img src="/public/ckd/85.png" alt="" width="100" height="100"></ion-col>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                            As you embark on hemodialysis, various adjustments to your daily routine may be necessary. Your physician likely emphasized the potential need for dietary modifications. Your well-being will be influenced by factors such as:
                        </ion-text>
                </ion-col>
                
                </ion-row>
            </ion-grid>
             
            <ion-grid>
                <ion-row>
                <ion-col size="auto"><img src="/public/ckd/86.png" alt="" width="200" height="150"></ion-col>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                    But it can be detected by simple tests: a urine test to check if there is any protein in your urine, 
                    or a blood test to measure the level of creatinine in your blood.
                        </ion-text>
                </ion-col>
                
                </ion-row>
            </ion-grid>

            <ion-text class="" style="text-transform: none;font-weight: normal; font-size: x-large;">
                Signs of advancing CKD include: 
                        </ion-text>
            <ion-grid style="text-align:left ;">
                <ion-row>
             
            <ul>
                <li>swollen ankles</li>
                <li>fatigue</li>
                <li>difficulty concentrating</li>
                <li>decreased appetite</li>
                <li>foamy urine</li>
            </ul>
                
                <ion-col size="auto"><img src="/public/ckd/87.png" alt="" width="150" height="150"></ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-row>
                <img src="/public/ckd/88.png" alt="" width="500" height="700">
            </ion-row>

            <ion-text class="" style="text-transform: none;font-weight: normal; font-size: x-large;margin-top:10px; text-align: left;">
                Can Chronic Kidney Disease affect my health in other ways?  
            </ion-text>
            <ion-row>
                <ion-text class="" style="text-transform: none;font-weight: normal; ">
                People with chronic kidney disease can develop:
                <ul>
                <li>High blood pressure</li>
                <li>Heart attack and stroke</li>
                <li>Anemia (low number of red blood cells)</li>
                <li>Bone disease</li>
            </ul>
              </ion-text>
            </ion-row> 
            <ion-row>
                <img src="/public/ckd/89.png" alt="" width="500" height="200">
            </ion-row>
            <ion-row>
                <ion-text class="" style="text-transform: none;font-weight: normal; text-align: left ">
                    Controlling blood pressure is very important.
                <ul>
                <li>The goal is to keep your blood pressure below 140/80 (usually stated as “140 over 80”).</li>
                <li>Many people need to take several medicines to get to this blood pressure goal. </li>
                <li>If you have side effects or want to stop the medicines for any reason, be sure to discuss this with your doctor first.</li>
                <li>Medicine is just one step to lowering your blood pressure and cholesterol. </li>
                <li>You should also: Get regular exercise. Talk with your doctor about what is best for you.</li>
            </ul>
              </ion-text>
            </ion-row>
            <ion-text class="" style="text-transform: none;font-weight: normal; font-size: x-large;margin-top:10px">
                TAKE ACTION!
            </ion-text>
            
            <ion-grid>
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                    Early detection of kidney disease can help to prevent the progression of the disease. 
                    This means you are less likely to experience kidney failure and need dialysis or a kidney
                    transplant to keep you alive.
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/ckd/90.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-grid>
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                    If you have risk factors for kidney disease, it is important that you have a regular 
                    Kidney Health Check with your General Physician or health service. 

                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/ckd/91.png" alt="" width="150" height="100"></ion-col>
                </ion-row>
            </ion-grid>
           
            <ion-grid>
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                    A Kidney Health Check doesn’t take long and can be done by your General Physician. 
                    It involves simple blood and urine tests together with a blood pressure check.

                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/ckd/92.png" alt="" width="150" height="100"></ion-col>
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
  