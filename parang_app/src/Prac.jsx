import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import { API_BASE_URL } from "./config/API-Config";

const Prac = (props) => {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
    axios.post(API_BASE_URL + "/upload")
  };



  return (
    <React.Fragment>
      <img src={imageUrl ? imageUrl : "/img/profile.png"}></img>
      <input
        type="file"
        ref={imgRef}
        onChange={onChangeImage}
        style={{ display: "none" }}
      ></input>
      <button
        onClick={() => {
          onClickFileBtn();
        }}
      >
        이미지 업로드
      </button>
    </React.Fragment>
  );
};
export default Prac;
