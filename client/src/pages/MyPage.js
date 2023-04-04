import { useNavigate, Link } from "react-router-dom";

import MyHeader from './../components/MyHeader';
import LoginButton from './../components/LoginButton';
import axios from "axios";

const MyPage = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('isLogin') !=='true' && sessionStorage.getItem('isLogin') !=='true') {
        navigate("/login");
    }

    var id, salt, pw_hc, name, pn;
    if(sessionStorage.getItem('id')){
        id = sessionStorage.getItem('id');
    }
    else if(localStorage.getItem('id')){
        id = localStorage.getItem('id');
    }

    axios.post(`http://localhost:4000/mypage`, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            state : 'mypage',
            id : id,
        })
        .then((res)=> {
            if(res.data.message === "mypageInfo") {
                salt = res.data.salt;
                pw_hc = res.data.pw_hc;
                name = res.data.name;
                console.log(name);
                pn = res.data.pn;
            }
            else {
                console.log("mypage res error")
            }
        })
        .catch((error) => {
            console.log("mypage post error : "+error)
        })

    return (
        <div>
            <MyHeader
                headText={"내 정보"}
            />
            <div className="mypage_wrap">
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">아이디</h3>
                        <div className="mypage_content">{id}</div>
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
                        <div className="mypage_content">{name}</div>
                    </div>
                </div>
                <div className="mypage_box">
                    <div className="mypage_left">
                        <h3 className="mypage_title">전화번호</h3>
                        <div className="mypage_content">{pn}</div>
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