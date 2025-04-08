// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Sidebar from "./components/Sidebar";
// // import CustomNavbar from "./components/Navbar"; // Renamed to CustomNavbar
// import SignIn from "./pages/SignIn";  // ✅ Right: No braces needed
// import Dashboard from "./components/Dashboard";
// const App = () => {
//   return (
//     <Router>
//       {/* Navbar at the top */}
//       {/* <CustomNavbar />
//       {/* Page Layout */}
//       {/* <div className="d-flex">
//         {/* Sidebar */}
//         {/* <div className="sidebar-container">
//           <Sidebar />
//         </div> */} 

//         {/* Main Content */}
//         {/* <div className="main-content flex-grow-1"> */}
//           <Routes>
//             <Route path="/" element={<SignIn />} />
//             <Route path="/Dashboard" element={<Dashboard />} />
//           </Routes>
//         {/* </div> */}
//       {/* </div> */}
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Dashboard from "./components/Dashboard" // Make sure this component exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;

