// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

const notas = [10, 6.5, 8, 7.5];

//const media = (nota1 + nota2 + nota3 + nota4) / 4;


function media(notas) {

    let media = 0;
    for (i = 0; i < notas.length; i++) {
        media += notas[i];
        console.log("Nota["+i+"]: "+media);
        if (i === notas.length) {
            media = (media / 4);
            console.log("->"+media);
        }
    }

    return "Média = "+ media / notas.length;
}

console.log("---------");
console.log(media(notas));