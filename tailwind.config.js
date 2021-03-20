module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		fontFamily: {
			'roboto': ['Roboto']
		},
		keyframes: {
			'wiggle': {
				'20%': {left: '-80%'},
				'50%': {left: '-50%'},
				'100%': {left: 0}
			}
		},
		animation: {
			'spin-slow': 'spin 3s linear infinite',
			'wiggle': 'wiggle 1s ease-in-out forwards',
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
