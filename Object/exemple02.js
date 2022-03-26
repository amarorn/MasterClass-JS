const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    page: 464,
    language: "English",
    avaliable: true
}
 // verificar se uma propriedade existe no object
 // caso recebamos um undefined de um derterminado objeto podemos verificar se a propriedade
 //que estamos recebendo undefined existe utilizando o operador in ele vai retona um boleano 
 // true se a propriedade existi ou false caso ela não exista
 console.log("title" in book);
 console.log("contibuint" in book);

const book2 = {}
 for(let key in book){
    book2[key] = book[key]
 }

 console.log("Antes da remoção",book2);
 console.log("avaliable" in book2);

 //deletando uma propiedade de um objeto, o mas comun de ser ver é pessoas experiente atribuindo 
 //undefined ou null para essa propriedade porem isso não é o correto, pois apenas vamos atribuir
 //o valor null ou undefined para a propriedade de ser usado o operador delete para remover uma
 // propriedade

 delete book2["avaliable"]

 console.log("Depois da remoção",book2);
 console.log("avaliable" in book2);