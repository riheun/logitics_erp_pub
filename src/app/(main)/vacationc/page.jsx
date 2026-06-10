import Nav2 from '@/component/nav2';
import s from './vacationc.module.css';

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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h4>휴가관리</h4>
                    <img src='/right.png' />
                    <h5>휴가일수계산</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>휴가일수계산</h3>
                    <span>입사일 기준으로 직원별 발생 휴가일수를 자동 계산합니다.</span>
                    <div className={s.down}>
                        <img src='/down2.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/calcu.png' />
                        <h4>전직원 일괄계산</h4>
                    </div>
                </div>

                <div className={s.point}>
                    <div className={s.point1}>
                        <label htmlFor="date">기준년도</label>
                        <select name="year" id="">
                            <option value="2025">2025년</option>
                            <option value="2024">2024년</option>
                            <option value="2023">2023년</option>
                            <option value="2022">2022년</option>
                            <option value="2021">2021년</option>
                            <option value="2020">2020년</option>
                        </select>
                    </div>
                    <div className={s.point1}>
                        <label htmlFor="date">부서</label>
                        <select name="year" id="">
                            <option value="전체부서">전체부서</option>
                            <option value="경영지원팀">경영지원팀</option>
                            <option value="개발팀">개발팀</option>
                            <option value="영업팀">영업팀</option>
                            <option value="인사팀">인사팀</option>
                        </select>
                    </div>
                    <div className={s.point1}>
                        <label htmlFor="date">직급</label>
                        <select name="year" id="">
                            <option value="전체부서">전체직급</option>
                            <option value="전체 직급">전체직급</option>
                            <option value="부장">부장</option>
                            <option value="과장">과장</option>
                            <option value="대리">대리</option>
                            <option value="사원">사원</option>
                        </select>
                    </div>
                    <input type="text" placeholder='사원명 검색' />
                    <div className={s.search}>
                        <img src="/s5.png" alt="" />
                        <h3>조회</h3>
                    </div>
                    <div className={s.back}>
                        <img src="/b2.png" alt="" />
                        <h3>초기화</h3>
                    </div>
                </div>

                <div className={s.cal}>
                    <div className={s.cal_title}>
                        <div className={s.cal_title1}>
                            <img src="/cc.png" alt="" />
                            <h3>직원별 휴가 계산 결과</h3>
                        </div>
                        <div className={s.cal_title2}>
                            <h3>총 5명</h3>
                        </div>
                    </div>
                    <div className={s.sub_title}>
                        <div className={s.numl}>사원번호</div>
                        <div className={s.namel}>성명</div>
                        <div className={s.departl}>부서</div>
                        <div className={s.rankl}>직급</div>
                        <div className={s.datel}>입사일</div>
                        <div className={s.yearl}>근속연수</div>
                        <div className={s.dayl}>기본일수</div>
                        <div className={s.plusl}>가산일수</div>
                        <div className={s.movel}>이월일수</div>
                        <div className={s.totall}>총 부여일수</div>
                        <div className={s.usel}>사용일수</div>
                        <div className={s.restl}>잔여일수</div>
                        <div className={s.statel}>상태</div>
                    </div>
                    <div className={s.cal1}>
                        <div className={s.num}>EMP-001</div>
                        <div className={s.name}>김철수</div>
                        <div className={s.depart}>인사팀</div>
                        <div className={s.rank}>팀장</div>
                        <div className={s.date}>2019.03.02</div>
                        <div className={s.year_box}>
                            <div className={s.year}>6년 4개월</div>
                        </div>
                        <div className={s.day}>15</div>
                        <div className={s.plus}>+3</div>
                        <div className={s.move}>2</div>
                        <div className={s.total}>20</div>
                        <div className={s.use}>8</div>
                        <div className={s.rest_box}>
                            <div className={s.rest}>12일</div>
                        </div>
                        <div className={s.state_box}>
                            <div className={s.state}>계산완료</div>
                        </div>
                    </div>

                    <div className={s.cal1}>
                        <div className={s.num}>EMP-002</div>
                        <div className={s.name}>이영희</div>
                        <div className={s.depart}>인사팀</div>
                        <div className={s.rank}>차장</div>
                        <div className={s.date}>2018.07.15</div>
                        <div className={s.year_box}>
                            <div className={s.year}>6년 11개월</div>
                        </div>
                        <div className={s.day}>18</div>
                        <div className={s.plus}>+3</div>
                        <div className={s.move}>5</div>
                        <div className={s.total}>26</div>
                        <div className={s.use}>14</div>
                        <div className={s.rest_box}>
                            <div className={s.rest}>12일</div>
                        </div>
                        <div className={s.state_box}>
                            <div className={s.state}>계산완료</div>
                        </div>
                    </div>

                    <div className={s.cal1}>
                        <div className={s.num}>EMP-003</div>
                        <div className={s.name}>박민준</div>
                        <div className={s.depart}>개발팀</div>
                        <div className={s.rank}>대리</div>
                        <div className={s.date}>2021.08.01</div>
                        <div className={s.year_box1}>
                            <div className={s.year1}>3년 11개월</div>
                        </div>
                        <div className={s.day}>12</div>
                        <div className={s.plus}>+2</div>
                        <div className={s.move1}>0</div>
                        <div className={s.total}>14</div>
                        <div className={s.use}>11</div>
                        <div className={s.rest_box1}>
                            <div className={s.rest1}>3일</div>
                        </div>
                        <div className={s.state_box}>
                            <div className={s.state}>계산완료</div>
                        </div>
                    </div>

                    <div className={s.cal1}>
                        <div className={s.num}>EMP-004</div>
                        <div className={s.name}>최지영</div>
                    </div>
                </div>
            </section>
        </div>
    )
}