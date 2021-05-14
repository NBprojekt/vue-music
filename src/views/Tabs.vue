<template>
  <ion-page>


    <ion-tabs>
      <player-small :isColapsed="!showPlayerSmall"  @click="openPlayer()" />
      
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label> Home </ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label> Search </ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/library">
          <ion-icon :icon="library" />
          <ion-label> Library </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, search, library } from 'ionicons/icons';

import PlayerSmall from '@/components/player-small.component.vue';

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
    openPlayer() {
      console.log('Opening player');
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
