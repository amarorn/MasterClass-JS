const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    page: 464,
    language: "English",
    avaliable: true
}

const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    page: 464,
    language: "English",
    avaliable: true
}
//é comum fazer a comparação usando os comparadoreas boleanos porem quando vamos compara um
//objeto usando o comprador boleano comparamos apenas o espaço de memoria desse objeto com isso 
// so vamos ter uma comparação verdadeira se comparamos o mesmo objeto.

console.log("comparação de objetos diferente",book1 === book2)

//mesmo sendo totalmente igual, os objeto estão em espaço de memoria diferente

console.log("comparação de objetos iguais",book1 === book1);

// a comparação correta deve ser feito comparando as chaves e valores, para essa comparação 
// vamos ter que fazer um for

let equal = true

for (let key in book1){
    if(book1[key] !== book2[key]) equal = false
}

console.log(equal);
