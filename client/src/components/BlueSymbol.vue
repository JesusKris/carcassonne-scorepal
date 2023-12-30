<template>
    <div class="flex justify-end w-full blue-menu-symbol box-border">
        <button @click="handleClick" class="sprite box-border justify-self-end" @mouseover="changeHoveringState" @mouseleave="changeHoveringState"
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
            console.log(this.$i18n.locale)
            this.callback();
        }
    },

    computed: {
        getStyleObject(): StyleValue {

            const spriteLocations = {
                "qna": {
                    "offHovering": '0 0',
                    "onHovering": '33.33333333333333%'
                },

                "settings": {
                    "offHovering": '66.66666666666667',
                    "onHovering": '100%'
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
.blue-menu-symbol {
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
        margin: 1vh !important;
    }
}

@media (max-width: 700px) {
    .blue-menu-button {
        width: 100vw;
        margin: 1vw;

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

.sprite {
    width: 20%;
    height: 0;
    padding-bottom: 15%;
    background-position: 0 0;
    background-size: 400%;
    background-repeat: no-repeat;
    background-image: url("/images/blue_symbols_buttons_sprite.png");

}
</style>
