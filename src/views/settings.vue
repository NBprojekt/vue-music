<template>
  <ion-page class="ion-page">
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/"></ion-back-button>
            </ion-buttons>

          <ion-title> {{ title }} </ion-title>
        </ion-toolbar>
      </ion-header>
    
    <ion-content :fullscreen="true">
    
      <ExploreContainer name="Kurwa" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, } from '@ionic/vue';
import { timeOutline, settingsOutline } from 'ionicons/icons';

import ExploreContainer from '@/components/explore-container.component.vue';

export default defineComponent({
  name: 'Settings',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, },
  setup() {
    return {
      timeOutline,
      settingsOutline,
    }
  },
  data() {
    return {
      title: 'Settings',
    }
  },
});
</script>
