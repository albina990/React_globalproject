import React, { useState } from 'react'
import st from './RowOfTable.module.scss'

export default function RowOfTable(props) {
    const {item} = props;
  return (
    <div className={st.table__row}>
        <div className={st.table__unit}>{item.english}</div>
        <div className={st.table__unit}>{item.transcription}</div>
        <div className={st.table__unit}>{item.russian}</div>
        <div className={st.table__unit}>Options</div>
    </div>
  )
}
