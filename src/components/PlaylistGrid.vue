<template>
  <div class="playlist-grid-container">

    <div v-for="playlist in playlists.slice(0, 6)" :key="playlist.uid" class="playlist-grid-item">
      <div class="image">
        <img :src="playlist.image" alt="">
      </div>
      <div class="name">
        {{playlist.name}}
      </div>
      <ion-ripple-effect type="unbounded" />
    </div>

  </div>
</template>

<script lang="ts">
import { IonRippleEffect, } from '@ionic/vue';

export default {
  name: 'PlaylistGrid',
  components: { IonRippleEffect },
  props: {
    playlists: null
  },
}
</script>

<style lang="scss" scoped>
.playlist-grid-container {
  $item-space: 16px;
  $item-size: 55px;
  display: flex;
  flex-wrap: wrap;

  padding: $item-space;

  .playlist-grid-item {
    position: relative;
    display: flex;
    flex: calc(50% - #{$item-space} / 2);
    align-items: center;

    margin: $item-space / 2 0;
    height: $item-size;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--ion-card-background);

    &:nth-child(odd) {
      margin-right: $item-space / 2;
    }
    &:nth-child(even) {
      margin-left: $item-space / 2;
    }

    .image {
      width: $item-size;
      height: $item-size;
      margin-right: 5px;

      &> img {
        width: 100%;
      }
    }
    .name {
      width: calc(100% - #{$item-size} - 5px);
      font-weight: bolder;
    }
  }
}
</style>