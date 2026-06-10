"use client";
import baseApi from "@/common/api/baseApi";
import style from "./test.module.css";
import { useState, useEffect } from "react";
import Nav from "@/component/nav";
import Sub from "@/component/sub";

export default function page() {
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState();

  const getEmployees = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });
    console.log(res.data.data);
    setEmployees(res.data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={style.container}>
      <Nav />
      <Sub />
      <section className={style.hi}>
        <div className={style.hi_mini}>
          <img src="/home.png" />
          <img src="/right.png" />
          <h4>인사관리</h4>
          <img src="/right.png" />
          <h4>인사정보</h4>
          <img src="/right.png" />
          <h5>인사정보등록</h5>
        </div>
        <div className={style.hi_header}>
          <h3>인사정보등록</h3>
          <span>직원의 인사정보를 등록하고 관리합니다.</span>
          <div className={style.down}>
            <img src="/download.png" />
            <h4>PDF 다운로드</h4>
          </div>
          <div className={style.regist}>
            <img src="/plus.png" />
            <h4>신규등록</h4>
          </div>
        </div>
        <div className={style.input_box}>
          <div className={style.input_title}>
            <img src="/search.png" />
            <h4>검색조건</h4>
          </div>
          <div className={style.input_content}>
            <label>사원번호</label>
            <input
              placeholder="전체"
              onChange={(e) => setKeyword(e.target.value)}
              className={style.number}
            />
            <label>부서</label>
            <select className={style.depart}>
              <option>전체</option>
              <option>경영지원팀</option>
              <option>개발팀</option>
              <option>영업팀</option>
              <option>인사팀</option>
            </select>
            <label>직급</label>
            <select className={style.rank}>
              <option>전체</option>
              <option>팀장</option>
              <option>과장</option>
              <option>대리</option>
              <option>사원</option>
            </select>
            <label>재직상태</label>
            <select className={style.ing}>
              <option>재직중</option>
              <option>휴직중</option>
            </select>
            <button className={style.search_btn} onClick={() => getEmployees()}>
              <img src="/search2.png" />
              <h3>조회</h3>
            </button>
            <button className={style.back}>
              <img src="/back.png" />
              <h3>초기화</h3>
            </button>
          </div>
          <div className={style.data}>
            <ul className={style.data_menu_list}>
              <li>No</li>
              <li>사원번호</li>
              <li>성명</li>
              <li>부서</li>
              <li>직급</li>
              <li>입사일</li>
              <li>연락처</li>
              <li>이메일</li>
              <li>재직상태</li>
              <li>관리</li>
            </ul>
            {employees.map((item, index) => (
              <ul className={style.maindbList} key={index}>
                <li>{index + 1}</li>
                <li>{item.employeeNo}</li>
                <li>{item.name}</li>
                <li>{item.data_dept}</li>
                <li>{item.data_level}</li>
                <li>{item.data_date}</li>
                <li>{item.data_tel}</li>
                <li style={{ textAlign: "left" }}>{item.data_email}</li>
                <li>{item.data_status}</li>
                <li>{item.data_manage}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
