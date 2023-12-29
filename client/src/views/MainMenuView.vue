<script setup lang="ts">
import ScorePalLogoFull from '../components/LogoScorePalFull.vue'
import MadeByJesusKris from '../components/MadeByJesusKris.vue';
import BlueButton from "../components/BlueButton.vue"
</script>

<template>
  <div class="carcassonne-castle-img w-screen h-screen flex mobile-safe-padding flex-col flex-grow">
    <div class="px-[7%] flex flex-1 flex-col items-center align-top w-full">
      <ScorePalLogoFull />
    </div>
    <div class="flex-1 flex flex-col items-center align-top w-full">
      <BlueButton :is-shown="false" :button-text="`Continue`" :callback="() =>console.log(`hi`)" />
      <BlueButton :is-shown="true" :button-text="`New Game`" :callback="() =>console.log(`hi`)" />
      <BlueButton :is-shown="true" :button-text="`History`" :callback="() =>console.log(`hi`)" />
      <BlueButton :is-shown="true" :button-text="`Rules`" :callback="() =>console.log(`hi`)" />

    </div>
    <MadeByJesusKris />
  </div>
</template> 

<style scoped></style>
