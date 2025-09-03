import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import Cart from "./component/Cart.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
// import Grocery from "./component/Grocery.js";

//Lazy Loading or dynamic bundling,code splitting, chunking on demand loading
//basically bade website me bahut saare component hote hai jiske karan jab ek file banta hai to 
//bahut bada ho jata hai isiliye website slow ho jaati hai jis se bachne ke liye bundling ka use krte hai jaise hotel alag, flight alag, etc on make my trip pe jaise hua hai
const Grocery = lazy(()=>{import("./component/Grocery.js")});

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
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
        },
        {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery></Grocery></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
