<template>
  <ion-page>


    <ion-tabs>
      <small-player :isColapsed="!showSmallPlayer"  @click="showSmallPlayer = false" />
      
      <ion-tab-bar slot="bottom" @click="showSmallPlayer = true">
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

import SmallPlayer from '@/components/SmallPlayer.vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, SmallPlayer },
  setup() {
    return {
      home, 
      search, 
      library,
    }
  },
  data() {
    return {
      showSmallPlayer: true,
    }
  },
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
