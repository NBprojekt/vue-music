<template>
  <!-- Header -->
  <ion-header class="transparent-header"></ion-header>

  <!-- Content -->
  <ion-content fullscreen>
    Song {{song.title}}
  </ion-content>

  <!-- Footer -->
  <ion-footer>
    <ion-toolbar color="light">
      <ion-buttons class="close-button">
        <ion-button color="dark" @click="dismissModal()">
          Close
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts" src="./song.modal.ts"></script>
<style lang="scss" scoped src="./song.modal.scss"></style>
