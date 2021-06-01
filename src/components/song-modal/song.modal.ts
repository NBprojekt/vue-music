
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
    }
  },
  data() {
    return {
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
  },
});
