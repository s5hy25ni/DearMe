import { useContext, useEffect, useState } from "react";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'

const Login = () => {
    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"아이디"}
                        input={""}/>
                    <LoginInputBox
                        title={"비밀번호"}
                        input={""}
                        type={"password"} />
                    <LoginButton text={"로그인"}/>
                    <div className="login_footer">
                        <div className="login_footer_left">
                            <label>
                                <input type="checkbox"/>로그인 상태 유지
                            </label>
                        </div>
                        <div className="login_footer_right">
                            <button>아이디 찾기</button>
                            <button>비밀번호 찾기</button>
                            <button>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;