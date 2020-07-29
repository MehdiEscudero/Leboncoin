import React from "react";

const Card = ({ img, title, price }) => {
  return (
    <div className="card">
      <img height={240} width={172} src={img} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
