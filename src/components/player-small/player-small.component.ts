import { defineComponent } from 'vue';

import { IonIcon, } from '@ionic/vue';
import { playOutline, pauseOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'PlayerSmall',
  components: { IonIcon },
  props: {
    isColapsed:{
      type: Boolean,
      required: true
    },
  },
  setup() {
    return {
      playOutline,
      pauseOutline,
    }
  },
  data() {
    return {
      progress: 50,
      isPlaying: false,
    }
  },
  methods: {
    togglePlayState(): void {
      this.isPlaying = !this.isPlaying;
    }
  }
});
