import Book from "./Book";
import React from "react";
import books from "./books";

//fake json huge data
// robot file
// dependencies for other system
//hooks
//console.log(datas[0]);
// const book1 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81crMlhnQtL._AC_UL381_SR381,381_.jpg",
//   title: "ONYX STROM",
//   publisher: "Joseph Murphy",
//   price: "12.99",
// };

// const book2 = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81wZXiu4OiL._AC_UL381_SR381,381_.jpg",
//   title: "The Psyhology of Money",
//   publisher: "Morgan Housel",
//   price: "10.99",
// };

// const books = [
//   {
//     img: "https://images-na.ssl-images-amazon.com/images/I/81crMlhnQtL._AC_UL381_SR381,381_.jpg",
//     title: "ONYX STROM",
//     publisher: "Joseph Murphy",
//     price: "12.99",
//   },
//   {
//     img: "https://images-na.ssl-images-amazon.com/images/I/81wZXiu4OiL._AC_UL381_SR381,381_.jpg",
//     title: "The Psyhology of Money",
//     publisher: "Morgan Housel",
//     price: "10.99",
//   },
// ];

const BookList = () => {
  return (
    <div>
      {books.map((ele) => {
        return (
          <Book
            img={ele.img}
            title={ele.title}
            publisher={ele.publisher}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default BookList;
