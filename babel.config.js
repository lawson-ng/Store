module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				root: ['./src'],
				alias: {
					assets: './assets',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: false,
				allowUndefined: false,
			},
		],
	],
}
