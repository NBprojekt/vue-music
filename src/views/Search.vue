<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ title }} </ion-title>
          <ion-icon :icon="cameraOutline" size="large" slot="end" />
        </ion-toolbar>
      </ion-header>

      <ion-toolbar class="static-search">
        <div class="searchbar">
          <ion-icon :icon="searchOutline" size="large" />
          <div class="text">
            Künstler, Songs oder Podcasts
          </div>
        </div>
      </ion-toolbar>
    
      <ExploreContainer name="Kurwa" />
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, } from '@ionic/vue';
import { cameraOutline, searchOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Search',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, },
  setup() {
    return {
      cameraOutline,
      searchOutline,
    }
  },
  data() {
    return {
      title: 'Search',
    }
  },
});
</script>

<style lang="scss" scoped>
.static-search {
  position: sticky;
  top: 10px;
  width: calc(100% - 30px);
  margin: 10px 15px;
  border-radius: 4px;

  .searchbar {
    display: flex;
    align-items: center;
    padding: 5px;
    line-height: 1rem;
  }
}
</style>
