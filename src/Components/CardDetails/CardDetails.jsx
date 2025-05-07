import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const CardDetails = () => {
  TabTitle('Hood Happenings | Event Details');
  const { id } = useParams();
  const data = useLoaderData();

  const [card, setCard] = useState({});
  // console.log(Object.keys(card).join(','));
  const { thumbnail, name, category, date, location, entry_fee, description } =
    card;

  useEffect(() => {
    const cardDetails = data.find(singleCard => singleCard.id == id);
    setCard(cardDetails);
  }, [data, id]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 w-7xl flex py-10 md:py-20  justify-center items-center">
        <div className="bg-white p-4 rounded-xl">
          <div className="flex space-x-4 bg-white p-2"></div>
          <img className="w-96 mx-auto" src={thumbnail} alt="" />
          <div className="bg-white p-2">
            <span className="font-semibold">
              {' '}
              <p>
                <span className="font-bold">Name</span> : {name}
              </p>
              <p>
                <span className="font-bold"> Category</span>: {category}
              </p>
              <p>
                {' '}
                <span className="font-bold">Date</span> : {date}
              </p>
              <p>
                {' '}
                <span className="font-bold">location</span> : {location}
              </p>
              <p>
                {' '}
                <span className="font-bold">Entry fee</span> : {entry_fee}
              </p>
              <p>
                {' '}
                <span className="font-bold">Details</span> : {description}
              </p>
            </span>
          </div>
          <button
            onClick={() => {
              toast.success('Booking Successfully done');
            }}
            className="btn w-full"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
