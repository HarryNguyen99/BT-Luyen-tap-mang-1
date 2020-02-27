let songuyen = [-2, 10, -5, -8, 15, -3, 62, 49, 11, 18];
let consta = 0;
for (let i = 0; i < songuyen.length; i++) {
    if (songuyen[i] < 0) {
        consta++
    }

}
alert(consta);