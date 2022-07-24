export const Book = (props) => {
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props.title);
      }}
    >
      <img
        src={
          props.img ||
          "https://m.media-amazon.com/images/I/71Jh1Bw9-rL._AC_UY327_FMwebp_QL65_.jpg"
        }
        alt="Images"
      />
      <h1>
        {props.title ||
          "Our Class is a Family: Activity and Coloring Books for Kids"}
      </h1>
      <h4>{props.author || "ACHIMED Edition "}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(props.author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
