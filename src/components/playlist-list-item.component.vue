<template>
  <div class="playlist-list-item">
    <div class="image">
      <img :src="playlist.image" alt="" />
    </div>

    <div class="metadata">
      <div class="title">
        {{playlist.name}}
      </div>
      
      <div class="songs-counter">
        {{playlist.songs.length}} Songs
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'node_modules/vue/dist/vue';
import { Playlist } from '@/types/playlist.type';

export default {
  name: 'PlaylistListItem',
  components: {},
  props: {
    playlist:{
      type: Object as PropType<Playlist>,
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

.playlist-list-item {
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