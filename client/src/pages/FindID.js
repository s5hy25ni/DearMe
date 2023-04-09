import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'
import axios from "axios";

const FindID = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('isLogin') === 'true' || sessionStorage.getItem('isLogin') === 'true') {
        navigate("/");
    }

    const [ findIDName, setFindIDName ] = useState("");
    const [ findIDPN, setFindIDPN ] = useState("");

    const onFindIDNameHandler = (e) => {
        setFindIDName(e.currentTarget.value);
    };
    const onFindIDPNHandler = (e) => {
        setFindIDPN(e.currentTarget.value);
    };

    const onFindIDSubmitHandler = (e) => {
        e.preventDefault();
        if(findIDName==="" || findIDPN==="") {
            alert("필수 정보를 입력하세요.")
        }
        else {
            postFindIDForm(findIDName, findIDPN);
        }
    }

    const postFindIDForm = async(findIDName, findIDPN) => {
        await axios.post(`http://localhost:4000/findid`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'findID',
            name : findIDName,
            pn : findIDPN,
        })
        .then((res)=> {
            if(res.data.message === "findID Success") {
                alert("가입하신 ID는 "+res.data.id+" 입니다.")
                navigate("/login");
            }
            else if(res.data.message === "findID False") {
                alert("정확한 정보를 기입해주세요.")
            }
            else {
                console.log("findID res error")
            }
        })
        .catch((error) => {
            console.log("findID post error : "+error)
        })
    }

    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"이름"}
                        type={"text"}
                        id={"findIDName"}
                        onChange={(onFindIDNameHandler)}/>
                    <LoginInputBox
                        title={"전화번호"}
                        type={"tel"}
                        id={"findIDPN"}
                        placeholder={"010-1234-1234"}
                        onChange={(onFindIDPNHandler)}/>
                    <LoginButton 
                        text={"아이디 찾기"}
                        onClick={onFindIDSubmitHandler} />
                    <Link to="/login">
                        <LoginButton text={"취소"} type={"no"}/>
                    </Link>
                    <div className="login_footer">
                    </div>
                </div>
            </div>
    );
};

export default FindID;