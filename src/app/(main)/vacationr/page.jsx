import Nav2 from '@/component/nav2';
import s from './vacationr.module.css';

export default function Page() {
    return (
        <div className={s.container}>
            <Nav2 />
            <div className={s.sub_header}>
                <div className={s.sub_main}>
                    <img src='/clock3.png' />
                    <h3>근태관리</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>일일근태등록</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>월근태현황</h4>
                    </li>
                </ul>
                <div className={s.sub_main_two}>
                    <img src='/plane.png' />
                    <h3>출장관리</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>출장신청</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>출장정산</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>출장사용현황</h4>
                    </li>
                </ul>
                <div className={s.sub_main_three}>
                    <img src='/cal.png' />
                    <h3>휴가관리</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>휴가일수설정</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>휴가일수계산</h4>
                    </li>
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
                        <h4>휴가일수신청</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>휴가사용현황</h4>
                    </li>
                </ul>
            </div>

            <section className={s.hi}>
                <div className={s.hi_mini}>
                    <img src='/home.png' />
                    <img src='/right.png' />
                    <h4>근태관리</h4>
                    <img src='/right.png' />
                    <h4>휴가관리</h4>
                    <img src='/right.png' />
                    <h5>휴가일수신청</h5>
                </div>

                <div className={s.header}>
                    <div className={s.header_title}>
                        <h3>휴가일수신청</h3>
                        <h5>휴가 종류와 기간을 선택하여 신청합니다.</h5>
                    </div>
                </div>

                <div className={s.box}>
                    <div className={s.box1}>
                        <span>총 부여일수</span>
                        <h3>14일</h3>
                    </div>
                    <div className={s.box2}>
                        <span>사용일수</span>
                        <h3>11일</h3>
                    </div>
                    <div className={s.box3}>
                        <span>잔여일수</span>
                        <h3>3일</h3>
                    </div>
                    <div className={s.box4}>
                        <span>승인대기</span>
                        <h3>1건</h3>
                    </div>
                    <div className={s.box5}>
                        <span>이월일수</span>
                        <h3>0일</h3>
                    </div>
                </div>

                <div className={s.vr}>
                    <div className={s.vr_title}>
                        <div className={s.vr_title1}>
                            <img src="/cal5.png" alt="" />
                            <h3>휴가신청</h3>
                        </div>
                        <div className={s.vr_title2}>
                            <img src="/star.png" alt="" />
                            <h3>필수항목</h3>
                        </div>
                    </div>
                    <div className={s.vr_content}>
                        <div className={s.info}>
                            <div className={s.info_title}>신청자 정보</div>
                            <div className={s.info_content}>
                                <div className={s.profile}>
                                    <h3>박</h3>
                                </div>
                                <div className={s.info_content1}>
                                    <h3>박민준</h3>
                                    <h4>개발팀 · 대리</h4>
                                    <div className={s.line}>선</div>
                                    <h5>EMP-003</h5>
                                </div>
                                <div className={s.info_content2}>
                                    <img src="/c4.png" alt="" />
                                    <h3>잔여 3일</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.line1}>선</div>
                        <div className={s.type}>
                            <div className={s.type_title}>
                                <h3>휴가 종류</h3>
                                <img src="/star.png" alt="" />
                            </div>
                            <div className={s.type_content}>
                                <div className={s.btn1}>
                                    <img src="/c5.png" alt="" />
                                    <h3>연차</h3>
                                </div>
                                <div className={s.btn2}>
                                    <img src="/sun.png" alt="" />
                                    <h3>오전반차</h3>
                                </div>
                                <div className={s.btn3}>
                                    <img src="/moon.png" alt="" />
                                    <h3>오후반차</h3>
                                </div>
                                <div className={s.btn4}>
                                    <img src="/s6.png" alt="" />
                                    <h3>특별휴가</h3>
                                </div>
                                <div className={s.btn5}>
                                    <img src="/h.png" alt="" />
                                    <h3>병가</h3>
                                </div>
                                <div className={s.btn6}>
                                    <img src="/w.png" alt="" />
                                    <h3>공가</h3>
                                </div>
                            </div>
                            <div className={s.type_info}>
                                <img src="/info4.png" alt="" />
                                <h3>연차 선택됨</h3>
                                <div className={s.linee}>선</div>
                                <h4>1일 차감 / 잔여 3일</h4>
                            </div>
                        </div>
                        <div className={s.line2}>선</div>
                        <div className={s.session}>
                            <div className={s.session_title}>
                                <h3>휴가 기간</h3>
                                <img src="/star.png" alt="" />
                            </div>
                            <div className={s.day}>
                                <div className={s.day_label1}>시작일</div>
                                <div className={s.day_label2}>종료일</div>
                                <input type="date" className={s.input1} />
                                <div className={s.arrow}>
                                    ~
                                </div>
                                <input type="date" className={s.input2} />
                            </div>
                            <div className={s.days}>
                                <img src="/c6.png" alt="" />
                                <h3>신청 일수: 1일 (평일 기준)</h3>
                            </div>
                        </div>
                        <div className={s.line3}>선</div>
                        <div className={s.man}>
                            <div className={s.man_title}>
                                <h3>업무 대리자</h3>
                                <h5>선택 사항</h5>
                            </div>
                            <input type="text" placeholder='대리자를 선택하세요' />
                        </div>
                        <div className={s.reason}>
                            <h3>휴가 사유</h3>
                            <img src="/star.png" alt="" />
                            <input type="text" placeholder='휴가 사유를 입력하세요' />
                        </div>
                        <div className={s.file}>
                            <h3>첨부파일</h3>
                            <span>선택사항 · 최대 3개</span>
                            <div className={s.file_box}>
                                <h2>파일을 끌어다 놓거나</h2>
                                <div className={s.select}>
                                    <img src="/upl.png" alt="" />
                                    <h4>선택</h4>
                                </div>
                            </div>
                        </div>
                        <div className={s.line2}>선</div>
                        <div className={s.button}>
                            <div className={s.reg}>
                                <img src="/h1.png" alt="" />
                                <h3>신청하기</h3>
                            </div>
                            <div className={s.cancel}>
                                <img src="/cc1.png" alt="" />
                                <h3>취소</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.date}>
                    <div className={s.cal}>
                        <div className={s.cal_title}>
                            <div className={s.cal_title1}>
                                <img src="/cc2.png" alt="" />
                                <h3>2025년 7월</h3>
                            </div>
                            <div className={s.cal_title2}>
                            <div className={s.calb1}>
                                <img src="/l3.png" alt="" />
                            </div>
                            <div className={s.calb2}>
                                <img src="/r2.png" alt="" />
                            </div>
                        </div>
                        </div>
                        <div className={s.cal_content}>
                            <div className={s.cals}>
                                <div className={s.cal1}>일</div>
                                <div className={s.cal2}>월</div>
                                <div className={s.cal2}>화</div>
                                <div className={s.cal2}>수</div>
                                <div className={s.cal2}>목</div>
                                <div className={s.cal2}>금</div>
                                <div className={s.cal3}>토</div>
                            </div>
                            <div className={s.cals}>
                                <div className={s.cal1}></div>
                                <div className={s.cal2}>1</div>
                                <div className={s.cal2}>2</div>
                                <div className={s.cal2}>3</div>
                                <div className={s.cal2}>4</div>
                                <div className={s.cal2}>5</div>
                                <div className={s.cal3}>6</div>
                            </div>
                            <div className={s.cals}>
                                <div className={s.cal1}>7</div>
                                <div className={s.cal2}>8</div>
                                <div className={s.cal2}>9</div>
                                <div className={s.cal2}>10</div>
                                <div className={s.cal2}>11</div>
                                <div className={s.cal2}>12</div>
                                <div className={s.cal3}>13</div>
                            </div>
                            <div className={s.calsl}>
                                <div className={s.cal1l}>14</div>
                                <div className={s.cal2ll}>14</div>
                                <div className={s.cal2l_1}>16</div>
                                <div className={s.cal2l_2}>17</div>
                                <div className={s.cal2l_3}>18</div>
                                <div className={s.cal2l}>19</div>
                                <div className={s.cal3l}>20</div>
                            </div>
                            <div className={s.cals}>
                                <div className={s.cal1}>21</div>
                                <div className={s.cal2}>22</div>
                                <div className={s.cal2}>23</div>
                                <div className={s.cal2}>24</div>
                                <div className={s.cal2}>25</div>
                                <div className={s.cal2}>26</div>
                                <div className={s.cal3}>27</div>
                            </div>
                            <div className={s.cals}>
                                <div className={s.cal1}>28</div>
                                <div className={s.cal2}>29</div>
                                <div className={s.cal2}>30</div>
                                <div className={s.cal2}>31</div>
                                <div className={s.cal2}></div>
                                <div className={s.cal2}></div>
                                <div className={s.cal3}></div>
                            </div>
                            <div className={s.point}>
                                <div className={s.point1}>
                                    <img src="/p1.png" alt="" />
                                    <h3>신청일</h3>
                                </div>
                                <div className={s.point2}>
                                    <img src="/p2.png" alt="" />
                                    <h3>기사용</h3>
                                </div>
                                <div className={s.point3}>
                                    <img src="/p3.png" alt="" />
                                    <h3>공휴일</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={s.report}>
                        <div className={s.report_title}>
                            <div className={s.report_title1}>
                                <img src="/clock4.png" alt="" />
                                <h3>나의 신청 이력</h3>
                            </div>
                            <div className={s.report_title2}>
                                <h3>총 5건</h3>
                            </div>
                        </div>
                        <div className={s.report_sub}>
                            <div className={s.sub1}>신청일</div>
                            <div className={s.sub2}>휴가종류</div>
                            <div className={s.sub3}>휴가기간</div>
                            <div className={s.sub4}>일수</div>
                            <div className={s.sub5}>사유</div>
                            <div className={s.sub6}>승인상태</div>
                            <div className={s.sub7}>관리</div>
                        </div>
                        <div className={s.sub_sub}>
                            <div className={s.sob1}>2025.07.01</div>
                            <div className={s.sob2}>
                                <div className={s.sob_type}>
                                    <img src="/tt.png" alt="" />
                                    <h3>연차</h3>
                                </div>
                            </div>
                            <div className={s.sob3}>2025.07.14 ~ 07.14</div>
                            <div className={s.sob4}>1일</div>
                            <div className={s.sob5}>개인사유</div>
                            <div className={s.sob6}>
                                <div className={s.sob_state}>
                                    <img src="/ss.png" alt="" />
                                    <h3>승인대기</h3>
                                </div>
                            </div>
                            <div className={s.sob7}>
                                <div className={s.sob_manage}>
                                    <h3>취소</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.sub_sub}>
                            <div className={s.sob1}>2025.06.02</div>
                            <div className={s.sob2}>
                                <div className={s.sob_type1}>
                                    <img src="/ss1.png" alt="" />
                                    <h3>오전반차</h3>
                                </div>
                            </div>
                            <div className={s.sob3}>2025.06.10 ~ 06.10</div>
                            <div className={s.sob4}>0.5일</div>
                            <div className={s.sob5}>병원 방문</div>
                            <div className={s.sob6}>
                                <div className={s.sob_state1}>
                                    <img src="/ss2.png" alt="" />
                                    <h3>승인완료</h3>
                                </div>
                            </div>
                            <div className={s.sob7}>
                                <div className={s.sob_manage1}>
                                    <h3>상세</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.sub_sub}>
                            <div className={s.sob1}>2025.05.12</div>
                            <div className={s.sob2}>
                                <div className={s.sob_type}>
                                    <img src="/tt.png" alt="" />
                                    <h3>연차</h3>
                                </div>
                            </div>
                            <div className={s.sob3}>2025.05.19 ~ 05.21</div>
                            <div className={s.sob4}>3일</div>
                            <div className={s.sob5}>가족 여행</div>
                            <div className={s.sob6}>
                                <div className={s.sob_state1}>
                                    <img src="/ss2.png" alt="" />
                                    <h3>승인완료</h3>
                                </div>
                            </div>
                            <div className={s.sob7}>
                                <div className={s.sob_manage1}>
                                    <h3>상세</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.sub_sub}>
                            <div className={s.sob1}>2025.04.21</div>
                            <div className={s.sob2}>
                                <div className={s.sob_type2}>
                                    <img src="/tt1.png" alt="" />
                                    <h3>병가</h3>
                                </div>
                            </div>
                            <div className={s.sob3}>2025.04.22 ~ 04.23</div>
                            <div className={s.sob4}>2일</div>
                            <div className={s.sob5}>몸살 감기</div>
                            <div className={s.sob6}>
                                <div className={s.sob_state1}>
                                    <img src="/ss2.png" alt="" />
                                    <h3>승인완료</h3>
                                </div>
                            </div>
                            <div className={s.sob7}>
                                <div className={s.sob_manage1}>
                                    <h3>상세</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.sub_sub}>
                            <div className={s.sob1}>2025.03.05</div>
                            <div className={s.sob2}>
                                <div className={s.sob_type}>
                                    <img src="/tt.png" alt="" />
                                    <h3>연차</h3>
                                </div>
                            </div>
                            <div className={s.sob3}>2025.03.10 ~ 03.14</div>
                            <div className={s.sob4}>5일</div>
                            <div className={s.sob5}>개인 휴가</div>
                            <div className={s.sob6}>
                                <div className={s.sob_state1}>
                                    <img src="/ss2.png" alt="" />
                                    <h3>승인완료</h3>
                                </div>
                            </div>
                            <div className={s.sob7}>
                                <div className={s.sob_manage1}>
                                    <h3>상세</h3>
                                </div>
                            </div>
                        </div>
                        <div className={s.sub_last}>
                            <div className={s.sub_last1}>
                                <h3>총 5건 · 승인완료 4건 · 승인대기 1건</h3>
                            </div>
                            <div className={s.sub_last2}>
                                <div className={s.left}>
                                    <img src="/left2.png" alt="" />
                                </div>
                                <div className={s.sub_num}>
                                    <h3>1</h3>
                                </div>
                                <div className={s.right}>
                                    <img src="/right4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}