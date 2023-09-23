import React, { useState } from 'react'
import st from './Table.module.scss'
import RowOfTable from '../../components/RowOfTable/RowOfTable'
import Button from '../../components/Button/Button'

export default function Table(props) {
    const { arr } = props;
    const [arrWords, setWords] = useState(arr);
    const [isAddClicked, setAddClicked] = useState(false);
    

    const onAddClick = () => {
        setAddClicked(true);
    }

    const onClickDelete = (word) => {
        const copyArrWords = [...arrWords];
        const copyNewArrWords = copyArrWords.filter((item) => item.id !== word.id);
        setWords(copyNewArrWords);
    }

    const onClickSave = (word, index) => {
        const copyArrWords = [...arrWords];
        if(!isAddClicked){
            const copyNewArrWords = copyArrWords.filter((item, ind) => ind !== index);
            copyNewArrWords.unshift(word);
            setWords(copyNewArrWords);
        } else {
            copyArrWords.unshift(word);
            setWords(copyArrWords);
        }
        setAddClicked(false);
    }


    return (
        <>
        
        <div className={st.container}>
        
        {isAddClicked ? <RowOfTable arr={arr} item={{}} delWord={onClickDelete} editClicked='true' saveWord={onClickSave} />
        : <div className={st.table__btn} onClick={onAddClick}>
            <Button content="Add a new word" styleName='flashcards__btn'/>
        </div>}
        {arrWords.map((item, index) => (
            <RowOfTable childIndex={index} arr={arr} item={item} key={item.id} delWord={onClickDelete} editClicked='' saveWord={onClickSave}/>
        ))}
        </div>
        </>
        
    )
}
