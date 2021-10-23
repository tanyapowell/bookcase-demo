import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { title, image, amount, author } = props;
  console.log(`This is ${title} and costs ${amount}`);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{amount}</p>
      <img src={image} alt={`This is ${title}`} />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  author: PropTypes.string.isRequired,
};

export default Book;
