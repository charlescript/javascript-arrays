const nomes = [ "Ana", "Clara","Maria", "Maria","João", "João","João"];

// function retiraReplica(vetor){

//     for( let i=0; i < vetor.length; i++ ){
//         if(vetor[i] === (vetor[i+1]) ){
//             vetor[i] = "";
//         }
//     }

//     return vetor;
// }

// console.log(retiraReplica(nomes));


const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);