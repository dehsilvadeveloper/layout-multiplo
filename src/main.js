import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importo Vue-Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRegistered, faEquals, faBars, faTachometerAlt, faUnlockAlt, faBuilding, faUsers, faHandshake, faPeopleCarry, faDolly, faBoxOpen, faShoppingCart, faArrowRight, faArrowLeft, faAngleDown, faAngleUp, faSearch, faBell, faEnvelope, faFileAlt, faDonate, faExclamationTriangle, faUser, faCogs, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

// Importo diretivas
import FocusDirective from './directives/FocusDirective';

// Habilito icones desejados do font-awesome para uso
library.add(
    faRegistered,
    faEquals,
    faBars,
    faTachometerAlt,
    faUnlockAlt,
    faBuilding,
    faUsers,
    faHandshake,
    faPeopleCarry,
    faDolly,
    faBoxOpen,
    faShoppingCart,
    faArrowRight,
    faArrowLeft,
    faAngleDown,
    faAngleUp,
    faSearch,
    faBell,
    faEnvelope,
    faFileAlt,
    faDonate,
    faExclamationTriangle,
    faUser,
    faCogs,
    faList,
    faSignOutAlt,
    faGoogle,
    faFacebook
);

// Crio nova instância da aplicação
const app = createApp(App);

// Providencio variaveis globais para toda a aplicação
app.config.globalProperties.$tituloDoSistema = 'Aplicação com Layout Múltiplo';

// Ativo vue store
app.use(store);

// Ativo vue router
app.use(router);

// Ativo diretivas
app.directive('foco', FocusDirective);
app.directive('font-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = 30 + 'px';
    },
    updated: (el, binding) => {
        el.style.fontSize = 30 + 'px';
    }
})

// Ativo plugin font-awesome
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers);
app.component('font-awesome-layers-text', FontAwesomeLayersText);

// Monto instância num determinado elemento DOM
app.mount('#app');
