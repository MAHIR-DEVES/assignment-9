import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import './navbar.css';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, userLogout } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handelLogout = () => {
    userLogout()
      .then(() => {
        toast.success('logout Successful');
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <div className="navbar bg-[#2F2F2F] text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2F2F2F] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Hood Happenings</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 navLink">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className=" flex justify-center items-center gap-4 mr-5">
          <img
            className="w-12 rounded-full"
            src={`${user ? user.photoURL : ''}`}
            alt=""
          />
          <h2>{user && user.displayName}</h2>
        </div>
        {user ? (
          <button onClick={handelLogout} className="btn bg-gray-400 text-white">
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className={`btn ${
              pathname === '/login' ? 'bg-red-400 text-white' : ''
            }`}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
