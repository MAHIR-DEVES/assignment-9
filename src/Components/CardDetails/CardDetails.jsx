import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const [card, setCard] = useState({});
  // console.log(Object.keys(card).join(','));
  const { thumbnail, name, category, date, location, entry_fee, description } =
    card;

  useEffect(() => {
    const cardDetails = data.find(singleCard => singleCard.id == id);
    setCard(cardDetails);
  }, [data, id]);

  return (
    <div>
      <div className="">
        <div className="">
          <img src={thumbnail} alt="" />
        </div>
        <div className="">
          <h2>{name}</h2>
          <p>{category}</p>
          <p>{date}</p>
          <p>{location}</p>
          <p>{entry_fee}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
