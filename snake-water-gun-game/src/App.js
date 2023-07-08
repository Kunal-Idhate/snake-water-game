import React from "react";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import Rules from "./pages/Rules/Rules";
import Header from "./components/Header/Header";
import Gameplay from "./pages/Gameplay/Gameplay";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

function App() {
  function getData(str) {
    switch (str) {
      case "homepage":
        setPage("App");
        break;
      case "rules":
        setPage("app-rules");
        break;
      default:
        setPage("App");
    }
  }
  

  const [page, setPage] = React.useState("App");

  return (
    <div className={page}>
      <BrowserRouter>
        <div className="head">
          <Header />
        </div>
        {/* <NavLink
          activeStyle={{ color: "green", textDecoration: "underline" }}
          to="/"
          element={<Homepage />}
        ></NavLink>
        <NavLink
          activeStyle={{ color: "green", textDecoration: "underline" }}
          to="/rules"
          element={<Rules />}
        /> */}
        <Routes>
          <Route exact path="/" element={<Homepage data={getData} />} />
          <Route exact path="/rules" element={<Rules data={getData} />} />
          <Route exact path="/gameplay" element={<Gameplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
