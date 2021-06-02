
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  modalController
} from '@ionic/vue';
import {
  closeOutline,
} from 'ionicons/icons';

export default defineComponent({
  name: 'QrCodeModal',
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonIcon,
    IonToolbar,
    IonButtons,
    IonButton,
  },
  setup() {
    return {
      closeOutline,
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
