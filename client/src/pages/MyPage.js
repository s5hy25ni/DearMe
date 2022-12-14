import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';

const MyPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <MyHeader
                headText={"내 정보"}
                leftChild={
                    <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
                }
                rightChild={
                    <MyButton text={"저장하기"} onClick={() => navigate(-1)} type="negative"/>
                }
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
            </div>
        </div>
    );
};

export default MyPage;