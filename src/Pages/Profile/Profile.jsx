import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center ">
        <img
          className="w-40 rounded-full"
          src={`${user ? user.photoURL : ''}`}
          alt=""
        />
        <h2 className="text-2xl font-bold mb-2">{user && user.displayName}</h2>
        <div className="bg-stone-300 p-10 font-semibold">
          <span className="flex items-center gap-2 bg-white mb-2 rounded-xl">
            <p className="px-3">Change Name</p>
            <input
              className="bg-stone-100 px-5 py-2 rounded-xl ml-1 "
              type="text"
              placeholder="Your Name"
            />
          </span>
          <span className="flex items-center gap-2 bg-white rounded-xl">
            <p className="px-3">Change Profile</p>
            <input
              className="bg-stone-100 px-5 py-2 rounded-xl"
              type="text"
              placeholder="Photo URL"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
