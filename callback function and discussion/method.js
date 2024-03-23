const biodata = {
  nama: 'risano',
  email: 'risano@gamil.com',
  // printSayHelo: function(teman){
  //   console.log(`helo ${teman}, apakabar!, nama saya adalah ${this.nama}`);
  // }
  // printSayHelo(teman){
  //   console.log(`helo ${teman}, apakabar!, nama saya adalah ${this.nama}`);
  // }
  printSayHelo:(teman)=>{
    console.log(`helo ${teman}, apakabar!, nama saya adalah ${biodata.nama}`);
  }
}

biodata.printSayHelo('budi')


// class Person {
//   printDataDiri(){
//     console.log('nama saya risano');
//   }
// }

// const risano = new Person()
// risano.printDataDiri()