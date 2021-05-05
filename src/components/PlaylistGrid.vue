<template>
  <div class="playlist-grid-container">

    <div v-for="item in playlists" :key="item.name" class="playlist-grid-item">
      {{ item.name }}
    </div>

  </div>
</template>

<script lang="ts">


export default {
  name: 'PlaylistGrid',
  props: {
    playlists: null
  },
}
</script>

<style lang="scss" scoped>
.playlist-grid-container {
  display: flex;
  flex-wrap: wrap;

  padding: 16px;
}
.playlist-grid-item {
  flex: 50%;
}
</style>