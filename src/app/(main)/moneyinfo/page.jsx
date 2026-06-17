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
      </section>
    </div>
  );
}
