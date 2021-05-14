<template>
  <ion-page>


    <ion-tabs>
      <player-small :isColapsed="!showPlayerSmall"  @click="openPlayer()" />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label> Home </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label> Search </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/tabs/library">
          <ion-icon :icon="library" />
          <ion-label> Library </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, modalController } from '@ionic/vue';
import { home, search, library } from 'ionicons/icons';

import PlayerSmall from '@/components/player-small.component.vue';
import PlayerModal from '@/components/player-modal/player.modal.vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, PlayerSmall },
  setup() {
    return {
      home,
      search,
      library,
    }
  },
  data() {
    return {
      showPlayerSmall: true,
    }
  },
  methods: {
    async openPlayer() {
      console.log('Opening player');

      const modal = await modalController.create({
        component: PlayerModal,
        swipeToClose: true,
      });
      return modal.present();
    }
  }
});
</script>

<style lang="scss">
.tab-toolbar {
  padding-top: 51px!important;
  --border-width: 0!important;
  --ion-toolbar-background: transparent!important;

  ion-icon {
    margin-right: 15px;
  }
}
ion-tab-bar {
  height: 60px;
}
</style>
