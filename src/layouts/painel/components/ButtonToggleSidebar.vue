<template>

    <!-- Botão de toggle da Sidebar -->
    <button id="sidebarToggleTop" class="btn btn-link rounded-circle ms-2 me-3" @click="toggleSidebar">
        <font-awesome-icon :icon="['fas', 'bars']" />
    </button>

</template>

<script>
export default {
    name: 'ButtonToggleSidebar',
    emits: ['toggle-sidebar'],
    methods: {

        /**
         * Ativa/desativa exibição da sidebar.
         *
         * @param event
         * @returns void
         */
        toggleSidebar(event) {

            // Emitimos evento 'toggle-sidebar' para o componente pai
            this.$emit('toggle-sidebar', event);

        }

    }
}
</script>
