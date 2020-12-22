/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const getHash = require('./bundle/utils').getHash

module.exports = {
	serializer: {
		createModuleIdFactory: function () {
			return function (path) {
				return getHash(path)
			}
		}
	},
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
}
