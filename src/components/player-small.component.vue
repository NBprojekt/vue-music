<template>
  <div class="small-player-container" :class="{ colapsed: isColapsed }">
    <div class="progress-wrapper">
      <div class="progress" :style="`width: ${progress}%`"></div>
    </div>

    <div class="image">
      <img src="/assets/images/playlist_1.jpg" alt="" />
    </div>

    <div class="metadata">
      <div class="title">
        In the End
      </div>
      
      <div class="author">
        Linkin Park
      </div>
    </div>

    <div class="controls">
      <ion-icon :icon="!isPlaying ? playOutline : pauseOutline" @click.stop="togglePlayState()" size="large" />
    </div>

  </div>
</template>

<script lang="ts">
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
</script>

<style lang="scss" scoped>
$container-height: 60px;
$progress-height: 3px;

.small-player-container {
  position: relative;
  display: flex;
  align-items: center;

  margin-top: $progress-height;
  height: $container-height;
  transition: top .3s;
  top: 0;

  background-color: var(--ion-tab-bar-background);
  border-bottom: 1px solid var(--ion-background-color);
  color: var(--ion-text-color);

  &.colapsed {
    top: $container-height + $progress-height;
  }

  .progress-wrapper {
    position: absolute;
    top: -$progress-height;
    width: 100%;
    height: $progress-height;
    background: var(--ion-color-medium);

    .progress {
      height: 100%;
      background: var(--ion-color-dark-shade);
    }
  }

  .image {
    width: $container-height;
    height: $container-height;
    margin-right: 10px;
  }

  .metadata {
    flex-grow: 2;
    font-weight: 600;

    .title {
      line-height: 1.5rem;
    }

    .author {
      color: rgba(var(--ion-text-color-rgb), .5);
      font-size: .9rem;
    }
  }

  .controls {
    margin-left: 10px;
    padding-right: 10px;
  }
}
</style>