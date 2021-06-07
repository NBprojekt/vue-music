import { defineComponent } from 'vue';

import { IonIcon, } from '@ionic/vue';
import { playOutline, pauseOutline } from 'ionicons/icons';

import { Song } from '@/types/song.type';

import { playerService } from '@/services/player.service';

export default defineComponent({
  name: 'PlayerSmall',
  components: { IonIcon },
  props: {
    isCollapsed:{
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
  created() {
    playerService.getSong().subscribe((_song: Song | null) => {
      if (_song) {
        this.song = _song;
      }
    });

    playerService.isPlaying().subscribe(x => this.isPlaying = x);
  },
  data() {
    return {
      progress: 50,
      isPlaying: false,
      song: null as unknown as Song,
    }
  },
  methods: {
    togglePlaying(): void {
      playerService.togglePlaying();
    },
  }
});
