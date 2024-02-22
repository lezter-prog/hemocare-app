<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Schedule</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Create Schedule</ion-title>
        </ion-toolbar>
      </ion-header>
      <form @submit.prevent="addNewSchedule" >
        <ion-list>
          <ion-item-group>
            <ion-item>
                <!-- <ion-input ref="medecineTypeRef" type="text" labelPlacement="floating" label="Medecine Type" required></ion-input> -->
                <ion-select ref="scheduleType" label="Schedule Type" interface="popover" aria-required="true">
                  <ion-select-option value="Hemo Dialysis">Hemo Dialysis</ion-select-option>
                  <ion-select-option value="Laboratory">Laboratory</ion-select-option>
                  <ion-select-option value="Check-Up">Check-Up</ion-select-option>
                </ion-select>
            </ion-item>
            <!-- <ion-item>
                <ion-datetime presentation="date-time"  locale="en-GB-u-hc-h12"></ion-datetime>
            </ion-item> -->
            <ion-item-divider>
              <ion-label> Schedule </ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-radio-group >
                <ion-radio value="oneDay"  @click="calendarTypeCheck('oneday')">One day</ion-radio><br />
                
                <div v-if="isOneDay" style="width:100%">
                    <ion-datetime presentation="date-time" :min="moment(new Date()).format('YYYY-MM-DDTss:mm')"  @ion-change="datetimeChange" ></ion-datetime>
                </div>
                <ion-radio value="mutiple"  @click="calendarTypeCheck('multiple')">Multiple</ion-radio><br />
                <div v-if="isMultiple" >
                    <ion-datetime presentation="date" :multiple="true" :min="moment(new Date()).format('YYYY-MM-DDTss:mm')"   @ion-change="dateChange" :value="[moment(new Date()).format('YYYY-MM-DD')]"></ion-datetime>
                    <ion-datetime presentation="time" style="justify-content:right" @ion-change="timeChange" ref="timeRef" value="00:00"></ion-datetime>
                </div>
              </ion-radio-group>
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
      <ion-modal :keep-contents-mounted="true">
        <!-- <ion-datetime id="time" ref="selectedTimeRef" presentation="time" ></ion-datetime> -->
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
     useIonRouter,
     IonSelect, IonSelectOption,
     IonIcon,
    } from '@ionic/vue';
    import {ref, defineComponent} from 'vue';
    import { Storage } from '@ionic/storage';
    import { useAppWriteSchedule } from '../../composable/useAppWriteSchedule';
    // import { useAppWriteAccount } from '.../composable/useAppWriteAccount';
    import  { localNotif } from '../../composable/LocalNotification';
    import moment from 'moment';
    import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star,download, time } from 'ionicons/icons'; 

    const { inputSchedule } = useAppWriteSchedule();
    const { notify,schedule,onceAday,twiceADay,everyFourHours,everySixHours, getPending } = localNotif();
    const ionRouter = useIonRouter();
    const medecineNameRef = ref();
    const amountRef = ref();
    const medecineTypeRef = ref();
    const arrayDays = new Array();
    const scheduleType = ref();
    const scheduleRef = ref();
    const isOneDay = ref(false);
    const isMultiple = ref(false);
    const selectedDateRef = ref(null);
    const selectedTimeRef = ref(null);
    const timeRef = ref(null);
    const selectedOneDate = ref(null);

    const store = new Storage();
    store.create();

    const calendarTypeCheck = (value:string)=>{
     
      if(value == "oneday"){
        isOneDay.value =true;
        isMultiple.value = false;
      
      }else if(value == "multiple"){
        isOneDay.value =false;
        isMultiple.value = true;
      }else{
        isOneDay.value =false;
        isMultiple.value = false;
      }
      scheduleRef.value = value;
      
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

    const datetimeChange = (event:Event) =>{
        console.log(event?.target.value);
        selectedOneDate.value=event?.target.value;
    }
    const dateChange = (event:Event) =>{
        console.log(event?.target.value);
        selectedDateRef.value=event?.target.value;
    }
    const timeChange = (event:Event) =>{
        console.log(event?.target.value);
        selectedTimeRef.value=event?.target.value;
    }

    const addNewSchedule = async ()=>{
     
      // console.log(timeRef.value.$el.confirm());
      var message = "";
      

      var type = scheduleType.value.$el.value 
      var datetime =  selectedOneDate.value;
      var date =  selectedDateRef.value;
      var time =  selectedTimeRef.value??'';
      try{

         

          if(type == undefined){
            message = "Required All fields";
            await alertTime(message);
            return;
          }

          if(scheduleType.value == undefined){
            message = "Required All fields";
            await alertTime(message);
            return;
          }

          if(scheduleRef.value == "oneday"){
            console.log(selectedOneDate.value);
            if(datetime == null){
              message = "The current Date is not allowed for schedule";
              await alertTime(message);
              return;
            }
          }else if(scheduleRef.value == "multiple"){
            if(date == null){
              message = "The current Date is not allowed for schedule";
              await alertTime(message);
              return;
            }

            if(time == null){
                time ="12:00 am"
            }
          }

          
          var scheduleArray:String[] =[];
          if(datetime != null){
            scheduleArray.push(datetime);
          }else{
            scheduleArray = date??[];
            console.log(scheduleArray)
            // time =moment().format('')
          }
         
         const create =  await inputSchedule(scheduleArray,time,"",type);
          console.log(create)
          if(create.data !=undefined){
            ionRouter.navigate('.','forward','replace');
          }



        

      }catch(error){
        message = (error as Error).message;
        await alertTime(message);
      }

     
    }

    const createSchedule = ()=>{
      console.log(scheduleRef.value);
        return "";
    }


    const alertTime = async(message:string)=>{
      const alert = await alertController.create({
            header: 'Error',
            subHeader: 'Saving Schedule Failed',
            message: message,
            buttons: ['OK'],
          });
          await alert.present();
    }
  </script>
  <style>
  button#date-button{
    display: none !important;
  }
  </style>
  
  
