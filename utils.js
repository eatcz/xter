randomString = (e) => {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

randomDelay = (ts) => {
    const delay = [1, 2, 3, 4, 5, 6]
    let random = Math.floor(Math.random() * delay.length) + (Math.random().toFixed(2) * 10)
    random > 5 ? random = (random / 10).toFixed(2) : random
    return new Promise((resolve) => setTimeout(() => resolve(), random * 6000))

}

module.exports = {
    randomString,
    randomDelay
}
