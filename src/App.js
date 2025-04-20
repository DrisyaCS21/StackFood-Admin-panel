// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import SignIn from "./pages/SignIn"
// import Dashboard from "./components/Dashboard"
// import Orders from "./pages/Orders"
// import Restaurants from "./pages/Restaurants"
// import Foods from "./pages/Foods"
// import Customers from "./pages/Customers"
// import Categories from "./pages/Categories"
// import Campaigns from "./pages/Campaigns"
// import Settings from "./pages/Settings"
// import NotFound from "./pages/NotFound"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.css"

// function App() {
//   // Simple auth check - in a real app, you'd use a proper auth system
//   const isAuthenticated = () => {
//     return localStorage.getItem("isAuthenticated") === "true"
//   }

//   // Protected route component
//   const ProtectedRoute = ({ children }) => {
//     if (!isAuthenticated()) {
//       return <Navigate to="/" replace />
//     }
//     return children
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <Orders />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/restaurants"
//           element={
//             <ProtectedRoute>
//               <Restaurants />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/foods"
//           element={
//             <ProtectedRoute>
//               <Foods />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/categories"
//           element={
//             <ProtectedRoute>
//               <Categories />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/customers"
//           element={
//             <ProtectedRoute>
//               <Customers />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/campaigns"
//           element={
//             <ProtectedRoute>
//               <Campaigns />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/settings"
//           element={
//             <ProtectedRoute>
//               <Settings />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignIn from "./pages/SignIn"
import Dashboard from "./components/Dashboard"
import Layout from "./components/Layout"
import Orders from "./pages/Orders"
import Restaurants from "./pages/Restaurants"
import Foods from "./pages/Foods"
import Customers from "./pages/Customers"
import Categories from "./pages/Categories"
import Campaigns from "./pages/Campaigns"
import Settings from "./pages/Settings"
import NotFound from "./pages/NotFound"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  // Simple auth check
  const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true"
  }

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/" replace />
    }
    return children
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/campaigns/*" element={<Campaigns />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
