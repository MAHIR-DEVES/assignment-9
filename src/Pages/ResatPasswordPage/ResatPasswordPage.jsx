import React, { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const ResatPasswordPage = () => {
  const { resetPassword } = use(AuthContext);
  const handleForgotPassword = e => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
      toast.error('Please enter your email first');
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success('Password reset email sent!');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <div className="bg-stone-300 p-10 font-semibold space-y-2">
          <h2 className="text-2xl">Resat Your Password</h2>
          <span className="flex items-center gap-2 bg-white mb-2 rounded-xl">
            <p className="px-3">Change Password</p>
            <input
              name="email"
              className="bg-stone-100 px-5 py-2 rounded-xl ml-1 "
              type="email"
              required
              placeholder="Your Email"
            />
          </span>
          <button
            onClick={handleForgotPassword}
            className="btn btn-outline w-full"
          >
            Resat Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResatPasswordPage;
