import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Registerr/Register';
import CardDetails from '../Components/CardDetails/CardDetails';
import PrivateRoute from '../Provider/AuthProvider/PrivateRoute';
import Loading from '../Components/Loading/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/eventData.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
      {
        path: '/cardDetails/:id',
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/eventData.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
