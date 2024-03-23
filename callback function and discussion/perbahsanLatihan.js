// 1
const printOddNumber = (num)=>{
  for(let i=1; i<=num; i++){
    if(i % 2 !== 0){
      console.log(i);
    }
  }

}

// printOddNumber(9)
const printPijarCamp = (num) =>{
  for(let i=1; i<=num; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log('pijarcamp');
    }else if(i%3 === 0){
      console.log('pijar');
    }else if(i%5 === 0){
      console.log('camp');
    }else{
      console.log(i);
    }
  }
}

printPijarCamp(15)