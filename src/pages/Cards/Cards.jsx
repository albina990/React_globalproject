import React, { useState } from "react"
import st from "./Cards.module.scss"
import Card from "../../components/Card/Card"

export default function Cards(props) {

    return (
        <>
            <div className={st.container}>
                {props.arr.map((word, index) => (
                    <Card item={word} index={index} styleName="flashcards__card" />
                ))}
            </div>
        </>
    )
}
