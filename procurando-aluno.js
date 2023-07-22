const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];


// function procuraAluno(nome) {

//     let erro = 0;
//     for(cont = 0; cont < listaAlunosMedias[0].length; cont++){
//         if(nome === alunos[cont]){
//             // return alunos[cont] + " na posição "+cont+".";
//             return `Aluno(a) ${listaAlunosMedias[0][cont]} foi encontrado(a) e sua média é = ${listaAlunosMedias[1][cont]}`;
//             break;
//         } else {
//             erro += 1;
//         }
//     }

//     if(erro >= alunos.length){
//         return "Aluno(a) não encontrado(a)!";
//     }
//     // let erro = 0;
//     // for(cont = 0; cont < alunos.length; cont++){
//     //     if(nome === alunos[cont]){
//     //         return alunos[cont] + " na posição "+cont+".";
//     //         break;
//     //     } else {
//     //         erro += 1;
//     //     }
//     // }

//     // if(erro >= alunos.length){
//     //     return "Nome não encontrado!";
//     // }
// }

//console.log(procuraAluno("Juliana"));

function procuraAluno(nome){
    if (listaAlunosMedias[0].includes(nome)) {
        // const alunos = listaAlunosMedias[0];
        // const medias = listaAlunosMedias[1];

        const [alunos,medias] = listaAlunosMedias;

        const indice = alunos.indexOf(nome);
        const mediaDoAluno = medias[indice];

        console.log(`${nome} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

procuraAluno("Juliana");