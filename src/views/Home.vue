<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ title }} </ion-title>
        
          <ion-buttons slot="end">
            <ion-button router-link="/history" routerDirection="forward" color="dark">
              <ion-icon :icon="timeOutline" size="large" />
            </ion-button>
            <ion-button router-link="/settings" routerDirection="forward" color="dark">
              <ion-icon :icon="settingsOutline" size="large" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <playlist-grid :playlists="playlists"/>
      
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons } from '@ionic/vue';
import { timeOutline, settingsOutline } from 'ionicons/icons';

import { Playlists } from '@/types/playlist.type';

import PlaylistGrid from '@/components/PlaylistGrid.vue';

import DataService from '@/services/data.service';
const dataService = new DataService();

export default defineComponent({
  name: 'Home',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonButton, IonButtons, PlaylistGrid },
  setup() {
    return {
      timeOutline,
      settingsOutline,
    }
  },
  data(): any {
    return {
      title: 'Home',
      playlists: [] as Playlists,
      test: []
    }
  },
  async created() {
    const playlists = await dataService.getPlaylists();
    console.log('Playlists', playlists);
    this.playlists = playlists;
  },
});
</script>
