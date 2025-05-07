import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { toast } from 'react-toastify';

const Profile = () => {
  TabTitle('Hood Happenings | Profile');
  const { user, setUser, updateUser2 } = use(AuthContext);

  const handleUpdateProfile = e => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const photoURL = document.querySelector(
      'input[placeholder="Photo URL"]'
    ).value;

    if (!name || !photoURL) {
      toast.error("Name and Photo URL can't be empty!");
      return;
    }

    updateUser2({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success('Profile updated successfully!');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center ">
        <img
          className="w-40 rounded-full"
          src={`${user ? user.photoURL : ''}`}
          alt=""
        />
        <h2 className="text-2xl font-bold mb-2">{user && user.displayName}</h2>
        <p>{user && user.email}</p>
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
          <button onClick={handleUpdateProfile} className="btn w-full mt-3">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
