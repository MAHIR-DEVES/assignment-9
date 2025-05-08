import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const Home = () => {
  TabTitle('Hood Happenings | Home');
  const data = useLoaderData();

  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
      <Slider />

      {/* Events Section */}
      <section className="py-12 lg:px-4 sm:px-6  lg:w-10/12 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Restaurants Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events Section
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most exciting restaurant events in your area
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(card => (
            <Cards card={card} key={card.id} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            View All Events
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
