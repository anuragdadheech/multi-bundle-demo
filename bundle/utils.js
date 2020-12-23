import { NativeModules } from 'react-native'

const importLazy = async (path) => {
    const moduleId = getHash(path)
    await NativeModules.ChunkLoader.loadChunk(moduleId)
    return global.__r(moduleId)
}

module.exports = { importLazy }