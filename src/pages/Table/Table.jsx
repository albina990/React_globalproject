import React, { useState } from 'react'
import st from './Table.module.scss'
import RowOfTable from '../../components/RowOfTable/RowOfTable'

export default function Table(props) {
    const { arr } = props;

    const [arrWords, setWords] = useState(arr);

    const onClickDelete = (word) => {
        const copyArrWords = [...arrWords];
        const copyFilterArrUsers = copyArrWords.filter((item) => item.id !== word.id);
        setWords(copyFilterArrUsers);
    }

    return (
        <div className={st.container}>
        {arrWords.map((item) => (
            <RowOfTable item={item} key={item.id} delWord={onClickDelete}/>
        ))}
        </div>
        
    )
}
