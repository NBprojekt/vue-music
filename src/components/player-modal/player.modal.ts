
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonRange,
  modalController
} from '@ionic/vue';
import {
  chevronDownOutline,
  ellipsisHorizontalOutline,
  shuffleOutline,
  playSkipBackOutline,
  playCircle,
  pauseCircle,
  playSkipForwardOutline,
  repeatOutline,
} from 'ionicons/icons';

import SongsModal from '../song-modal/song.modal.vue';

export default defineComponent({
  name: 'PlayerModal',
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonRange, },
  setup() {
    return {
      chevronDownOutline,
      ellipsisHorizontalOutline,
      shuffleOutline,
      playSkipBackOutline,
      playCircle,
      pauseCircle,
      playSkipForwardOutline,
      repeatOutline,
    }
  },
  data() {
    return {
      isPlaying: false,
      isShuffling: false,
      isRepeating: false,
      isRepeatingOnlyOne: false,
      showUi: true,
      showCanvas: true,
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    async openOptions(): Promise<void> {
      console.log('Open options');

      const modal = await modalController.create({
        component: SongsModal,
        swipeToClose: true,
        cssClass: 'background-blur fullscreen'
      });
      return modal.present();
    },
    toggleUi(): void {
      if (!this.showCanvas) return;
      this.showUi = !this.showUi;
      console.log('Show ui', this.showUi);
    },
    togglePlaying(): void {
      this.isPlaying = !this.isPlaying;
      console.log('Toggle playing', this.isPlaying);
    },
    toggleShuffle(e: any): void {
      this.isShuffling = !this.isShuffling;
      e.target.classList.toggle('active');
      console.log('Toggle shuffle', this.isShuffling);
    },
    toggleRepeat(e: any): void {
      if (!this.isRepeating) {
        this.isRepeating = true;
        e.target.classList.add('active');
      } else if (!this.isRepeatingOnlyOne) {
        this.isRepeatingOnlyOne = true;
        e.target.classList.add('one-more');
      } else {
        this.isRepeating = false;
        e.target.classList.remove('active');
        this.isRepeatingOnlyOne = false;
        e.target.classList.remove('one-more');
      }
      console.log('Toggle repeat', [this.isRepeating, this.isRepeatingOnlyOne]);
    },
  },
});
