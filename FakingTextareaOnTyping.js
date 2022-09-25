let a = [
    ' ',
    'A',
    'H',
    'I',
    'H',
    'I',
    ' ',
    'a',
    'h',
    'i',
    'h',
    'i'
]
console.log(a[0]);
let n ="";

function typeTextArea() {
    let t = document.f.txt.value;
    let j = t.length;
    if (j > 0) {
        for (let i = 1; i <= j; i++) {
            n = n + a[i];
            if (i === 12) {
                document.f.txt.value = "";
                n = "";

            }
        }
    }
    document.f.txt.value = n;
    n = "";
    setTimeout("typeTextArea()", 0);
}