<template>
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

<script lang="ts" src="./player-small.component.ts" />
<style lang="scss" scoped src="./player-small.component.scss" />
