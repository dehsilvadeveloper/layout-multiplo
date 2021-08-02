<template>

    <!-- Nav Item - Avisos -->
    <li class="nav-item dropdown no-arrow mx-1 max-width-50" ref="navItemComDropdownMenu">

        <a class="nav-link dropdown-toggle" href="javascript:;" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
            <font-awesome-icon :icon="['fas', 'bell']" size="lg" fixed-width />
            <!-- Contador - Avisos -->
            <span class="badge bg-danger position-relative top-0 left-100 translate-middle">3+</span>
        </a>

        <!-- Dropdown - Avisos -->
        <div :class="['dropdown-list', 'dropdown-menu', 'dropdown-menu-right', 'shadow', 'animated--grow-in', { 'show': mostrarDropdown }]" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">
                Central de Avisos
            </h6>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="me-3">
                    <div class="icon-circle bg-primary">
                        <font-awesome-icon :icon="['fas', 'file-alt']" class="text-white" fixed-width />
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 12, 2020</div>
                    Um novo relatório mensal está disponível para download!
                </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="me-3">
                    <div class="icon-circle bg-success">
                        <font-awesome-icon :icon="['fas', 'donate']" class="text-white" fixed-width />
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 7, 2020</div>
                    Uma receita de <b>R$ 256.22</b> está prevista para ser recebida na data de hoje.
                </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="me-3">
                    <div class="icon-circle bg-warning">
                        <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-white" fixed-width />
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">December 2, 2020</div>
                    Alerta de Recebimentos: Nós percebemos um número muito alto de receitas não recebidas.
                </div>
            </a>
            <a class="dropdown-item text-center small text-gray-500" href="javascript:;">Mostrar Todos os Avisos</a>
        </div>

    </li>

</template>

<script>
export default {
    name: 'DropdownAvisos',
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
        fecharDropdownAvisos(e) {

            const elemento = this.$refs.navItemComDropdownMenu;
            const alvo = e.target;

            if (!elemento.contains(alvo)) {

                this.mostrarDropdown = false;

            }

        }

    },
    created() {
        window.addEventListener('click', this.fecharDropdownAvisos);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.fecharDropdownAvisos);
    }
}
</script>
