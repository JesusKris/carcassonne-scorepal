<script setup lang="ts">
import ScorePalLogoFull from '../components/LogoScorePalFull.vue'
import MadeByJesusKris from '../components/MadeByJesusKris.vue';
import BlueButton from "../components/BlueButton.vue"
</script>

<template>
  <div class="carcassonne-castle-img h-screen flex flex-col">
    <div class="px-[7%] flex flex-1 flex-col items-center justify-center">
      <ScorePalLogoFull />
    </div>
    <!-- <div class="flex-1 flex flex-col items-center align-top py-5 box-border">
      <BlueButton :sprite-selector="'continue'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'new-game'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'history'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'rules'" :is-shown="true" :callback="() =>console.log(`hi`)" />
    </div> -->
    <MadeByJesusKris />
  </div>
</template> 

<style scoped></style>
