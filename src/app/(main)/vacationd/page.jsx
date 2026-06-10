import Nav2 from '@/component/nav2';
import s from './vacationd.module.css';

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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h4>휴가관리</h4>
                    <img src='/right.png' />
                    <h5>휴가일수설정</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>휴가일수설정</h3>
                    <span>연도별 휴가 정책 및 직급별 기준 일수를 설정합니다.</span>
                    <div className={s.regist}>
                        <img src='/save3.png' />
                        <h4>설정저장</h4>
                    </div>
                </div>

                <div className={s.point}>
                    <div className={s.date}>
                        <div className={s.date_left}>
                            <img src="/left.png" alt="" />
                        </div>
                        <div className={s.date_text}>
                            <img src="/c3.png" alt="" />
                            <h3>2025년</h3>
                        </div>
                        <div className={s.date_right}>
                            <img src="/right.png" alt="" />
                        </div>
                    </div>
                    <div className={s.point1}>
                        <img src="/in.png" alt="" />
                        <h3>회계연도 기준 (1월~12월)</h3>
                    </div>
                    <div className={s.point2}>
                        <img src="/copy.png" alt="" />
                        <h3>전년도 설정 복사</h3>
                    </div>
                </div>

                <div className={s.rank}>
                    <div className={s.rank_title}>
                        <div className={s.rank_title1}>
                            <img src="/page.png" alt="" />
                            <h3>직급별 기준 휴가일수</h3>
                        </div>
                        <div className={s.rank_title2}>
                            <img src="plus2.png" alt="" />
                            <h3>행 추가</h3>
                        </div>
                    </div>
                    <div className={s.rank1}>
                        <div className={s.rank1_1}>직급</div>
                        <div className={s.rank1_2}>기준 일수</div>
                        <div className={s.rank1_3}>최대 이월</div>
                        <div className={s.rank1_4}>반차 허용</div>
                        <div className={s.rank1_5}>비고</div>
                    </div>
                    <div className={s.rank2}>
                        <label htmlFor="top">임원</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='25' className={s.input1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='10' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box}>
                                <div className={s.circle}>원</div>
                            </div>
                        </div>
                        <h3>최고 직급 기준</h3>
                    </div>

                    <div className={s.rank2}>
                        <label htmlFor="top">부장</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='21' className={s.input1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='10' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box}>
                                <div className={s.circle}>원</div>
                            </div>
                        </div>
                        <h3>-</h3>
                    </div>
                    <div className={s.rank2}>
                        <label htmlFor="top">차장</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='18' className={s.input1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='5' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box}>
                                <div className={s.circle}>원</div>
                            </div>
                        </div>
                        <h3>-</h3>
                    </div>
                    <div className={s.rank2}>
                        <label htmlFor="top">과장</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='15' className={s.input1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='5' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box}>
                                <div className={s.circle}>원</div>
                            </div>
                        </div>
                        <h3>-</h3>
                    </div>
                    <div className={s.rank2}>
                        <label htmlFor="top">대리</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='12' className={s.input1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='5' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box}>
                                <div className={s.circle}>원</div>
                            </div>
                        </div>
                        <h3>-</h3>
                    </div>

                    <div className={s.rank3}>
                        <label htmlFor="top">사원</label>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='11' className={s.input1_1} />
                        </div>
                        <div className={s.rank_input1}>
                            <input type="text" placeholder='5' className={s.input2} />
                        </div>
                        <div className={s.rank_input2}>
                            <div className={s.rank_box1}>
                                <div className={s.circle1}>원</div>
                            </div>
                        </div>
                        <h3>신입기준</h3>
                    </div>
                
                </div>

                <div className={s.star}>
                    <div className={s.policy}>
                        <div className={s.policy_title}>
                            <img src="/st.png" alt="" />
                            <h3>특별 휴가 정책</h3>
                        </div>
                        <div className={s.policy_content}>
                            <div className={s.policy1}>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">결혼 휴가</label>
                                </div>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">출산 휴가 (여)</label>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                            </div>
                            <div className={s.policy1}>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">배우자 출산 휴가</label>
                                </div>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">부모 사망</label>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                            </div>
                            <div className={s.policy1}>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">배우자/자녀 사망</label>
                                </div>
                                <div className={s.policy1_label}>
                                    <label htmlFor="label1">형제/자매 사망</label>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                                <div className={s.policy_input}>
                                    <input type="text" placeholder='일'/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={s.day}>
                        <div className={s.day_title}>
                            <img src="/up.png" alt="" />
                            <h3>근속 가산 일수</h3>
                        </div>
                        <div className={s.day_content}>
                            <div className={s.info}>
                                <img src="/info3.png" alt="" />
                                <h3>근속 2년 초과 시 매 2년마다 1일씩 최대 25일까지 가산됩니다.</h3>
                            </div>
                            <div className={s.d_title}>
                                <div className={s.d1}>근속 연수</div>
                                <div className={s.d2}>가산일수</div>
                                <div className={s.d3}>최종 일수 (사원 기준)</div>
                            </div>
                            <div className={s.day1}>
                                <div className={s.da1}>1년 미만</div>
                                <div className={s.da2}>+0일</div>
                                <div className={s.da3}>11일</div>
                            </div>
                            <div className={s.day2}>
                                <div className={s.da1}>1년 이상 ~ 3년 미만</div>
                                <div className={s.da2_1}>+1일</div>
                                <div className={s.da3}>12일</div>
                            </div>
                            <div className={s.day2}>
                                <div className={s.da1}>3년 이상 ~ 5년 미만</div>
                                <div className={s.da2_1}>+2일</div>
                                <div className={s.da3}>13일</div>
                            </div>
                            <div className={s.day2}>
                                <div className={s.da1}>5년 이상 ~ 10년 미만</div>
                                <div className={s.da2_1}>+3일</div>
                                <div className={s.da3}>14일</div>
                            </div>
                            <div className={s.day3}>
                                <div className={s.da1}>10년 이상</div>
                                <div className={s.da2_1}>+5일</div>
                                <div className={s.da3}>16일</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}