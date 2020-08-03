import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#fafafa",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
