<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ title }} </ion-title>
          <ion-icon :icon="searchOutline" size="large" slot="end" />
          <ion-icon :icon="addOutline" size="large" slot="end" />
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Kurwa" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, } from '@ionic/vue';
import { searchOutline, addOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/explore-container.component.vue';

export default defineComponent({
  name: 'Library',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, },
  setup() {
    return {
      searchOutline,
      addOutline,
    }
  },
  data() {
    return {
      title: 'Library',
    }
  },
});
</script>
