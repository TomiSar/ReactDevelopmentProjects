import React, { useState } from 'react';

//from fecth(url) => id, name, info, image, price
// button for deleting the tour if not interested
//By default readMore option from tours is false if button readMore clicked
//complete info from tour is visible. Also button text needs to be changed after click.
// import removeTour function from Tours
const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour" >
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)} >Not interested</button>
      </footer>
    </article>
  )
};

export default Tour;