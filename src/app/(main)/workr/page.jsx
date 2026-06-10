import Nav2 from '@/component/nav2';
import s from './workr.module.css';

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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <li>
                        <img src='/dot2.png' />
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
                    <h4>근태관리</h4>
                    <img src='/right.png' />
                    <h5>일일근태등록</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>일일근태등록</h3>
                    <span>날짜별 직원 근태 현황을 등록하고 수정합니다.</span>
                    <div className={s.down}>
                        <img src='/down2.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/save2.png' />
                        <h4>일괄저장</h4>
                    </div>
                </div>

                <div className={s.date}>
                    <div className={s.date1}>
                        <div className={s.date_left}>
                            <img src="/left.png" alt="" />
                        </div>
                        <div className={s.date1_box}>
                            <img src="/cal2.png" alt="" />
                            <h3>2025년 7월 1일 (화)</h3>
                        </div>
                        <div className={s.date_right}>
                            <img src="/right3.png" alt="" />
                        </div>
                    </div>
                    <div className={s.date2}>
                        <img src="/cal3.png" alt="" />
                        <h3>오늘</h3>
                    </div>
                    <div className={s.date3}>
                        <label htmlFor="depart">부서</label>
                        <select name="" id="">
                            <option value="전체부서">전체부서</option>
                            <option value="개발팀">개발팀</option>
                            <option value="경영지원팀">경영지원팀</option>
                            <option value="영업">영업팀</option>
                            <option value="인사팀">인사팀</option>
                        </select>
                    </div>
                    <div className={s.date4}>
                        <input type="text" placeholder='사원명 검색' />
                    </div>

                    <div className={s.date_list}>
                        <div className={s.date_one}>
                            <img src="/one.png" alt="" />
                            <h3>전체 23명</h3>
                        </div>
                        <div className={s.date_two}>
                            <img src="/two.png" alt="" />
                            <h3>출근 18</h3>
                        </div>
                        <div className={s.date_three}>
                            <img src="/three.png" alt="" />
                            <h3>지각 2</h3>
                        </div>
                        <div className={s.date_four}>
                            <img src="/four.png" alt="" />
                            <h3>결근 1</h3>
                        </div>
                        <div className={s.date_five}>
                            <img src="/five.png" alt="" />
                            <h3>연차 2</h3>
                        </div>
                    </div>
                </div>

                <div className={s.content}>
                    <div className={s.re}>
                        <div className={s.re_title}>
                            <div className={s.re_title1}>
                                <img src="/title.png" alt="" />
                                <h3>근태 등록</h3>
                            </div>
                            <div className={s.re_title2}>
                                <h3>7월 1일</h3>
                            </div>
                        </div>
                        <div className={s.re_content}>
                            <div className={s.re_select}>
                                <div className={s.re_select_title}>
                                    <h3>사원 선택</h3>
                                    <img src="/star.png" alt="" className={s.star} />
                                </div>
                                <div className={s.re_select_box}>
                                    <div className={s.profile}>
                                        <h3>박</h3>
                                    </div>
                                    <div className={s.re_select_name}>
                                        <h2>박민준</h2>
                                        <h4>·</h4>
                                        <h5>개발팀</h5>
                                    </div>
                                    <img src="/ex.png" alt="" />
                                </div>
                            </div>

                            <div className={s.type}>
                                <div className={s.type_title}>
                                    <h3>근태 유형</h3>
                                    <img src="/star.png" alt="" />
                                </div>
                                <div className={s.type_content}>
                                    <div className={s.type_list1}>
                                        <div className={s.type1}>
                                            <img src="/checkd.png" alt="" />
                                            <h3>출근</h3>
                                        </div>
                                        <div className={s.type2}>
                                            <img src="/c.png" alt="" />
                                            <h3>지각</h3>
                                        </div>
                                        <div className={s.type3}>
                                            <img src="/out.png" alt="" />
                                            <h3>조퇴</h3>
                                        </div>
                                    </div>
                                    <div className={s.type_list1}>
                                        <div className={s.type4}>
                                            <img src="/no.png" alt="" />
                                            <h3>결근</h3>
                                        </div>
                                        <div className={s.type5}>
                                            <img src="/cal4.png" alt="" />
                                            <h3>연차</h3>
                                        </div>
                                        <div className={s.type6}>
                                            <img src="/l1.png" alt="" />
                                            <h3>반차</h3>
                                        </div>
                                    </div>
                                    <div className={s.type_list1}>
                                        <div className={s.type7}>
                                            <img src="/plane2.png" alt="" />
                                            <h3>출장</h3>
                                        </div>
                                        <div className={s.type8}>
                                            <img src="/open.png" alt="" />
                                            <h3>교육</h3>
                                        </div>
                                        <div className={s.type9}>
                                            <img src="/check5.png" alt="" />
                                            <h3>공가</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={s.time}>
                                <div className={s.time_label}>
                                    <label htmlFor="" className={s.timel1}>출근 시간</label>
                                    <label htmlFor="" className={s.timel2}>퇴근 시간</label>
                                </div>
                                <div className={s.time_input}>
                                    <input type="time" value='09:00' className={s.time1} />
                                    <input type="time" value='18:00' className={s.time2} />
                                </div>
                            </div>

                            <div className={s.ot}>
                                <div className={s.ot_title}>
                                    <label htmlFor="ot_label">초과근무(OT)</label>
                                    <div className={s.ot_title2}>
                                        <div className={s.button}>
                                            <div className={s.circle}>원</div>
                                        </div>
                                        <h3>적용</h3>
                                    </div>
                                </div>
                                <div className={s.ot_input}>
                                    <input type="time" className={s.ot1} value='18:00' />
                                    <div className={s.wave}>
                                        <h3>~</h3>
                                    </div>
                                    <input type="time" className={s.ot2} value='20:30' />
                                    <div className={s.ot_timee}>
                                        <h4>2.5h</h4>
                                    </div>
                                </div>
                            </div>

                            <div className={s.bgo}>
                                <div className={s.bgo_title}>
                                    <h3>비고</h3>
                                </div>
                                <div className={s.bgo_input}>
                                    <input type="text" placeholder='특이사항을 입력하세요' />
                                </div>
                            </div>

                            <div className={s.btn}>
                                <div className={s.save_btn}>
                                    <img src="s2.png" alt="" />
                                    <h3>저장</h3>
                                </div>
                                <div className={s.cancel_btn}>
                                    <img src="/b1.png" alt="" />
                                    <h3>초기화</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.table}>
                        <div className={s.table_title}>
                            <div className={s.table_title1}>
                                <img src="/c1.png" alt="" />
                                <h3>2025.07.01 근태 목록</h3>
                            </div>
                            <div className={s.table_title2}>
                                <div className={s.total}>
                                    <h3>총 23명</h3>
                                </div>
                                <div className={s.register}>
                                    <img src="/user3.png" alt="" />
                                    <h3>일괄등록</h3>
                                </div>
                            </div>
                        </div>

                        <div className={s.table_first}>
                            <input type="checkbox" />
                            <label htmlFor="num" className={s.numl}>사원번호</label>
                            <label htmlFor="name" className={s.namel}>성명</label>
                            <label htmlFor="depart" className={s.departl}>부서</label>
                            <label htmlFor="rank" className={s.rankl}>직급</label>
                            <label htmlFor="type" className={s.typel}>근태유형</label>
                            <label htmlFor="open" className={s.openl}>출근시간</label>
                            <label htmlFor="close" className={s.closel}>퇴근시간</label>
                            <label htmlFor="ott" className={s.ottl}>OT</label>
                            <label htmlFor="bgoo" className={s.bgool}>비고</label>
                            <label htmlFor="manage" className={s.managel}>관리</label>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}