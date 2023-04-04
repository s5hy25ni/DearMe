import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import DiaryItem from "./DiaryItem.js"
import { DiaryDispatchContext } from "./../App.js";
import { getStringDate } from "../util/date";

import MyButton from "./MyButton"

const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" },
]

const filterOptionList = [
    { value: "all", name: "전부 다" },
    { value: "good", name: "좋은 감정만" },
    { value: "bad", name: "안좋은 감정만" },
]

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
    return <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => (
            <option key={idx} value={it.value}>
                {it.name}
            </option>
        ))}
    </select>
});



const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    const diaryCheck = (item) => {
        // 현재날짜
        const today = new Date().toLocaleDateString();
        const diary = document.getElementsByClassName('DiaryItem');

        if (diary.length) { //해당 월에 작성된 글이 있는 경우
            // 마지막작성일
            const strDate = document.getElementsByClassName('diary_date')[0].innerText;
            // 마지막 작성일과 현재날짜 동일시 alert발동
            if (strDate == today) {
                alert("당일 작성하신 일기가 있습니다.");
            } else { //당일 작성글 없으면 글쓰기페이지이동
                navigate("/new");
            }
        } else { //해당 월에 작성한 글이 없는 경우
            navigate("/new");
            console.log("해당 월에 첫글입니다");
        };
    };

    const getProcessedDiaryList = () => {

        const filterCallback = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a, b) => {
            if (sortType === "latest") {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterCallback(it));
        const sortedList = filteredList.sort(compare);
        return sortedList;

        
    };

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    />
                    <ControlMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filterOptionList}
                    />
                </div>
                
                <div className="right_col">
                    <MyButton
                        type={'positive'}
                        text={'일기 작성하기'}
                        onClick={diaryCheck}
                    />
                </div>
                
            </div>
            {getProcessedDiaryList().map((it) => (
                <DiaryItem key={it.id} {...it} />
            ))}
        </div>
    )
}


DiaryList.defaultProps = {
    diaryList: [],
}
export default DiaryList;