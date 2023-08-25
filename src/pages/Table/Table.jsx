import React, { useState } from 'react'
import st from './Table.module.scss'
import RowOfTable from '../../components/RowOfTable/RowOfTable'

export default function Table(props) {
    const {arr} = props;

    return (
        <div className={st.container}>
        {arr.map((item, index) => (
            <RowOfTable item={item} key={index}/>
        ))}
        </div>
        
    )
}
