import { useNavigate } from "react-router-dom";
import CheckHeader from '../components/CheckHeader';

// function handleClick(event) {
//     collection.forEach((e) => {
//         e.classList.remove("click");
//     });
//     event.target.classList.add("click");
// }
const RecommendVideo = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('isLogin') !=='true' && sessionStorage.getItem('isLogin') !=='true') {
        navigate("/login");
    }

    var collection = document.querySelectorAll(".collection");
    var collList = [];

    function handleClick(e) {
        const clickedDiv = e.target;
        // 선택된 버튼 색상변경
        clickedDiv.style.backgroundColor = "#fd565f";
        clickedDiv.style.color = "white"; 
        // 선택되지않은 버튼 색상변경
        collList.forEach(div => {
            if (div !== clickedDiv) {
              div.style.backgroundColor = "white";
              div.style.color = "black";
            }
          });

        //   function hideOtherDivs(buttonId) {
        //     const divs = document.querySelectorAll('div');
        //     for (let i = 0; i < divs.length; i++) {
        //       const div = divs[i];
        //       if (div.id !== buttonId) {
        //         div.hidden = true;
        //       }
        //     }
        //   }
    };

    collection.forEach((e) => {
        collList.push(e);
        e.addEventListener("click", handleClick);
    });
    
 


    return (
        <div className="video_app">
            <div className="video_wrap">
                <CheckHeader/>
                <div className="videoCategory">
                        <div className="collection total" id="1">전체</div>
                        <div className="collection">여행/일상</div>
                        <div className="collection">먹방</div>
                        <div className="collection">동물</div>
                </div>
                {/* sameSite err는 유튜브영상가져올 때 쿠키때문에 발생하는 문제라서 무시해야함.. */}
                <div className="contents">
                     <div className="firstLine" id="1">
                        <iframe width="656" height="369" src="https://www.youtube-nocookie.com/embed/9fw1qv-QKxg" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> 
                    <div className="firstLine">
                        <iframe width="656" height="328" src="https://www.youtube-nocookie.com/embed/l7mXDxdtX08" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="firstLine">
                        <iframe width="656" height="369" src="https://www.youtube-nocookie.com/embed/eYSMvzAvGrI" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        <iframe width="656" height="369" src="https://www.youtube-nocookie.com/embed/msz7iIKdmbc" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        <iframe width="656" height="369" src="https://www.youtube-nocookie.com/embed/HP0a4pkXM3Q" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        {/* <iframe width="656" height="369" src="https://www.youtube-nocookie.com/embed/JbUSH6ZZ1LU" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecommendVideo;