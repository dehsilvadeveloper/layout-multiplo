<template>

    <!-- Linha divisória -->
    <hr class="sidebar-divider" v-if="item.divisor" :class="item.classes" />

    <!-- Titulo -->
    <div class="sidebar-heading" v-else-if="item.titulo">{{ item.titulo }}</div>

    <!-- Item -->
    <li v-else class="nav-item">

        <!-- Caso não exista submenu, usamos o componente de geração de links -->
        <app-link v-if="temSubmenu !== true" :url="item.href" :class="item.classes">
            <font-awesome-icon :icon="[item.iconeFamilia, item.icone]" size="xs" v-if="item.icone !== null" />
            <span>{{ item.texto }}</span>
        </app-link>

        <!-- Caso exista submenu, usamos uma tag <a> apenas como acionador do collapse do submenu -->
        <a v-else href="javascript:;" :class="[item.classes, { collapsed: !item.submenuAberto }]" @click="menuItemClick" data-toggle="collapse">
            <font-awesome-icon :icon="[item.iconeFamilia, item.icone]" size="xs" v-if="item.icone !== null" />
            <span>{{ item.texto }}</span>
            <!-- Icone de seta para indicar abertura/fechamento do collapse do submenu -->
            <font-awesome-icon v-if="item.submenuAberto === false" :icon="['fas', 'angle-down']" class="arrow-toggle" />
            <font-awesome-icon v-else :icon="['fas', 'angle-up']" class="arrow-toggle" />
        </a>

        <!-- Submenu -->
        <div v-if="temSubmenu === true" class="collapse" v-colapsavel="item.submenuAberto">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Opções de {{ item.texto }}:</h6>
                <app-link v-for="(submenuItem, index) in item.submenu" :key="index" :url="submenuItem.href" class="collapse-item">
                    {{ submenuItem.texto }}
                </app-link>
            </div>
        </div>

    </li>

</template>

<script>
import AppLink from '../fragments/AppLink';

export default {
    name: 'MenuItem',
    components: {
        AppLink
    },
    props: {
        // Identificador do item de menu
        index: {
            type: Number,
            required: true
        },
        // Dados do item de menu
        item: {
            type: Object,
            required: true
        }
    },
    computed: {

        // Sinaliza se a coluna "submenu" foi preenchida ou não
        temSubmenu() {
            return (this.item.submenu && this.item.submenu.length > 0);
        }

    },
    emits: ['menu-item-click'],
    methods: {

        /**
         * Ação quando um menu com submenu é clicado
         *
         * @returns void
         */
        menuItemClick() {

            // Emitimos evento passando identificador do menu que foi clicado
            this.$emit('menu-item-click', this.index);

        }

    },
    directives: {

        /**
         * Diretiva para controlar evento "collapse" de elemento, usando as classes de collapse do bootstrap css
         */
        colapsavel: {
            bind: function(el, binding, vnode) {
                el.duracaoTransicao = 350;
            },
            updated: function(el, binding, vnode) {

                // Executa apenas se houver mudança no valor
                if (binding.oldValue !== binding.value) {

                    // Caso o valor seja 'true'
                    if (binding.value) {

                        el.classList.remove('collapse');
                        el.classList.add('collapsing');

                        setTimeout(function() {
                            el.classList.remove('collapsing');
                            el.classList.add('collapse');
                            el.classList.add('show');
                        }, 0);

                    } else { // Caso contrário

                        el.classList.remove('collapse');
                        el.classList.remove('show');
                        el.classList.add('collapsing');

                        setTimeout(function() {
                            el.classList.add('collapse');
                            el.classList.remove('collapsing');
                        }, el.duracaoTransicao);

                    }

                }

            }
        }

    }
}
</script>
