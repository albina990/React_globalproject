import React, { useState } from 'react'
import st from './Slider.module.scss'
import Card from '../../components/Card/Card'

export default function Slider(props) {
  const {arr} = props;
  const [showedIndex, setIndex] = useState(0);

  const [childIndex, setChildIndex] = useState(null);

  const[count, setCount] = useState(0);

    const handleChildClick = (index) => {
        setChildIndex(index);
        setCount(count + 1); //увеличивает count на 1 каждый раз, когда открывается перевод нового слова
    }


  const showNextCard = () => {
    if(showedIndex !== 31){
      setIndex(showedIndex + 1);
    } else {
      setIndex(0);
    }

  }

  const showPreviousCard = () => {
    if(showedIndex !== 0){
      setIndex(showedIndex - 1);
    } else {
      setIndex(31);
    }
  }

  return (
    <div className={st.container}>
      
      <div className={st.slider}>
      <button className={st.slider__arrow} onClick={() => showPreviousCard()}>←</button>
        <Card item={arr[showedIndex]} styleName='slider' index={showedIndex}  childIndex={childIndex} onChildClick={handleChildClick} />
      <button className={st.slider__arrow} onClick={() => showNextCard()}>→</button>
      </div>
      <p className={st.text}> {count} words learned</p>
    </div>
  )
}



