import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { Link } from "react-router-dom";

import MyHeader from './../components/MyHeader'
import MyButton from './../components/MyButton'
import DiaryList from './../components/DiaryList'

const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();

            setData(
                diaryList.filter((it) => firstDay <= it.date && it.date < lastDay)
            );
        }
    }, [diaryList, curDate]);

    useEffect(() => {
    }, [data]);

    useEffect(()=> {
        fetch('api/hello')
          .then(response => response.text())
          .then(message => {
            setMessage(message);
          });
      }, []);

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
    }
    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
    }

    const onLogoutSubmitHandler = (e) => {
        localStorage.clear();
        sessionStorage.clear();
    }

    return (
        <div>
            <div class="home_logout">
                <Link to="/login">
                    <MyButton text={"로그아웃"} onClick={onLogoutSubmitHandler}/>
                </Link>
            </div>
            <div class="home_myPage">
                <Link to="/mypage">
                    <MyButton text={"마이페이지"}/>
                </Link>
            </div>

            <MyHeader
                headText={headText}
                //headText = {{headText}&& <MyButton onClick={decreaseMonth}/>}
                leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
                rightChild={<MyButton text={">"} onClick={increaseMonth} />}
            />
            <DiaryList diaryList={data} />
        </div>

    );
};

export default Home;