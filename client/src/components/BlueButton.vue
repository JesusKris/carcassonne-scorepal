<template>
    <div v-if="isShown" class="flex justify-center blue-menu-button box-border select-none">
        <button class="sprite box-border" @mouseover="changeHoveringState" @mouseleave="changeHoveringState"
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
        }

    },
    methods: {

        changeHoveringState() {
            this.isHovering = !this.isHovering
        },
    },

    computed: {
        getStyleObject(): StyleValue {

            const spriteLocations = {
                "new-game": {
                    "offHovering": '0 0',
                    "onHovering": '9.090909090909091% 0'
                },

                "continue": {
                    "offHovering": '18.18181818181818% 0',
                    "onHovering": '27.27272727272727% 0'
                },

                "history": {
                    "offHovering": '36.36363636363636% 0',
                    "onHovering": '45.45454545454545% 0'
                },

                "rules": {
                    "offHovering": '54.54545454545455% 0',
                    "onHovering": '63.63636363636364% 0'
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
    background-size: 1200%;
    background-repeat: no-repeat;
    background-image: url("/images/blue_menu_buttons_sprite.en.png");
}
</style>
