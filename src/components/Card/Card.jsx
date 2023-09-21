import React from "react"
import st from "./Card.module.scss"
import Button from "../Button/Button"

export default function Card(props) {
    const { item, styleName, index, childIndex, onChildClick} = props

    const handleChange = () => {
        onChildClick(index);
    }



        return (
            <>
                {
                    <div className={st[`${styleName}__card`]}>
                        <div>
                            <h3 className={st[`${styleName}__word`]}>{item.english}</h3>
                            <p>{item.transcription}</p>
                            {index === childIndex ? (
                                <p>{item.russian}</p>
                            ) : (
                                <p onClick={() => handleChange()}>
                                    <Button
                                        styleName="flashcards__btn"
                                        content="Показать"
                                    />
                                </p>
                            )}
                        </div>
                    </div>
                }
            </>
        )
}
