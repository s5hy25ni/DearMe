import { useContext, useEffect, useState } from "react";
import LoginHeader from '../components/CheckHeader';
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";

//영상넣기
const content = [
  {
    tab: "여행",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube-nocookie.com/embed/l7mXDxdtX08" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/hDcIxqQyAQM" title="🇹🇿 #9 지옥행 버스 9시간 타고 관광객 없는 아프리카 시골 마을로 도망치기" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  },
  {
    tab: "경험",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/CBYxjnSMezM" title="[Playlist] 이어폰 끼고 디즈니 주인공 되기 ✨ (8D AUDIO)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube-nocookie.com/embed/9fw1qv-QKxg" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  },
  {
    tab: "예능",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/K2_7-ZcNOE0" title="＂ 왜 입만 열면 거짓말인거야? 재밌잖아^^ ＂ 싸움 잘하고 예능 좀 잘 아는 아저씨 추성훈ㅋㅋㅋ ｜아는형님｜JTBC 230325 방송 외" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube-nocookie.com/embed/msz7iIKdmbc" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  },
  {
    tab: "동물",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/h_iwFeegSeE" title="[#습속친구들] 💛올망졸망 깜찍한 외모💛 지리산에서 온 하늘다람쥐🐿️ #순간포착세상에이런일이 #WhatonEarth #SBSstory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube-nocookie.com/embed/HP0a4pkXM3Q" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  },
  {
    tab: "일상",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/x9cn3vaAojI" title="소품샵사장 브이로그 | 전 쇼핑몰사장이 운영하는 소품샵에서는 어떤걸 판매할까 ? 😋 | 일상브이로그 | 사장브이로그 | 평택 | 평택 오니오니" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube-nocookie.com/embed/eYSMvzAvGrI" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  },
  {
    tab: "먹방",
    content:
    <div>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/ThTYqeZ1ChU" title="이대로 괜찮은가...?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="600" height="328" src="https://www.youtube.com/embed/RS-Et-oTleY" title="[ENG]사장님“다 드실 수 있겠어? 먹어보고 얘기해!!!”라고 하셔서 제대로 먹어보고 말씀 드렸습니다😋무려 강남에 위치한 포장마차에서!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function App() {
  const { contentItem, contentChange } = useTabs(0, content);
  const navigate = useNavigate();
  return (
    <div className="video">
      <div class="goHome">
        <MyButton text={"홈"} onClick={() => navigate("/")}/>
      </div>
      <LoginHeader/>
      {content.map((section, index) => (
        <button className="category" onClick={() => contentChange(index)}>{section.tab}</button>
      ))}
      <br />
      <br />
      {contentItem.content}
    </div>
  );
}