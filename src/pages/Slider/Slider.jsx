import React, { useState } from 'react'
import st from './Slider.module.scss'
import Card from '../../components/Card/Card'

export default function Slider(props) {
  const {arr} = props;
  const [isClicked, setClicked] = useState(false);
  let index = 0;
  const handleClick = () => {
    index = Math.random() * 10;

  }

  return (
    <div className={st.container}>
      <div className={st.slider}>
      <button className={st.slider__arrow}>←</button>
        <Card item={arr[index]}/>
      <button className={st.slider__arrow}>→</button>
      </div>
    </div>
  )
}



