import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginHeader from './../components/LoginHeader'

const Agree = () => {
    const navigate = useNavigate();
    return (
        <div>
            <LoginHeader/>
            <div className="agree_wrap">
                <div className="agree_top">
                    <label>
                        <input type="checkbox" />
                        Dear.Me 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용약관에 모두 동의합니다.
                    </label>
                </div>
                <div className="agree_middle">
                    <div className="agree_box">
                        <div className="agree_title">
                            <label>
                                <input type="checkbox" />
                                Dear.Me 이용약관 동의 <span>(필수)</span>
                            </label>
                        </div>
                        <div className="agree_content">
                            서비스 이용약관에 대한 내용
                        </div>
                    </div>
                    <div className="agree_box">
                        <div className="agree_title">
                            <label>
                                <input type="checkbox" />
                                개인정보 수집 및 이용 동의 <span>(필수)</span>
                            </label>
                        </div>
                        <div className="agree_content">
                            개인정보보호법에 따라 Dear.Me에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.<br />
                            <br />
                            <b>1. 수집하는 개인정보</b><br />
                            <br />
                            Dear.Me는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.<br />
                            <br />
                            <b>회원가입 시점에 Dear.Me가 이용자로부터 수집하는 개인정보는 아래와 같습니다.</b><br />
                            - 회원 가입 시 필수항목으로 아이디, 비밀번호를, 선택항목으로 이름, 전화번호를 수집합니다.<br />
                            <br />
                            <b>서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.</b><br />
                            - Dear.Me 내의 개별 서비스 이용 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.<br />
                            <br />
                            <b>서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다.</b><br />
                            구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,<br />
                            2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용 과정에서 위치정보가 수집될 수 있으며,
                            Dear.Me에서 제공하는 위치기반 서비스에 대해서는 'Dear.Me 위치기반서비스 이용약관'에서 자세하게 규정하고 있습니다.<br />
                            이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.<br />
                            <br />
                            <b>2. 수집한 개인정보의 이용</b><br />
                            <br />
                            Dear.Me 및 Dear.Me 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발 제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.<br />
                            - 회원 가입 의사의 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.<br />
                            - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.<br />
                            - 법령 및 Dear.Me 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.<br />
                            - 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅 및 프로모션 목적으로 개인정보를 이용합니다.<br />
                            - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다.<br />
                            - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.<br />
                            <br />
                            <b>3. 개인정보의 보관기간</b>
                            <br />
                            <h3>회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.</h3>
                            또한, Dear.Me는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하여 관리하고 있습니다.<br />
                            <br />
                            <b>4. 개인정보 수집 및 이용 동의를 거부할 권리</b><br />
                            <br />
                            이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
                        </div>
                    </div>
                    <div className="agree_box">
                        <div className="agree_title">
                            <label>
                                <input type="checkbox" />
                                위치기반서비스 이용약관 동의 <span>(필수)</span>
                            </label>
                        </div>
                        <div className="agree_content">
                            위치기반서비스 이용약관에 대한 내용
                        </div>
                    </div>
                </div>
                <div className="agree_bottom">
                    <div className="agree_disagree">
                        <button>취소</button>
                    </div>
                    <div className="agree_agree">
                        <button>확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agree;