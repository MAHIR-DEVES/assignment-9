import React from 'react';
import { Link } from 'react-router';

const Cards = ({ card }) => {
  // console.log(Object.keys(card).join(','));
  const { id, thumbnail, name, category, date, location } = card;

  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
      <figure>
        <img src={thumbnail} alt="Shoes" />
      </figure>
      <div
        className="card-body 
      "
      >
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="text-xl font-semibold">
          <p>{category}</p>
          <p>{location}</p>
          <p>{date}</p>
        </span>

        <div className="card-actions justify-end">
          <Link to={`/cardDetails/${id}`}>
            <button className="btn btn-primary ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
