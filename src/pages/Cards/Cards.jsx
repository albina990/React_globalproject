import React from 'react'

import st from './Cards.module.scss'

export default function Cards(props) {
  return (
    <>
    <div className={st.container}>
        {props.arr.map((word) => 
        <div className={st.card}>
            <h3 className={st.card__word}>{word.english}</h3>
            <p>{word.transcription}</p>
            <p>{word.russian}</p>
        </div>
        
        )}

    </div>
    
    
    </>
  )
}
