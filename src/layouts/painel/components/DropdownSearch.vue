<template>

    <!-- Nav Item - Formulario de Busca em Dropdown (Visivel apenas em XS) -->
    <li class="nav-item dropdown no-arrow d-sm-none" ref="navItemComDropdownMenu">

        <a class="nav-link dropdown-toggle" href="javascript:;" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
            <font-awesome-icon :icon="['fas', 'search']" size="lg" fixed-width />
        </a>

        <!-- Dropdown - Search -->
        <div :class="['dropdown-menu', 'dropdown-menu-right', 'p-3', 'shadow', 'animated--grow-in', { 'show': mostrarDropdown }]" aria-labelledby="searchDropdown">

            <form class="form-inline me-auto w-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Digite para pesquisar..." aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-primary btn-search-topbar" type="button">
                            <font-awesome-icon :icon="['fas', 'search']" />
                        </button>
                    </div>
                </div>
            </form>

        </div>

    </li>

</template>

<script>
export default {
    name: 'DropdownSearch',
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
        fecharDropdownSearch(e) {

            const elemento = this.$refs.navItemComDropdownMenu;
            const alvo = e.target;

            if (!elemento.contains(alvo)) {

                this.mostrarDropdown = false;

            }

        }

    },
    created() {
        window.addEventListener('click', this.fecharDropdownSearch);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.fecharDropdownSearch);
    }
}
</script>
