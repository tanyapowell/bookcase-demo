import { useState } from "react";
import booklist from "./models/books.json";
import Book from "./components/Book";

const newBooks = [
  {
    volumeInfo: {
      title: "dancing in the isle",
      authors: ["Debbie Allen"],
    },
    saleInfo: {
      retailPrice: {
        amount: 10.99,
      },
    },
  },
  {
    volumeInfo: {
      title: "STARS 💫",
      authors: [
        "susan turner",
        "Hassanat",
        "Aneka",
        "Gloria",
        "Kemi",
        "Khadija",
        "Maisha",
      ],
    },
    saleInfo: {
      retailPrice: {
        amount: 9.99,
      },
    },
  },
  {
    volumeInfo: {
      title: "Entries of 9",
      authors: [],
    },
    saleInfo: {
      retailPrice: {
        amount: 9.99,
      },
    },
  },
];

function App() {
  const [books, setBooks] = useState(booklist);

  console.log(books);
  return (
    <>
      <button onClick={() => setBooks(newBooks)}>
        Change the list of books
      </button>
      {books.map((book) => (
        <Book
          title={book.volumeInfo.title}
          author={
            book.volumeInfo.authors.length !== 0
              ? book.volumeInfo.authors.join(", ")
              : "Anonymous"
          }
          amount={book.saleInfo.retailPrice?.amount ?? 'No price available 🤔' }
          image={
            book.volumeInfo.imageLinks?.thumbnail ??
            "http://placekitten.com/200/300"
          }
        />
      ))}
    </>
  );
}

export default App;
