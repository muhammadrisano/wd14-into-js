// 1. 

const sayBro = ()=>{
  console.log('helo bro...');
}

const sayTest = sayBro

sayTest()


// const print = (val)=>{
//   console.log(val);
// }

// const sayHelo = (name, callback)=>{
//   const greeting = `helo ${name}, apakabar !`
//   callback(greeting)
// }
// sayHelo('risano', (val)=>{
//   console.log(val);
// })


const penjumlahan = (val1, val2, callback)=>{
  const result = val1 + val2
  callback(result)
}

penjumlahan(10, 20, (result)=>{
  const hasil = result * 50 / 100
  console.log(hasil);
})