import React from "react";
import './Rules.css'

const Rules = (props) => {

  React.useEffect(()=> {props.data("rules")},[]);
  return (
    <div id="OurRules">
      <h1>Rules</h1>
      <div className="
      ">
        <h3>
          # Following are the rules of the game: <br />
          <br />
          1.  Snake vs. Water: Snake drinks the water hence wins. <br />
          2. Water vs. Gun: The gun will drown in water, hence a point for water{" "}
          <br />
          3. Gun vs. Snake: Gun will kill the snake and win. <br />
          <br />
           *** In situations where both players choose the same object, the result
          will be a draw.
        </h3>
      </div>
    </div>
  );
};

export default Rules;
