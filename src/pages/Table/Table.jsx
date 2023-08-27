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
        const copyFilterArrUsers = copyArrWords.filter((item) => item.id !== word.id);
        setWords(copyFilterArrUsers);
    }

    return (
        <>
        
        <div className={st.container}>
        
        {isAddClicked ? <RowOfTable item='' delWord={onClickDelete} editClicked='true'/>
        : <div className={st.table__btn} onClick={onAddClick}>
            <Button content="Add a new word" styleName='flashcards__btn'/>
        </div>}
        {arrWords.map((item) => (
            <RowOfTable item={item} key={item.id} delWord={onClickDelete} editClicked=''/>
        ))}
        </div>
        </>
        
    )
}
