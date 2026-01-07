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
import Pointofsale from "./pages/Pointofsale"
import Scheduled from "./pages/Scheduled"
import Deliveryman from "./pages/Deliveryman"
import AcceptedOrders from "./pages/Acceptedorders"
import Refundedorders from "./pages/Refundedorders"
import Failedorders from "./pages/Failedorders"
import Deliveredorders from "./pages/Deliveredorders"
import Canceledorders from "./pages/Canceledorders"
import Unassignedorders from "./pages/Unassignedorders"
import Cooking from "./pages/Cooking"
import Picked from "./pages/Picked"
import Profile from "./pages/Profile"
import Zonesetup from "./pages/Zonesetup"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Chatting from "./pages/Chatting"





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
          <Route path="/pointofsale" element={<Pointofsale/>} />
          <Route path="/scheduled" element={<Scheduled/>} />
          <Route path="/deliveryman" element={<Deliveryman/>} />
          <Route path="/acceptedorders" element={<AcceptedOrders/>}/>
          <Route path="/refundedorders" element={<Refundedorders/>}/>
          <Route path="/failedorders" element={<Failedorders/>}/>
          <Route path="/deliveredorders" element={<Deliveredorders/>}/>
          <Route path="/canceledorders" element={<Canceledorders/>}/>
          <Route path="/unassignedorders" element={<Unassignedorders/>}/>
          <Route path="/cooking" element={<Cooking/>}/>
          <Route path="/picked" element={<Picked/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/zonesetup" element={<Zonesetup/>}/>
          <Route path="/chatting" element={<Chatting/>}/>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
