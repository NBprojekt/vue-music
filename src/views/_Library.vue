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
    
      <div class="static-segments">
        <ion-segment @ionChange="segmentChanged($event)" :value="selectedTab">
          <ion-segment-button value="0">
            <ion-label>Playlists</ion-label>
          </ion-segment-button>
          <ion-segment-button value="1">
            <ion-label>Artists</ion-label>
          </ion-segment-button>
          <ion-segment-button value="2">
            <ion-label>Albums</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <div class="library-items-wrap">
        <div class="library-item" :style="`transform: translateX(-${selectedTab * 100}%)`">
          <playlist-list-item v-for="playlist in playlists" :key="playlist" :playlist="playlist" />
        </div>
        <div class="library-item" :style="`transform: translateX(-${selectedTab * 100}%)`">
          <artist-list-item v-for="artist in artists" :key="artist" :artist="artist" />
        </div>
        <div class="library-item" :style="`transform: translateX(-${selectedTab * 100}%)`">
          Albums
        </div>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSegment, IonLabel, IonSegmentButton, } from '@ionic/vue';
import { searchOutline, addOutline } from 'ionicons/icons';

import { dataService } from '@/services/data.service';

import { Playlists } from '@/types/playlist.type';
import { Artists } from '@/types/artist.type';

import PlaylistListItem from '@/components/playlist-list-item.component.vue';
import ArtistListItem from '@/components/artist-list-item.component.vue';

export default defineComponent({
  name: 'Library',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonSegment, IonLabel, IonSegmentButton, PlaylistListItem, ArtistListItem },
  setup() {
    return {
      searchOutline,
      addOutline,
    }
  },
  data() {
    return {
      title: 'Library',
      selectedTab: 0,
      playlists: [] as Playlists,
      artists: [] as Artists,
    }
  },
  async created() {
    this.playlists = await dataService.getPlaylists();
    this.artists = await dataService.getArtists();
  },
  methods: {
    segmentChanged(event: CustomEvent) {
      this.selectedTab = event.detail.value;
      console.log(`Selected tab changed: ${this.selectedTab}`, event);
    }
  }
});
</script>

<style lang="scss" scoped>

.static-segments {
  position: sticky;
  top: -1px;
  padding: 32px 0 16px;
  background: var(--ion-background-color);
  z-index: 10;

  ion-segment {
    margin: 0 16px;
    width: calc(100% - 16px * 2);
  }
}

.library-items-wrap {
  position: absolute;
  display: flex;
  top: 0;
  height: 100%;

  .library-item {
    height: 100%;
    transition: .3s;
    flex: 0 0 100%;
    margin-top: 175px;
    padding: 0 16px 0;
    overflow-y: auto;
  }
}

</style>
