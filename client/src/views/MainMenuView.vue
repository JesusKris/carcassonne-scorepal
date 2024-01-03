<script setup lang="ts">
import ScorePalLogoFull from '@/components/LogoScorePalFull.vue'
import MadeByJesusKris from '@/components/MadeByJesusKris.vue';
import BlueButton from "@/components/BlueButton.vue"
import BlueSymbol from '@/components/BlueSymbol.vue';
import SettingsModal from '@/components/SettingsModal.vue';
import RulesModal from '@/components/RulesModal.vue';
import HistoryModal from '@/components/HistoryModal.vue';

</script>

<template>
  <div class="carcassonne-castle-img  w-screen h-screen box-border flex flex-col select-none">
    <div class="px-[7%] flex flex-1 flex-col items-center justify-center">
      <ScorePalLogoFull />
    </div>
    <div class="flex-1 flex flex-col items-center align-top py-5">
      <BlueButton :sprite-selector="'continue'" :is-shown="true" />
      <BlueButton :sprite-selector="'new-game'" :is-shown="true" />
      <BlueButton :sprite-selector="'history'" :is-shown="true" @click="historyModalVisible = true"/>
      <HistoryModal :is-visibile="historyModalVisible" @closeModal="historyModalVisible = false"/>
      
      <BlueButton :sprite-selector="'rules'" :is-shown="true" @click="rulesModalVisibile = true" />
      <RulesModal :is-visibile="rulesModalVisibile" @closeModal="rulesModalVisibile = false"/>

    </div>
    <MadeByJesusKris />
    <div class="fixed top-4 left-4">
      <BlueSymbol :sprite-selector="'settings'" @click="settingsModalVisibile = true" />
      <SettingsModal :is-visibile="settingsModalVisibile" @closeModal="settingsModalVisibile = false" />
    </div>
  </div>
</template> 

<style scoped></style>


<script lang="ts">
export default {
  data() {
    return {
      settingsModalVisibile: false,
      rulesModalVisibile: false,
      historyModalVisible: false
    };
  },
 
}


</script>
