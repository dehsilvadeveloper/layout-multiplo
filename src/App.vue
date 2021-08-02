<template>

	<component :is="layout" />

</template>

<script>
import PadraoLayout from '@/layouts/padrao/PadraoLayout';
import LoginLayout from '@/layouts/login/LoginLayout';
import PainelLayout from '@/layouts/painel/PainelLayout';

export default {
	components: {
		PadraoLayout,
		LoginLayout,
		PainelLayout
	},
	data() {
		return {
			layout: null
		}
	},
	watch: {

		$route(to, from) {

			// Setamos o título da página de acordo com o que for definido no route meta title
			document.title = to.meta.title;

			// Setamos o layout da página de acordo com o que for definido no route meta layout
			this.layout = to.meta.layout || 'PadraoLayout';

		}

	}
};
</script>

<!--
URLS para pesquisa:
- https://medium.com/@arieldi/hi-the-fact-that-all-styles-are-rendered-dispite-what-layout-is-mounted-is-mostly-due-to-your-9a277b58e18b
- https://cli.vuejs.org/config/#css-requiremoduleextension
- https://stackoverflow.com/questions/48806433/sharing-common-css-across-vuejs-components?rq=1
-->
