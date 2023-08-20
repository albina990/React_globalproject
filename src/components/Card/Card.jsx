import React, { useState } from 'react'
import st from "./Card.module.scss"
import Button from '../Button/Button'

export default function Card(props) {
    const { item } = props
    const [selectedItem, setSelectedItem] = useState(false);
//     const [selectedIndex, setSelectedIndex] = useState(false);

const handleClick = () => {
    setSelectedItem(!selectedItem);
}
// const handleChange = (index) =>{
//     setSelectedIndex(index);
// }

    return (
        <>
            {
                <div className={st.slider__card}>
                    <div>
                        <h3 className={st.slider__word}>{item.english}</h3>
                        <p>{item.transcription}</p>
                        {selectedItem ? <p>{item.russian}</p> : <p onClick={() => handleClick()}><Button styleName='flashcards__btn' content='Показать' /></p>}
                    </div>
                </div>
            }
        </>
    )
}
