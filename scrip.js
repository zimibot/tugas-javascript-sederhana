// 1. if, else, nested if
let angka = 44;
let kuadrat_nomor = 33;
let ganjil_genap = 2

if (angka > 0) {
    console.log(`Angka positif ${angka}`);
    console.log(`Kuadrat dari angka ${angka}:`, kuadrat(angka));
} else if (angka < 0) {
    console.log(`Angka negatif ${angka}`);
} else {
    console.log("Angka adalah nol");
}

// 2. switch case
switch (angka % ganjil_genap) {
    case 0:
        console.log(`Angka genap ${angka}`);
        break;
    case 1:
        console.log(`Angka ganjil ${angka}`);
        break;
}

// 3. for statement
console.log(`Daftar angka dari 1 sampai ${angka}:`);
for (let i = 1; i <= angka; i++) {
    console.log(i);
}

// 4. while, do while
let penghitung = 1;
console.log("Daftar angka dengan while loop:");
while (penghitung <= 3) {
    console.log(penghitung);
    penghitung++;
}

penghitung = 1;
console.log("Daftar angka dengan do while loop:");
do {
    console.log(penghitung);
    penghitung++;
} while (penghitung <= 3);

// 5. function
function kuadrat(x) {
    return x * x;
}

console.log(`Hasil kuadrat dari ${kuadrat_nomor}:`, kuadrat(kuadrat_nomor));
