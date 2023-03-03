import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { UserProvider } from "./UserContext";
// import ProtectedRoute from "./components/utils/ProtectedRoute";
import PrivateRoute from "./utils/ProtectedRoute";
import TradingPage from "./pages/TradingPage";

import Deposit from "./pages/Deposit";
import Spin from "./pages/Spin";
import Dashboard from "./Dashboard/Dashboard";
import Loan from "./pages/Loan";
import LoanRequest from "./pages/LoanRequest";

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <UserProvider>
        {/* <SideBar /> */}
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />{" "} */}
          <Route
            exact
            path="/loans"
            element={
              <PrivateRoute>
                <Loan />
              </PrivateRoute>
            }
          />{" "}
          <Route
            exact
            path="/spin"
            element={
              <PrivateRoute>
                <Spin />
              </PrivateRoute>
            }
          />{" "}
          <Route
            exact
            path="/wallet"
            element={
              <PrivateRoute>
                <TradingPage />
              </PrivateRoute>
            }
          />{" "}
          <Route
            exact
            path="/deposit"
            element={
              <PrivateRoute>
                <Deposit />
              </PrivateRoute>
            }
          />{" "}
          <Route
            exact
            path="/request"
            element={
              <PrivateRoute>
                <LoanRequest />
              </PrivateRoute>
            }
          />{" "}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
