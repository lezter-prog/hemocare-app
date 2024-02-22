<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary" style="text-align: center;">
      <ion-title>Schedule</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="logout"> <ion-icon :icon="logOut"></ion-icon> </ion-button>
      </ion-buttons>
    </ion-toolbar>
      <ion-searchbar show-clear-button="focus" placeholder="Search" value="" @ion-input="searchUser"></ion-searchbar>
   </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid >
        <ion-row class="ion-align-items-center"> 
          <ion-col class="ion-text-left">List of User </ion-col>
          <ion-col class="ion-text-right">
            <ion-button color="tertiary" size="small" @click="downloadXLS()"> <ion-icon :icon="download"></ion-icon> </ion-button>
          </ion-col> 
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-list >
          <ion-item v-for="(user,key) in filteredUsers" :value="key" :key="key" >
            <ion-label>{{ user.name }} </ion-label>
            <ion-button  :router-link="'/hemo/admin/schedule/view?userId='+user.$id+'&name='+user.name" router-direction="forward" >View Schedule</ion-button> 
          </ion-item>
        </ion-list>
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
  IonAccordionGroup,
  useIonRouter,
  loadingController

 } from '@ionic/vue';
 import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star,download } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { useAppWriteAccount } from '../composable/useAppWriteAccount';
import { useAppwiteFluid } from '../composable/useAppWriteFluid';
import { XLSWriter } from '../composable/ExcelWritter';
import { ref,onMounted,watch } from 'vue';
import { Storage } from '@ionic/storage';

const { accountSession, getAllUsers } =  useAppWriteAccount();
const { getLast7DaysById  } =  useAppwiteFluid();
const store = new Storage();
const ionRouter = useIonRouter();

const users = ref([]);
const filteredUsers = ref([]);
const fluidAdded =  ref(false);
const accordionKey =  ref("intial");

const initialize = async() => {
    //  const response = await accountSession();
    showLoading();
     users.value = await getAllUsers();
     filteredUsers.value = users.value.filter(data=>data.name !='Admin')

    // filteredUsers.value = await InitializeFluidIntakes();
}
onMounted(async ()=>initialize());

const InitializeFluidIntakes = async()=>{
const u = (await getAllUsers()).data.users;
return u.forEach(async (user:Object) => {
  if(user.name != "Admin"){
    const fluid = await getLast7DaysById(user.$id);
    user.sevenDaysfluids =fluid.data;
    return user;
  }
});

};

const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'Loading...',
          duration: 3000,
        });

        loading.present();
      };

const searchUser = (e:Event) =>{
    const value = e.target?.value;

    if(value != ""){
      filteredUsers.value =  users.value.filter(data =>(data.name).toUpperCase().includes(value.toUpperCase()));
    }else{
      filteredUsers.value = users.value.filter(data=>data.name !='Admin');
    }
   
}

const appendContent = (e:Event)=>{
console.log(e);
}

const viewFluid = (id:string,name:string) =>{
  ionRouter.navigate('/hemo/admin/fluid/view?userId='+id+'&name='+name, 'forward', 'replace');
}


const getFluilds = async (userId:string)=>{

   const data = await getLast7DaysById(userId);
   console.log(data);
    
    return data.data;
}

const downloadXLS =  () =>{
XLSWriter();
}

    
const logout = async ()=>{
    await store.create();
    await store.clear();
    ionRouter.navigate('/login', 'forward', 'replace');
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
