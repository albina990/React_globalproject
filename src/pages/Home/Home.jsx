import React from 'react'
import st from './Home.module.scss'
import Cards from '../Cards/Cards'

export default function Home(props) {
  const { arr } = props;
  return (
    <>
    <div className={st.home}>Welcome!</div>
    <Cards arr={arr}/>
    </>
  )
}
