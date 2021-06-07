
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

import { playerService } from '@/services/player.service';

import SongsModal from '../song-modal/song.modal.vue';
import { Song } from '@/types/song.type';

export default defineComponent({
  name: 'PlayerModal',
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButtons,
    IonRange,
  },
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
  created() {
    // TODO: Add unsubscribe functionality
    playerService.getSong().subscribe((_song: Song | null) => {
      console.log('Fetched song', _song);
      if (_song) {
        this.song = _song;
      }
    });

    playerService.isPlaying().subscribe(x => this.isPlaying = x);
    playerService.isShuffling().subscribe(x => this.isShuffling = x);
    playerService.isRepeating().subscribe(x => this.isRepeating = x);
    playerService.isRepeatingOnlyOne().subscribe(x => this.isRepeatingOnlyOne = x);
  },
  data() {
    return {
      showUi: true,
      showCanvas: true,
      isShuffling: false,
      isPlaying: false,
      isRepeating: false,
      isRepeatingOnlyOne: false,
      song: null as unknown as Song,
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    async openOptions(): Promise<void> {
      const modal = await modalController.create({
        component: SongsModal,
        swipeToClose: true,
        cssClass: 'background-blur fullscreen',
        componentProps: {
          song: this.song,
        },
      });
      return modal.present();
    },
    toggleUi(): void {
      if (!this.showCanvas || !this.song.canvas) return;
      this.showUi = !this.showUi;
    },
    toggleShuffle(): void {
      playerService.toggleShuffle();
    },
    togglePlaying(): void {
      playerService.togglePlaying();
    },
    toggleRepeat(): void {
      playerService.toggleRepeat();
    },
  },
});
