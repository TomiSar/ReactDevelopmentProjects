import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  //useEffect runs when index changes and people[] changes
  //set correct data index < 0 index > 3  using useEffect (index not out of range)
  useEffect(() => {
    const lastIndex = people.length - 1;
    //if index < 0
    if (index < 0) {
      setIndex(lastIndex)
    }
    //if index > people.length - 1
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]) 

  //After 5000ms call setIndex() and set nextSlide (if arrow not clicked using useEffect call)
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index +  1);
    }, 5000)
    return () => { 
      clearInterval(slider);
    }
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {/* map people add id, image, title, name for person object */}
        { people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length -1)) {
            position = "lastSlide";
          }

          //More to added soon
          return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img"/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft className="" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight className="" />
        </button>
      </div>
    </section>
  );
}

export default App;
