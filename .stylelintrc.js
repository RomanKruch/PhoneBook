module.exports = {
	extends: [
	  'stylelint-config-standard-scss',
	  'stylelint-config-recommended-vue/scss',
	  'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-order'],
	rules: {
	  'declaration-empty-line-before': 'never',
	  'font-family-name-quotes': 'always-unless-keyword',
	  'order/order': ['custom-properties', 'declarations'],
	  'order/properties-alphabetical-order': true,
	  'selector-class-pattern': [
		/^[a-z]+(?:-[a-z]+)*(?:_{2}[a-z]+(?:-[a-z]+)*)?(?:-{2}[a-z]+(?:-[a-z]+)*)?$/,
		{
		  resolveNestedSelectors: true,
		},
	  ],
	  'value-keyword-case': [
		'lower',
		{
		  ignoreKeywords: [/ease(?:[A-Z][a-z]+){2,}/],
		},
	  ],
	},
  }