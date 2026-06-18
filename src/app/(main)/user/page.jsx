"use client";
import baseApi from "@/common/api/baseApi";
import style from "./test.module.css";
import { useState, useEffect } from "react";
import Nav from "@/component/nav";
import Sub from "@/component/sub";

export default function Page() {
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState();
  const [registerInfo, setRegisterInfo] = useState({
    postCode: "",
    address: "",
    detailAddress: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // [다음주소 api] 2. 주소 선택시 데이터 받기
  const openPostcode = () => {
    if (!window || window === undefined) return;

    const postCode = new window.daum.Postcode({
      oncomplete(data) {
        // 여기서 setter로 처리
        console.log("선택한 주소 >>> ", data);
        const 우편번호 = data?.zonecode;
        const 주소 = data?.address;

        setRegisterInfo((prev) => ({
          ...prev,
          postCode: 우편번호,
          address: 주소,
        }));
      },
    });

    postCode.open();
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
          <div className={style.regist} onClick={() => setIsModalOpen(true)}>
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
            <label>사원검색</label>
            <input
              placeholder="전체"
              onChange={(e) => setKeyword(e.target.value)}
              className={style.number}
            />
            <label>부서</label>
            <select className={style.departp}>
              <option>전체</option>
              <option>경영지원팀</option>
              <option>개발팀</option>
              <option>영업팀</option>
              <option>인사팀</option>
            </select>
            <label>직급</label>
            <select className={style.rankp}>
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
      {isModalOpen && (
        <div className={style.modal}>
          <div className={style.modal_title}>
            <div className={style.modal_title1}>
              <img src="/userpl.png" alt="" />
              <h3>인사정보등록</h3>
            </div>
            <div className={style.cancel} onClick={() => setIsModalOpen(false)}>
              <img src="/ex2.png" alt="" />
            </div>
          </div>
          <div className={style.modal_content}>
            <div className={style.m_info}>
              <div className={style.m_info_title}>
                <div className={style.info_box}>박스</div>
                <h3>기본정보</h3>
              </div>
              <div className={style.m_info1}>
                <div className={style.m_info1_label1}>
                  <label htmlFor="num">사원번호</label>
                  <img src="/star.png" alt="" />
                </div>
                <div className={style.m_info1_label2}>
                  <label htmlFor="name">성명</label>
                  <img src="/star.png" alt="" />
                </div>
                <div className={style.m_info_input1}>자동생성</div>
                <input type="text" placeholder="성명" className={style.name} />
              </div>
              <div className={style.m_info1}>
                <div className={style.m_info1_label1}>
                  <label htmlFor="num">부서</label>
                  <img src="/star.png" alt="" />
                </div>
                <div className={style.m_info1_label2}>
                  <label htmlFor="name">직급</label>
                  <img src="/star.png" alt="" />
                </div>
                <select name="" id="" className={style.departk}>
                  <option value="부서를 선택하세요">부서를 선택하세요</option>
                  <option value="개발팀">개발팀</option>
                  <option value="경영지원팀">경영지원팀</option>
                  <option value="인사팀">인사팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
                <select name="" id="" className={style.rankk}>
                  <option value="부서를 선택하세요">직급을 선택하세요</option>
                  <option value="부장">부장</option>
                  <option value="과장">과장</option>
                  <option value="대리">대리</option>
                  <option value="사원">사원</option>
                </select>
              </div>
              <div className={style.m_info1}>
                <div className={style.m_info1_label1}>
                  <label htmlFor="num">입사일</label>
                  <img src="/star.png" alt="" />
                </div>
                <div className={style.m_info1_label2}>
                  <label htmlFor="name">재직상태</label>
                  <img src="/star.png" alt="" />
                </div>
                <input type="date" className={style.date} />
                <div className={style.radio}>
                  <input type="radio" />
                  <span>재직중</span>
                  <input type="radio" />
                  <span>휴직중</span>
                  <input type="radio" />
                  <span>퇴직</span>
                </div>
              </div>
            </div>
            <div className={style.phone}>
              <div className={style.phone_title}>
                <div className={style.phone_box}>박스</div>
                <h3>연락처</h3>
              </div>
              <div className={style.phone_content}>
                <div className={style.phone_label1}>
                  <label htmlFor="">휴대폰</label>
                  <img src="/star.png" alt="" />
                </div>
                <div className={style.phone_label2}>
                  <label htmlFor="">이메일</label>
                </div>
                <input
                  type="text"
                  placeholder="010-0000-0000"
                  className={style.ph}
                />
                <input
                  type="text"
                  placeholder="example@company.com"
                  className={style.email}
                />
              </div>
            </div>
            <div className={style.address}>
              <div className={style.address_title}>
                <div className={style.address_box}>상자</div>
                <h3>주소</h3>
              </div>
              <div className={style.ad_box}>
                <div className={style.ad1}>
                  <label htmlFor="우편번호">우편번호</label>
                  <input
                    type="text"
                    placeholder="우편번호"
                    value={registerInfo.postCode || ""}
                  />
                  <div className={style.search} onClick={openPostcode}>
                    <img src="/search5.png" alt="" />
                    <h3>주소검색</h3>
                  </div>
                </div>
              </div>
              <div className={style.ad2}>
                <label htmlFor="">도로명 주소</label>
                <input
                  type="text"
                  className={style.ad2_box}
                  placeholder="주소검색 후 자동입력"
                  value={registerInfo.address || "주소검색 후 자동입력"}
                />
              </div>
              <div className={style.ad3}>
                <label htmlFor="">상세주소</label>
                <input
                  type="text"
                  placeholder="상세주소를 입력하세요"
                  value={registerInfo.detailAddress}
                  onChange={(e) =>
                    setRegisterInfo((prev) => ({
                      ...prev,
                      detailAddress: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className={style.w}></div>
          </div>
          <div className={style.modal_last}>
            <div className={style.modal_last1}>
              <img src="/star.png" alt="" />
              <span>필수 입력 항목입니다.</span>
            </div>
            <div className={style.modal_last2}>
              <div
                className={style.cancelm}
                onClick={() => setIsModalOpen(false)}
              >
                <img src="/ex3.png" alt="" />
                <h3>취소</h3>
              </div>
              <div className={style.savem}>
                <img src="/save4.png" alt="" />
                <h3>저장</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
