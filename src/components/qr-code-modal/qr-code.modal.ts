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

import jsQr from 'jsqr';

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
    const videoElement = ref();
    const canvasElement = ref();
    const canvasContext: any = null;

    return {
      closeOutline,
      videoElement,
      canvasElement,
      canvasContext,
    }
  },
  mounted() {
    this.openCam();
  },
  unmounted() {
    this.shouldScan = false;
  },
  data() {
    return {
      shouldScan: false,
    }
  },
  methods: {
    dismissModal(): void {
      modalController.dismiss();
    },
    async openCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          },
        });

        this.videoElement.srcObject = stream;
        this.videoElement.play();
        this.shouldScan = true;
        requestAnimationFrame(this.scanForQr.bind(this));
      } catch(e) {
        const alert = await alertController.create({
          header: 'Failed to access camera.',
          message: e,
          buttons: ['OK'],
        });
        await alert.present();
      }
    },
    scanForQr(): void {
      if (!this.shouldScan) {
        return;
      }

      // Check if video already received enough data
      if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
        if (!this.canvasContext) {
          this.canvasContext = this.canvasElement.getContext('2d');
          this.canvasElement.height = this.videoElement.height;
          this.canvasElement.width = this.videoElement.width;
        }

        this.canvasContext.drawImage(
          this.videoElement,
          0,
          0,
          this.canvasElement.width,
          this.canvasElement.height
        );

        const imageData = this.canvasContext.getImageData(
          0,
          0,
          this.canvasElement.width,
          this.canvasElement.height
        );

        const code = jsQr(imageData.data, imageData.width, imageData.height);

        if (code) {
          this.showCode(code);
          this.shouldScan = false;
        } else {
          requestAnimationFrame(this.scanForQr.bind(this));
        }
      } else {
        requestAnimationFrame(this.scanForQr.bind(this));
      }
    },
    async showCode(code: any): Promise<void> {
      const alert = await alertController.create({
        header: 'Found QR code',
        message: code,
        buttons: ['OK'],
      });
      await alert.present();
    }
  },
});
