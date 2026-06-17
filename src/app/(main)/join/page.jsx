import s from "./join.module.css";

export default function Page() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src="/bag.png" alt="" />
          <h3>인사관리시스템</h3>
        </div>
        <div className={s.header_list}>
          <ul className={s.header_menu_list}>
            <li>인사관리</li>
            <li>근태관리</li>
            <li>급여관리</li>
            <li>일용직관리</li>
          </ul>
        </div>
      </div>
      <div className={s.ad}>
        <div className={s.ad_content}>
          <div className={s.check2}>
            <img src="/check2.png" alt="" />
            <h4>Enterprise HR Soultion</h4>
          </div>
          <h2>HRMaster와 함께</h2>
          <h3>인사관리를 혁신하세요</h3>
          <span>
            지금 가입하고 강력한 <br />
            인사관리 도구를 경험해보세요.
          </span>
        </div>
        <div className={s.table}>
          <ul className={s.table_list}>
            <li>
              <div className={s.img_box}>
                <img src="/okay.png" alt="" />
              </div>
              <h4>무제한 직원 등록 및 관리</h4>
            </li>
            <li>
              <div className={s.img_box}>
                <img src="/okay.png" alt="" />
              </div>
              <h4>자동화된 급여 계산 및 신고</h4>
            </li>
            <li>
              <div className={s.img_box}>
                <img src="/okay.png" alt="" />
              </div>
              <h4>실시간 근태 현황 모니터링</h4>
            </li>
            <li>
              <div className={s.img_box}>
                <img src="/okay.png" alt="" />
              </div>
              <h4>강력한 보안 및 권한 관리</h4>
            </li>
          </ul>
        </div>
        <div className={s.ex}>
          <img src="/gift.png" alt="" />
          <h3>30일 무료 체험 제공</h3>
        </div>
      </div>
      <div className={s.join}>
        <div className={s.join_title}>
          <h3>회원가입</h3>
          <span>계정을 만들어 인사관리를 시작하세요</span>
        </div>
        <div className={s.input_box}>
          <div className={s.input1}>
            <label htmlFor="first">성</label>
            <input type="text" placeholder="성" className={s.first} />
            <label htmlFor="number">사번</label>
            <input type="text" placeholder="EMP-0001" className={s.number} />
            <label htmlFor="rank">직급</label>
            <select name="rank" className={s.rank}>
              <option value="직급선택">직급선택</option>
              <option value="부장">부장</option>
              <option value="과장">과장</option>
              <option value="대리">대리</option>
              <option value="사원">사원</option>
            </select>
            <label htmlFor="password">비밀번호 입력</label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              className={s.password}
            />
          </div>
          <div className={s.input2}>
            <label htmlFor="name">이름</label>
            <input type="text" placeholder="이름" className={s.name} />
            <label htmlFor="depart">부서</label>
            <select name="depart" className={s.depart}>
              <option value="소속부서선택">소속 부서 선택</option>
              <option value="경영지원팀">경영지원팀</option>
              <option value="개발팀">개발팀</option>
              <option value="영업팀">영업팀</option>
              <option value="인사팀">인사팀</option>
            </select>
            <label htmlFor="email">회사 이메일</label>
            <input
              type="text"
              placeholder="company@example.com"
              className={s.email}
            />
            <label htmlFor="passwordc">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              className={s.passwordc}
            />
          </div>
          <div className={s.info}>
            <img src="/info.png" alt="" />
            <h3>영문, 숫자, 특수문자 포함 8자리 이상 </h3>
          </div>
        </div>
        <div className={s.checkd}>
          <input type="checkbox" className={s.here} />
          <h3>이용약관 및 개인정보 처리방침에 동의합니다</h3>
          <strong>내용 보기</strong>
        </div>
        <button className={s.join_btn}>
          <img src="/userp.png" alt="" />
          <h3>회원가입</h3>
        </button>
        <div className={s.last}>
          <span>이미 계정이 있으신가요?</span>
          <strong>로그인하기</strong>
        </div>
      </div>
    </div>
  );
}
