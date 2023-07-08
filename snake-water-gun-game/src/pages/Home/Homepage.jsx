import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gameplay from "../Gameplay/Gameplay";
import "./Homepage.css";
import Header from "../../components/Header/Header";

const Homepage = (props) => {
  const [render, setRender] = useState(false);
  React.useEffect(()=> {props.data("homepage")},[]);
  const navigate = useNavigate();

  return (
    // <div className="container-fluid" style={myStyle}>
    //   <section>
    //     <h1>Welcome to Game</h1>
    //     <br />
    //     {/* <button type="button" src={''} className="btn btn-primary"> */}
    //     <button
    //       type="button"
    //       onClick={() => {
    //         setRender(true);
    //       }}
    //       className="btn btn-primary"
    //     >
    //       Start
    //     </button>
    //     {render ? <Gameplay /> : <></>}
    //   </section>
    // </div>

    <div id="home" className="Ourbackground">
      <div className="window">
        <h1 className="heading">
          WELCOME TO GAME
          <br />
        </h1>
        <div className="buttons">
          {/* <button
            type="button"
            onClick={() => {
              setRender(true);
            }}
            className="btn btn-primary"
          >
            Start
          </button>
          {render ? <Gameplay /> : <></>} */}
           <button className="btn btn-primary" onClick={() => navigate("/gameplay")}>START</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
