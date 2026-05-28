import style from './sub.module.css'

export default function Sub() {
    return (
        <div className={style.sub_header}>
            <div className={style.sub_main}>
                <img src='/user.png' />
                <h3>인사정보</h3>
            </div>
            <div>
                <ul className={style.sub_sub}>
                    <div className={style.user_first}>
                        <img src='/dot.png' />
                        <h3>인사정보등록</h3></div>
                    <li><img src='/dot2.png' /><h4>사원명수/인사기록카드</h4></li>
                    <li><img src='/dot2.png' /><h4>인사발령등록</h4></li>
                </ul>
            </div>
            <div className={style.sub_main_two}>
                <img src='/handshake.png' />
                <h3>경조비관리</h3>
            </div>
            <div>
                <ul className={style.sub_sub}>
                    <li><img src='/dot2.png' /><h4>경조비신청</h4></li>
                    <li><img src='/dot2.png' /><h4>경조비신청현황</h4></li>
                </ul>
            </div>
            <div className={style.sub_main_three}>
                <img src='/filetext.png' />
                <h3>증명서관리</h3>  
            </div>
            <div>
                <ul className={style.sub_sub}>
                    <li><img src='/dot2.png' /><h4>증명서발급</h4></li>
                </ul>
            </div>
        </div>
    )
}