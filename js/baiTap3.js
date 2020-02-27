let songuyen = [5, 10, 5, 8, 15, 3, 62, 49, 11, 18];
let max = songuyen[0];
let indexm = null;
let tong = 0;
let trungbinh = 0;
let ketqua = null;
for (let i = 0; i < songuyen.length; i++) {
    if (songuyen[i] > max) {
            max = songuyen[i];
            indexm = i;
    }
        tong += songuyen[i];
        trungbinh =  tong / songuyen.length ;
        ketqua = Math.round(trungbinh);
}

document.write(ketqua);

