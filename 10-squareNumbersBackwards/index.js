//squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

function numeros(){
    let arr = []
    for(let i=10;i>=1;i--){
        
      arr.push(i*i)
        
    }
    return arr
}