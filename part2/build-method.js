// sort -> digunakan untuk mensorting sebuah nilai
// const hobi = ['ngodding', 'joging', 'gaming', 'swimming']

const myNilai = [8, 7, 4, 2, 5, 31]

const result = myNilai.sort((a, b)=>b-a)
console.log(result);

// map
// const hobi = ['ngodding', 'joging', 'gaming', 'swimming', 'reading', 'swimming']

// for(let i = 0; i< hobi.length; i++){
//   console.log(`${i+1}. ${hobi[i]}`);
// }
// hobi.map((item, i)=>{
//   console.log(`${i+1}. ${item}`);
// })

// hobi.forEach((item, i)=>{
//   console.log(`${i+1}. ${item}`);
// })

// const hasil = hobi.map((item, i)=>{
//   return item + 'x'
// })

// console.log(hasil);

// split -> untuk memecah sebuah string menjadi array dengan seperatornya

const text = "saya ingin menjadi programmer javascript"

const hasilText = text.length
console.log(hasilText);
const resultText = text.split(' ')
console.log(resultText[resultText.length - 1]);

// join -> menggabungkan data yg ada di dalam array menjadi string
const hobi = ['ngodding', 'joging', 'gaming', 'swimming', 'reading', 'swimming']
const resultHobi = hobi.join(', ')
console.log(resultHobi);