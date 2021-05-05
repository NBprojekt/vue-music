<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ title }} </ion-title>
          <ion-icon :icon="timeOutline" size="large" slot="end" />
          <ion-icon :icon="settingsOutline" size="large" slot="end" />
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Kurwa" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, } from '@ionic/vue';
import { timeOutline, settingsOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Library',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, },
  setup() {
    return {
      timeOutline,
      settingsOutline,
    }
  },
  data() {
    return {
      title: 'Library',
    }
  },
});
</script>
