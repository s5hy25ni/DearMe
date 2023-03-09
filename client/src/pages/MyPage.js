import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import MyHeader from './../components/MyHeader';
import LoginButton from './../components/LoginButton'

const MyPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <MyHeader
                headText={"내 정보"}
            />
            <div className="mypage_wrap">
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">아이디</h3>
                        <div className="mypage_content"></div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">현재 비밀번호 *</h3>
                        <div className="mypage_content">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">새로운 비밀번호</h3>
                        <div className="mypage_content">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">비밀번호 재확인</h3>
                        <div className="mypage_content">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">이름</h3>
                        <div className="mypage_content"></div>
                    </div>
                    <div className="mypage_right">
                        <div className="mypage_button">
                            <button>변경</button>
                        </div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">전화번호</h3>
                        <div className="mypage_content"></div>
                    </div>
                    <div className="mypage_right">
                        <div className="mypage_button">
                            <button>변경</button>
                        </div>
                    </div>
                </div>
                <div className="agree_button">
                    <Link to="/">
                        <LoginButton text={"저장"} />
                        <LoginButton text={"취소"} type={"no"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyPage;