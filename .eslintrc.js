module.exports = {
	env: {
		browser: true,
		es2021: true,
		'cypress/globals': true,
    'jest/globals': true
	},
	extends: ['standard', 'plugin:react/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'cypress', 'jest'],
	rules: {},
}
