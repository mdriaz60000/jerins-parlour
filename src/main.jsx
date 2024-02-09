import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layout/MainLayout';
import Error from './Pages/Error/Error';
import Home from './Pages/FullHome/Home/Home';
import AuthProvider from './Pages/Shared/Provider/AuthProvider';
import SignUp from './Pages/Shared/SignUp/SignUp';
import SignIn from './Pages/Shared/SignIn/SignIn';
import OurTeem from './Pages/OurTeem/OurTeem';
import PrivetRoute from './Pages/Shared/PrivetRoute/PrivetRoute';

 import MyService from './Pages/MyService/MyService';
import Book from './Pages/MyService/Book/Book';
import BookingList from './Pages/MyService/BookingList/BookingList';
import Review from './Pages/MyService/Review/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
     
      {
        path: "/ourTeem",
        element: <PrivetRoute> <OurTeem></OurTeem> </PrivetRoute>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
       {
        path: "/myService",
        element: <MyService></MyService>,
        children:[
          {
            path: "/myService",
            element: <Book></Book>,
          },
          {
            path: "/myService/bookingList",
            element: <BookingList></BookingList>,
          },
          {
            path: "/myService/review",
            element: <Review></Review>,
          },
        ]
      },
     
    ]
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-6xl mx-auto'>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
