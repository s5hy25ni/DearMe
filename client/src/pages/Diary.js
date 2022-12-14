import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import MyButton from "../components/MyButton";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        // 일기가 존재할 때
        setData(targetDiary);
      } else {
        // 일기가 없을 때
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    console.log(curEmotionData);

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date)).split("-")[0]}년 ${getStringDate(new Date(data.date)).split("-")[1]}월 ${getStringDate(new Date(data.date)).split("-")[2]}일의  기록`}
          leftChild={
            <button onClick={() => navigate(-1)}><img className="img_button" src="../../assets/back.png" /></button>
          }
        />
        <article>
          <section>
            <h4>이 날의 기분</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} style={{width: 100, height: 100}} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>이 날의 생각</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
        <MyFooter
        leftChild={
          <MyButton 
            text={"삭제하기"} 
            type={"negative"}
            onClick={() => navigate(-1)} />
        }
        rightChild={
          <MyButton
            text={"수정하기"}
            type={"neutral"}
            onClick={() => navigate(`/edit/${data.id}`)}
          />
        }
      />
      </div>
    );
  }
  
};

export default Diary;
