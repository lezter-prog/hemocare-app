<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Add Medication</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Medication</ion-title>
        </ion-toolbar>
      </ion-header>
      <form>
        <ion-list>
          <ion-item-group>
            <ion-item>
                <ion-input ref="medecineNameRef" type="text" labelPlacement="floating" label="Medecine Name" required></ion-input>
            </ion-item>
          </ion-item-group>

          <ion-item-group>
           
            <ion-item>
                <ion-input ref="amountRef" type="text" labelPlacement="floating" label="Choose Amount/Volume of Medication" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-input ref="medecineTypeRef" type="text" labelPlacement="floating" label="Medecine Type" required></ion-input>
            </ion-item>
            <ion-item-divider>
              <ion-label> Schedule </ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-radio-group >
                <ion-radio value="oneceADay"  @click="checkIfOnceADay('onceADay')">Once a day</ion-radio><br />
                <div v-if="isOnceADay">
                  <ion-label> Select Time </ion-label><br /><ion-datetime-button datetime="time"></ion-datetime-button><br />
                </div>
                
                <ion-radio value="twiceADay"  @click="checkIfOnceADay('twiceADay')">Twice a day</ion-radio><br />
                <ion-radio value="everyFourHours"  @click="checkIfOnceADay('everyFourHours')">Every four hours</ion-radio><br />
                <ion-radio value="everySixHours"  @click="checkIfOnceADay('everySixHours')"> Every six hours</ion-radio>
              </ion-radio-group>
                <!-- <ion-checkbox label-placement="stacked" name="SUNDAY" @click="addDayToArray">Sun</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="MONDAY" @click="addDayToArray">Mon</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="TUESDAY" @click="addDayToArray">Tue</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="WEDNESDAY" @click="addDayToArray">Wed</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="THURSDAY" @click="addDayToArray">Thu</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="FRIDAY" @click="addDayToArray">Fri</ion-checkbox>
                <ion-checkbox label-placement="stacked" name="SATURDAY" @click="addDayToArray">Sat</ion-checkbox> -->
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
        <ion-datetime id="time" ref="selectedTimeRef" presentation="time" ></ion-datetime>
      </ion-modal>
     
    </ion-content>
  </ion-page>
  
  </template>
  
  <script lang="ts" setup>
  import { 
    IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList,
    IonTitle,IonToolbar,IonHeader,IonContent,IonPage,IonCheckbox,
    IonRadio, IonRadioGroup,
     IonInput,
     IonButton,
     IonCol, 
     IonGrid, 
     IonRow,
     IonBackButton, IonButtons, alertController,
     IonDatetime,IonDatetimeButton, IonAlert, IonModal,
     useIonRouter
    } from '@ionic/vue';
    import {ref, defineComponent} from 'vue';
    import { Storage } from '@ionic/storage';
    import { useAppWriteMedication } from '../composable/useAppWriteMedecine';
    import { useAppWriteAccount } from '../composable/useAppWriteAccount';
    import  { localNotif } from '../composable/LocalNotification';
    import moment from 'moment';

    

    const { inputMedication, getAllMedecineBySchedule } = useAppWriteMedication();
    const { notify,schedule,onceAday,twiceADay,everyFourHours,everySixHours } = localNotif();
    const ionRouter = useIonRouter();
    const medecineNameRef = ref();
    const amountRef = ref();
    const emailRef = ref();
    const arrayDays = new Array();
    const dateTimeRef = ref();
    const scheduleRef = ref();
    const isOnceADay = ref(false);
    const selectedTimeRef = ref();

    const store = new Storage();
    store.create();

    const checkIfOnceADay = (value:string)=>{
      console.log(scheduleRef.value);
      if(value == "onceADay"){
        isOnceADay.value =true;
      }else{
        isOnceADay.value =false;
      }
      scheduleRef.value=value;
    }


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
        if(scheduleRef.value == "onceADay"){
          scheduleRef.value = moment(selectedTimeRef.value.$el.value).format('HH:mm');
        }
        console.log(scheduleRef.value);
        const response  = await inputMedication(
          medecineNameRef.value.$el.value,
          amountRef.value.$el.value,
          scheduleRef.value
        );
        console.log(response);

        const medecines =  await getAllMedecineBySchedule(createSchedule());
        var array =  new Array<String>();
         medecines.data?.documents.forEach(data=>{
          array.push(data.name);
        })
        
        if(response?.data != undefined){
          console.log("success");
          // notify("New Medicine","You Havea new Medicine Scheduled");
          // schedule("Hemocare Medicinal Scheule","You Have schedule","");
          if(response?.data.schedule == "everySixHours"){
            everySixHours(array);
          }else if(response?.data.schedule == "everyFourHours"){
            everyFourHours(array);
          }else if(response?.data.schedule == "twiceADay"){
            twiceADay(array);
          }else{
            onceAday(array,response?.data.schedule);
          }
        }

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

    const createSchedule = ()=>{
      console.log(scheduleRef.value);
        return "";
    }
  </script>
  <style>
  button#date-button{
    display: none !important;
  }
  </style>
  
  
