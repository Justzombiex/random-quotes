import { useEffect, useState } from "react";
import quotes from "../data/quotes";

import "./QuoteBox.css";

export default function QuoteBox() {

  const [quote, setQuote] = useState({text:"", author:""});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="author">{quote.author}</p>
      <p id="text">{quote.text}</p>
      <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Compartir en Twitter
      </a>
    </div>
  );
}
