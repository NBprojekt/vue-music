
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
      showUi: true, 
      showCanvas: false, 
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    openOptions(): void {
      console.log('Open options');
    },
    toggleUi(): void {
      if (!this.showCanvas) return;
      this.showUi = !this.showUi;
      console.log('Show ui', this.showUi);
      
    }
  },
});
