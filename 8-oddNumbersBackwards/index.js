//oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function numeros(){
    let arr = []
    for(let i=20;i>=1;i--){if(i %2 !== 0){
    arr.push(i)}
    }
  return arr
  
}