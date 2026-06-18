import Nav3 from "@/component/nav3";
import s from "./moneypay.module.css";

export default function Page() {
  return (
    <div className={s.container}>
      <Nav3 />
      <div className={s.sub_header}>
        <div className={s.sub_main}>
          <img src="/cash.png" />
          <h3>급여관리</h3>
        </div>
        <ul className={s.sub_sub}>
          <li>
            <img src="/dot2.png" />
            <h4>급여기본정보관리</h4>
          </li>
          <li className={s.user_first}>
            <div className={s.user_box}>d</div>
            <img src="/dot.png" />
            <h4>급여지급</h4>
          </li>
          <li className={s.small}>
            <img src="/dot2.png" />
            <h4>기본수당외수당관리</h4>
          </li>
          <li>
            <img src="/dot2.png" />
            <h4>급여계산</h4>
          </li>
          <li>
            <img src="/dot2.png" />
            <h4>급여조회</h4>
          </li>
        </ul>
        <div className={s.sub_main_two}>
          <img src="/check6.png" />
          <h3>4대보험관리</h3>
        </div>
        <ul className={s.sub_sub}>
          <li className={s.small}>
            <img src="/dot2.png" />
            <h4>4대보험요율표설정</h4>
          </li>
          <li>
            <img src="/dot2.png" />
            <h4>국민연금관리</h4>
          </li>
          <li>
            <img src="/dot2.png" />
            <h4>건강보험관리</h4>
          </li>
          <li>
            <img src="/dot2.png" />
            <h4>고용보험관리</h4>
          </li>
          <li className={s.small}>
            <img src="/dot2.png" />
            <h4>4대보험취득/상실</h4>
          </li>
        </ul>
      </div>

      <section className={s.hi}>
        <div className={s.hi_mini}>
          <img src="/home.png" />
          <img src="/right.png" />
          <h4>급여관리</h4>
          <img src="/right.png" />
          <h5>급여기본정보관리</h5>
        </div>
        <div className={s.hi_header}>
          <h3>급여지급</h3>
          <span>월별 직원 급여 지급 내역을 관리하고 확정합니다.</span>
          <div className={s.down}>
            <img src="/down2.png" />
            <h4>PDF 다운로드</h4>
          </div>
          <div className={s.regist}>
            <img src="/pp1.png" />
            <h4>급여명세서 출력</h4>
          </div>
          <div className={s.info}>
            <img src="/dcheck.png" />
            <h4>급여확정</h4>
          </div>
        </div>

        <div className={s.box}>
          <div className={s.box1}>
            <div className={s.box1_g}>
              <img src="/upp.png" alt="" />
              <strong>지급합계</strong>
            </div>
            <h3>28,640,000원</h3>
            <span>전월 대비 +240,000원</span>
          </div>
          <div className={s.box2}>
            <div className={s.box2_g}>
              <img src="/ddown.png" alt="" />
              <strong>공제합계</strong>
            </div>
            <h3>28,640,000원</h3>
            <span>전월 대비 +34,000원</span>
          </div>
          <div className={s.box3}>
            <div className={s.box3_g}>
              <img src="/cash1.png" alt="" />
              <strong>실지급합계</strong>
            </div>
            <h3>24,512,000원</h3>
            <span>대상인원 8명</span>
          </div>
          <div className={s.box4}>
            <div className={s.box4_g}>
              <img src="/clock6.png" alt="" />
              <strong>지급상태</strong>
            </div>
            <div className={s.box4_group}>
              <div className={s.box4_1}>미확정 8건</div>
              <div className={s.box4_2}>확정 0건</div>
            </div>
            <span>2025년 7월분</span>
          </div>
        </div>

        <div className={s.point}>
          <div className={s.point1}>
            <div className={s.point1_left}>
              <img src="/le1.png" alt="" />
            </div>
            <div className={s.point1_text}>
              <img src="/calendar.png" alt="" />
              <h3>2025년 7월</h3>
            </div>
            <div className={s.point1_right}>
              <img src="/ri1.png" alt="" />
            </div>
          </div>
          <div className={s.point2}>
            <label htmlFor="depart">부서</label>
            <select name="" id="">
              <option value="전체 부서">전체 부서</option>
              <option value="개발팀">개발팀</option>
              <option value="경영지원팀">경영지원팀</option>
              <option value="인사팀">인사팀</option>
              <option value="영업팀">영업팀</option>
            </select>
          </div>
          <div className={s.point3}>
            <input type="text" placeholder="사원명 검색" />
          </div>
          <div className={s.point4}>
            <img src="/pp2.png" alt="" />
            <h3>조회</h3>
          </div>
          <div className={s.point5}>
            <img src="/rr.png" alt="" />
            <h3>초기화</h3>
          </div>
          <div className={s.point6}>
            <div className={s.po1}>
              <img src="/po1.png" alt="" />
              <h3>지급항목</h3>
            </div>
            <div className={s.po2}>
              <img src="/po2.png" alt="" />
              <h3>공제항목</h3>
            </div>
            <div className={s.po3}>
              <img src="/po3.png" alt="" />
              <h3>실지급</h3>
            </div>
          </div>
        </div>

        <div className={s.table}>
          <div className={s.table_title}>
            <div className={s.table_title1}>
              <img src="/table.png" alt="" />
              <h3>2025년 7월 급여 지급 내역</h3>
            </div>
            <div className={s.table_title2}>
              <div className={s.table_total}>총 8명</div>
              <div className={s.table_all}>
                <input type="checkbox" />
                <h3>전체선택</h3>
              </div>
            </div>
          </div>
          <div className={s.t}>
            <div className={s.t1}>
              <input type="checkbox" />
            </div>
            <div className={s.t2}>사원번호</div>
            <div className={s.t3}>성명</div>
            <div className={s.t4}>부서</div>
            <div className={s.t5}>기본급</div>
            <div className={s.t6}>식대</div>
            <div className={s.t7}>교통비</div>
            <div className={s.t8}>야근수당</div>
            <div className={s.t9}>지급소계</div>
            <div className={s.t10}>국민연금</div>
            <div className={s.t11}>건강보험</div>
            <div className={s.t12}>고용보험</div>
            <div className={s.t13}>소득세</div>
            <div className={s.t14}>공제소계</div>
            <div className={s.t15}>실지급액</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.p}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>4,200,000</div>
            <div className={s.p6}>200,000</div>
            <div className={s.p7}>150,000</div>
            <div className={s.p8}>250,000</div>
            <div className={s.p9}>4,800,000</div>
            <div className={s.p10}>189,000</div>
            <div className={s.p11}>167,400</div>
            <div className={s.p12}>43,200</div>
            <div className={s.p13}>132,000</div>
            <div className={s.p14}>531,600</div>
            <div className={s.p15}>4,268,400</div>
          </div>
          <div className={s.sum}>
            <div className={s.s1}>
              <img src="/sigma.png" alt="" />
              <h3>합계 (8명)</h3>
            </div>
            <div className={s.s2}>25,760,000</div>
            <div className={s.s3}>1,600,000</div>
            <div className={s.s4}>1,000,000</div>
            <div className={s.s5}>1,280,000</div>
            <div className={s.s6}>28,640,000</div>
            <div className={s.s7}>1,152,000</div>
            <div className={s.s8}>1,018,800</div>
            <div className={s.s9}>277,260</div>
            <div className={s.s10}>720,000</div>
            <div className={s.s11}>4,128,060</div>
            <div className={s.s12}>24,511,940</div>
          </div>

          <div className={s.last}>
            <div className={s.last1}>총 8명 · 2025년 7월분 급여</div>
            <div className={s.line}>선</div>
            <div className={s.l}>
              <img src="/cl1.png" alt="" />
              <h3>미확정 8건 — 급여확정 후 명세서 발송 가능</h3>
            </div>
            <div className={s.last2}>
              <div className={s.last_left}>
                <img src="/left6.png" alt="" />
              </div>
              <div className={s.last_one}>1</div>
              <div className={s.last_two}>2</div>
              <div className={s.last_right}>
                <img src="/right7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={s.modal}>
        <div className={s.modal_title}>
          <div className={s.modal_title1}>
            <img src="/report.png" alt="" />
            <h3>급여명세서</h3>
            <span>Salary Statement</span>
          </div>
          <div className={s.modal_title2}>
            <div className={s.title_day}>2025년 7월분</div>
            <div className={s.cancel}>
              <img src="/cancel2.png" alt="" />
            </div>
          </div>
        </div>
        <div className={s.modal_content}>
          <div className={s.modal_sub}>
            <div className={s.m_sub}>
              <div className={s.m_sub1}>
                <div className={s.m_sub_box}>HR</div>
              </div>
              <div className={s.m_sub2}>
                <h3>주식회사 HRSystem</h3>
                <span>사업자등록번호: 123-45-67890 | 대표: 홍길동</span>
              </div>
            </div>
            <div className={s.k_sub}>
              <div className={s.k_sub1}>
                <img src="/sshop.png" alt="" />
                <h3>PAY-2025-07-0008</h3>
              </div>
              <div className={s.sub_line}>선</div>
              <div className={s.k_sub2}>
                <img src="/cal7.png" alt="" />
                <h3>2025.08.01</h3>
              </div>
            </div>
          </div>

          <div className={s.mfo}>
            <div className={s.mfo_title}>
              <div className={s.mfo_title_box}>box</div>
              <h3>수급자 정보</h3>
            </div>
            <div className="mfo_content">
              <div className="mfo_box">
                <div className="mfo1">
                  <div className="m1">성명</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
