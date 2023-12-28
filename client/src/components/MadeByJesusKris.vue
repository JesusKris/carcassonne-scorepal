<template>
    <div>
        <small class="app-version">{{ version }}</small>
        <small class="made-by-jesuskris">Made by <a class="underline" href="https://github.com/JesusKris" target="_blank"
                rel="noopener noreferrer">JesusKris</a></small>
        

    </div>
</template>

<style scoped>
.made-by-jesuskris {
    position: absolute;
    z-index: 9999;
    font-family: 'Lindsay Becker';
    font-weight: 600;
    font-size: calc(0.7vw + 0.7vh);
    bottom: 0.5%;
    left: 0.5%
}

.app-version {
    position: absolute;
    z-index: 9999;
    font-family: 'Lindsay Becker';
    font-weight: 600;
    font-size: calc(0.7vw + 0.7vh);
    bottom: 2.5%;
    left: 0.5%
}
</style>

<script lang="ts">
export default {
    data() {
        return {
            version: import.meta.env.VITE_VERSION || "v1.0.0"
        }
    }
}

</script>