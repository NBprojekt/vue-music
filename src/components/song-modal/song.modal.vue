<template>
  <div class="content-wrapper">
    <!-- Header -->
    <ion-header class="info-header">
      <div class="song-info">
        <div class="cover">
          <img :src="song.image" />
        </div>
        <div class="meta">
          <h1 class="title">
            {{song.title}}
          </h1>
          <p class="author">
            {{song.author}}
          </p>
        </div>
      </div>

      <div class="controls">
        <div
            :class="`control ${isShuffling ? 'active' : ''}`"
            @click="toggleShuffle($event)">
          <ion-icon :icon="shuffleOutline" />
          <p> Shuffle </p>
        </div>
        <div
            :class="`control ${isRepeating ? 'active' : ''} ${isRepeatingOnlyOne ? 'one-more' : ''}`"
            @click="toggleRepeat($event)">
          <ion-icon :icon="repeatOutline" />
          <p> Repeat </p>
        </div>
        <div
            class="control"
            @click="openPlaylist()">
          <ion-icon :icon="listOutline"/>
          <p> Open Queue </p>
        </div>
      </div>
    </ion-header>

    <ion-content class="no-scroll">
      <div class="options">
        <div class="option">
          <ion-icon :icon="heartOutline" />
          <span> Gefält mir </span>
        </div>
        <div class="option">
          <ion-icon :icon="removeCircleOutline" />
          <span> Song ausblenden </span>
        </div>
        <div class="option">
          <ion-icon :icon="addCircleOutline" />
          <span> Zur Playlist hunzufügen </span>
        </div>
        <div class="option">
          <ion-icon :icon="listOutline" />
          <span> In die Warteschlange </span>
        </div>
        <div class="option">
          <ion-icon :icon="shareOutline" />
          <span> Teilen </span>
        </div>
        <div class="option">
          <ion-icon :icon="personOutline" />
          <span> Künstler anzeigen </span>
        </div>
        <div class="option">
          <ion-icon :icon="peopleOutline" />
          <span> Songinfo </span>
        </div>
      </div>
    </ion-content>
  </div>

  <!-- Footer -->
  <ion-footer class="close-footer">
    <ion-toolbar color="light" @click="dismissModal()">
      <ion-buttons class="close-button">
        <ion-button color="dark">
          Close
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts" src="./song.modal.ts"></script>
<style lang="scss" scoped src="./song.modal.scss"></style>
