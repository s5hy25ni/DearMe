import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    if(localStorage.getItem('isLogin') === 'true' || sessionStorage.getItem('isLogin') === 'true') {
        navigate("/");
    }

    const [ loginID, setLoginID ] = useState("");
    const [ loginPW, setLoginPW ] = useState("");

    const onLoginIDHandler = (e) => {
        setLoginID(e.currentTarget.value);
    };

    const onLoginPWHandler = (e) => {
        setLoginPW(e.currentTarget.value);
    };

    const onLoginSubmitHandler = (e) => {
        if(loginID==="" || loginPW==="") {
            alert("아이디, 비밀번호를 입력하세요.")
        }
        else{
            postLoginForm(loginID, loginPW);
        }
    }

    const postLoginForm = async(loginID, loginPW) => {
        await axios.post(`http://localhost:4000/login`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'login',
            id : loginID,
            pw : loginPW,
        })
        .then((res)=> {
            if(res.data.message === "loginSuccess") {
                if(document.getElementsByName('keepLogin')[0].checked){
                    localStorage.setItem('id', loginID)
                    localStorage.setItem('isLogin', 'true')
                }
                else{
                    sessionStorage.setItem('id', loginID)
                    sessionStorage.setItem('isLogin', 'true')
                }
                navigate("/");
            }
            else if(res.data.message === "loginFalse") {
                alert("아이디, 비밀번호를 확인하세요.")
            }
            else {
                console.log("login res error")
            }
        })
        .catch((error) => {
            console.log("login post error : "+error)
        })
    }

    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"아이디"}
                        input={""}
                        onChange={(onLoginIDHandler)} />
                    <LoginInputBox
                        title={"비밀번호"}
                        input={""}
                        type={"password"} 
                        onChange={(onLoginPWHandler)} />
                    <LoginButton
                    text={"로그인"}
                    onClick={onLoginSubmitHandler}/>
                    <div className="login_footer">
                        <div className="login_footer_left">
                            <label>
                                <input type="checkbox" name="keepLogin" value="keep" />로그인 상태 유지
                            </label>
                        </div>
                        <div className="login_footer_right">
                            <Link to="/findid">
                                <button>아이디 찾기</button>
                            </Link>
                            <Link to="/findpw">
                                <button>비밀번호 찾기</button>
                            </Link>
                            <Link to="/agree">
                                <button>회원가입</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;