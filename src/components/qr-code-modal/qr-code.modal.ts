
import { defineComponent, ref } from 'vue';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  modalController,
  alertController,
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
    const videoElement = ref(null);

    return {
      closeOutline,
      videoElement,
    }
  },
  mounted() {
    this.openCam(this.videoElement);
  },
  data() {
    return {
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    async openCam(videoElementRef: any) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          },
        });

        videoElementRef.src = stream;
        videoElementRef.play();
      } catch(e) {
        console.log(e);

        const alert = await alertController.create({
          header: 'Failed to access camera.',
          message: e,
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  },
});
