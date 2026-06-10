import Nav from '@/component/nav';
import s from './certificate.module.css';

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
                    <li>
                        <img src='/dot2.png' />
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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h5>증명서발급</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>증명서발급</h3>
                    <span>필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요.</span>
                    <div className={s.down}>
                        <img src='/clock2.png' />
                        <h4>발급이력</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/printer.png' />
                        <h4>출력하기</h4>
                    </div>
                </div>

                <div className={s.type}>
                    <div className={s.type_title}>
                        <img src="/file4.png" alt="" />
                        <h3>증명서 종류 선택</h3>
                        <div className={s.type_choose}>
                            <img src="/star.png" alt="" />
                            <span>필수 선택</span>
                        </div>
                    </div>
                    <div className={s.type_content}>
                        <div className={s.type1}>
                            <div className={s.img_box}>
                                <img src="/bag3.png" alt="" />
                            </div>
                            <h3>재직증명서</h3>
                            <span>현재 재직 중임을 증명합니다</span>
                            <button className={s.check}>
                                <img src="/check4.png" alt="" />
                                <h3>선택됨</h3>
                            </button>
                        </div>
                        <div className={s.type2}>
                            <div className={s.img_box}>
                                <img src="/award.png" alt="" />
                            </div>
                            <h3>경력증명서</h3>
                            <span>경력 사항을 증명합니다</span>
                            <button className={s.check}>
                                <h3>선택하기</h3>
                            </button>
                        </div>
                        <div className={s.type2}>
                            <div className={s.img_box}>
                                <img src="/record.png" alt="" />
                            </div>
                            <h3>급여확인서</h3>
                            <span>급여 내역을 확인합니다</span>
                            <button className={s.check}>
                                <h3>선택하기</h3>
                            </button>
                        </div>
                        <div className={s.type3}>
                            <div className={s.img_box}>
                                <img src="/re.png" alt="" />
                            </div>
                            <h3>근로소득원천징수</h3>
                            <span>원천징수 내역 확인서</span>
                            <button className={s.check}>
                                <h3>선택하기</h3>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.info}>
                    <div className={s.info_title}>
                        <div className={s.info_title1}>
                            <img src="/board.png" alt="" />
                            <h3>발급 정보 입력</h3>
                        </div>
                        <div className={s.info_title2}>
                            <img src="/file5.png" alt="" />
                            <h4>재직증명서 발급 중</h4>
                        </div>
                    </div>
                    <div className={s.info_content}>
                        <div className={s.info1}>
                            <div className={s.info1_title}>
                                <div className={s.info_box}>선</div>
                                <h3>신청자 정보</h3>
                            </div>
                            <div className={s.info1_content}>
                                <div className={s.info1_label}>
                                    <label htmlFor="num" className={s.numl}>사원번호</label>
                                    <label htmlFor="name"
                                    className={s.namel}>성명</label>
                                    <label htmlFor="depart"
                                    className={s.departl}>부서</label>
                                    <label htmlFor="rank"
                                    className={s.rankl}>직급</label>
                                    <label htmlFor="date"
                                    className={s.datel}>입사일</label>
                                </div>
                                <div className={s.info1_input}>
                                    <input type="text" className={s.num} placeholder='EMP-001' />
                                    <input type="text" className={s.name} placeholder='홍길동' />
                                    <input type="text" className={s.depart} placeholder='경영지원팀' />
                                    <input type="text" className={s.rank} placeholder='과장' />
                                    <input type="text" className={s.date} placeholder='2018.07.15' />
                                </div>
                            </div>
                        </div>

                        <div className={s.line1}>선</div>

                        <div className={s.info2}>
                            <div className={s.info2_title}>
                                <div className={s.info2_box}>상자</div>
                                <h3>발급 상세 정보</h3>
                            </div>
                            <div className={s.info2_content1}>
                                <div className={s.info2_label}>
                                    <div className={s.info2_label1}>
                                        <h3>용도</h3>
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <div className={s.info2_label2}>
                                        <h3>제출처</h3>
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <div className={s.info2_label3}>
                                        <h3>발급부수</h3>
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <div className={s.info2_label4}>
                                        <h3>언어선택</h3>
                                        <img src="/star.png" alt="" />
                                    </div>
                                </div>
                                <div className={s.info2_input}>
                                    <select name="" id="">
                                        <option value="관공서">관공서 제출용</option>
                                        <option value="금융기관">금융기관 제출용</option>
                                        <option value="이직">이직 제출용</option>
                                        <option value="대출">대출 제출용</option>
                                    </select>
                                    <input type="text" placeholder='예: 국민은행 ○○지점' />
                                    <div className={s.paper}>
                                        <div className={s.minus}>
                                            <h3>-</h3>
                                        </div>
                                        <div className={s.paper_num}>
                                            <h3>1</h3>
                                        </div>
                                        <div className={s.plus}>
                                            <h3>+</h3>
                                        </div>
                                    </div>
                                    <div className={s.lang}>
                                        <div className={s.kor}>
                                            <img src="/lang1.png" alt="" />
                                            <h3>국문</h3>
                                        </div>
                                        <div className={s.eng}>
                                            <img src="/eng.png" alt="" />
                                            <h3>영문</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={s.last}>
                                <div className={s.last_label}>
                                    <label htmlFor="" className={s.datel}>기준일</label>
                                    <label htmlFor="" className={s.purposel}>발급목적(선택)</label>
                                </div>
                                <div className={s.last_input}>
                                    <input type="date" className={s.date} />
                                    <input type="text" placeholder='발급 목적을 간략히 입력하세요' className={s.purpose} />
                                </div>
                            </div>

                            <div className={s.line2}>선</div>

                            <div className={s.check}>
                                <img src="/eye2.png" alt="" />
                                <h2>출력 전 미리보기를 확인하세요</h2>
                                <span>발급된 증명서는 위변조 방지 마크가 포함됩니다. 내용을 반드시 확인한 후 출력해 주세요.</span>
                                <div className={s.look}>
                                    <img src="/look.png" alt="" />
                                    <h5>미리보기</h5>
                                </div>
                            </div>

                            <div className={s.button}>
                                <div className={s.cancel_btn}>
                                    <h3>취소</h3>
                                </div>
                                <div className={s.prev_btn}>
                                    <h3>미리보기</h3>
                                </div>
                                <div className={s.print_btn}>
                                    <h3>출력하기</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}