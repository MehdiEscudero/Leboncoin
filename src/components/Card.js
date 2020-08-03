import React from "react";

const Card = ({ img, title, price, date }) => {
  return (
    <div className="card">
      <img width={129} height={172} alt="card" src={img} />
      <div className="text-card">
        <p>{title}</p>
        <p>{price} €</p>
        <p>{String(date)}</p>
      </div>
    </div>
  );
};

export default Card;
