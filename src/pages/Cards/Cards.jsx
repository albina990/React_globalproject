import React, { useState } from "react"
import st from "./Cards.module.scss"
import Card from "../../components/Card/Card"

export default function Cards(props) {
    const [childIndex, setChildIndex] = useState(null);

    const handleChildClick = (index) => {
        setChildIndex(index);
    }

    return (
        <>
            <div className={st.container} >
                {props.arr.map((word, index) => (
                    <Card item={word} index={index} childIndex={childIndex} onChildClick={handleChildClick} styleName="flashcards" />
                ))}
            </div>
        </>
    )
}
