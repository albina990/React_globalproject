import React from 'react'
import Button from '../Button/Button'
import st from './Header.module.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <header>
    <div className={st.header}>
      <Button styleName='header__btn' content='Войти'/>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/slider">Training</Link>
            </li>
            <li>
              <Link to="/table">All words</Link>
            </li>
          </ul>
        </nav>

    </div>
    </header>
  )
}
