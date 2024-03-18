// const nilaiAkhir = 80
// // let grage = ''
// if(nilaiAkhir > 75){
//   console.log('selamat anda lulus');
// }else{
//   console.log('maaf anda belum lulus');
// }

// if(nilaiAkhir > 85){
//   grage = 'A'
// }else if(nilaiAkhir > 75){
//   grage = 'B'
// }else if(nilaiAkhir > 59){
//   grage = 'C'
// }else if(nilaiAkhir > 40){
//   grage = 'D'
// }else{
//   grage = 'E'
// }

// console.log(grage);



// ternari operator

// const keterangan = nilaiAkhir > 75 ? 'Selamat Anda lulus': 'Maaf anda belum lulus'
// console.log(keterangan);

// switch case

const kodeHari = 0
// const isLogin = true
let hari  = ''

switch(kodeHari){
  case kodeHari >= 0:
    hari = "minggu";
    break;
  case 1:
    hari = "senin";
    break
  case 2:
    hari = "selasa";
    break;
  case 3:
    hari = "rabu";
    break;
  case 4:
    hari = "kamis";
    break;
  case 5:
    hari = "jumat"
    break;
  case 6:
    hari = "subtu"
    break;
  default:
    hari = "maaf kode hari yang anda masukan salah"
}

// if(kodeHari ===0){
//   hari = "minggu"
// }else if(kodeHari ===1){
//   hari = 'senin'
// }
console.log(hari);