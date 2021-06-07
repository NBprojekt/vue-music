<template>
  <ion-header class="player-header">
    <ion-toolbar :class="{ hide: !showUi }">
      <ion-buttons slot="start">
        <ion-icon :icon="chevronDownOutline" size="large" @click="dismissModal()" />
      </ion-buttons>

      <ion-title> {{ song?.playlist ?? song.author }} </ion-title>

      <ion-buttons slot="end">
        <ion-icon :icon="ellipsisHorizontalOutline" size="large" @click="openOptions()" />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>

    <section class="background">
      <div class="cover" :class="{ hide: showCanvas && song.canvas }">
        <img :src="song.image" alt="" />
      </div>

      <div class="canvas" :class="{ hide: !showCanvas || !song.canvas }"  @click="toggleUi">
        <img :src="song.canvas" alt="" />
        <div class="backdrop" :class="{ hide: !showUi }" />
      </div>
    </section>

    <section class="ui" :class="{ hide: !showUi }">
      <div class="metadata">
        <div class="title">
          {{song.title}}
        </div>

        <div class="author">
          {{song.author}}
        </div>
      </div>

      <div class="slider">
        <ion-range color="primary" />
        <div class="time"> 2:13 </div>
        <div class="length"> {{song.length}} </div>
      </div>

      <div class="controls">
        <ion-icon
          :class="`x1 ios hydrated ${isShuffling ? 'active' : ''}`"
          :icon="shuffleOutline"
          @click="toggleShuffle()" />
        <ion-icon
          class="x2"
          :icon="playSkipBackOutline" />
        <ion-icon
          class="x3"
          :icon="isPlaying ? pauseCircle : playCircle"
          @click="togglePlaying()" />
        <ion-icon
          class="x2"
          :icon="playSkipForwardOutline" />
        <ion-icon
          :class="`x1 ios hydrated ${isRepeating ? 'active' : ''} ${isRepeatingOnlyOne ? 'one-more' : ''}`"
          :icon="repeatOutline"
          @click="toggleRepeat()" />
      </div>
    </section>

  </ion-content>
</template>

<script lang="ts" src="./player.modal.ts"></script>
<style lang="scss" scoped src="./player.modal.scss"></style>
