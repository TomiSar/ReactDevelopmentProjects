import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 1;
    } if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  
  return (
    <section className="section-center">
      <h3>Just another boring Lorem Ipsum</h3>
      <form  className="loren" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" id="amount" name="amount" value={count}
        onChange={(e) => setCount(e.target.value)} />
        <button className="btn">generate</button>
      </form>
      <article>
        { text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;