let a = [2,4,6,8,9,15];
let b = ['4','16','64'];

for (var i = 0; i < a.length; i++) {
    b.push(a[i].toString());
}

console.log(b);