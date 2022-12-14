import { useContext, useEffect, useState } from "react";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'

const FindPW = () => {
    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"아이디"}
                        input={""}/>
                    <LoginInputBox 
                        title={"이름"}
                        input={""}/>
                    <LoginInputBox
                        title={"전화번호"}
                        input={""}/>
                    <LoginButton text={"비밀번호 초기화"} />
                </div>
            </div>
    );
};

export default FindPW;