import React, { Component } from "react";

class MobileNavComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="mobileNav" className="">
                    <div className="mobile-container">

                        <span className="mobile-close"><a href="#"  className="mobile-close-btn"><img src={"." + process.env.PUBLIC_URL + "/images/btn_gnb_close.png"} alt=""/></a></span>
                        
                        <ul>
                            <li>
                                <form name="searchform" method="post" action="abc.php">
                                    <div className="mobile-searchform">
                                        <input type="text" name="mobile-search" id="mobile-search" />
                                        <button>Search</button>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">My Starbucks</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                        <li>
                                            <a href="#">My 리워드</a>
                                            <div className="mobile-sub-sub">
                                                <ul>
                                                    <li><a href="#">리워드 및 혜택</a></li>
                                                    <li><a href="#">별 히스토리</a></li>
                                                </ul>
                                            </div>  
                                        </li>
                                        <li>
                                            <a href="#">My 스타벅스 카드</a>
                                            <div className="mobile-sub-sub">
                                                <ul>
                                                    <li><a href="#">보유 카드</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 충전</a></li>
                                                    <li><a href="#">분실신고/잔액이전</a></li>
                                                </ul>
                                            </div>                         
                                        </li>
                                        <li>
                                            <a href="#">My 스타벅스 e-Gift Card</a>
                                            <div className="mobile-sub-sub">
                                                <ul>
                                                    <li><a href="#">보유 카드</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 충전</a></li>
                                                    <li><a href="#">분실신고/잔액이전</a></li>
                                                </ul>
                                            </div>                             
                                        </li>
                                        <li>
                                            <a href="#">My 쿠폰</a>
                                            <div className="mobile-sub-sub">
                                                <ul>
                                                    <li><a href="#">보유 카드</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 충전</a></li>
                                                    <li><a href="#">분실신고/잔액이전</a></li>
                                                </ul>
                                            </div>                             
                                        </li>
                                        <li><a href="#" className="none-sub">My 캘린더</a></li>
                                        <li><a href="#" className="none-sub">My 메뉴</a></li>
                                        <li><a href="#" className="none-sub">My 고객의 소리</a></li>
                                        <li><a href="#" className="none-sub">전자영수증</a></li>
                                        <li><a href="#" className="none-sub">개인컵 리워드 설정</a></li>
                                        <li><a href="#" className="none-sub">My DT Pass</a></li>
                                        <li>
                                            <a href="#">개인정보관리</a>
                                            <div className="mobile-sub-sub">
                                                <ul>
                                                    <li><a href="#">보유 카드</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                    <li><a href="#">카드 등록</a></li>
                                                </ul>
                                            </div>                         
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">COFFEE</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>            
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">MENU</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>                
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">STORE</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>            
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">RESPONSIBILITY</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>                
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">Starbucks Rewards</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>                
                            </li>
                            <li>
                                <a href="#" className="mobile-main-btn">WHAT'S NEW</a>
                                <div className="mobile-sub">
                                    <ul>
                                        <li><a href="#">한눈에 보기</a></li>
                                        <li><a href="#">My 리워드</a></li>
                                        <li><a href="#">My 스타벅스 카드</a></li>
                                        <li><a href="#">My 스타벅스 e-Gift Card</a></li>
                                        <li><a href="#">My 쿠폰</a></li>
                                        <li><a href="#">My 캘린더</a></li>
                                        <li><a href="#">My 메뉴</a></li>
                                        <li><a href="#">My 고객의 소리</a></li>
                                        <li><a href="#">전자영수증</a></li>
                                        <li><a href="#">개인컵 리워드 설정</a></li>
                                        <li><a href="#">My DT Pass</a></li>
                                        <li><a href="#">개인정보관리</a></li>
                                    </ul>
                                </div>                
                            </li>
                        </ul>

                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default MobileNavComponent;