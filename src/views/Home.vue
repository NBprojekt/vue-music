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


      <playlist-grid :playlists="playlists"/>
    
      <ExploreContainer name="Kurwa" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, } from '@ionic/vue';
import { timeOutline, settingsOutline } from 'ionicons/icons';

import { Playlists } from '@/types/playlist.type';

import ExploreContainer from '@/components/ExploreContainer.vue';
import PlaylistGrid from '@/components/PlaylistGrid.vue';

import DataService from '@/services/data.service';
const dataService = new DataService();

export default  {
  name: 'Home',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, PlaylistGrid },
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
    }
  },
  async created() {
    const playlists = await dataService.getPlaylists();
    console.log('Playlists', playlists);
    this.playlists = playlists;
  },
}
</script>
