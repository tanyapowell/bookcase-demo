import React from "react";

const Book = (props) => {
  const { title, image, amount, author } = props;
  console.log(`This is ${title}`);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{amount}</p>
      <img src={image} alt={`This is ${title}`} />
    </div>
  );
};

export default Book;
