import { NativeModules } from 'react-native'
import { getHash } from '../getHash'

// TODO: Automate this
const moduleMap = {
    "-2115206626": -2115206626,
    "-440101718": -2115206626,
    "41570678": -2115206626,
    "1371139610": -2115206626
}

const getBundleId = moduleId => {
    return moduleMap[moduleId]
}

const importLazy = async (path) => {
    const moduleId = getHash(path)
    const bundleId = getBundleId(moduleId.toString())
    // TODO: Load & require only once
    await NativeModules.ChunkLoader.loadChunk(bundleId)
    const xx = global.__r(moduleId)
    return xx
}

module.exports = { importLazy }