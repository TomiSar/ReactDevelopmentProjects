import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

//local data contains id, name, job, image, text
//define data(people) the objects properties 
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length -1;
    }
    return index;
  }
  
  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    //if randomindex doesn't change on click set index + 1
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkIndex(randomIndex));
  }

  return (
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={previousPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={randomPerson}>Random person</button>
  </article>
  );
};

export default Review;