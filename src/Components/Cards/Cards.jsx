import React from 'react';
import { Link, useNavigate } from 'react-router';

const Cards = ({ card }) => {
  // console.log(Object.keys(card).join(','));
  const { id, thumbnail, name, category, date, location } = card;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cardDetails/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-auto ">
      <figure>
        <img
          className="md:h-[280px] lg:h-[380px]"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div
        className="card-body 
      "
      >
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="text-xl font-semibold ">
          <p>{category}</p>
          <p>{location}</p>
          <p>{date}</p>
        </span>

        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            class="btn btn-outline btn-primary w-full"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
