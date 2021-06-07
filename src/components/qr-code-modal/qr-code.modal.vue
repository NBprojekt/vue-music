<template>
  <ion-header class="transparent-header">
    <ion-toolbar class="transparent-toolbar">
      <ion-buttons slot="start">
        <ion-icon :icon="closeOutline" size="large" @click="dismissModal()" />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>


  <ion-content fullscreen>
    <div class="background">
      <!-- // TODO: Add camera feed -->
      <div class="camera-feed">
        <video ref="videoElement" playsinline="true" />
        <canvas ref="canvasElement" hidden />
        <div class="focus">
          <div class="hint">
            Point the camera on the center of the screen
            <br/>
            <ion-button color="transparent" @click="openCamera()">
              Select Photo
            </ion-button>
          </div>
        </div>
        <div class="box" />
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts" src="./qr-code.modal.ts"></script>
<style lang="scss" scoped src="./qr-code.modal.scss"></style>
