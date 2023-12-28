<script setup lang="ts">
import ScorePalLogoFull from '../components/LogoScorePalFull.vue'
</script>

<template>
  <div class="carcassonne-castle-img w-full h-screen flex mobile-safe-padding flex-col flex-grow">
    <div class="px-[7%] flex flex-1 flex-col items-center align-top">
      <ScorePalLogoFull />
    </div>
    <div class="flex-1 flex flex-col justify-center items-center w-full">
      <h2 class="continue-message select-none">
        {{ continueMessage }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
.continue-message {
  animation: fadeInOut 2.5s infinite;
  cursor: pointer;
  font-family: 'Lindsay Becker', 'lindsay-becker';
  font-weight: 700;
  font-size: 4vw;
}

@media (min-width: 1200px) and (max-height: 600px) {
  .continue-message {
    font-size: 100% !important;
  }
}


@media (min-width: 1200px) and (min-height: 600px) {
  .continue-message {
    font-size: 300%;
  }
}

@media (min-width: 1200px) {
  .continue-message {
    font-size: 300%;
  }
}

@media (max-height: 300px) {
  .continue-message {
    font-size: 2vw;
  }
}

@media (min-height: 301px) and (max-height: 400px) {
  .continue-message {
    font-size: 2.5vw;
  }
}

@media (min-height: 401px) and (max-height: 500px) {
  .continue-message {
    font-size: 3vw;
  }
}

@media (min-height: 501px) and (max-height: 600px) {
  .continue-message {
    font-size: 3vw;
  }
}

@media (min-height: 601px) and (max-height: 700px) {
  .continue-message {
    font-size: 3vw;
  }
}

@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>

<script lang="ts">
export default {
  beforeMount() {
    const clickHandler = (e: Event) => this.$router.push('/menu')

    console.log(navigator.userAgent)
    document.addEventListener('click', clickHandler)
    this.$data.clickHandler = clickHandler
  },

  beforeUnmount() {
    const clickHandler = this.$data.clickHandler as EventListener
    document.removeEventListener('click', clickHandler)
  },

  data() {
    return {
      clickHandler: null as EventListener | null
    }
  },

  computed: {
    continueMessage(): string {

      const userAgent = navigator.userAgent.toLowerCase()

      const isTablet = (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent)) 

      const isMobile = (/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|s40Ovibrowser|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard )/.test(userAgent))

      if (isTablet || isMobile) {
        return "TAP TO CONTINUE"
      }

      return "CLICK TO CONTINUE"

    }

  }
}
</script>
