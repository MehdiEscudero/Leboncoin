import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/" + id
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p style={{ backgroundColor: "red" }}>En cours de chargement</p>
      ) : (
        <Wrapper
          style={{ display: "flex", marginTop: 10, justifyContent: "center" }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "587px",
                height: "310",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                boxShadow: "0px 1px 4px -1px rgba(0,0,0,0.75)",
                marginRight: "20px",
              }}
            >
              <img
                height="100%"
                width="100%"
                src={data.picture.url}
                alt="article"
              />
              <h4 style={{ marginTop: 15, marginLeft: 10 }}>{data.title} </h4>
              <span style={{ marginTop: 5, color: "#f56b2b", marginLeft: 10 }}>
                {data.price} €
              </span>
              <span style={{ marginTop: 30, marginBottom: 10, marginLeft: 10 }}>
                {new Date(data.created).toLocaleDateString()}
              </span>
              <div style={{ marginLeft: 10, marginBottom: 20 }}>
                <h4>Description</h4>
                <p
                  style={{
                    maxWidth: "100%",
                    textEmphasis: "elipsis",
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 250,
                marginTop: 10,
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 20,
                height: 150,
              }}
            >
              <h5>{data.creator.account.username}</h5>
              <Link
                to={"/payment/" + data._id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                <button className="orangebutton" style={{ marginBottom: 10 }}>
                  Acheter
                </button>
                <button className="bluebutton">Envoyer un message</button>
              </Link>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Offer;
