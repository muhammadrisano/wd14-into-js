// function declaration
const nama = "risano"
const alamat = "padang"
const email = "risano@mgail.com"


function printBiodata(name, address, email) {
  console.log(`nama saya: ${name}`);
  console.log(`alamat saya: ${address}`);
  console.log(`email saya : ${email}`);
  
}

// printBiodata(nama, alamat, email)
// printBiodata('budi', 'jakarta', 'budi@gmail.com')
// printBiodata('toni', 'bandung', 'toni@mgai.com')

function penjumlahan(val1, val2){
  const result = val1 + val2
 return result
}




const hasilPenjumlahan =  penjumlahan(30, 20)
// const hasilPembagian = hasilPenjumlahan / 10
console.log(hasilPenjumlahan);

// expression

const perkalian = function(val1, val2){
  const result = val1 * val2
  return result
}

const hasilPerkalian = perkalian(9, 5)
// console.log(hasilPerkalian);


// arrow function

const pembagian = (val1, val2)=>{
  return  val1 / val2
}

const hasilPembagian = pembagian(81, 9)
console.log(hasilPembagian);