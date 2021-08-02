<template>

    <!-- [Inicio] Header/Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 pe-3 static-top shadow">

        <!-- Botão de toggle da Sidebar -->
        <ButtonToggleSidebar @toggle-sidebar="toggleSidebar($event)" />

        <!-- Formulario de Busca na navbar -->
        <NavbarSearch />

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ms-auto">

            <!-- Nav Item - Formulario de Busca em Dropdown (Visivel apenas em XS) -->
            <DropdownSearch />

            <!-- Nav Item - Avisos -->
            <DropdownAvisos />

            <!-- Nav Item - Mensagens -->
            <DropdownMensagens />

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - Informação do Usuário -->
            <DropdownUsuario />

        </ul>

    </nav>
    <!-- [Fim] Header/Topbar -->

</template>

<script>
import ButtonToggleSidebar from '@/layouts/painel/components/ButtonToggleSidebar';
import NavbarSearch from '@/layouts/painel/components/NavbarSearch';
import DropdownSearch from '@/layouts/painel/components/DropdownSearch';
import DropdownAvisos from '@/layouts/painel/components/DropdownAvisos';
import DropdownMensagens from '@/layouts/painel/components/DropdownMensagens';
import DropdownUsuario from '@/layouts/painel/components/DropdownUsuario';

export default {
    name: 'Header',
    components: {
        ButtonToggleSidebar,
        NavbarSearch,
        DropdownSearch,
        DropdownAvisos,
        DropdownMensagens,
        DropdownUsuario
    },
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
