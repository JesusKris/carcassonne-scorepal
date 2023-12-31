<template>
    <div v-if="isShown" class="flex justify-center blue-menu-button box-border select-none">
        <button @click="handleClick" class="sprite box-border" @mouseover="changeHoveringState" @mouseleave="changeHoveringState"
            :style="getStyleObject">

        </button>
    </div>
</template>

<script lang="ts">
import type { StyleValue } from 'vue';

export default {

    data() {
        return {
            isHovering: false,
        }
    },
    props: {
        spriteSelector: {
            type: String,
            required: true,
        },

        isShown: {
            type: Boolean,
            required: true,
            default: false
        },
        callback: {
            type: Function,
            required: true
        }

    },
    methods: {

        changeHoveringState() {
            this.isHovering = !this.isHovering
        },

        handleClick() {
            this.callback();
        }
    },

    computed: {
        getStyleObject(): StyleValue {

            const spriteLocations = {
                "new-game": {
                    "offHovering": '0 0',
                    "onHovering": '11.11111111111111% 0'
                },

                "continue": {
                    "offHovering": '22.22222222222222% 0',
                    "onHovering": '33.33333333333333% 0'
                },

                "history": {
                    "offHovering": '44.44444444444444% 0',
                    "onHovering": '55.55555555555556% 0'
                },

                "rules": {
                    "offHovering": '66.7% 0',
                    "onHovering": '77.81% 0'
                },
            }

            return {
                //@ts-expect-error
                backgroundPosition: this.isHovering ? spriteLocations[this.spriteSelector].onHovering : spriteLocations[this.spriteSelector].offHovering,
            }
        }
    }

};
</script>

<style scoped>
.blue-menu-button {
    width: 55vh;
    margin: 1vh;
}

@media (min-width: 700px) {
    .blue-menu-button {
        width: 80vh
    }
}

@media (min-width: 1200px) {
    .blue-menu-button {
        width: 100vh
    }
}

@media (max-width: 700px) and (max-height: 700px) {
    .blue-menu-button {
        width: 65vh !important;

    }
}

@media (max-width: 700px) {
    .blue-menu-button {
        width: 100vw;

    }
}


.sprite {
    width: 20%;
    height: 0;
    padding-bottom: 7%;
    background-position: 0 0;
    background-size: 1000%;
    background-repeat: no-repeat;
    background-image: url("/images/blue_menu_buttons_sprite.en.png");
}
</style>
