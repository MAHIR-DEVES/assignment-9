import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Registerr/Register';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/profile',
        Component: Profile,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);

export default router;
