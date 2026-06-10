"use client";
import { useEffect, useState } from "react";
import baseApi from "@/common/api/baseApi";

import s from "./login.module.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState();

  const goLogin = async () => {
    try {
      const res = await baseApi.post("/api/v1/employees/login", loginInfo);

      const token = res.data.data.accessToken;
      if (token) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        router.push("/user");
      } else {
        alert("로그인 실패");
      }
    } catch (e) {
      console.error("졸려요", e);
    } finally {
    }
  };

  useEffect(() => {
    const getEmployees = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.get("/api/v1/employees", {
        headers: {
          Authorization: "Bearer ${token}",
        },
      });
      console.log(res);
    };
    getEmployees();
  }, []);

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
        <div className={s.content}>
          <div className={s.content_auth}>
            <img src="/check.png" alt="" />
            <h3>Enterprise HR Solution</h3>
          </div>
          <div className={s.content_title}>
            <h2>스마트한 인사관리의</h2>
            <h3>새로운 기준</h3>
            <span>
              직원 채용부터 급여, 근태까지 <br />
              하나의 플랫폼으로 관리하세요.
            </span>
          </div>
          <div className={s.content_num}>
            <ul className={s.num_list}>
              <li>
                <h3>2,400+</h3>
                <p>기업 도입</p>
              </li>
              <li>
                <h3>98%</h3>
                <p>고객 만족도</p>
              </li>
              <li>
                <h3>15년</h3>
                <p>서비스 운영</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.table}>
          <div className={s.table_list}>
            <ul className={s.table_menu_list}>
              <li>
                <div className={s.img_box}>
                  <img src="/users.png" alt="" />
                </div>
                <h3>인사관리</h3>
                <span>조직도, 인사발령, 직원 정보 통합 관리</span>
              </li>
              <li>
                <div className={s.img_box}>
                  <img src="/moneym.png" alt="" />
                </div>
                <h3>급여관리</h3>
                <span>자동 급여 계산, 세금 신고, 명세서 발송</span>
              </li>
              <li>
                <div className={s.img_box}>
                  <img src="/users.png" alt="" />
                </div>
                <h3>근태관리</h3>
                <span>출퇴근, 초과근무 실시간 모니터링</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.login}>
        <div className={s.login_title}>
          <h3>로그인</h3>
          <span>계정에 로그인하여 업무를 시작하세요</span>
        </div>
        <div className={s.input_box}>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            className={s.email}
            placeholder="이메일 주소를 입력하세요"
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            className={s.password}
            placeholder="비밀번호를 입력하세요"
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <input type="checkbox" className={s.check} />
          <span>로그인 상태 유지</span>
          <strong>비밀번호 찾기</strong>
        </div>
        <button className={s.login_btn} onClick={() => goLogin()}>
          <img src="/login.png" alt="" />
          <h3>로그인</h3>
        </button>
        <div className={s.or}>
          <div className={s.line1}>선1</div>
          <h3>또는</h3>
          <div className={s.line2}>선2</div>
        </div>
        <div className={s.kakao}>
          <img src="/kakao.png" alt="" />
        </div>
        <div className={s.ask}>
          <span>계정이 없으신가요?</span>
          <strong>회원가입 신청</strong>
        </div>
      </div>
    </div>
  );
}
