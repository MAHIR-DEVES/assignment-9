import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const Home = () => {
  TabTitle('Hood Happenings | Home');
  const data = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <div className="text-center md:pt-20 py-10 ">
        {' '}
        <h3 className="text-2xl font-bold text-red-400">Restaurants Event</h3>
        <h2 className="text-5xl font-bold"> Top Listing Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5 w-11/12 mx-auto">
        {data.map(card => (
          <Cards card={card} key={card.id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
