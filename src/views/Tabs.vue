<template>
  <ion-page>
    <ion-tabs>
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
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, search, library } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home, 
      search, 
      library,
    }
  }
}
</script>


<style lang="scss">
.tab-toolbar {
  padding-top: 51px!important;
  --border-width: 0!important;
  
  ion-icon {
    margin-left: 15px;
  }
}
</style>
