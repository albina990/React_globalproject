import React, { useState } from 'react'
import st from './Cards.module.scss'
import Button from '../../components/Button/Button'

export default function Cards(props) {
const [selectedIndex, setSelectedIndex] = useState(false);

const handleChange = (index) =>{
    setSelectedIndex(index);
}


  return (
    <>
    <div className={st.container}>
        {props.arr.map((word, index) => 
        <div className={st.card} key={index}>
            <h3 className={st.card__word}>{word.english}</h3>
            <p>{word.transcription}</p>
            {index === selectedIndex ? <p>{word.russian}</p> : <p onClick={() => handleChange(index)}><Button styleName='flashcards__btn' content='Показать' /></p>}
            {/* <p>{word.russian}</p>
            <Button styleName='flashcards__btn' content='Показать'/> */}
        </div>
        
        )}

    </div>
    
    
    </>
  )
}
