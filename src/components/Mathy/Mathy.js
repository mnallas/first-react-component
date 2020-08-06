import React from "react";
import PropTypes from "prop-types";
import "./Mathy.css";

const Mathy = (props) => {
  let answer;
  console.log(props);

  switch (props.operator) {
    case "plus":
      answer = props.num1 + props.num2;
      break;
    case "minus":
      answer = props.num1 - props.num2;
      break;
    case "multiply":
      answer = props.num1 * props.num2;
      break;
    case "divide":
      answer = props.num1 / props.num2;
      break;
    default:
      break;
  }
  return (
    <div>
      <h1 className={answer > 5 ? "redColor" : "greenColor"}>{answer}</h1>
    </div>
  );
};

Mathy.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
};

export default Mathy;
