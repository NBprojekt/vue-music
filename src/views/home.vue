<template>
  <ion-page>
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ greeting }} </ion-title>

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

    <ion-content :fullscreen="true">
      <playlist-grid :playlists="playlists"/>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons } from '@ionic/vue';
import { timeOutline, settingsOutline } from 'ionicons/icons';

import { Playlists } from '@/types/playlist.type';

import PlaylistGrid from '@/components/playlist-grid.component.vue';

import { dataService } from '@/services/data.service';

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
      playlists: [] as Playlists,
      greeting: 'Hello'
    }
  },
  async created() {
    this.playlists = await dataService.getPlaylists();

    const hours = new Date().getHours();

    if (hours > 18) {
      this.greeting = 'Good Evening';
    } else if (hours > 12) {
      this.greeting = 'Good Day';
    } else {
      this.greeting = 'Good Morning';
    }
  },
});
</script>
