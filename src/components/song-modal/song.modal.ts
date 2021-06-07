
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

import { playerService } from '@/services/player.service';

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
  created() {
    playerService.isShuffling().subscribe(x => this.isShuffling = x);
    playerService.isRepeating().subscribe(x => this.isRepeating = x);
    playerService.isRepeatingOnlyOne().subscribe(x => this.isRepeatingOnlyOne = x);
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
    toggleShuffle(): void {
      playerService.toggleShuffle();
    },
    toggleRepeat(): void {
      playerService.toggleRepeat();
    },
  },
});
