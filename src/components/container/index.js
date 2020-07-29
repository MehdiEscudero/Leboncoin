import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
