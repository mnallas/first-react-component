import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  let buttonStyles = "";
  if (props.float === true) buttonStyles += "btn-floating ";
  if (props.size) buttonStyles += `btn-${props.size} `;
  if (props.waveEffect) buttonStyles += "waves-effect ";
  if (props.waveColor) buttonStyles += `waves-${props.waveColor} `;
  if (props.color) buttonStyles += props.color;

  console.log(buttonStyles);
  return <button className={buttonStyles}>{props.children}</button>;
};

// Button.defaultProps = {
//   float
// }

Button.propTypes = {
  float: PropTypes.bool,
  size: PropTypes.string,
  waveEffect: PropTypes.bool,
  waveColor: PropTypes.string,
  color: PropTypes.string,

  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
