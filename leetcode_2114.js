var s = [
    "asdf asdf asdf asdf asdf",
    "asdfasdf asdf asdf",
    "asdf asdf asdf asdf asdf",
];
function mostWordsFound(sentences) {
    var max = 0;
    var temp = 0;
    for (var i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length;
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
console.log(mostWordsFound(s));
