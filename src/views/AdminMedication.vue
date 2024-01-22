<template>
    <ion-page>
      <ion-header>
        <ion-searchbar show-clear-button="focus" value="Search"></ion-searchbar>
     </ion-header>
      <ion-content :fullscreen="true">
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
        <ion-grid>
       <ion-accordion-group>
          <ion-accordion value="first">
            <ion-item slot="header" color="light">
              <ion-label>Allice Anderson </ion-label>
            </ion-item>
                <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    01
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    MONday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    02
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Tuesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    03
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Wednesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    04
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Thursday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    05
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Friday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
          </ion-accordion>
          <ion-accordion value="second">
            <ion-item slot="header" color="light">
              <ion-label>Benjamin Brown</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    01
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    MONday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    02
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Tuesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    03
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Wednesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    04
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Thursday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    05
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Friday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
          </ion-accordion>
          <ion-accordion value="third">
            <ion-item slot="header" color="light">
              <ion-label>Chloe Garter</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    01
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    MONday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    02
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Tuesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    03
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Wednesday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    04
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Thursday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
              <div class="ion-padding" slot="content"> 
                <ion-row>
                <ion-col>
                    05
                </ion-col>
                <ion-col>
                  700 ml
                </ion-col>
                <ion-col>
                    Friday
                </ion-col>
                <ion-col>
                    12/13/2023
                </ion-col>
                </ion-row>
              </div>
          </ion-accordion>
      </ion-accordion-group>
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
    IonSearchbar,
    IonItem, 
    IonLabel, 
    IonList,
    IonAccordion,
    IonAccordionGroup

   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
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
  