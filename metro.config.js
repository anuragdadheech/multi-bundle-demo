/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    serializer: {
        createModuleIdFactory: function () {
            return function (path) {
                return modulePathHashFunction(path)
            }
        },
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
