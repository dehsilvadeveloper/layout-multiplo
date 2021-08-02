import { createRouter, createWebHistory } from 'vue-router';

// Título da aplicação
const tituloDoSistema = 'Sistema com Layout Múltiplo';

// Lista de rotas da aplicação
const routes = [
	{
		path: '/',
		redirect: { name: 'Acesso' }
	},

	/**
	 * =================================
	 * PÚBLICO
	 * Rotas públicas da aplicação
	 * =================================
	 */

	{
		/*
		* URL: /acesso
		*/
		path: '/acesso',
		name: 'Acesso',
		component: () => import('@/pages/login/Acesso.vue'),
		meta: {
			layout: 'LoginLayout',
			title: `${tituloDoSistema} | Acesso`
		}
	},

	/**
	 * =================================
	 * PAINEL DE GESTÃO
	 * Rotas do painel de gestão / administração
	 * =================================
	 */

	{
		/*
		* URL: /painel
		*/
		path: '/painel',
		name: 'Painel',
		component: () => import('@/pages/painel/Painel.vue'),
		children: [
			{
				path: '',
				redirect: { name: 'Inicio' }
			},
			{
				/*
				* URL: /painel/inicio
				*/
				path: 'inicio',
				name: 'Inicio',
				component: () => import('@/pages/painel/Inicio.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Inicio`
				}
			},
			{
				/*
				* URL: /painel/perfis
				*/
				path: 'perfis',
				name: 'Perfis',
				component: () => import('@/pages/painel/Perfil.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Perfis`
				}
			},
			{
				/*
				* URL: /painel/unidades
				*/
				path: 'unidades',
				name: 'Unidades',
				component: () => import('@/pages/painel/Unidade.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Unidades`
				}
			},
			{
				/*
				* URL: /painel/usuarios
				*/
				path: 'usuarios',
				name: 'Usuarios',
				component: () => import('@/pages/painel/Usuario.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Usuarios`
				}
			},
			{
				/*
				* URL: /painel/clientes
				*/
				path: 'clientes',
				name: 'Clientes',
				component: () => import('@/pages/painel/cliente/Cliente.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Clientes`
				},
				children: [
					{
						/*
						* URL: /painel/clientes/pessoa-fisica
						*/
						path: 'pessoa-fisica',
						name: 'Clientes.PessoaFisica',
						component: () => import('@/pages/painel/cliente/PessoaFisica.vue'),
						meta: {
							layout: 'PainelLayout',
							title: `${tituloDoSistema} | Clientes - Pessoa Física`
						}
					},
					{
						/*
						* URL: /painel/clientes/pessoa-juridica
						*/
						path: 'pessoa-juridica',
						name: 'Clientes.PessoaJuridica',
						component: () => import('@/pages/painel/cliente/PessoaJuridica.vue'),
						meta: {
							layout: 'PainelLayout',
							title: `${tituloDoSistema} | Clientes - Pessoa Jurídica`
						}
					}
				]
			},
			{
				/*
				* URL: /painel/funcionarios
				*/
				path: 'funcionarios',
				name: 'Funcionarios',
				component: () => import('@/pages/painel/Funcionario.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Funcionários`
				}
			},
			{
				/*
				* URL: /painel/fornecedores
				*/
				path: 'fornecedores',
				name: 'Fornecedores',
				component: () => import('@/pages/painel/fornecedor/Fornecedor.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Fornecedores`
				},
				children: [
					{
						/*
						* URL: /painel/fornecedores/pessoa-fisica
						*/
						path: 'pessoa-fisica',
						name: 'Fornecedores.PessoaFisica',
						component: () => import('@/pages/painel/fornecedor/PessoaFisica.vue'),
						meta: {
							layout: 'PainelLayout',
							title: `${tituloDoSistema} | Fornecedores - Pessoa Física`
						}
					},
					{
						/*
						* URL: /painel/fornecedores/pessoa-juridica
						*/
						path: 'pessoa-juridica',
						name: 'Fornecedores.PessoaJuridica',
						component: () => import('@/pages/painel/fornecedor/PessoaJuridica.vue'),
						meta: {
							layout: 'PainelLayout',
							title: `${tituloDoSistema} | Fornecedores - Pessoa Jurídica`
						}
					}
				]
			},
			{
				/*
				* URL: /painel/produtos
				*/
				path: 'produtos',
				name: 'Produtos',
				component: () => import('@/pages/painel/Produto.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Produtos`
				}
			},
			{
				/*
				* URL: /painel/pedidos
				*/
				path: 'pedidos',
				name: 'Pedidos',
				component: () => import('@/pages/painel/Pedido.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Pedidos`
				}
			},
			{
				/*
				* URL: /painel/contas-a-pagar
				*/
				path: 'contas-a-pagar',
				name: 'ContasAPagar',
				component: () => import('@/pages/painel/ContaAPagar.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Contas a Pagar`
				}
			},
			{
				/*
				* URL: / painel/contas-a-receber
				*/
				path: 'contas-a-receber',
				name: 'ContasAReceber',
				component: () => import('@/pages/painel/ContaAReceber.vue'),
				meta: {
					layout: 'PainelLayout',
					title: `${tituloDoSistema} | Contas a Receber`
				}
			}
		]
	},
	{
		/*
		* ERRO: Rota/Página Não Encontrada
		*/
		path: '/:pathMatch(.*)*',
		name: 'PaginaNaoEncontrada',
		component: () => import('@/pages/erro/PaginaNaoEncontrada.vue'),
		meta: {
			layout: 'PadraoLayout',
			title: `${tituloDoSistema} | Erro`
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
