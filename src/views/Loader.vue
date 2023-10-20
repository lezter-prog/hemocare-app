<template>
    <ion-page>
        <ion-content :fullscreen="true" >
            <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large">Login</ion-title>
            </ion-toolbar>
            </ion-header>
            <ion-grid class="loading ">
                <ion-row>
                    <ion-col class="flex-wrap ion-justify-content-center">
                        <img class="ion-w-full" src="/public/Hemocare.png"/>
                        <div class="loader"></div>
                        <ion-text color="secondary">
                        <h2>Welcome to Hemocare</h2>
                    </ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
    </template>
    
    <script lang="ts" setup>
    import { 
      IonTitle,IonToolbar,IonHeader,IonContent,IonPage,
       IonItem,
       IonInput,
       IonButton,
       IonCol, 
       IonGrid, 
       IonRow,
       IonText,
  alertController,
  useIonRouter
      } from '@ionic/vue';
      
    import { defineComponent,onMounted,ref } from 'vue';
    import { Storage } from '@ionic/storage';
    import {useAppWriteAccount} from '../composable/useAppWriteAccount';
    const emailRef = ref();
    const passwordRef = ref();
    const isAlreadyRegistered = ref(null);
   
    const ionRouter = useIonRouter();
    const store = new Storage();
    store.create();
  
  const initialize = async () => {

    console.log(await store.get("usersInfo"));
    isAlreadyRegistered.value =await store.get('usersInfo');

    setTimeout(() => {
        if(isAlreadyRegistered.value === null){
            ionRouter.navigate('/register', 'forward', 'replace');
        }else{
            ionRouter.navigate('/login/', 'forward', 'replace');
        }
    }, 6000);
    
   
  };
  onMounted(() => initialize());
  
//   const accountLogin = async ()=>{
  
//     try {
//       const response = await login(
//         emailRef.value.$el.value,
//         passwordRef.value.$el.value)
//         if(response?.error) throw response.error;
//         store.set('email',emailRef.value.$el.value);
//         store.set('password',passwordRef.value.$el.value);
       
//     } catch (error) {
//       const alert = await alertController.create({
//             header: 'Error',
//             subHeader: 'Login Failed',
//             message: (error as Error).message,
//             buttons: ['OK'],
//           });
//       await alert.present();
//     }
    
//   }
    </script>
    
    <style scoped>
  .loading{
    margin:7rem;
  }
  .flex-wrap{
    display: flex;
    flex-wrap: wrap;
  }

  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    </style>
    