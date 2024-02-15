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
                <ion-col>
                <ion-text>
                        <h1 style="margin-top:5px; font-size: 30px;">CREATE YOUR DIET PLAN</h1>
                </ion-text>
               </ion-col>
            </ion-row> 
            <ion-row>
                <ion-col >
                    <iframe width="390" height="325"
                           src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                    </iframe>


                
                <!-- <p style="font-size: 22px;">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.                
                </p>
             -->
                </ion-col>
            </ion-row> 
            <ion-row class="" style="padding: 1rem;">
              <ion-label style="margin-bottom: 1rem;font-size: x-large;">
                PART 1- EATING RIGHT
              </ion-label>
              <ion-text class="" style="text-transform: none;font-weight: normal;">
                Kung may Chronic Kidney Disease (CKD) ka, importante ang mga pagkain mo. Parang puzzle ang pagkain, kung saan bawat piraso ay nag-aambag sa kabuuang kalusugan mo. Ang pagkain nang maayos ay parang superpower na nagbibigay sayo ng balanse sa sarap ng kainan at pangangalaga sa iyong mga bato. Kaya't tara, alamin natin kung paano ang tamang pagpili ng pagkain ay makakatulong sa'yo na maging masaya at malusog araw-araw.
              </ion-text>
            </ion-row>

            <ion-row class="" style="padding: 1rem;">
              <ion-label style="margin-bottom: 1rem;font-size: x-large;">
                Choose and prepare foods with less salt and sodium
              </ion-label>
              <ion-text class="" style="text-transform: none;font-weight: normal;">
                What's up! Kung may issue ka sa kidneys, bawasan ang maaalat na pagkain para mapangalagaan natin ang kidneys mo. Ang Sobrang maaalat na pagkain ay nagdudulot ng sobrang pagod sa kidneys, at ayaw natin nun! So, keep it easy:                            
              </ion-text>
            </ion-row>

            <ion-row class="" style="padding: 1rem;">
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">1</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Pumili ng fresh, whole foods kaysa sa packaged stuff, at naising pumili ng herbs at spices kaysa sa salt para sa flavor.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">2</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Bumili ng sariwang pagkain. Maraming inihanda o naka-pack na pagkain na ibinebenta sa mga supermarket  ay naglalaman ng sodium.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">3</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Magluto ng sarili kaysa sa pagkakain ng high-sodium na inihanda tulad na lamang ng "fast" food at mga naka-lata na pagkain.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">4</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Sa tuwing ikaw ang nagluluto, ikaw ang may kompleto at buong kontrol sa dami ng asin na ilalagay mo.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">5</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">I-check ang Nutrition Facts label sa packaging ng pagkain para sa sodium. Mataas ang content ng asin sa 20% Daily Value nito.</div>
              </div>
            </ion-row>
            <ion-row class="" style="padding: 1rem;">
              <ion-label style="margin-bottom: 1rem;font-size: x-large;">
                PART II: EATING PORTIONS
              </ion-label>
              <ion-text class="" style="text-transform: none;font-weight: normal;">
                Keep it easy, tara't hanapin natin kung gaano karaming pagkain ang dapat sa plato mo, para sa balanced at kidney-friendly vibes para sa mga may CKD.
              </ion-text>
            </ion-row>
            <!-- <ion-row class="" style="padding: 1rem;">
              
              
            </ion-row> -->
            <ion-row class="" style="padding: 1rem;">
              <img src="/public/hand.png" alt="" style="margin-bottom: 10px;">
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">1</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Pumili ng fresh, whole foods kaysa sa packaged stuff, at naising pumili ng herbs at spices kaysa sa salt para sa flavor.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">2</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Bumili ng sariwang pagkain. Maraming inihanda o naka-pack na pagkain na ibinebenta sa mga supermarket  ay naglalaman ng sodium.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">3</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Magluto ng sarili kaysa sa pagkakain ng high-sodium na inihanda tulad na lamang ng "fast" food at mga naka-lata na pagkain.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">4</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">Sa tuwing ikaw ang nagluluto, ikaw ang may kompleto at buong kontrol sa dami ng asin na ilalagay mo.</div>
              </div>
              <div style="width: 100%; height: 80px;border-radius: 35px;display: flex;align-items: center;background-color: #FFE0D7;padding-left: 10px;padding: 20px 20px;margin-bottom: 10px;">
                <div style=" width: 65px;height:50px;background-color:#F3A890;border-radius: 100%;border: 1px solid white;padding: 1px;display: flex;align-items: center;justify-content: center;">5</div>
                <div style=" width: 100%;padding: 1px;text-align: center;">I-check ang Nutrition Facts label sa packaging ng pagkain para sa sodium. Mataas ang content ng asin sa 20% Daily Value nito.</div>
              </div>
            </ion-row>

            <ion-row class="" style="padding: 1rem;">
              <ion-label style="margin-bottom: 1rem;font-size: x-large;">
                PART II- DIETARY ADVICE
              </ion-label>
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
  