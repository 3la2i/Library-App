import React, { useState } from "react";
import "./Home.css";

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "تاريخ الأمم والملوك",
      author: "ابن جرير الطبري",
      isbn: "8472394893",
    },
    {
      id: 4,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "9348372740",
    },
    {
      id: 5,
      title: "الكامل في اللغة والأدب",
      author: "ابن منظور",
      isbn: "9384928374",
    },
    {
      id: 6,
      title: "الأمالي",
      author: "أبو علي القالي",
      isbn: "8937483928",
    },
    {
      id: 7,
      title: "المعلقات السبع",
      author: "الشنفرى",
      isbn: "9283748372",
    },
  ],
};






const Main = () => {
  const [data, setData] = useState(initState.books);
  return (
    <main>
      <div className="book-list">
        {data.map((book) => (
          <div name={book.id} className="card">
            <h2>{book.title}</h2>
            <p>author: {book.author}</p>
            <p> (ISBN): {book.isbn}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
