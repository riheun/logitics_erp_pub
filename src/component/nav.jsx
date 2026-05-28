import style from './nav.module.css'

export default function Nav() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src='/bag.png'   />
                <h3>인사관리시스템</h3>
            </div>
            <div className={style.main_menu}>
                <ul className={style.menu_list}>
                    <li>인사관리</li>
                    <li>근태관리</li>
                    <li>급여관리</li>
                    <li>일용직관리</li>
                </ul>
            </div>
            <div className={style.sub_menu}>
                <img src='/bell.png' />
                <h3>홍</h3>
                <ul className={style.sub_menu_list}>
                    <li className={style.ddong}>홍길동</li>
                    <li>인사팀</li>
                </ul>
                <img src='/logout.png' />
            </div>
        </div>
    )
}