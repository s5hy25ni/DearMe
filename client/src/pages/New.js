import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  const navigate = useNavigate();
  if(localStorage.getItem('isLogin') !=='true' && sessionStorage.getItem('isLogin') !=='true') {
      navigate("/login");
  }

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
