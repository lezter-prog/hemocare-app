<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
          <ion-title>Login </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col class="flex-wrap ion-justify-content-center">
                <img class="ion-w-full" src="/public/Hemocare.png"/>
                <ion-text color="secondary">
                <h2>Welcome to Hemocare</h2>
            </ion-text>
            </ion-col>
        </ion-row>
        </ion-grid>
       
        <form @submit.prevent="loginSubmit">
        <ion-list>
            <ion-item>
                <ion-input ref="emailRef" type="text" labelPlacement="floating" label="Email" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-input ref="passwordRef" type="password" labelPlacement="floating" label="Password" required></ion-input>
              </ion-item>
            <ion-item>
              <ion-button type="submit" color="primary"  expand="block" >Login</ion-button>         
              <ion-button @click="registerRedirect" type="button" color="secondary"  expand="block" >Register</ion-button>     
            </ion-item>
        </ion-list>
      </form>
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
    IonInput,
    alertController,
    IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, useIonRouter
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star } from 'ionicons/icons';
   import { useAppWriteAccount } from '../composable/useAppWriteAccount';
   import { ref,onMounted } from 'vue'
   import { Storage } from '@ionic/storage';
   const { login } = useAppWriteAccount();

   

    const emailRef = ref();
    const passwordRef = ref();
    const tokenRef = ref();
    const isAlreadyRegistered = ref(null);
    const ionRouter = useIonRouter();
    const store = new Storage();
    store.create();

    const initialize = async () => {
      console.log(emailRef.value.$el.value);
      isAlreadyRegistered.value = await store.get('usersInfo');
      var email = await store.get('email');
      var password = await store.get('password');
      emailRef.value.$el.value =  email;
      passwordRef.value.$el.value = password;
  };

    onMounted(()=>initialize())

    const loginSubmit = async () =>{
      
        try {

          const response = await login(
            emailRef.value.$el.value,
            passwordRef.value.$el.value
            )

            console.log(response);
          if(response?.error) throw response.error;
          store.set('email',emailRef.value.$el.value);
          store.set('password',passwordRef.value.$el.value);

          ionRouter.navigate('/hemo/', 'forward', 'replace');

        }catch (error) {
          const alert = await alertController.create({
              header: 'Error',
              subHeader: 'Login Failed',
              message: (error as Error).message,
              buttons: ['OK'],
            });
          await alert.present();
      }
    };

   const registerRedirect = () =>{
    ionRouter.navigate('/register/', 'forward', 'replace');
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
  