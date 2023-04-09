import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'
import axios from "axios";

const FindPW = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('isLogin') === 'true' || sessionStorage.getItem('isLogin') === 'true') {
        navigate("/");
    }

    const [ findPWID, setFindPWID ] = useState("");
    const [ findPWName, setFindPWName ] = useState("");
    const [ findPWPN, setFindPWPN ] = useState("");

    const onFindPWIDHandler = (e) => {
        setFindPWID(e.currentTarget.value);
    };
    const onFindPWNameHandler = (e) => {
        setFindPWName(e.currentTarget.value);
    };
    const onFindPWPNHandler = (e) => {
        setFindPWPN(e.currentTarget.value);
    };

    const onFindPWSubmitHandler = (e) => {
        e.preventDefault();
        if(findPWID==="" || findPWName==="" || findPWPN==="") {
            alert("필수 정보를 입력하세요.")
        }
        else {
            postFindPWForm(findPWID, findPWName, findPWPN);
        }
    }

    const postFindPWForm = async(findPWID, findPWName, findPWPN) => {
        await axios.post(`http://localhost:4000/findpw`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'findPW',
            id : findPWID,
            name : findPWName,
            pn : findPWPN,
        })
        .then((res)=> {
            if(res.data.message === "findPW Success") {
                alert("가입하신 PW는 "+res.data.PW+" 입니다.")
                navigate("/login");
            }
            else if(res.data.message === "findPW False") {
                alert("정확한 정보를 기입해주세요.")
            }
            else {
                console.log("findPW res error")
            }
        })
        .catch((error) => {
            console.log("findPW post error : "+error)
        })
    }

    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"아이디"}
                        type={"text"}
                        id={"findPWID"}
                        onChange={(onFindPWIDHandler)}/>
                    <LoginInputBox 
                        title={"이름"}
                        type={"text"}
                        id={"findPWName"}
                        onChange={(onFindPWNameHandler)} />
                    <LoginInputBox
                        title={"전화번호"}
                        type={"tel"}
                        id={"findPWPN"}
                        placeholder={"010-1234-1234"}
                        onChange={(onFindPWPNHandler)}/>
                    <LoginButton 
                        text={"비밀번호 초기화"}
                        onClick={onFindPWSubmitHandler} />
                    <Link to="/login">
                        <LoginButton text={"취소"} type={"no"} />
                    </Link>
                </div>
            </div>
    );
};

export default FindPW;