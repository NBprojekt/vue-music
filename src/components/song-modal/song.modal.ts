
import { defineComponent, PropType } from 'vue';
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
import { Song } from '@/types/song.type';

export default defineComponent({
  name: 'SongModal',
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonRange, },
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
