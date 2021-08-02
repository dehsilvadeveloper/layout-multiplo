/**
 * Conjunto de funções relacionadas a validação
 */

/**
 * Verifica se a url informada se trata de um link externo
 *
 * @param {string} url
 * @returns {Boolean}
 */
export function validarLinkExterno(url) {

    return /^(https?:|mailto:|tel:|ftp:)/.test(url);

}

/**
 * Verifica se a url informada é válida
 *
 * @param {string} url
 * @returns {Boolean}
 */
export function validarURL(url) {

    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

    return reg.test(url);

}

/**
 * Verifica se o e-mail informado é válido
 *
 * @param {string} email
 * @returns {Boolean}
 */
export function validarEmail(email) {

    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reg.test(email);

}

/**
 * Verifica se o valor informado é do tipo string
 *
 * @param {string} valor
 * @returns {Boolean}
 */
export function validarString(valor) {

    if (typeof valor === 'string' || valor instanceof String) {

        return true;

    }

    return false;

}

/**
 * Verifica se o valor informado é do tipo array
 *
 * @param {Array} valor
 * @returns {Boolean}
 */
export function isArray(valor) {

    if (typeof Array.isArray === 'undefined') {

        return Object.prototype.toString.call(valor) === '[object Array]';

    }

    return Array.isArray(valor);

}
