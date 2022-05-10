//oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function numeros(){
    let arr=[]
    for(let i=1;i<=20;i++){
        if(i % 2 !== 0){
            arr.push(i)
       
        }
    }
return arr
}