const pages = {
    pages: 464
}
const book1 = {
    title:"Celan Code",
    author:"Robert C. Martin",
} 

console.log("book1", book1);
console.log("pages", pages);

Object.setPrototypeOf(book1, pages)
console.log(Object.getPrototypeOf(book1));
