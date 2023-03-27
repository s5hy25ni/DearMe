import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'
import LoginButton from './../components/LoginButton'
import axios from "axios";

const Join = () => {
    var idOverlap = true;
    const navigate = useNavigate();

    const [ joinID, setJoinID ] = useState("");
    const [ joinPW, setJoinPW ] = useState("");
    const [ joinPWCon, setJoinPWCon ] = useState("");
    const [ joinName, setJoinName ] = useState("");
    const [ joinPN, setJoinPN ] = useState("");

    const onJoinIDHandler = (e) => {
        idOverlap = true;
        setJoinID(e.currentTarget.value);
    };

    const onJoinPWHandler = (e) => {
        setJoinPW(e.currentTarget.value);
    };

    const onJoinPWConHandler = (e) => {
        setJoinPWCon(e.currentTarget.value);
    };

    const onJoinNameHandler = (e) => {
        setJoinName(e.currentTarget.value);
    };

    const onJoinPNHandler = (e) => {
        setJoinPN(e.currentTarget.value);
    };

    const onOverlapConHandler = (e) => {
        e.preventDefault();
        if(joinID=="") {
            alert("사용하실 아이디를 입력하세요.")
        }
        else {postID(joinID);}
    }

    const postID = async(joinID) => {
        await axios.post(`http://localhost:4000/join`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'IDCon',
            id : joinID,
        })
        .then((res) => {
            if(res.data.message === "notOverlap") {
                alert("사용 가능한 아이디 입니다.")
                idOverlap = false
            }
            else if(res.data.message === "overlap") {
                alert("이미 사용중이거나 탈퇴한 아이디 입니다.")
                idOverlap = true
            }
            else {
                console.log("join ID overlap confirm res error")
            }
        })
        .catch((error) => {
            console.log("join ID overlap confirm post error : "+error)
        })
    }
    const onJoinSubmitHandler = (e) => {
        e.preventDefault();
        if(joinID=="" || joinPW=="" || joinPWCon=="") {
            alert("필수 정보를 입력하세요.")
        }
        else if(idOverlap) {
            alert("아이디 중복확인이 필요합니다.")
        }
        else if(joinPW!==joinPWCon){
            alert("비밀번호가 일치하지 않습니다.")
        }
        else {
            postJoinForm(joinID, joinPW, joinName, joinPN);
        }
    }

    const postJoinForm = async(joinID, joinPW, joinName, joinPN) => {
        await axios.post(`http://localhost:4000/join`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'join',
            id : joinID,
            pw : joinPW,
            name : joinName,
            pn : joinPN,
        })
        .then((res)=> {
            if(res.data.message === "joinSuccess") {
                alert("가입을 축하합니다.")
                navigate("/login");
            }
            else {
                console.log("join res error")
            }
        })
        .catch((error) => {
            console.log("join post error : "+error)
        })
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
                            <button onClick={(onOverlapConHandler)}>중복확인</button>
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">비밀번호</h3>
                        <div className="join_content">
                            <input 
                                type="password"
                                id="joinPW"
                                onChange={(onJoinPWHandler)} />
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">비밀번호 재확인</h3>
                        <div className="join_content">
                            <input 
                                type="password"
                                id="joinPWCon"
                                onChange={(onJoinPWConHandler)} />
                        </div>
                    </div>
                </div>
                <h4>※ 아이디 찾기 및 비밀번호 초기화시 필요합니다. ※</h4>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">이름 <span>(선택)</span></h3>
                        <div className="join_content">
                            <input 
                                type="text"
                                id="joinName"
                                onChange={(onJoinNameHandler)}/>
                        </div>
                    </div>
                </div>
                <div className="join_box">
                    <div className="join_left">
                        <h3 className="join_title">전화번호 <span>(선택)</span></h3>
                        <div className="join_content">
                            <input 
                                type="tel"
                                placeholder="010-1234-1234"
                                pattern="01[0-9]{1}-[0-9]{4}-[0-9]{4}"
                                id="joinPN"
                                onChange={(onJoinPNHandler)}/>
                        </div>
                    </div>
                </div>
                <div className="agree_button">
                    <Link to="/login">
                        <LoginButton text={"가입하기"} onClick={onJoinSubmitHandler}/>
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