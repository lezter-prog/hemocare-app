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
                <ion-input ref="emailRef" @keyup="makeEmailUserName" type="email" labelPlacement="floating" label="Email" required></ion-input>
              </ion-item>
          </ion-item-group>

          <ion-item-group>
            <ion-item-divider>
              <ion-label> Login Information </ion-label>
            </ion-item-divider>
            <ion-item>
                <ion-input ref="userNameRef" type="email" labelPlacement="floating" label="Username" required readonly></ion-input>
            </ion-item>
            <ion-item>
                <ion-input ref="passwordRef" type="password" labelPlacement="floating" label="Password" required></ion-input>
              </ion-item>
            <ion-item>
                <ion-input ref="retypePassordRef" type="password" labelPlacement="floating" label="Re-enter Password" required></ion-input>
            </ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col class="ion-justify-content-center">
                    <ion-button @click="createLoginInfo" type="button" color="primary"  expand="block" >Save</ion-button>
                    <ion-button type="button" color="primary"  expand="block" router-link="./login" router-direction="forward">Login</ion-button>
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
    import { Storage } from '@ionic/storage';
    // import { useInternalStorage } from '../composable/InternalStorage';
    import { useAppWriteAccount } from '../composable/useAppWriteAccount';

    // const { saveUsersInfo } = useInternalStorage();
    const { createAccount } = useAppWriteAccount();
    const ionRouter = useIonRouter();
    const nameRef = ref();
    const contactRef = ref();
    const emailRef = ref();
    const ageRef = ref();
    // const passwordRef = ref();
    // const confirmationPassRef = ref();
    const userNameRef = ref();
    const passwordRef = ref();
    const retypePassordRef = ref();

    const store = new Storage();
    store.create();

    const makeEmailUserName =()=>{
      userNameRef.value.$el.value = emailRef.value.$el.value;
    }

    const saveUserInformation = async ()=>{
      console.log("Saving Started");
      // try {
      //   const saving = await saveUsersInfo(
      //         nameRef.value.$el.value,
      //         ageRef.value.$el.value,
      //         contactRef.value.$el.value,
      //         emailRef.value.$el.value,
      //         );

      //   if(saving?.error) throw saving.error;
      //   const alert = await alertController.create({
      //     header: 'Success',
      //     subHeader: 'Saving Information Success',
      //     message: '',
      //     buttons: ['OK'],
      //   });
      //   await alert.present();
      //   // ionRouter.navigate('/hemo/', 'forward', 'replace');
      // } catch (error) {
      //   const alert = await alertController.create({
      //     header: 'Error',
      //     subHeader: 'Failed Registration',
      //     message: (error as Error).message,
      //     buttons: ['OK'],
      //   });
      //   await alert.present();
      // }
     
    }

    const createLoginInfo = async ()=>{

      if(passwordRef.value.$el.value == retypePassordRef.value.$el.value){
        if(passwordRef.value.$el.value.length >=8){
          try{
            const create = await createAccount(
            emailRef.value.$el.value,
            passwordRef.value.$el.value,
            nameRef.value.$el.value
            )
            if(create.error == null){
              store.set('email',emailRef.value.$el.value);
              store.set('password',passwordRef.value.$el.value);
              const alertButtons = [
                  {
                    text: 'OK',
                    role: 'confirm',
                    handler: () => {
                      ionRouter.navigate('/login', 'forward', 'replace');
                    },
                  },
                ];

              const alert = await alertController.create({
                header: 'Success',
                subHeader: 'Account Creation Success',
                message: '',
                buttons: alertButtons,
              });
              await alert.present();
            }else{
              return{
                data:create,
                error:create.error
              }
            }
          }catch(error){
            const alert = await alertController.create({
              header: 'Error',
              subHeader: 'Account Creation Failed',
              message: (error as Error).message,
              buttons: ['OK'],
            });
            await alert.present();
          }

        }else{
          const alert = await alertController.create({
          header: 'Error',
          subHeader: 'Failed Registration',
          message: 'Invalid Password, The required password length is 8',
          buttons: ['OK'],
          });
          await alert.present();
          return;
        }

      }else{
        const alert = await alertController.create({
          header: 'Error',
          subHeader: 'Failed Registration',
          message: 'Password are not Equal',
          buttons: ['OK'],
        });
        await alert.present();
        return;
      }
    }
  </script>
  
  
