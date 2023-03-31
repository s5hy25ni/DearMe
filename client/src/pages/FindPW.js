import { Link, useNavigate } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'
import LoginInputBox from './../components/LoginInputBox'
import LoginButton from './../components/LoginButton'

const FindPW = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('isLogin') === 'true' || sessionStorage.getItem('isLogin') === 'true') {
        navigate("/");
    }

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
                    <Link to="/login">
                        <LoginButton text={"취소"} type={"no"} />
                    </Link>
                </div>
            </div>
    );
};

export default FindPW;