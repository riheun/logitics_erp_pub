import Nav2 from '@/component/nav2';
import s from './vacationu.module.css'; 

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
                    <li>
                        <img src='/dot2.png' />
                        <h4>휴가일수신청</h4>
                    </li>
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h5>휴가사용현황</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>휴가사용현황</h3>
                    <span>전체 직원의 연도별 휴가 사용 현황을 조회합니다.</span>
                    <div className={s.down}>
                        <img src='/down2.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/pp.png' />
                        <h4>인쇄</h4>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.box1}>
                        <span>대상 인원</span>
                        <h3>8명</h3>
                    </div>
                    <div className={s.box2}>
                        <span>평균 부여일수</span>
                        <h3>16.1일</h3>
                    </div>
                    <div className={s.box3}>
                        <span>평균 사용일수</span>
                        <h3>10.4일</h3>
                    </div>
                    <div className={s.box4}>
                        <span>평균 잔여일수</span>
                        <h3>5.6일</h3>
                    </div>
                    <div className={s.box5}>
                        <span>잔여 3일 이하</span>
                        <h3>3명</h3>
                    </div>
                    <div className={s.box6}>
                        <span>휴가 미사용</span>
                        <h3>0명</h3>
                    </div>
                </div>

                <div className={s.point}>
                    <div className={s.point1}>
                        <div className={s.point1_label}>기준연도</div>
                        <div className={s.point1_box}>
                            <div className={s.point1_left}>
                                <img src="/left3.png" alt="" />
                            </div>
                            <div className={s.point1_text}>
                                <img src="/cal6.png" alt="" />
                                <h3>2025년</h3>
                            </div>
                            <div className={s.point1_right}>
                                <img src="/right5.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={s.point2}>
                        <div className={s.point2_label}>부서</div>
                        <select name="" id="">
                            <option value="전체부서">전체부서</option>
                            <option value="개발팀">개발팀</option>
                            <option value="영업팀">영업팀</option>
                            <option value="인사팀">인사팀</option>
                            <option value="경영지원팀">경영지원팀</option>
                        </select>
                    </div>
                    <div className={s.point3}>
                        <div className={s.point3_label}>정렬</div>
                        <select name="" id="">
                            <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                            <option value="잔여일수 내림차순">잔여일수 내림차순</option>
                        </select>
                    </div>
                    <div className={s.point4}>
                        <input type="text" placeholder='사원명 검색' />
                    </div>
                    <div className={s.point5}>
                        <img src="/ss4.png" alt="" />
                        <h3>조회</h3>
                    </div>
                    <div className={s.point6}>
                        <img src="/bac.png" alt="" />
                        <h3>초기화</h3>
                    </div>
                    <div className={s.point7}>
                        <img src="/cir.png" alt="" />
                        <h3>잔여 3일 이하 경고</h3>
                    </div>
                </div>
                <div className={s.table}>
                    <div className={s.table_title}>
                        <div className={s.table_title1}>
                            <img src="/table.png" alt="" />
                            <h3>직원별 휴가 사용 현황 (2025년)</h3>
                        </div>
                        <div className={s.table_title2}>
                            <div className={s.table_total}>
                                <h3>총 8명</h3>
                            </div>
                            <div className={s.table_title_box}>
                                <div className={s.table_title_box1}>
                                    <img src="/cs1.png" alt="" />
                                    <h3>사용일수</h3>
                                </div>
                                <div className={s.table_title_box2}>
                                    <img src="/cs2.png" alt="" />
                                    <h3>잔여일수</h3>
                                </div>
                                <div className={s.table_title_box3}>
                                    <img src="/cs3.png" alt="" />
                                    <h3>3일 이하 경고</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table_t}>
                        <div className={s.table_t1}>사원번호</div>
                        <div className={s.table_t2}>성명</div>
                        <div className={s.table_t3}>부서</div>
                        <div className={s.table_t4}>직급</div>
                        <div className={s.table_t5}>총 부여</div>
                        <div className={s.table_t6}>
                            <h3>연차</h3>
                            <span>사용</span>
                        </div>
                        <div className={s.table_t7}>
                            <h3>반찬</h3>
                            <span>사용</span>
                        </div>
                        <div className={s.table_t8}>
                            <h3>병가</h3>
                            <span>사용</span>
                        </div>
                        <div className={s.table_t9}>
                            <h3>특별휴가</h3>
                            <span>사용</span>
                        </div>
                        <div className={s.table_t10}>
                            <h3>기타</h3>
                            <span>사용</span>
                        </div>
                        <div className={s.table_t11}>총 사용</div>
                        <div className={s.table_t12}>잔여일수</div>
                        <div className={s.table_t13}>사용률 </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.table1}>
                        <div className={s.t1}>EMP-001</div>
                        <div className={s.t2}>김철수</div>
                        <div className={s.t3}>인사팀</div>
                        <div className={s.t4}>팀장</div>
                        <div className={s.t5}>20일</div>
                        <div className={s.t6}>8일</div>
                        <div className={s.t7}>1일</div>
                        <div className={s.t8}>-</div>
                        <div className={s.t9}>-</div>
                        <div className={s.t10}>-</div>
                        <div className={s.t11}>9일</div>
                        <div className={s.t12}>11일</div>
                        <div className={s.t13}>
                            <h3>45%</h3>
                            <div className={s.t_box1}>
                                <div className={s.t_blue1}>파랑</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.sum}>
                        <div className={s.sum1}>
                            <img src="/sigma.png" alt="" />
                            <h3>합계 / 평균</h3>
                        </div>
                        <div className={s.sum2}>120일</div>
                        <div className={s.sum3}>66일</div>
                        <div className={s.sum4}>4일</div>
                        <div className={s.sum5}>2일</div>
                        <div className={s.sum6}>8일</div>
                        <div className={s.sum7}>-</div>
                        <div className={s.sum8}>80일</div>
                        <div className={s.sum9}>
                            <h3>40일</h3>
                            <span>평균 5.0일</span>
                        </div>
                        <div className={s.sum10}>
                            <h3>66.7%</h3>
                            <div className={s.sum_box}>
                                <div className={s.sum_blue}>
                                    막대
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.last}>
                        <div className={s.last1}>
                            <h3>총 8명</h3>
                            <div className={s.last_line}>선</div>
                            <div className={s.last1_rest}>
                                <img src="/info5.png" alt="" />
                                <h4>잔여 3일 이하 3명 (박민준·정수빈·오준혁)</h4>
                            </div>
                        </div>
                        <div className={s.last2}>
                            <div className={s.last_left}>
                                <img src="/left5.png" alt="" />
                            </div>
                            <div className={s.last_text}>
                                <h3>1</h3>
                            </div>
                            <div className={s.last_right}>
                                <img src="/right6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}