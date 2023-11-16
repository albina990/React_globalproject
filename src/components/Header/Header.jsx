import React from 'react'
import Button from '../Button/Button'
import st from './Header.module.scss';
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <header>
    <div className={st.header}>
      {/* <Button styleName='header__btn' content='Login'/> */}
      <nav>
          <ul className={st.header__list}>
            <li className={st.header__list__item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={st.header__list__item}>
              <NavLink to="/slider">Training</NavLink>
            </li>
            <li className={st.header__list__item}>
              <NavLink to="/table">All words</NavLink>
            </li>
          </ul>
        </nav>

    </div>
    </header>
  )
}
