import { useState } from "react";
import booklist from "./models/books.json";
import Book from "./components/Book";

function App() {
  const [books, setBooks] = useState(booklist);

  console.log(books[0]);
  return books.map((book) => (
    <Book
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors[0]}
      amount={book.saleInfo.retailPrice?.amount}
      image={book.volumeInfo.imageLinks.thumbnail}
    />
  ));
}

export default App;
