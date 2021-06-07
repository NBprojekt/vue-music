<template>
  <div class="small-player-container" :class="{ colapsed: isCollapsed || !song }">
    <div class="progress-wrapper">
      <div class="progress" :style="`width: ${progress}%`"></div>
    </div>

    <div class="image">
      <img :src="song?.image" alt="" />
    </div>

    <div class="metadata">
      <div class="title">
        {{ song?.title }}
      </div>

      <div class="author">
        {{ song?.author }}
      </div>
    </div>

    <div class="controls">
      <ion-icon :icon="!isPlaying ? playOutline : pauseOutline" @click.stop="togglePlayState()" size="large" />
    </div>

  </div>
</template>

<script lang="ts" src="./player-small.component.ts" />
<style lang="scss" scoped src="./player-small.component.scss" />
