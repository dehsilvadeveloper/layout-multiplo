/**
 * Diretiva responsável por dar foco automático num determinado elemento.
 *
 * Exemplo: <input v-focus>
 *
 */

const FocusDirective = {

    inserted(el, binding, vnode) {
        el.focus();
    }

};

export default FocusDirective;
