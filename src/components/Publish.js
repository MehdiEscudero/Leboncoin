import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import Wrapper from "./Wrapper";
// import React from "react";
// import Dropzone from "react-dropzone";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});

  const history = useHistory();

  const token = Cookies.get("token");
  // console.log(token);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      history.push("/offer/" + response.data._id);
    } catch (e) {
      console.log("error request ", e.message);
    }
  };

  return token ? (
    <Wrapper>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3
          style={{
            borderBottom: "solid #f56b2b",
            paddingBottom: 5,
            borderWidth: 1.6,
          }}
        >
          Déposer une annonce
        </h3>
        <span style={{ marginTop: 10, marginBottom: 10 }}>
          Titre de l'annonce
        </span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <span style={{ marginTop: 10, marginBottom: 10 }}>
          Description de l'annonce
        </span>
        <textArea onChange={(e) => setDescription(e.target.value)} />
        <span style={{ marginTop: 10, marginBottom: 10 }}>Prix</span>
        <div style={{ display: "flex" }}>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
          <span style={{ marginLeft: 6 }}>€</span>
        </div>
        <span style={{ marginTop: 10, marginBottom: 10 }}>Photo</span>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          style={{ marginTop: 10, marginBottom: 40 }}
          className="bluebutton"
          type="submit"
        >
          Valider
        </button>
      </form>
    </Wrapper>
  ) : (
    <Redirect to="/log_in" />
  );
};

export default Publish;
