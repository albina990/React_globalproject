import React from 'react'
import Button from '../Button/Button'
import st from './Header.module.scss';

export default function Header() {
  return (
    <header>
    <div className={st.header}>
      <Button styleName='header__btn' content='Войти'/>
    </div>
    </header>
  )
}
