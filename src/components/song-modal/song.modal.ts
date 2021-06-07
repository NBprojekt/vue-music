
import { defineComponent, PropType } from 'vue';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonRange,
  modalController
} from '@ionic/vue';
import {
  shuffleOutline,
  repeatOutline,
  listOutline,
  heartOutline,
  removeCircleOutline,
  addCircleOutline,
  shareOutline,
  personOutline,
  peopleOutline,
} from 'ionicons/icons';
import { Song } from '@/types/song.type';

export default defineComponent({
  name: 'SongModal',
  components: {
    IonContent,
    IonHeader,
    IonFooter,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButtons,
    IonButton,
    IonRange,
  },
  props: {
    song:{
      type: Object as PropType<Song>,
      required: true
    },
  },
  setup() {
    return {
      shuffleOutline,
      repeatOutline,
      listOutline,
      heartOutline,
      removeCircleOutline,
      addCircleOutline,
      shareOutline,
      personOutline,
      peopleOutline,
    }
  },
  data() {
    return {
      isShuffling: false,
      isRepeating: false,
      isRepeatingOnlyOne: false,
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    toggleShuffle(e: any): void {
      this.isShuffling = !this.isShuffling;
      e.target.classList.toggle('active');
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
    },
  },
});
