<template>
  <div class="logo-full select-none">
    <img src="/images/full-logo.webp" alt="Full ScorePal Logo" />
  </div>
</template>

<style scoped>
.logo-full {
  max-width: 600px;
}

@media (max-height: 300px) {
  .logo-full {
    max-width: 200px;
  }
}

@media (min-height: 301px) and (max-height: 400px) {
  .logo-full {
    max-width: 225px;
  }
}

@media (min-height: 401px) and (max-height: 500px) {
  .logo-full {
    max-width: 250px;
  }
}

@media (min-height: 501px) and (max-height: 600px) {
  .logo-full {
    max-width: 400px;
  }
}

@media (min-height: 601px) and (max-height: 700px) {
  .logo-full {
    max-width: 450px;
  }
}
</style>
