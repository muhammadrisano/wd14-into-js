const name = "risano akbar"
const biodata = {
  name: 'risano',
  email: 'risano@gmail.com',
  address: 'jl. kemana saja no 2 padang'
}

// const name = biodata.name
// const email = biodata.email
// const adddres = biodata.adddres

const {name:nama, email} = biodata

// console.log(nama);

// untuk array

const hobies = ['ngoding', 'joging', 'gaming']

// const hobi1 = hobies[0]
// const hobi2 = hobies[1]
// const hobi3 = hobies[2]

// console.log(hobi1);
const [hobi1, hobi2, hobi3] = hobies

console.log(hobi2);
