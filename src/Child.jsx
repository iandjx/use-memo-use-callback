import React, { memo } from "react";

const Child = ({ changeChildNumber, number }) => {
  console.log("here");
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => changeChildNumber(Math.random())}>
        clich change
      </button>
    </div>
  );
};

export default memo(Child);
