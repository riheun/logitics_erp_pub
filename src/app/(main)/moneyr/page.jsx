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
                    </div>
                </div>
            </section>
        </div>
    );
}