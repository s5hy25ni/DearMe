import { useContext, useEffect, useState } from "react";

import LoginHeader from '../components/CheckHeader';

const CheckDepression = () => {
  return (
    <div className="chk_app">
      <div className="check_wrap">
        <LoginHeader/> {/* Dear. ME */}
        <div className="page_info">
          <div className="content">
            <div className="explain_text">
              <div className="explain_wrap">
                <span>
                아래 항목들을 잘 읽고 지난 일주일 동안 다음과 같은 일들을
                <br />
                얼마나 자주 겪었는지 해당되는 칸에 선택해주세요
                </span>
              </div>
              <table border="1" className="border_write" width="100%" summary="진단항목 입력">
                <colgroup>
                  <col width="310" />
                  <col width/>
                  <col width/>
                  <col width/>
                  <col width/>
                </colgroup>
                <thead>
                  <tr>
                    <th className="cell" scope="col">진단항목</th>
                    <th className="cell" scope="col">전혀 없었다</th>
                    <th className="cell" scope="col">한두번 있었다</th>
                    <th className="cell" scope="col">많이 있었다</th>
                    <th className="cell" scope="col">매일 있었다</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">평상시에는 아무렇지도 않던 일들이 귀찮게 느껴졌다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-1" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-1" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-1" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-1" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">입맛이 없었다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-2" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-2" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-2" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-2" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">가족이나 친구들을 만나보고 얘기도 했지만
                      <br />계속 기분이 좋지 않았다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-3" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-3" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-3" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-3" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">나는 남들만큼 괜찮은 사람이라고 생각했다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-4" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-4" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-4" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-4" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">내가 하는 일에 마음을 집중하기가 어려웠다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-5" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-5" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-5" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-5" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">기분이 우울했다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-6" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-6" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-6" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-6" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">내가 하고자 하는 일 모두가 어렵게 느껴졌다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-7" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-7" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-7" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-7" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">미래에 대하여 희망적으로 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-8" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-8" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-8" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-8" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">내 인생은 실패작이라고 생각했다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-9" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-9" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-9" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-9" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">두려움을 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-10" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-10" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-10" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-10" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">잠을 시원하게 못잤다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-11" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-11" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-11" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-11" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">행복한 편이였다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-12" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-12" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-12" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-12" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">평상시보다 대화를 적게 하였다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-13" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-13" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-13" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-13" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">외로움을 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-14" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-14" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-14" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-14" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">다른 사람들이 다정하지 못하다고 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-15" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-15" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-15" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-15" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">생활이 즐겁다고 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-16" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-16" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-16" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-16" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">울었던 적이 있다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-17" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-17" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-17" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-17" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">슬픔을 느꼈다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-18" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-18" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-18" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-18" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">주위 사람들이 나를 싫어한다는 생각이 들었다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-19" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-19" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-19" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-19" value="3" className="radio" />
                    </td>
                  </tr>
                  <tr>
                    <th className="cell" scope="rowgroup">
                      <span className="lightHeader">무슨 일이든 제대로 할 수가 없었다</span>
                    </th>
                    <td className="cell chkCell">
                      <input type="radio" name="a-20" value="0" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-20" value="1" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-20" value="2" className="radio" />
                    </td>
                    <td className="cell chkCell">
                      <input type="radio" name="a-20" value="3" className="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> {/* explain_text */}
          </div> {/* content */}
        </div> {/* page_info */}
        <div className="chk_button">
         <button>결과보기</button> {/* onClick={} 적어야함 */}
        </div>
      </div> {/* check_wrap */}
    </div> //chk_app
  );
};

export default CheckDepression;