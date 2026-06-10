import Nav from '@/component/nav';
import s from './usergo.module.css';

export default function Page() {
    return (
        <div className={s.container}>
            <Nav />
            <div className={s.sub_header}>
                <div className={s.sub_main}>
                    <img src='/user.png' />
                    <h3>인사정보</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>인사정보등록</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>사원명수/인사기록카드</h4>
                    </li>
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
                        <h4>인사발령등록</h4>
                    </li>
                </ul>
                <div className={s.sub_main_two}>
                    <img src='/handshake.png' />
                    <h3>경조비관리</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>경조비신청</h4>
                    </li>
                    <li>
                        <img src='/dot2.png' />
                        <h4>경조비신청현황</h4>
                    </li>
                </ul>
                <div className={s.sub_main_three}>
                    <img src='/filetext.png' />
                    <h3>증명서관리</h3>
                </div>
                <ul className={s.sub_sub}>
                    <li>
                        <img src='/dot2.png' />
                        <h4>증명서발급</h4>
                    </li>
                </ul>
            </div>
            <section className={s.hi}>
                <div className={s.hi_mini}>
                    <img src='/home.png' />
                    <img src='/right.png' />
                    <h4>인사관리</h4>
                    <img src='/right.png' />
                    <h4>인사정보</h4>
                    <img src='/right.png' />
                    <h5>인사발령등록</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>인사발령등록</h3>
                    <span>사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.</span>
                    <div className={s.down}>
                        <img src='/download.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/plus.png' />
                        <h4>신규신청</h4>
                    </div>
                </div>

                <div className={s.search}>
                    <div className={s.search_title}>
                        <img src="/search3.png" alt="" />
                        <h3>검색조건</h3>
                    </div>
                    <div className={s.search_content}>
                        <div className={s.search1}>
                            <div className={s.search1_title}>
                                <h3>사원검색</h3>
                            </div>
                            <input type="text" placeholder='사원번호 또는 성명' />
                            <div className={s.img_box}>
                                <img src="/search4.png" alt="" />
                            </div>
                        </div>
                        <div className={s.search2}>
                            <div className={s.search2_title}>
                                <h3>발령유형</h3>
                            </div>
                            <select name="type" id="">
                                <option value="전체">전체</option>
                                <option value="승진">승진</option>
                                <option value="전보">전보</option>
                                <option value="겸직">겸직</option>
                            </select>
                        </div>
                        <div className={s.search3}>
                            <div className={s.search3_title}>
                                <h3>발령일</h3>
                            </div>
                            <input type="date" className={s.date1}  />
                            <div className={s.pado}>
                                <h3>~</h3>
                            </div>
                            <input type="date"
                            className={s.date2} />
                        </div>
                        <div className={s.search4}>
                            <div className={s.search_btn}>
                                <img src="/s.png" alt="" />
                                <h3>조회</h3>
                            </div>
                            <div className={s.back_btn}>
                                <img src="/back2.png" alt="" />
                                <h3>초기화</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.form}>
                    <div className={s.form_title}>
                        <img src="/form.png" alt="" />
                        <h3>발령 입력 폼</h3>
                        <div className={s.form_sub}>
                            <img src="/user2.png" alt="" />
                            <h2>EMP-002</h2>
                            <div className={s.point}>점</div>
                            <h4>이영희</h4>
                            <div className={s.point}>점</div>
                            <h5>경영지원팀</h5>
                            <div className={s.point}>점</div>
                            <strong>과장</strong>
                        </div>
                    </div>
                    <div className={s.form_content}>
                        <div className={s.form_input}>
                            <div className={s.form_label}>
                                <div className={s.form_label1}>
                                    <h3>발령유형</h3>
                                    <img src="/star.png" alt="" />
                                </div>
                                <div className={s.form_label2}>
                                    <h3>발령일</h3>
                                    <img src="/star.png" alt="" />
                                </div>
                                <div className={s.form_label3}>
                                    <h3>발령번호</h3>
                                </div>
                                <div className={s.form_label4}>
                                    <h3>발령사유</h3>
                                </div>
                            </div>
                            <div className={s.form_input_box}>
                                <div className={s.form_input1}>
                                    <div className={s.type1}>
                                        <h3>승진</h3>
                                    </div>
                                    <div className={s.type2}>
                                        <h3>전보</h3>
                                    </div>
                                    <div className={s.type3}>
                                        <h3>겸직</h3></div>
                                    <div className={s.type4}>
                                        <h3>기타</h3>
                                    </div>
                                </div>
                                <input type="date" className={s.date}/>
                                <div className={s.form_input2}>자동생성</div>
                                <input type="text" placeholder='발령 사유를 입력하세요' className={s.reason} />
                            </div>
                        </div>

                        <div className={s.go}>
                            <div className={s.prev}>
                                <div className={s.prev_title}>
                                    <div className={s.prev_rtitle}>
                                        <h3>발령 전</h3>
                                    </div>
                                    <div className={s.prev_line}>선</div>
                                </div>
                                <div className={s.prev_content}>
                                    <div className={s.prev_label}>
                                        <label htmlFor="depart">부서</label>
                                        <label htmlFor="rank">직급</label>
                                        <label htmlFor="rankm">직책</label>
                                    </div>
                                    <div className={s.prev_input}>
                                        <input type="text" placeholder='부서'/>
                                        <input type="text" placeholder='직급'/>
                                        <input type="text" placeholder='직책'/>
                                    </div>
                                </div>
                            </div>
                            <div className={s.go_img}>
                                <img src="/right2.png" alt="" />
                            </div>
                            <div className={s.next}>
                                <div className={s.next_title}>
                                    <div className={s.next_rtitle}>
                                        <h3>발령 후</h3>
                                    </div>
                                    <div className={s.next_line}>선</div>
                                </div>
                                <div className={s.next_content}>
                                    <div className={s.next_label}>
                                        <label htmlFor="depart">부서</label>
                                        <label htmlFor="rank">직급</label>
                                        <label htmlFor="rankm">직책</label>
                                    </div>
                                    <div className={s.next_input}>
                                        <select name="depart" id="">
                                            <option value="인사팀">인사팀</option>
                                            <option value="기술전략팀">기술전략팀</option>
                                            <option value="영업팀">영업팀</option>
                                            <option value="마케팅팀">마케팅팀</option>
                                        </select>
                                        <select name="rank" id="">
                                            <option value="부장">부장</option>
                                            <option value="과장">과장</option>
                                            <option value="대리">대리</option>
                                            <option value="사원">사원</option>
                                        </select>
                                        <select name="rankm" id="">
                                            <option value="팀장">팀장</option>
                                            <option value="파트장">파트장</option>
                                            <option value="사원">사원</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.bgo}>
                            <div className={s.bgo_title}>
                                비고
                            </div>
                            <div className={s.bgo_content}>
                                <input type="text" placeholder='발령 추가 사항을 입력하세요.' />
                            </div>
                            <div className={s.bgo_button}>
                                <div className={s.save_btn}>
                                    <img src="/save.png" alt="" />
                                    <h3>저장</h3>
                                </div>
                                <div className={s.cancel_btn}>
                                    <img src="/cancel1.png" alt="" />
                                    <h3>취소</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}