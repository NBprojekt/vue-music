
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

export default defineComponent({
  name: 'SongModal',
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonRange, },
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
