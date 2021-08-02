<template>

    <!-- [Inicio] Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <Sidebar :mostrarSidebar="mostrarSidebar" />

        <!-- [Inicio] Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- [Inicio] Main Content -->
            <div id="content">

                <!-- Header/Topbar -->
                <Header @toggle-sidebar="toggleSidebar($event)" />

                <!-- [Inicio] Conteúdo da Página -->
                <div class="container-fluid">

                    <!-- Exibição do conteúdo simples -->
                    <!-- <router-view /> -->

                    <!-- Exibição do conteúdo com animação de transição -->
                    <router-view v-slot="{ Component, route }">
                        <transition name="slideFadeToLeft" mode="out-in">
                            <component :is="Component" :key="route.path" />
                        </transition>
                    </router-view>

                </div>
                <!-- [Fim] Conteúdo da Página -->

            </div>
            <!-- [Fim] Main Content -->

            <!-- Footer -->
            <Footer />

        </div>
        <!-- [Fim] Content Wrapper -->

    </div>
    <!-- [Fim] Wrapper -->

</template>

<script>
import Sidebar from '@/layouts/painel/fragments/Sidebar';
import Header from '@/layouts/painel/fragments/Header';
import Footer from '@/layouts/painel/fragments/Footer';

export default {
	name: 'PainelLayout',
    components: {
        Sidebar,
        Header,
        Footer
    },
    data() {
		return {
            janela: {
                width: 0,
                height: 0
            },
			mostrarSidebar: true
		}
	},
    methods: {

        /**
         * Seta propriedades de largura e altura deste componente de acordo com a largura e altura da janela do navegador.
         *
         * @returns void
         */
        setarDimensoesJanela() {

            this.janela.width = document.documentElement.clientWidth;
            this.janela.height = document.documentElement.clientHeight;

        },

        /**
         * Ativa/desativa exibição da sidebar.
         *
         * @param event
         * @returns void
         */
        toggleSidebar: function(event) {

            event.preventDefault();
            this.mostrarSidebar = !this.mostrarSidebar;

        }

    },
    watch: {

        'janela.width': function(novoValor, antigoValor) {

            if (novoValor < 480) {

                this.mostrarSidebar = false;

            } else {

                this.mostrarSidebar = true;

            }

        },

        mostrarSidebar: function(valor) {

            const elemento = document.body;
            valor === true ? elemento.classList.add('sidebar-toggled') : elemento.classList.remove('sidebar-toggled');

        }

    },
    mounted() {

        // Adiciono class indicadora do layout em uso no elemento body
        document.body.classList.add('painel-layout');

        // Capto dimensões da janela
        this.setarDimensoesJanela();

        // Defino listener para o caso da janela ser redimensionada
        window.addEventListener('resize', this.setarDimensoesJanela);

    },
    unmounted() {

        // Adiciono class indicadora do layout em uso no elemento body
        document.body.classList.add('painel-layout');

        // Defino listener para o caso da janela ser redimensionada
        window.removeEventListener('resize', this.setarDimensoesJanela);

    }
}
</script>

<style lang="scss">
@import '@/assets/layouts/painel/scss/main.scss';
</style>

<style scoped>
/* ANIMAÇÃO PARA TRANSIÇÃO DE PÁGINA COMBINANDO VUEJS + CSS (EM DESUSO) */
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.page-enter-from {
    opacity: 0;
    transform: translateX(-30%);
}

.page-enter-to {
    opacity: 1;
    transform: translateX(0%);
}

.page-leave-from {
    opacity: 1;
    transform: translateX(0%);
}

.page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>
