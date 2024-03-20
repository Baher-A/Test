
import React from "react";
import { ReactDOM} from "react";


// import StartNode from "./Pages/StartNode/StartNode";
// import { Home } from "@mui/icons-material";
import Home from "./Pages/Home/Home"
import Personal from "./Pages/Personal/Personal"
import Product from "./Pages/Product/Product"
import About from "./Pages/About/About"
import StartNode from "./Pages/StartNode/StartNode";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Shop from "./Pages/Product/Shop";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<StartNode />}>
      <Route path="/Test" element={<Home />}/>
      <Route index element={<Home />}/>
      <Route path="/personal" element={<Personal />} />
      <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} >
          <Route index element={<Shop/>}>

         
          </Route>

      </Route>
      </Route>
    )
  )



  // ******************* //
  // Variable To Toogle Mode Change
 
//   <StartNode />`
  return (
      <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  );
}

export default App;
