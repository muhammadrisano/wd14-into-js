/*
output: 
Selamat Pagi,
apakabar bro...
*/
// untuk multi line

const text = "Selamat Pagi \napakabar bro..."
const text2 = `Selamat Pagi
apakabar bro...`

// console.log(text2);

// memasukan expressi

const myNilai = 80

// nilai anda adalah 80, selamat ya
const output = "nilai anda adalah " + myNilai + ", selamat ya" 
const output2 = `nilai anda adalah ${myNilai}, selamat ya`
console.log(output2);


/*
nilai ipa saya adalah 80
nilai ips saya adalah 70
dan rata-rata kedua nilai adalah 75
*/

const ipa = 80
const ips = 70

const result1 = "nilai ipa saya adalah "+ipa +
"\nnilai ips saya adalah "+ips+
"\ndan rata-rata kedua nilai adalah "+ ((ipa+ips)/2)
console.log(result1);

const result2 = `nilai ipa saya adalah ${ipa}
nilai ips saya adalah ${ips}
dan rata-rata kedua nilai adalah ${(ipa + ips) / 2}`
console.log(result2);