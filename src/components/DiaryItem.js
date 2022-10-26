import { React, useState, useRef, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import { DiaryDispatchContext } from "./../App.js";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const { onRemove } = useContext(DiaryDispatchContext);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    // if(strDate!=date){
    // }
      navigate(`/edit/${id}`);
  };

  const delDiary = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
      navigate("/", { replace: true });
    }
  }
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} type={"neutral"} />
        <MyButton onClick={delDiary} text={"삭제하기"} type={"negative"} />
      </div>
    </div>
  );
};

export default DiaryItem;