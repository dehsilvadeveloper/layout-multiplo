<template>

    <!-- [Inicio] Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" :class="{ toggled: !mostrarSidebar }">

        <!-- Brand (Espaço da logomarca) -->
        <Brand />

        <!-- Navegação de Sidebar -->
        <Menu :menu="menu" :mostrarApenasUmSubmenu="true" />

        <!-- Linha divisória -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Caixa de Mensagem -->
        <div class="sidebar-card d-none d-lg-flex">
            <p class="text-center mb-2">Este sistema possui uma página de login.</p>
            <router-link to="/acesso" class="btn btn-success btn-sm">Clique para visualizar</router-link>
        </div>

    </ul>
    <!-- [Fim] Sidebar -->

</template>

<script>
import Brand from '@/layouts/painel/components/Brand';
import Menu from '@/layouts/painel/components/Menu';

export default {
    name: 'Sidebar',
    components: {
        Brand,
        Menu
    },
    data() {
        return {
            menu: [
                {
                    divisor: true,
                    classes: 'my-0'
                },
                {
                    href: '/painel/inicio',
                    texto: 'Inicio',
                    iconeFamilia: 'fas',
                    icone: 'tachometer-alt',
                    classes: 'nav-link'
                },
                {
                    divisor: true
                },
                {
                    titulo: 'Configurações'
                },
                {
                    href: '/painel/perfis',
                    texto: 'Perfis',
                    iconeFamilia: 'fas',
                    icone: 'unlock-alt',
                    classes: 'nav-link'
                },
                {
                    href: '/painel/unidades',
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
                    href: '/painel/usuarios',
                    texto: 'Usuários',
                    iconeFamilia: 'fas',
                    icone: 'users',
                    classes: 'nav-link'
                },
                {
                    href: '',
                    texto: 'Clientes',
                    iconeFamilia: 'fas',
                    icone: 'handshake',
                    classes: 'nav-link',
                    submenu: [
                        {
                            href: '/painel/clientes/pessoa-fisica',
                            texto: 'Pessoa Física'
                        },
                        {
                            href: '/painel/clientes/pessoa-juridica',
                            texto: 'Pessoa Jurídica'
                        }
                    ],
                    submenuAberto: false
                },
                {
                    href: '/painel/funcionarios',
                    texto: 'Funcionários',
                    iconeFamilia: 'fas',
                    icone: 'people-carry',
                    classes: 'nav-link'
                },
                {
                    href: '',
                    texto: 'Fornecedores',
                    iconeFamilia: 'fas',
                    icone: 'dolly',
                    classes: 'nav-link',
                    submenu: [
                        {
                            href: '/painel/fornecedores/pessoa-fisica',
                            texto: 'Pessoa Física'
                        },
                        {
                            href: '/painel/fornecedores/pessoa-juridica',
                            texto: 'Pessoa Jurídica'
                        }
                    ],
                    submenuAberto: false
                },
                {
                    href: '/painel/produtos',
                    texto: 'Produtos',
                    iconeFamilia: 'fas',
                    icone: 'box-open',
                    classes: 'nav-link'
                },
                {
                    href: '/painel/pedidos',
                    texto: 'Pedidos',
                    iconeFamilia: 'fas',
                    icone: 'shopping-cart',
                    classes: 'nav-link'
                },
                {
                    divisor: true
                },
                {
                    titulo: 'Financeiro'
                },
                {
                    href: '/painel/contas-a-pagar',
                    texto: 'Contas a Pagar',
                    iconeFamilia: 'fas',
                    icone: 'arrow-right',
                    classes: 'nav-link'
                },
                {
                    href: '/painel/contas-a-receber',
                    texto: 'Contas a Receber',
                    iconeFamilia: 'fas',
                    icone: 'arrow-left',
                    classes: 'nav-link'
                }
            ]
        }
    },
    props: {
        mostrarSidebar: {
            type: Boolean,
            default: false
        }
    }
}
</script>
