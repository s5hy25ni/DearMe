import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'
import LoginButton from './../components/LoginButton'
import axios from "axios";

const Join = () => {
    const [ joinID, setJoinID ] = useState("");

    const onJoinIDHandler = (event) => {
        setJoinID(event.currentTarget.value);
        console.log(joinID)
    };

    const onJoin = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:4000/join`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            id : 'so96hyun',
            state : 'join',
        })
        alert("ok")
    }

    return (
        <div>
            <LoginHeader/>
            <div className="join_wrap">
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">아이디</h3>
                        <div className="join_content">
                            <input 
                                type="text"
                                id="joinID"
                                onChange={(onJoinIDHandler)}/>
                        </div>
                    </div>
                    <div className="join_right">
                        <div className="join_button">
                            <button>중복확인</button>
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">비밀번호</h3>
                        <div className="join_content">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">비밀번호 재확인</h3>
                        <div className="join_content">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <h4>※ 아이디 찾기 및 비밀번호 초기화시 필요합니다. ※</h4>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">이름 <span>(선택)</span></h3>
                        <div className="join_content">
                            <input />
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">전화번호 <span>(선택)</span></h3>
                        <div className="join_content">
                            <input />
                        </div>
                    </div>
                </div>
                <h4>※ 영상 추천에 사용됩니다. ※</h4>
                <div className="join_interested_box">
                    <h3 className="join_title">관심 카테고리 <span>(선택)</span></h3>
                    <div className="join_interested">
                        <div>
                            <label><input type="checkbox" value="여행" />여행</label>
                            <label><input type="checkbox" value="일상" />일상</label>
                            <label><input type="checkbox" value="엔터테이먼트" />엔터테이먼트</label>
                        </div>
                        <div>
                            <label><input type="checkbox" value="동물" />동물</label>
                            <label><input type="checkbox" value="자연" />자연</label>
                            <label><input type="checkbox" value="키즈/육아" />키즈/육아</label>
                        </div>
                        <div>
                            <label><input type="checkbox" value="투자" />투자</label>
                            <label><input type="checkbox" value="역사" />역사</label>
                            <label><input type="checkbox" value="자기개발" />자기개발</label>
                        </div>
                    </div>
                </div>
                <div className="agree_button">
                    <Link to="/login">
                        <LoginButton text={"저장"} onClick={onJoin}/>
                    </Link>
                    <Link to="/login">
                        <LoginButton text={"취소"} type={"no"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Join;