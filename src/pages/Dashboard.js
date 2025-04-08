// import AppNavbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import OrderStats from "../components/OrderStats";
// import WelcomeMessage from "../components/WelcomeMessage";
// import { Container, Row, Col } from "react-bootstrap";

// const Dashboard = () => {
//   return (
//     <>
//       <AppNavbar />
//       <Container fluid>
//         <Row>
//           <Col md={2}><Sidebar /></Col>
//           <Col md={10}>
//             <WelcomeMessage />
//             <OrderStats />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>Welcome to StackFood Dashboard</h1>
      <p>Manage your food orders and settings here.</p>
    </Container>
  );
};

export default Dashboard;
