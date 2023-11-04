<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Add Medecine</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Medecine</ion-title>
        </ion-toolbar>
      </ion-header>
      <form>
        <ion-list>
          <ion-item-group>
            <ion-item-divider>
              <ion-label> Medecine Information </ion-label>
            </ion-item-divider>
            <ion-item>
                <ion-input ref="medecineNameRef" type="text" labelPlacement="floating" label="Medecine Name" required></ion-input>
            </ion-item>
          </ion-item-group>

          <ion-item-group>
            <ion-item-divider>
              <ion-label> Volume Information </ion-label>
            </ion-item-divider>
           
            <ion-item>
                <ion-input ref="amountRef" type="text" labelPlacement="floating" label="Choose Amount/Volume of Medication" required></ion-input>
            </ion-item>
            <ion-item-divider>
              <ion-label> Schedule </ion-label>
            </ion-item-divider>
            <ion-item>
                <ion-checkbox label-placement="stacked" name="SUNDAY" @click="addDayToArray">Sun</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="MONDAY" @click="addDayToArray">Mon</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="TUESDAY" @click="addDayToArray">Tue</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="WEDNESDAY" @click="addDayToArray">Wed</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="THURSDAY" @click="addDayToArray">Thu</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="FRIDAY" @click="addDayToArray">Fri</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="SATURDAY" @click="addDayToArray">Sat</ion-checkbox>
            </ion-item>
            <ion-item>
                <ion-datetime-button datetime="datetime" ref="dateTimeRef"></ion-datetime-button>
            </ion-item>
              <ion-grid>
                <ion-row>
                  <ion-col class="ion-justify-content-center">
                    <ion-button @click="addNewMedecine()" type="button" color="primary"  expand="block" >Save</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
          </ion-item-group>
        </ion-list>
      </form>
      <ion-modal :keep-contents-mounted="true">
      <ion-datetime id="datetime" ref="dateTimeRef"></ion-datetime>
    </ion-modal>
    </ion-content>
  </ion-page>
  
  </template>
  
  <script lang="ts" setup>
  import { 
    IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList,
    IonTitle,IonToolbar,IonHeader,IonContent,IonPage,IonCheckbox,
     IonInput,
     IonButton,
     IonCol, 
     IonGrid, 
     IonRow,
     IonBackButton, IonButtons, alertController,
     IonDatetime, IonDatetimeButton, IonModal,
     useIonRouter
    } from '@ionic/vue';
    import {ref, defineComponent} from 'vue';
    import { Storage } from '@ionic/storage';
    import { useInternalStorage } from '../composable/InternalStorage';
    import { useAppWriteAccount } from '../composable/useAppWriteAccount';

    defineComponent({
      inheritAttrs: false
    });
    

    const { saveUsersInfo } = useInternalStorage();
    const { createAccount } = useAppWriteAccount();
    const ionRouter = useIonRouter();
    const medecineNameRef = ref();
    const amountRef = ref();
    const emailRef = ref();
    const arrayDays = new Array();
    const dateTimeRef = ref();
    const passwordRef = ref();
    const retypePassordRef = ref();

    const store = new Storage();
    store.create();


    function addDayToArray(event:any){
      event.preventDefault();
      var isChecked = !event.target.checked
      var name= event.target.name;
      if(isChecked){
        arrayDays.push(name);
      }else{
        var index = arrayDays.indexOf(name);
        if (index > -1) { // only splice array when item is found
          arrayDays.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
      console.log(arrayDays);

    }

    const addNewMedecine = async ()=>{
      try{

        }catch(error){
          const alert = await alertController.create({
            header: 'Error',
            subHeader: 'Saving Medecine Failed',
            message: (error as Error).message,
            buttons: ['OK'],
          });
          await alert.present();
        }

     
    }
  </script>
  
  
