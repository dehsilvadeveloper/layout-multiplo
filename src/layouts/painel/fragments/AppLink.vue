<template>

    <component :is="tipoLink" v-bind="gerarLinkCompleto(url)">

        <slot />

    </component>

</template>

<script>
import { validarLinkExterno } from '@/utils/validacao';

export default {
    name: 'AppLink',
    props: {
        url: {
            type: String,
            required: true
        },
        classes: {
            type: String
        }
    },
    computed: {
        linkExterno() {
            // Verificamos se a url informada trata-se de um link externo
            return validarLinkExterno(this.url);
        },
        tipoLink() {
            if (this.linkExterno) {
                return 'a';
            }
            return 'router-link';
        }
    },
    methods: {

        /**
         * Gera um link completo baseado na url informada.
         * Caso o link seja do tipo externo, será gerada uma tag <a> simples.
         * Caso o link seja do tipo interno, iremos trabalhar com o router-link.
         *
         * @param {string} url
         * @returns {string}
         */
        gerarLinkCompleto(url) {

            if (this.linkExterno) {

                return {
                    href: url,
                    target: '_blank',
                    rel: 'noopener',
                    class: this.classes
                }

            }

            return {
                to: url,
                class: this.classes
            }

        }

    }
}
</script>
