import { React, useState, useRef, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import { DiaryDispatchContext } from "./../App.js";
import { getStringDate } from "../util/date";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const { onRemove } = useContext(DiaryDispatchContext);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  
  //작성일
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  //현재날짜
  const today = new Date().toLocaleDateString();

  const goEdit = () => {
    if (strDate == today) {
      //작성일 == 수정일 수정페이지로 이동
      navigate(`/edit/${id}`);
    } else if (strDate != today) {
      //작성일 =! 수정일 팝업
      window.confirm("지난 일기는 수정할 수 없습니다.");
      navigate("/", { replace: true });
    } 
  };

  const delDiary = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
      navigate("/", { replace: true });
    }
  };
  
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