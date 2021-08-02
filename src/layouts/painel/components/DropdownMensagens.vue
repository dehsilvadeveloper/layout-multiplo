<template>

    <!-- Nav Item - Mensagens -->
    <li class="nav-item dropdown no-arrow mx-1" ref="navItemComDropdownMenu">

        <a class="nav-link dropdown-toggle" href="javascript:;" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">
            <font-awesome-icon :icon="['fas', 'envelope']" size="lg" fixed-width />
            <!-- Contador - Mensagens -->
            <span class="badge bg-danger position-relative top-0 left-100 translate-middle">7</span>
        </a>

        <!-- Dropdown - Mensagens -->
        <div :class="['dropdown-list', 'dropdown-menu', 'dropdown-menu-right', 'shadow', 'animated--grow-in', { 'show': mostrarDropdown }]" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">
                Central de Mensagens
            </h6>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="dropdown-list-image me-3">
                    <img class="rounded-circle" :src="require('@/assets/images/undraw_profile_1.svg')" alt="..." />
                    <div class="status-indicator bg-success"></div>
                </div>
                <div>
                    <div class="text-truncate">Tudo bem? Estava me perguntando se podia contar</div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="dropdown-list-image me-3">
                    <img class="rounded-circle" :src="require('@/assets/images/undraw_profile_2.svg')" alt="..." />
                    <div class="status-indicator"></div>
                </div>
                <div>
                    <div class="text-truncate">Eu consegui as fotos de que você precisava. Como devo enviá-las para você?</div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="dropdown-list-image me-3">
                    <img class="rounded-circle" :src="require('@/assets/images/undraw_profile_3.svg')" alt="..." />
                    <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                    <div class="text-truncate">O relatório do mês passado ficou ótimo. Continue o bom trabalho!</div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
            </a>
            <a class="dropdown-item d-flex align-items-center" href="javascript:;">
                <div class="dropdown-list-image me-3">
                    <img class="rounded-circle" :src="require('@/assets/images/undraw_profile_1.svg')" alt="..." />
                    <div class="status-indicator bg-success"></div>
                </div>
                <div>
                    <div class="text-truncate">Você participou da reunião de definição de preços? Tenho uma dúvida e não sei a quem recorrer...</div>
                    <div class="small text-gray-500">James Morgan · 2w</div>
                </div>
            </a>
            <a class="dropdown-item text-center small text-gray-500" href="javascript:;">Ler Mais Mensagens</a>
        </div>

    </li>

</template>

<script>
export default {
    name: 'DropdownMensagens',
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
        fecharDropdownMensagens(e) {

            const elemento = this.$refs.navItemComDropdownMenu;
            const alvo = e.target;

            if (!elemento.contains(alvo)) {

                this.mostrarDropdown = false;

            }

        }

    },
    created() {
        window.addEventListener('click', this.fecharDropdownMensagens);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.fecharDropdownMensagens);
    }
}
</script>
