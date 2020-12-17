import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <nav>
                    <div className={s.logo}>
                        <strong>MY-REACT-APP</strong>
                    </div>
                    <div className={s.navs}>
                        <div className={s.navsItem}>
                            <NavLink to="/news" activeClassName={s.active}>
                                <div className={s.link}>
                                    News
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.navsItem}>
                            <NavLink to="/direct" activeClassName={s.active}>
                                <div className={s.link}>
                                    Direct
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.navsItem}>
                            <NavLink to="/profile" activeClassName={s.active}>
                                <div className={s.link}>
                                    Profile
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header;