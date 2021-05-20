<template>
  <ion-header class="player-header">
    <ion-toolbar :class="{ hide: !showUi }">
      <ion-buttons slot="start">
        <ion-icon :icon="chevronDownOutline" size="large" @click="dismissModal()" />
      </ion-buttons>

      <ion-title> Playlist name </ion-title>

      <ion-buttons slot="end">
        <ion-icon :icon="ellipsisHorizontalOutline" size="large" @click="openOptions()" />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>

    <section class="background">
      <div class="cover" :class="{ hide: showCanvas }">
        <img src="/assets/images/playlist_1.jpg" alt="" />
      </div>

      <div class="canvas" :class="{ hide: !showCanvas }"  @click="toggleUi">
        <img src="/assets/videos/test.gif" alt="" />
        <div class="backdrop" :class="{ hide: !showUi }" />
      </div>
    </section>

    <section class="ui" :class="{ hide: !showUi }">
      <div class="metadata">
        <div class="title">
          In the End
        </div>

        <div class="author">
          Linkin Park
        </div>
      </div>

      <div class="slider">
        <ion-range color="primary" />
        <div class="time"> 2:13 </div>
        <div class="length"> 3:54 </div>
      </div>

      <div class="controls">
        <ion-icon class="x1"
          :icon="shuffleOutline"
          @click="toggleShuffle($event)" />
        <ion-icon class="x2"
          :icon="playSkipBackOutline" />
        <ion-icon class="x3"
          :icon="isPlaying ? pauseCircle : playCircle"
          @click="togglePlaying()" />
        <ion-icon class="x2"
          :icon="playSkipForwardOutline" />
        <ion-icon class="x1"
          :icon="repeatOutline"
          @click="toggleRepeat($event)" />
      </div>
    </section>

  </ion-content>
</template>

<script lang="ts" src="./player.modal.ts"></script>
<style lang="scss" scoped src="./player.modal.scss"></style>
