import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/component/Header";
// import Body from "./src/component/Body";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import Cart from "./src/component/Cart";
// import RestaurantMenu from "./src/component/RestaurantMenu";
import User from './src/component/User';
import Parent from './src/component/Parentclass'
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// chunking
// Code Slpitting
// Dynamic Bundling
// Lazy Loading
// demand loading
// dynamic import

//this lazy takes a callback function and a import() funcyion this import is not similiar as above this import is a funtion and it takes path of the file
const RestaurantMenu = lazy(()=> import("./src/component/RestaurantMenu"))
const Body = lazy(()=>import("./src/component/Body"))

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<h2>Loading...</h2>}><Body /></Suspense>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
            {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/city/:cityName/:resId",
        element:<Suspense fallback={<h2>Loading...</h2>}><RestaurantMenu /></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
