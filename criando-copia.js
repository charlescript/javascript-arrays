const notas = [7, 7, 8, 9];
const novoVetor = [];

function criaCopiaVetor(notas, num = null) {

    for(let i = 0; i <= notas.length; i++){
        novoVetor[i] = notas[i];
        
        if(i === notas.length){
            novoVetor[i] = num;
        }
    }

    return novoVetor;  
}

console.log(`As notas originais: ${criaCopiaVetor(notas)}`);
console.log(`As novas notas são: ${criaCopiaVetor(notas, 10)}`);