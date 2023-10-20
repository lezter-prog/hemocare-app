<template>

<ion-page>
      <ion-header :translucent="true" v-if="header==true">
            <ion-toolbar>
                <ion-title class="ion-text-center"> {{ title }}</ion-title>
            </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
    
      </ion-content>
    </ion-page>

</template>


<script lang="ts" setup>
import { VueElement,defineComponent} from 'vue';
import { IonTitle,IonToolbar,IonHeader,IonContent,IonPage
    } from '@ionic/vue';


defineProps({
  title: String,
  content: VueElement,
  header: Boolean
});

defineComponent({
    name:'BaseLayout',
    components:{IonTitle,IonToolbar,IonHeader,IonContent,IonPage},
    setup() {
      
    },
  });
</script>