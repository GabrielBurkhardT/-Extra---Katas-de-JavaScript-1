//multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

function numeros(){
    let arr = []
    for(let i = 100;i>=5;i-=5){
        arr.push(i)
    }
    return arr
}