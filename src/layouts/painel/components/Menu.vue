<template>

    <!-- Fazemos um loop pela propriedade "menu", criando um componente "MenuItem" para cada item do loop -->
    <MenuItem v-for="(item, index) in menu" :key="index" :item="item" :index="index" @menu-item-click="menuItemClicado" />

</template>

<script>
import MenuItem from '@/layouts/painel/components/MenuItem';

export default {
    name: 'Menu',
    components: {
        MenuItem
    },
    props: {
        // Itens do menu, incluindo opções de menu, opções de submenu, headings e linhas divisórias
        menu: {
            type: Array,
            required: true
        },
        // Mantém apenas um submenu aberto por vez
        mostrarApenasUmSubmenu: {
            type: Boolean,
            default: false
        }
    },
    methods: {

        /**
         * Executa ações quando um "MenuItem" emite um evento dizendo que foi clicado. Este evento só é emitido por itens que possuam submenu.
         * Neste caso, exibimos o submenu do item clicado e fechamos todos os outros submenus (dependendo da propriedade 'mostrarApenasUmSubmenu').
         *
         * @param number index
         * @returns void
         */
        menuItemClicado(index) {

            // Mapeamos o array de opções do menu
            this.menu.map((item, i) => {

                // Caso NÃO estivermos lidando com um título ou linha divisória
                if (!(item.divisor in item) && !(item.titulo in item)) {

                    // Caso o identificador recebido pelo método seja o mesmo que o identificador da iteração atual
                    if (index === i) {

                        // Atualizamos propriedade "submenuAberto" no item, o que reflete no comportamento do componente "MenuItem"
                        item.submenuAberto = !item.submenuAberto;

                    } else {

                        // Caso o menu tenha sido configurado para exibir apenas um submenu por vez
                        if (this.mostrarApenasUmSubmenu === true) {

                            // Atualizamos propriedade "submenuAberto" no item atual da iteração, sinalizando que o submenu deve estar fechado / desativado
                            item.submenuAberto = false;

                        }

                    }

                }

                return item;

            });

        }

    }
}
</script>

<!--
Exemplo de criação da variavel "menu" no componente pai que usar este componente:

menu: [
    {
        divisor: true,
        classes: 'my-0'
    },
    {
        href: '/',
        texto: 'Inicio',
        iconeFamilia: 'fas',
        icone: 'tachometer-alt',
        classes: 'nav-link',
    },
    {
        divisor: true
    },
    {
        titulo: 'Configurações'
    },
    {
        href: '/perfis',
        texto: 'Perfis',
        iconeFamilia: 'fas',
        icone: 'unlock-alt',
        classes: 'nav-link'
    },
    {
        href: '/unidades',
        texto: 'Unidades',
        iconeFamilia: 'fas',
        icone: 'building',
        classes: 'nav-link'
    },
    {
        divisor: true
    },
    {
        titulo: 'Gestão'
    },
    {
        href: '',
        texto: 'Clientes',
        iconeFamilia: 'fas',
        icone: 'handshake',
        classes: 'nav-link',
        submenu: [
            {
                href: '/clientes/pessoa-fisica',
                texto: 'Pessoa Física'
            },
            {
                href: '/clientes/pessoa-juridica',
                texto: 'Pessoa Jurídica'
            }
        ],
        submenuAberto: false
    }
]
-->
