import React, { useState } from "react"
import st from "./RowOfTable.module.scss"
import edit from "../../assets/images/edit.png"
import del from "../../assets/images/delete.png"
import save from "../../assets/images/save.png"
import cancel from "../../assets/images/cancel.png"

export default function RowOfTable(props) {
    const { arr, item } = props
    const [isEditClicked, setEdit] = useState(false)
    const [isDeleted, setDelete] = useState(false)
    
    const onClickEdit = () => {
        setEdit(true)
    }
    const onClickDelete = (arr) => {
        
    }

    const onClickCancel = () => {
      setEdit(false)
  }

    return (
        <>
            {isEditClicked ? (
                <>
                    <div className={st.table__row}>
                        
                        <input type="text" value={item.english} className={st.table__unit}></input>
                        <input type="text" value={item.transcription} className={st.table__unit}></input>
                        <input type="text" value={item.russian} className={st.table__unit}></input>
                        <div className={st.table__unit}>
                            <img src={save} alt="save"></img>
                            <img src={cancel} alt="cancel" onClick={onClickCancel}></img>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={st.table__row}>
                        <div className={st.table__unit}>{item.english}</div>
                        <div className={st.table__unit}>
                            {item.transcription}
                        </div>
                        <div className={st.table__unit}>{item.russian}</div>
                        <div className={st.table__unit}>
                            <img
                                src={edit}
                                alt="edit"
                                onClick={onClickEdit}
                            ></img>
                            <img src={del} alt="delete"></img>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
