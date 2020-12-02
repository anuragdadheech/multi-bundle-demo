export default getHash = (path) => {
    if (path.startsWith('/')) {
        path = path.replace(`${__dirname}/`, '')
    }
    var hash = 0,
        i,
        chr
    for (i = 0; i < path.length; i++) {
        chr = path.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0
    }
    if (path.indexOf('home') > 0) {
        console.log(path, hash)
    }
    return hash
}
