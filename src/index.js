import React from "react";
import ReactDom from "react-dom";
import "./index.css";
// stateless functional component
// always return JSX
function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg"
        alt="Images"
      />
      <h1>I Love you to the moon and back</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
