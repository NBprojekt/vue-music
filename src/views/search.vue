<template>
  <ion-page>

    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar class="tab-toolbar">
          <ion-title size="large"> {{ title }} </ion-title>
          <ion-icon :icon="cameraOutline" @click="openQrCodeModal" size="large" slot="end" />
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
import { defineComponent, inject } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, modalController, } from '@ionic/vue';
import { cameraOutline, searchOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/explore-container.component.vue';
import QrCodeModal from '@/components/qr-code-modal/qr-code.modal.vue';

export default defineComponent({
  name: 'Search',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon, },
  setup() {
    const outlet: any = inject("routerOutlet");

    const openQrCodeModal = async () => {
      const top = outlet.value.$el;

      const modal = await modalController.create({
        component: QrCodeModal,
        swipeToClose: true,
        presentingElement: top,
      });
      return modal.present();
    };

    return {
      cameraOutline,
      searchOutline,
      openQrCodeModal,
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
  top: 0;
  padding: 10px 0;
  --background: var(--ion-background-color);

  .searchbar {
    display: flex;
    align-items: center;
    padding: 5px;
    line-height: 1rem;
    width: calc(100% - 30px);
    margin: 0 15px;
    border-radius: 4px;
    background: var(--ion-toolbar-background);
  }
}
</style>
