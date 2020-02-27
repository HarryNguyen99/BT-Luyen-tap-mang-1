let songuyen = [2, 10, 5, 8, 15, 3, 62, 49, 11, 18];
let max = songuyen[0];
let indexm = null;
for (let i = 1; i < songuyen.length; i++) {
    if (songuyen[i] > max) {
            max = songuyen[i];
            indexm = i;

    }
}

document.write(max);
document.write(indexm);