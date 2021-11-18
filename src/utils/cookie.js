export default function _() {
    let pairs = {}
    let cookie = document.cookie.split(/;\s*/)
    for (let pair of cookie) {
        pair = pair.split('=')
        pairs[pair[0]] = pair[1]
    }
    return pairs
}