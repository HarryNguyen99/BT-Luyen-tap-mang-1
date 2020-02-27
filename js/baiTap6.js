let songuyen = [2, 10, 5, 8, 15, 3, 62, 49, 11, 18];
let v = 10;
let dem = 0;
for (let i = 0; i < songuyen.length; i++) {
    if (v == songuyen[i]) {
        dem++;
        break;
    }
}
if (dem != 0) {
    alert("trong mang");
} else {
    alert("không có")
}