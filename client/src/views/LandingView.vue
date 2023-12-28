<script setup lang="ts">
import ScorePalLogoFull from '../components/LogoScorePalFull.vue'
</script>

<template>
  <div class="carcassonne-castle-img w-screen h-screen flex mobile-safe-padding flex-col flex-grow">
    <div class="px-[7%] flex flex-1 flex-col items-center align-top w-full">
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
  font-size: 5vw;
}


@media (min-width: 1200px) {
  .continue-message {
    font-size: 375%;
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
    font-size: 3.5vw;
  }
}

@media (min-height: 601px) and (max-height: 700px) {
  .continue-message {
    font-size: 4vw;
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
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(navigator.userAgent);
      const isDesktopWithTouch = isTouchDevice && !isMobile && window.innerWidth >= 1024;

      if (isDesktopWithTouch) {
        return 'CLICK TO CONTINUE';
      }

      if (isTouchDevice && isMobile || isMobile) {
        return 'TAP TO CONTINUE';
      }

      return 'CLICK TO CONTINUE';
    }
  }
}
</script>
