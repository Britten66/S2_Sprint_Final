// Below are the imports - these are all the tools that we need for our project
//this includes the router dom , browser router ( this is the main wrapper that allows us to route)
//routes are like our containers for the route components
// route is a single path

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// custome components being imported below
import Navbar from "./Components/Navbar/Navbar.jsx";
import LandingPage from "./pages/Landing-Page/landing.jsx";
import LoginPage from "./pages/Log-in-Page/login.jsx";
import ShoppingCart from "./pages/Shopping-Page/ShoppingCart.jsx";
import StorePage from "./pages/Store-Page/store.jsx";
// global style sheet that we are tailoring to our page and using validation by utilizing ai
//this helps us make clear design changes without throwing off the flow of a 2 person projeect
import "./App.css";

// here are the main app components

// its the root of our whole application - function App()

// this function App wrapper will contain everything, this will enable the navigation
// without reloding we can navigate through our application
//element = landing page vs component = landing-page is favored
// we did this for v6+ reasoning as it allows the ability to pass props dynamically.

function App() {
  // "future" will prepare is for v7 updates

  // ---HERE IS SOME CONFUSING STUFF WE NEED TO GO OVER---

  // v7_startTransition = uses React 18's startTransition for smoother navigation
  // v7_relativeSplatPath = changes how relative paths work (future-proofing)
  // <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

  //   {/* Navbar sits OUTSIDE Routes so it shows on EVERY page */}
  //   <Navbar />

  //   {/* Routes = Container that holds all our Route definitions */}
  //   <Routes>

  //     {/* Each Route maps a URL path to a component */}

  //     {/* Home page - shows when user visits "/" (root URL) */}
  //     <Route path="/" element={<LandingPage />} />

  //     {/* Login page - shows when user visits "/login" */}
  //     <Route path="/login" element={<LoginPage />} />

  //     {/* Shopping cart - shows when user visits "/ShoppingCart" */}
  //     <Route path="/ShoppingCart" element={<ShoppingCart />} />

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
