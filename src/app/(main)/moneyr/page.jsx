import Nav from '@/component/nav';
import s from './moneyr.module.css';

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
                    <li className={s.user_first}>
                        <div className={s.user_box}>d</div>
                        <img src='/dot.png' />
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
                    <h4>경조비관리</h4>
                    <img src='/right.png' />
                    <h5>경조비신청</h5>
                </div>
                <div className={s.hi_header}>
                    <h3>경조비신청</h3>
                    <span>경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다.</span>
                    <div className={s.down}>
                        <img src='/download.png' />
                        <h4>PDF 다운로드</h4>
                    </div>
                    <div className={s.regist}>
                        <img src='/plus.png' />
                        <h4>신규신청</h4>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.content_header}>
                        <div className={s.header_title}>
                            <img src="/heart2.png" alt="" />
                            <h3>경조비신청 입력</h3>
                        </div>
                        <div className={s.header_sub}>
                            <img src="/star.png" alt="" />
                            <h3>필수 입력 항목</h3>
                        </div>
                    </div>
                    <div className={s.in}>
                        <div className={s.info}>
                            <div className={s.info_title}>
                                <div className={s.title_box}>바</div>
                                <h3>신청자 정보</h3>
                                <div className={s.info_box}>
                                    <label htmlFor="num"
                                    className={s.numl}>사원번호</label>
                                    <label htmlFor="name"
                                    className={s.namel}>성명</label>
                                    <label htmlFor="depart"
                                    className={s.departl}>부서</label>
                                    <label htmlFor="rank"
                                    className={s.rankl}>직급</label>
                                    <label htmlFor="date" className={s.datel}>신청일</label>
                                    <input type="text" placeholder='사원번호' className={s.num} />
                                    <input type="text" placeholder='성명'
                                    className={s.name} />
                                    <input type="text" placeholder='부서'
                                    className={s.depart} />
                                    <input type="text" placeholder='직급'
                                    className={s.rank} />
                                    <input type="text" placeholder='신청일'
                                    className={s.date} />
                                </div>
                            </div>
                        </div>
                        <div className={s.line1}>선1</div>
                        <div className={s.sep}>
                            <div className={s.sep_title}>
                                <div className={s.sep_title_box}>
                                    선
                                </div>
                                <h3>경조 구분</h3>
                                <img src="/star.png" alt="" />
                            </div>
                            <div className={s.sep_content}>
                                <div className={s.content1}>
                                    <img src="/heart3.png" alt="" />
                                    <h3>본인결혼</h3>
                                </div>
                                <div className={s.content2}>
                                    <img src="/heart4.png" alt="" />
                                    <h3>자녀결혼</h3>
                                </div>
                                <div className={s.content3}>
                                    <img src="/baby.png" alt="" />
                                    <h3>출산</h3>
                                </div>
                                <div className={s.content4}>
                                    <img src="/flower.png" alt="" />
                                    <h3>부모사망</h3>
                                </div>
                                <div className={s.content5}>
                                    <img src="/flower2.png" alt="" />
                                    <h3>배우자사망</h3>
                                </div>
                                <div className={s.content6}>
                                    <img src="/cake.png" alt="" />
                                    <h3>부모회갑</h3>
                                </div>
                                <div className={s.content7}>
                                    <img src="/etc.png" alt="" />
                                    <h3>기타</h3>
                                </div>
                            </div>
                            <div className={s.sep_last}>
                                <img src="/info2.png" alt="" />
                                <h3>본인결혼 선택됨 · 지급기준액:</h3>
                                <strong>500,000원</strong>
                            </div>
                        </div>
                        <div className={s.line2}>
                            <div className={s.man}>
                                <div className={s.man_title}>
                                    <div className={s.man_box}>선</div>
                                    <h3>경조 대상자 정보</h3>
                                </div>
                                <div className={s.man_input}>
                                    <div className={s.man_label}>
                                        <label htmlFor="name">
                                            <h3>대상자 성명</h3>
                                            <img src="/star.png" alt="" />
                                        </label>
                                        <label htmlFor="relation">
                                            <h3>관계</h3>
                                            <img src="/star.png" alt="" />
                                        </label>
                                        <label htmlFor="datem">
                                            <h3>경조일</h3>
                                            <img src="/star.png" alt="" />
                                        </label>
                                        <label htmlFor="place">
                                            경조 장소
                                        </label>
                                    </div>
                                    <div className={s.man_input_box}>
                                        <input type="text" placeholder='성명을 입력하세요' className={s.input1} />
                                        <select name="relation" id="" className={s.input2}>
                                            <option value="본인">본인</option>
                                            <option value="부">부</option>
                                            <option value="모">모</option>
                                            <option value="형제">형제</option>
                                        </select>
                                        <input type="date" className={s.input3}  />
                                        <input type="text" placeholder='장소를 입력하세요 (선택)' className={s.input4} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.line3}>선</div>
                            <div className={s.account}>
                                <div className={s.account_title}>
                                    <div className={s.account_title_box}>선</div>
                                    <h3>지급 계좌</h3>
                                    <img src="/star.png" alt="" />
                                </div>
                                <div className={s.account_box}>
                                    <div className={s.account_input}>
                                        <div className={s.account_input_label}>
                                            <label htmlFor="bank">은행</label>
                                            <label htmlFor="account">계좌번호</label>
                                            <label htmlFor="bankname">예금주</label>
                                        </div>
                                        <div className={s.account_input_input}>
                                            <select name="bank" id="">
                                                <option value="국민은행">국민은행</option>
                                                <option value="우리은행">우리은행</option>
                                                <option value="하나은행">하나은행</option>
                                            </select>
                                            <input type="text" placeholder='- 없이 숫자만 입력' />
                                            <input type="text" placeholder='이름' />
                                        </div>
                                        <button className={s.check_btn}>
                                            <div className={s.check_box}>
                                                <img src="/check3.png" alt="" />
                                                <h3>계좌 확인</h3>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={s.line4}>선</div>
                            <div className={s.file}>
                                <div className={s.file_title}>
                                    <div className={s.file_title_box}>선</div>
                                    <h3>첨부파일</h3>
                                </div>
                                <div className={s.file_content}>
                                    <img src="/file2.png" alt="" className={s.pile} />
                                    <h3>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</h3>
                                    <span>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</span>
                                    <button className={s.file_btn}>
                                        <div className={s.file_btn_box}>
                                            <img src="/upload.png" alt="" />
                                            <h4>파일 선택</h4>
                                        </div>
                                    </button>
                                </div>
                                <div className={s.file_load}>
                                    <img src="/file3.png" alt="" />
                                    <h3>청첩장_이영희.pdf</h3>
                                    <span>238 KB · 업로드 완료</span>
                                </div>
                            </div>
                            <div className={s.bgo}>
                                <div className={s.bgo_title}>
                                    <h3>비고</h3>
                                </div>
                                <div className={s.bgo_content}>
                                    <input type="text" placeholder='추가 사항을 입력하세요. (선택)' />
                                </div>
                            </div>
                            <div className={s.etc}>
                                <button className={s.cancel_btn}>
                                    <div className={s.cancel_box}>
                                        <img src="/cancel.png" alt="" />
                                        <h3>취소</h3>
                                    </div>
                                </button>
                                <button className={s.go_btn}>
                                    <div className={s.go_box}>
                                        <img src="/go.png" alt="" />
                                        <h3>신청하기</h3>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}