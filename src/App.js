// import * as React from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
// import NotFound from "./components/NotFound/NotFound";
// import Home from "./components/Home/Home";
// import Browser from "./components/Browser/Browser";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         ,
//         {
//           path: "portfolio",
//           element: <Portfolio />,
//         },
//         {
//           path: "bROWSER",
//           element: <Browser />,
//         }, {
//           path: "contact",
//           element: <Contact />,
//         },
//         {
//           path: "*",
//           element: <NotFound />,
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
