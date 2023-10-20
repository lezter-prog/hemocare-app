<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Registration</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>
      <form @submit.prevent="saveUserInformation">
        <ion-list>
          

          <ion-item-group>
            <ion-item-divider>
              <ion-label> Personal Information </ion-label>
            </ion-item-divider>
            <ion-item>
                <ion-input ref="nameRef" type="text" labelPlacement="floating" label="Name" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-input ref="ageRef" type="number" labelPlacement="floating" label="Age" required></ion-input>
              </ion-item>
            <ion-item>
                <ion-input ref="contactRef" type="number" labelPlacement="floating" label="Contact Number" required></ion-input>
            </ion-item>
              <!-- <ion-item>
                <ion-label>Birthdate</ion-label>
                <ion-datetime-button datetime="datetime"></ion-datetime-button>

                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="datetime"></ion-datetime>
                </ion-modal>
              </ion-item> -->
              <ion-item>
                <ion-input ref="emailRef" type="email" labelPlacement="floating" label="Email"></ion-input>
              </ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col class="ion-justify-content-center">
                    <ion-button type="submit" color="primary"  expand="block" >Save</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
          </ion-item-group>
        </ion-list>
      </form>
    </ion-content>
  </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { 
    IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList,
    IonTitle,IonToolbar,IonHeader,IonContent,IonPage,
     IonInput,
     IonButton,
     IonCol, 
     IonGrid, 
     IonRow,
     IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
     IonBackButton, IonButtons, alertController,
     IonDatetime, IonDatetimeButton, IonModal,
     useIonRouter
    } from '@ionic/vue';
    import {ref} from 'vue';
    import { useInternalStorage } from '../composable/InternalStorage';

    const { saveUsersInfo } = useInternalStorage();
    const ionRouter = useIonRouter();
    const nameRef = ref();
    const contactRef = ref();
    const emailRef = ref();
    const ageRef = ref();
    // const passwordRef = ref();
    // const confirmationPassRef = ref();

    const saveUserInformation = async ()=>{
      console.log("Saving Started");
      try {
        const saving = await saveUsersInfo(
              nameRef.value.$el.value,
              ageRef.value.$el.value,
              contactRef.value.$el.value,
              emailRef.value.$el.value,
              );

        if(saving?.error) throw saving.error;
        console.log(saving);
        ionRouter.navigate('/hemo/', 'forward', 'replace');
      } catch (error) {
        const alert = await alertController.create({
          header: 'Error',
          subHeader: 'Failed Registration',
          message: (error as Error).message,
          buttons: ['OK'],
        });
        await alert.present();
      }
     
    }
  </script>
  
  
