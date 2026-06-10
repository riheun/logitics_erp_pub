import Nav2 from '@/component/nav2';
import s from './working.module.css';

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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h5>월근태현황</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>월근태현황</h3>
                    <span>부서별·직원별 월간 근태 현황을 조회하고 관리합니다.</span>
                    <div className={s.down}>
                        <img src='/down2.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/p.png' />
                        <h4>인쇄</h4>
                    </div>
                </div>

                <div className={s.point}>
                    <div className={s.date}>
                        <div className={s.date_left}>
                            <img src="/l2.png" alt="" />
                        </div>
                        <div className={s.date_text}>
                            <img src="/c2.png" alt="" />
                            <h3>2025년 7월</h3>
                        </div>
                        <div className={s.date_right}>
                            <img src="/r.png" alt="" />
                        </div>
                    </div>
                    <div className={s.depart}>
                        <label htmlFor="departl">부서</label>
                        <select name="depart" id="">
                            <option value="전체부서">전체부서</option>
                            <option value="경영지원팀">경영지원팀</option>
                            <option value="개발팀">개발팀</option>
                            <option value="영업팀">영업팀</option>
                            <option value="인사팀">인사팀</option>
                        </select>
                    </div>
                    <div className={s.search}>
                        <img src="/s3.png" alt="" />
                        <h3>조회</h3>
                    </div>
                    <div className={s.g}>
                        <div className={s.g1}>
                            <img src="/d1.png" alt="" />
                            <h3>출근</h3>
                        </div>
                        <div className={s.g2}>
                            <img src="/d2.png" alt="" />
                            <h3>지각</h3>
                        </div>
                        <div className={s.g3}>
                            <img src="/d3.png" alt="" />
                            <h3>연차</h3>
                        </div>
                        <div className={s.g4}>
                            <img src="/d4.png" alt="" />
                            <h3>반차</h3>
                        </div>
                        <div className={s.g5}>
                            <img src="/d5.png" alt="" />
                            <h3>출장</h3>
                        </div>
                        <div className={s.g6}>
                            <img src="/d6.png" alt="" />
                            <h3>결근</h3>
                        </div>
                        <div className={s.g7}>
                            <img src="/d7.png" alt="" />
                            <h3>휴일</h3>
                        </div>
                    </div>
                </div>

                <div className={s.table}>
                    <div className={s.table_title}>
                        <div className={s.table_title1}>
                            <img src="/table.png" alt="" />
                            <h3>2025년 7월 근태현황</h3>
                        </div>
                        <div className={s.table_title2}>
                            <div className={s.table_date}>
                                <img src="/o1.png" alt="" />
                                <h3>총 근무일 23일</h3>
                            </div>
                            <div className={s.table_line}>
                                선
                            </div>
                            <div className={s.table_man}>
                                <img src="/o2.png" alt="" />
                                <h3>대상 인원 5명</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className={s.one}>
                        <div className={s.one1}>성명</div>
                        <div className={s.one2}>부서</div>
                        <div className={s.o1}>1</div>
                        <div className={s.o2}>2</div>
                        <div className={s.o3}>3</div>
                        <div className={s.o4}>4</div>
                        <div className={s.o5}>5</div>
                        <div className={s.o6}>6</div>
                        <div className={s.o7}>7</div>
                        <div className={s.o8}>8</div>
                        <div className={s.o9}>9</div>
                        <div className={s.o10}>10</div>
                        <div className={s.o11}>11</div>
                        <div className={s.o12}>12</div>
                        <div className={s.o13}>13</div>
                        <div className={s.o14}>14</div>
                        <div className={s.o15}>15</div>
                        <div className={s.o16}>16</div>
                        <div className={s.o17}>17</div>
                        <div className={s.o18}>18</div>
                        <div className={s.o19}>19</div>
                        <div className={s.o20}>20</div>
                        <div className={s.o21}>21</div>
                        <div className={s.o22}>22</div>
                        <div className={s.o23}>23</div>
                        <div className={s.o24}>24</div>
                        <div className={s.o25}>25</div>
                        <div className={s.o26}>26</div>
                        <div className={s.o27}>27</div>
                        <div className={s.o28}>28</div>
                        <div className={s.o29}>29</div>
                        <div className={s.o30}>30</div>
                        <div className={s.o31}>31</div>
                        <div className={s.one3}>출근</div>
                        <div className={s.one4}>지각</div>
                        <div className={s.one5}>연차</div>
                        <div className={s.one6}>결근</div>
                    </div>
                </div>
            </section>
        </div>
    )
}