import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Hom from "./components/Hom";
import Landing from "./components/Landing";
import Land from "./components/pages/Land";
import { UserProvider } from "./UserContext";
// import ProtectedRoute from "./components/utils/ProtectedRoute";
import PrivateRoute from "./components/utils/ProtectedRoute";
import TradingPage from "./components/TradingPage";

import Deposit from "./components/pages/Deposit";
import Spin from "./components/pages/Spin";

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <UserProvider>
        {/* <SideBar /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Land />
              </PrivateRoute>
            }
          />{" "}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/test" element={<Home />}></Route>
          <Route path="/spinning" element={<Spin />}></Route>
          <Route path="/wallet" element={<TradingPage />}></Route>
          <Route path="/deposit" element={<Deposit />}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
