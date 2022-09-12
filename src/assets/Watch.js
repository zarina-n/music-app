import * as React from "react";

const SvgWatch = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6} cy={6} r={5.5} stroke="#696969" />
    <path d="M4 6h2.5V2.5" stroke="#696969" />
  </svg>
);

export default SvgWatch;
