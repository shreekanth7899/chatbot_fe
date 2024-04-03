import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const getBook = () => {
    axios.get(`/books/${bookId}`)
      .then(response => {
        setBook(response.data);
        setError(null);
      })
      .catch(error => {
        setError(error.response.data.error);
        setBook(null);
      });
  };

  return (
    <div className="App">
      <h1>Book API UI</h1>
      <div>
        <label htmlFor="bookId">Enter Book ID:</label>
        <input type="text" id="bookId" value={bookId} onChange={e => setBookId(e.target.value)} />
        <button onClick={getBook}>Get Book</button>
      </div>
      {error && <p>Error: {error}</p>}
      {book && (
        <div>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
