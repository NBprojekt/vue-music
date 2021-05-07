<template>
  <div class="artist-list-item">
    <div class="image">
      <img :src="artist.image" alt="" />
    </div>

    <div class="metadata">
      <div class="title">
        {{artist.name}}
      </div>
      
      <div class="songs-counter">
        {{artist.songs.length}} Songs
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'node_modules/vue/dist/vue';
import { Artists } from '@/types/artist.type';

export default {
  name: 'ArtistListItem',
  components: {},
  props: {
    artist:{
      type: Object as PropType<Artists>,
      required: true
    },
  },
  data() {
    return {
      progress: 50,
      isPlaying: false,
    }
  },
}
</script>

<style lang="scss" scoped>
$container-height: 60px;

.artist-list-item {
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 15px;
  height: $container-height;
  transition: top .3s;
  top: 0;

  background-color: var(--ion-background-color);
  color: var(--ion-text-color);

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

    .songs-counter {
      color: rgba(var(--ion-text-color-rgb), .5);
      font-size: .9rem;
    }
  }
}
</style>