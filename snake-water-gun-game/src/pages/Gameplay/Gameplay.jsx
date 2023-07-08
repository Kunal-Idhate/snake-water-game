import React, { useState, useEffect } from "react";
import './Gameplay.css'

const Gameplay = () => {
  // let user = prompt("Enter S, W or G");

  const [userInput, setUserInput] = useState("");
  const [cpuInput, setCpuInput] = useState("");
  const [resultOutput, setResultOutput] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
   
    console.log("changed: ", userInput);
    let user = userInput;
    let cpuI = Math.floor(Math.random() * 3);
    let cpu = ["S", "W", "G"][cpuI];
    setCpuInput(cpu);

    const match = (cpu, user) => {
      if (cpu === user) {
        return "Nobody";
      } else if (cpu === "S" && user === "W") {
        return "cpu";
      } else if (cpu === "S" && user === "G") {
        return "user";
      } else if (cpu === "G" && user === "W") {
        return "user";
      } else if (cpu === "G" && user === "S") {
        return "cpu";
      } else if (cpu === "W" && user === "S") {
        return "user";
      } else if (cpu === "W" && user === "G") {
        return "cpu";
      }
    };
    let result = match(cpu, user);
    console.log(result);
    setResultOutput(result);
    // document.write(
    //   `CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` );
    // document.write(
    //   `CPU:${cpu} <br> User:${user} <br>The winner is: ${result}` );
    if(ready)
    {
      console.log(`CPU:${cpu} User:${user} The winner is: ${result}`);
    }
    setReady(true);
  }, [userInput]);

  return (
    <>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div className="col">
          <div className="card h-80 w-40">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPdZ-JBt9pZ8VZJlRdYKYok3iXFnHBhsbMXrauK9M9BjSMFTreIY5lp2a4ottd_Rtpz0&usqp=CAU"
              className="rounded float-start"
              alt="..."
              height="150" width="150"
            />
            <div className="card-body">
              <h5 className="card-title">Snake</h5>
              <p className="card-text">
                Snake Will Drink water, here Snake wins!
              </p>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={() => {
                  setUserInput("S");
                }}
                className="btn btn-primary"
              >
                Pick
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80 w-60">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJcu1xSLugb7RBIc4UZx8ENeCaB-h1jvGgQ&usqp=CAU"
              className="rounded float-end"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Water</h5>
              <p className="card-text">
                Water Will destroy Gun , here Water wins!
              </p>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={() => {
                  setUserInput("W");
                }}
                className="btn btn-primary"
              >
                Pick
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80 w-60">
            <img
              src="https://w7.pngwing.com/pngs/476/14/png-transparent-firearm-weapon-pistol-handgun-hand-gun-hand-handgun-ammunition-thumbnail.png"
              className="rounded mx-auto d-block"
              alt="..."
            
            />
            <div className="card-body">
              <h5 className="card-title">Gun</h5>
              <p className="card-text">Gun kills Snake, here Gun Wins!</p>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={() => {
                  setUserInput("G");
                }}
                className="btn btn-primary"
              >
                Pick
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container">
        <div class="row">
          <div class="col border-0"></div>
          <div class="col border-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPdZ-JBt9pZ8VZJlRdYKYok3iXFnHBhsbMXrauK9M9BjSMFTreIY5lp2a4ottd_Rtpz0&usqp=CAU"
              className="rounded float-start"
              alt="..."
            />
            <button
              type="button"
              onClick={() => {
                setUserInput("S");
              }}
              className="btn btn-primary"
            >
              Pick
            </button>
          </div>
          <div class="col border-0"></div>
        </div>
        <div class="row">
          <div class="col border-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJcu1xSLugb7RBIc4UZx8ENeCaB-h1jvGgQ&usqp=CAU"
              className="rounded float-start"
              alt="..."
            />
            <button
              type="button"
              onClick={() => {
                setUserInput("W");
              }}
              className="btn btn-primary"
            >
              Pick
            </button>
          </div>
          <div class="col border-0"></div>
          <div class="col border-0">
            <img
              src="https://img.freepik.com/premium-photo/male-hand-holding-smoking-gun-black-background_495423-14285.jpg?w=275"
              className="rounded float-start"
              alt="..."
            />
            <button
              type="button"
              onClick={() => {
                setUserInput("G");
              }}
              className="btn btn-primary"
            >
              Pick
            </button>
          </div>
        </div>
        <div className="myresult">
          <h3>User : {userInput} <br/><br/> CPU : {cpuInput} <br/><br/></h3>
          <h1> The winner is : {resultOutput}</h1>
        </div>
      </div>
    </>
  );
};

export default Gameplay;
