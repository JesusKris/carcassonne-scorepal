<script setup lang="ts">
import ScorePalLogoFull from '../components/LogoScorePalFull.vue'
import MadeByJesusKris from '../components/MadeByJesusKris.vue';
import BlueButton from "../components/BlueButton.vue"
import BlueSymbol from '@/components/BlueSymbol.vue';
</script>

<template>
  <div class="carcassonne-castle-img  w-screen h-screen box-border flex flex-col select-none">
    <div class="px-[7%] flex flex-1 flex-col items-center justify-center">
      <ScorePalLogoFull />
    </div>
    <div class="flex-1 flex flex-col items-center align-top py-5 box-border">
      <BlueButton :sprite-selector="'continue'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'new-game'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'history'" :is-shown="true" :callback="() => console.log(`hi`)" />
      <BlueButton :sprite-selector="'rules'" :is-shown="true" :callback="() => console.log(`hi`)" />
    </div>
    <MadeByJesusKris />
    <div class="fixed bottom-0 right-4">
      <BlueSymbol :sprite-selector="'qna'" :callback="() => console.log(`hi`)" />
      <BlueSymbol :sprite-selector="'settings'" :callback="() => console.log(`hi`)" />
    </div>
  </div>
</template> 

<style scoped></style>
