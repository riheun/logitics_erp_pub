import Nav3 from "@/component/nav3";
import s from "./moneyinfo.module.css";

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
          <li className={s.user_first}>
            <div className={s.user_box}>d</div>
            <img src="/dot.png" />
            <h4>급여기본정보관리</h4>
          </li>
          <li>
            <img src="/dot2.png" />
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
          <h3>급여기본정보관리</h3>
          <span>직원별 기본급여 및 수당 기준 정보를 등록하고 관리합니다.</span>
          <div className={s.down}>
            <img src="/down2.png" />
            <h4>PDF 다운로드</h4>
          </div>
          <div className={s.regist}>
            <img src="/pen.png" />
            <h4>일괄수정</h4>
          </div>
          <div className={s.info}>
            <img src="/info6.png" />
            <h4>급여정보등록</h4>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.box1}>
            <strong>평균 기본급</strong>
            <h3>3,662,500원</h3>
            <span>전월 대비 +50,000원</span>
          </div>
          <div className={s.box2}>
            <strong>최고 기본급</strong>
            <h3>4,700,000원</h3>
            <div className={s.box2_p}>이영희 · 차장</div>
          </div>
          <div className={s.box3}>
            <strong>월 총 인건비</strong>
            <h3>29,300,000원</h3>
            <span>기본급 합계 기준</span>
          </div>
          <div className={s.box4}>
            <strong>월 총 수당</strong>
            <h3>3,340,000원</h3>
            <span>수당 합계 기준</span>
          </div>
          <div className={s.box5}>
            <strong>등록 인원</strong>
            <h3>8명</h3>
            <span>미등록 0명</span>
          </div>
        </div>
        <div className={s.point}>
          <div className={s.point1}>
            <label htmlFor="depart">부서</label>
            <select name="" id="">
              <option value="전체 부서">전체 부서</option>
              <option value="개발팀">개발팀</option>
              <option value="경영지원팀">경영지원팀</option>
              <option value="인사팀">인사팀</option>
              <option value="영업팀">영업팀</option>
            </select>
          </div>
          <div className={s.point1}>
            <label htmlFor="depart">직급</label>
            <select name="" id="">
              <option value="전체 직급">전체 직급</option>
              <option value="부장">부장</option>
              <option value="과장">과장</option>
              <option value="대리">대리</option>
              <option value="사원">사원</option>
            </select>
          </div>
          <div className={s.point1}>
            <label htmlFor="depart">부서</label>
            <input type="date" />
          </div>
          <div className={s.point2}>
            <input type="text" placeholder="사원명 검색" />
          </div>
          <div className={s.p_search}>
            <img src="/se1.png" alt="" />
            <h3>조회</h3>
          </div>
          <div className={s.p_back}>
            <img src="/ro1.png" alt="" />
            <h3>초기화</h3>
          </div>
        </div>
        <div className={s.table}>
          <div className={s.table_title}>
            <div className={s.table_title1}>
              <img src="/table.png" alt="" />
              <h3>직원별 급여 기본정보</h3>
            </div>
            <div className={s.table_title2}>
              <div className={s.t_total}>총 8명</div>
              <div className={s.t_sub}>
                <div className={s.sub1}>
                  <img src="/sub1.png" alt="" />
                  <h3>기본급</h3>
                </div>
                <div className={s.sub2}>
                  <img src="/sub2.png" alt="" />
                  <h3>수당항목</h3>
                </div>
                <div className={s.sub3}>
                  <img src="/sub3.png" alt="" />
                  <h3>계좌정보</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={s.table1}>
            <div className={s.t1}>
              <input type="checkbox" />
            </div>
            <div className={s.t2}>사원번호</div>
            <div className={s.t3}>성명</div>
            <div className={s.t4}>부서</div>
            <div className={s.t5}>직급</div>
            <div className={s.t6}>기본급</div>
            <div className={s.t7}>식대</div>
            <div className={s.t8}>교통비</div>
            <div className={s.t9}>직책수당</div>
            <div className={s.t10}>수당합계</div>
            <div className={s.t11}>은행</div>
            <div className={s.t12}>계좌번호</div>
            <div className={s.t13}>적용시작일</div>
            <div className={s.t14}>관리</div>
          </div>

          <div className={s.table2}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>
              <div className={s.p_box}>팀장</div>
            </div>
            <div className={s.p6}>4,200,000</div>
            <div className={s.p7}>200,000</div>
            <div className={s.p8}>150,000</div>
            <div className={s.p9}>200,000</div>
            <div className={s.p10}>550,000</div>
            <div className={s.p11}>국민은행</div>
            <div className={s.p12}>12****-34****</div>
            <div className={s.p13}>2014.01.01</div>
            <div className={s.p14}>
              <div className={s.p_modi}>
                <img src="/pen2.png" alt="" />
                <h3>수정</h3>
              </div>
              <div className={s.p_re}>
                <img src="/clock5.png" alt="" />
                <h3>이력</h3>
              </div>
            </div>
          </div>
          <div className={s.table2}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>
              <div className={s.p_box}>팀장</div>
            </div>
            <div className={s.p6}>4,200,000</div>
            <div className={s.p7}>200,000</div>
            <div className={s.p8}>150,000</div>
            <div className={s.p9}>200,000</div>
            <div className={s.p10}>550,000</div>
            <div className={s.p11}>국민은행</div>
            <div className={s.p12}>12****-34****</div>
            <div className={s.p13}>2014.01.01</div>
            <div className={s.p14}>
              <div className={s.p_modi}>
                <img src="/pen2.png" alt="" />
                <h3>수정</h3>
              </div>
              <div className={s.p_re}>
                <img src="/clock5.png" alt="" />
                <h3>이력</h3>
              </div>
            </div>
          </div>
          <div className={s.table2}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>
              <div className={s.p_box}>팀장</div>
            </div>
            <div className={s.p6}>4,200,000</div>
            <div className={s.p7}>200,000</div>
            <div className={s.p8}>150,000</div>
            <div className={s.p9}>200,000</div>
            <div className={s.p10}>550,000</div>
            <div className={s.p11}>국민은행</div>
            <div className={s.p12}>12****-34****</div>
            <div className={s.p13}>2014.01.01</div>
            <div className={s.p14}>
              <div className={s.p_modi}>
                <img src="/pen2.png" alt="" />
                <h3>수정</h3>
              </div>
              <div className={s.p_re}>
                <img src="/clock5.png" alt="" />
                <h3>이력</h3>
              </div>
            </div>
          </div>
          <div className={s.table2}>
            <div className={s.p1}>
              <input type="checkbox" />
            </div>
            <div className={s.p2}>EMP-001</div>
            <div className={s.p3}>김철수</div>
            <div className={s.p4}>인사팀</div>
            <div className={s.p5}>
              <div className={s.p_box}>팀장</div>
            </div>
            <div className={s.p6}>4,200,000</div>
            <div className={s.p7}>200,000</div>
            <div className={s.p8}>150,000</div>
            <div className={s.p9}>200,000</div>
            <div className={s.p10}>550,000</div>
            <div className={s.p11}>국민은행</div>
            <div className={s.p12}>12****-34****</div>
            <div className={s.p13}>2014.01.01</div>
            <div className={s.p14}>
              <div className={s.p_modi}>
                <img src="/pen2.png" alt="" />
                <h3>수정</h3>
              </div>
              <div className={s.p_re}>
                <img src="/clock5.png" alt="" />
                <h3>이력</h3>
              </div>
            </div>
          </div>
          <div className={s.sum}>
            <div className={s.s1}>
              <img src="/sigma.png" alt="" />
              <h3>합계 (8명)</h3>
            </div>
            <div className={s.s2}>29,300,000</div>
            <div className={s.s3}>1,600,000</div>
            <div className={s.s4}>1,000,000</div>
            <div className={s.s5}>740,000</div>
            <div className={s.s6}>3,340,000</div>
            <div className={s.s7}>-</div>
            <div className={s.s8}>-</div>
            <div className={s.s9}>-</div>
            <div className={s.s10}>-</div>
          </div>
          <div className={s.last}>
            <div className={s.last1}>총 8명 조회 · 1명 수정 중</div>
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
    </div>
  );
}
