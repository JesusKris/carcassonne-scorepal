<script setup lang="ts">


</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask flex items-center justify-center">
            <div class="modal flex flex-col">
                <div class="modal-header flex items-center justify-center">
                    <div class="header-text">
                        <slot name="header">default header</slot>
                    </div>
                </div>
                <div class="modal-body flex-1">
                    <slot name="body">



                    </slot>
                </div>
                <div class="modal-footer flex items-center justify-center blue-menu-button">
                    <button class="sprite box-border" @mouseover="changeHoveringState" @mouseleave="changeHoveringState" @click="closeModal">
                    </button>
                </div>

            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isHovering: false,
        }
    },

    props: {
        show: {
            type: Boolean,
            required: true
        }

    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },

        changeHoveringState() {
            this.isHovering = !this.isHovering
        },
    },

}
</script>

<style>

.blue-menu-button {

    margin: 1vh;
}

.sprite {
    width: 30%;
    height: 0;
    padding-bottom: 11%;
    background-size: 1200%;
    background-repeat: no-repeat;
    background-image: url("/images/blue_menu_buttons_sprite.en.png");
    background-position: 90.90909090909091% 0;
}

@media (max-height: 400px) {
    .sprite {
        width: 12%;
        padding-bottom: 5%;
    }
}

@media (max-height: 900px) {
    .sprite {
        width: 20%;
        padding-bottom: 8%;
    }
}

.sprite:hover {
    background-position: 100.02% 0;
}

.header-text {
    font-family: 'Lindsay Becker', 'lindsay-becker';
    font-size: clamp(16px, 10vw, 60px);
    overflow: hidden;

}

.modal-mask {
    padding: 5%;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
}


.modal {
    background-image: url(/images/carcassonne_grass_background.jpg);
    width: 100%;
    height: 100%;
    max-width: 800px;
    border-radius: 15px;
    transition: all 0.3s ease;
    border: 6px ridge #0B56AB;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
    transition: transform 0.5s;
    transform: translateY(100%);
}
</style>