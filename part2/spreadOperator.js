// menggabungkan array ke dalam array lain
const makananFavorit = ['nasi goreng', 'bakso']

const newMakananFavorit = [ 'pangsit', 'somay', ...makananFavorit]
console.log(newMakananFavorit);

// menggabungkan 2 array
const friendHobies = ['gaming', 'swimming']
const myHobies = ['ngoding', 'reading']
const resultHobies = [...myHobies, ...friendHobies]
console.log(resultHobies);


// mengcopy dan clone object

// const biodata = {
//   nama: 'risano',
//   email: 'risano@gmail.com',
//   address: 'padang'
// }

// const newBiodata = {...biodata}

// newBiodata.email = 'budi@mgail.com'
// newBiodata.address = 'jakarta'

// console.log(newBiodata);
// console.log(biodata);

const product1 = {
  nama: 'indomie ayam goreng',
  stock: 2, 
  price: 3000
}


const product2 = {
  nama: 'sarimi kari ayam',
  description: 'bal bla bla',
  harga: 4000
}

const result = {
  ...product1,
  ...product2
}

// const result = {
//   nama: 'indomie ayam goreng',
//   stock: 2, 
//   price: 3000,
//   nama: 'sarimi kari ayam',
//   description: 'bal bla bla',
//   harga: 4000
// }
console.log(result);