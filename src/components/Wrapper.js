import React from "react";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundColor: "#f5f2f2",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Wrapper;
