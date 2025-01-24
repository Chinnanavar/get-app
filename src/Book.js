import React from "react";
import "./Book.css";

const Book = (props) => {
  //   const img =
  //     "https://images-na.ssl-images-amazon.com/images/I/81crMlhnQtL._AC_UL381_SR381,381_.jpg";
  //   const title = "ONYX STROM";
  //   const publisher = "Joseph Murphy";
  //   const price = 12.99;

  const { img, title, publisher, price } = props;
  return (
    <div className="book">
      {console.log(props)}
      {/* <h1>{props.greet}</h1> */}
      <div className="book-img">
        <img src={img} alt="" />
      </div>
      <div className="book-info">
        <h2> {title}</h2>
        <p className="author">by {publisher}</p>
        <p className="price">$ {price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Book;
