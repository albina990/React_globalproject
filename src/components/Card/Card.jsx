import React, { useState, useEffect } from "react"
import st from "./Card.module.scss"
import Button from "../Button/Button"

export default function Card(props) {
    const { item, styleName, index, childIndex, onChildClick} = props
    const [selectedItem, setSelectedItem] = useState(false)

    const handleClick = () => {
        setSelectedItem(!selectedItem)
    }

    const handleChange = () => {
        onChildClick(index);
    }

    useEffect(() => {
        setSelectedItem(false)
    }, [props.item])

    if (styleName === "slider__card") {
        return (
            <>
                {
                    <div className={st.slider__card}>
                        <div>
                            <h3 className={st.slider__word}>{item.english}</h3>
                            <p>{item.transcription}</p>

                            {selectedItem ? (
                                <p>{item.russian}</p>
                            ) : (
                                <p onClick={() => handleClick()}>
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
    } else if (styleName === "flashcards__card") {
        return (
            <>
                <div className={st.flashcards__card} key={index}>
                    <h3 className={st.flashcard__word}>{item.english}</h3>
                    <p>{item.transcription}</p>
                    {index === childIndex? (
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
            </>
        )
    }
}
