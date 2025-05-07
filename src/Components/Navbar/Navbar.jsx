import { NavLink, useLocation, useNavigate } from 'react-router';
import './navbar.css';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';

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
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
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
    <div className="navbar bg-[#2F2F2F] text-white shadow-sm py-5 md:py-6">
      <div className="flex justify-between items-center md:w-11/12 md:mx-auto">
        <div className="flex items-center ">
          <div className="dropdown mr-2">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden cursor-pointer "
            >
              <GiHamburgerMenu size={29} />{' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2F2F2F] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <button
            className="cursor-pointer text-xl"
            onClick={() => navigate('/')}
          >
            Hood Happenings
          </button>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu-horizontal px-1 navLink">{links}</ul>
        </div>
        <div className="flex lg:hidden w-36 ml-14">
          <div className=" flex justify-center items-center  mr-3">
            <img
              className="w-10 rounded-full mr-1"
              src={`${user ? user.photoURL : ''}`}
              alt=""
            />
            <h2 className="mr-5 font-bold">{user && user.displayName}</h2>
          </div>
          <div className="flex justify-center items-center">
            {user ? (
              <button
                onClick={handelLogout}
                className="btn btn-sm bg-gray-400 text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className={`btn  btn-sm ${
                  pathname === '/login' ? 'bg-red-400 text-white' : ''
                }`}
              >
                Login
              </button>
            )}
          </div>
        </div>
        <div className="flex hidden lg:flex">
          <div className=" flex justify-center items-center gap-4 mr-5">
            <img
              className="w-12 rounded-full"
              src={`${user ? user.photoURL : ''}`}
              alt=""
            />
            <h2>{user && user.displayName}</h2>
          </div>
          <div>
            {user ? (
              <button
                onClick={handelLogout}
                className="btn bg-gray-400 text-white"
              >
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
      </div>
    </div>
  );
};

export default Navbar;
