import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'

const FindID = () => {
    return (
            <div className="login_wrap">
                <div className="login_box">
                    <LoginHeader/>
                    <LoginInputBox 
                        title={"이름"}
                        input={""}/>
                    <LoginInputBox
                        title={"전화번호"}
                        input={""}/>
                    <LoginButton text={"아이디 찾기"} />
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