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
          <ion-segment-button value="playlists">
            <ion-label>Playlists</ion-label>
          </ion-segment-button>
          <ion-segment-button value="artists">
            <ion-label>Artists</ion-label>
          </ion-segment-button>
          <ion-segment-button value="albums">
            <ion-label>Albums</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSegment, IonLabel, IonSegmentButton, } from '@ionic/vue';
import { searchOutline, addOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'Library',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, IonSegment, IonLabel, IonSegmentButton, },
  setup() {
    return {
      searchOutline,
      addOutline,
    }
  },
  data() {
    return {
      title: 'Library',
      selectedTab: 'playlists',
    }
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
  top: 16px;
  padding: 10px 0;
  background: var(--ion-background-color);

  ion-segment {
    margin: 0 16px;
    width: calc(100% - 16px * 2);
  }
}

</style>
