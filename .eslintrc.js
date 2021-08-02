module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// Desativamos algumas regras
		'no-mixed-spaces-and-tabs': 'off',
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		'padded-blocks': 'off',
		'semi': 'off',
		'indent': 'off'
	}
}
