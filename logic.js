function generate() {
    var suf = ["note", "paper", "write"];
    var prefix = words[Math.floor(Math.random()* words.length)].toUpperCase();
    var suffix = suf[Math.floor(Math.random()* suf.length)].toUpperCase();
    document.getElementById("name").innerText = prefix + suffix;
}
