<template>

    <!-- Nav Item - Informação do Usuário -->
    <li class="nav-item dropdown no-arrow" ref="navItemComDropdownMenu">

        <a class="nav-link dropdown-toggle" href="javascript:;" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
            <span class="me-2 d-none d-lg-inline name-of-user">John Doe</span>
            <img class="img-profile rounded-circle" :src="require('@/assets/images/undraw_profile.svg')" />
        </a>

        <!-- Dropdown - Informação do Usuário -->
        <div :class="['dropdown-menu', 'dropdown-menu-right', 'shadow', 'animated--grow-in', { 'show': mostrarDropdown }]" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="javascript:;">
                <font-awesome-icon :icon="['fas', 'user']" class="me-2 text-gray-400" fixed-width />
                Perfil
            </a>
            <a class="dropdown-item" href="javascript:;">
                <font-awesome-icon :icon="['fas', 'cogs']" class="me-2 text-gray-400" fixed-width />
                Configurações
            </a>
            <a class="dropdown-item" href="javascript:;">
                <font-awesome-icon :icon="['fas', 'list']" class="me-2 text-gray-400" fixed-width />
                Log de Atividades
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="javascript:;">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="me-2 text-gray-400" fixed-width />
                Logout
            </a>
        </div>

    </li>

</template>

<script>
export default {
    name: 'DropdownUsuario',
    data() {
        return {
            mostrarDropdown: false
        }
    },
    methods: {

        /**
         * Ativa/desativa exibição do dropdown.
         *
         * @param event
         * @returns void
         */
        toggleDropdown(event) {

            event.preventDefault();
            this.mostrarDropdown = !this.mostrarDropdown;

        },

        /**
         * Desativa exibição do dropdown caso o elemento clicado não seja o próprio dropdown
         *
         * @param event e
         * @returns void
         */
        fecharDropdownUsuario(e) {

            const elemento = this.$refs.navItemComDropdownMenu;
            const alvo = e.target;

            if (!elemento.contains(alvo)) {

                this.mostrarDropdown = false;

            }

        }

    },
    created() {
        window.addEventListener('click', this.fecharDropdownUsuario);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.fecharDropdownUsuario);
    }
}
</script>
