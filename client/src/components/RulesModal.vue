<script setup lang="ts">

import BigModalBase from '@/components/BigModalBase.vue';
</script>



<template>
    <BigModalBase :show="isVisibile" @keydown.esc="closeModal" @closeModal="closeModal" tabindex="-1">
        <template #header>
            Rules
        </template>
        <template #body>

        </template>
    </BigModalBase>
</template>

<script lang="ts">

export default {
    props: {
        isVisibile: {
            type: Boolean,
            required: true,
        }
    },

    data() {
        return {
            modalShow: this.showModal
        }
    },

    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
    },
}
</script>