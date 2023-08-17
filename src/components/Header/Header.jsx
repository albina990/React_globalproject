import React from 'react'
import st from './Header.module.scss';

export default function Header() {
  return (
    <header>
    <div className={st.header}>
      <button className={st.header__button}>Войти</button>  
    </div>
    </header>
  )
}
