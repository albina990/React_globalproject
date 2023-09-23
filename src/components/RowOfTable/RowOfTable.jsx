import React, { useState, useEffect } from "react"
import st from "./RowOfTable.module.scss"
import edit from "../../assets/images/edit.png"
import del from "../../assets/images/delete.png"
import save from "../../assets/images/save.png"
import cancel from "../../assets/images/cancel.png"

export default function RowOfTable(props) {
    const { item, delWord , editClicked, saveWord, childIndex }  = props;
    const [isEditClicked, setEdit] = useState(editClicked);
    let [errors, setErrors] = useState([]);
    let [text, setText] = useState({"english" : item.english,
"transcription" : item.transcription, "russian" : item.russian});

    let errorsArray;

    // let [textEnglish, setTextEnglish] = useState(item.english);
    // let [textRussian, setTextRussian] = useState(item.russian);
    // let [textTransc, setTextTransc] = useState(item.transcription);
    

    const onClickEdit = () => {
        setEdit(true)
    }

    const onClickCancel = () => {
        setEdit(false)
    }


    //Функция для валидации полей ввода
    const checkInputFields = () =>{
        errorsArray = [];

        const regexEnglish = /^[a-z]+$/i;
        const regexTransc = /^\[[a-z:\.ˈΛɑəeɛɜɔоɪʊæŋʒʤʃθðː\s]+\]/;
        const regexRussian = /^[а-я]+$/i;

        if(text.english === '' || text.transcription === '' || text.russian === ''){
            errorsArray.push("Заполните все поля ввода.");
        }

        if(!regexEnglish.test(text["english"])){
            errorsArray.push("Допускаются только буквы английского алфавита");
        }

        if(!regexTransc.test(text["transcription"])){
            errorsArray.push("Проверьте правильность ввода транскрипции");
        }

        if(!regexRussian.test(text["russian"])){
            errorsArray.push("Допускаются только буквы русского алфавита");
        }

        console.log(errorsArray);

        setErrors(errorsArray);

        console.log(errors);
    }

    //Обработчик событий для всех инпутов
    const onChange =(e) => {
        setText({...text,
            [e.target.name] : e.target.value});
        
    }

    // const onChangeEnglish = (e) => {
    //     setTextEnglish(e.target.value)
    // }

    // const onChangeRussian = (e) => {
    //     setTextRussian(e.target.value)
    // }

    // const onChangeTransc = (e) => {
    //     setTextTransc(e.target.value)
    // }

    const saveNewWord = () => {

        let newItem = {"english" : text['english'], "transcription" : text['transcription'], "russian" : text['russian'], "id" : `${text['english']}_${Math.random()}` };

        checkInputFields();
        // console.log(errors);
        if(errors.length === 0){
            setEdit(false);
            saveWord(newItem, childIndex);
        } 

    }


    return (
        <>
            {isEditClicked ? (
                <>
                    <div className={st.table__error}>
                        {errors.length !== 0 ? errors.map((item, index) => (
                        <div className={st.table__errors_item} key={index}>{item}</div>
                        )) : ""}
                    </div>
                    <div className={st.table__row}>
                        <input type="text" className={st.table__unit} onChange={onChange} value={text['english']} name="english" ></input>
                        <input type="text" onChange={onChange} value={text['transcription']} className={st.table__unit} name="transcription"></input>
                        <input type="text" onChange={onChange} value={text['russian']} className={st.table__unit} name="russian"></input>
                        <div className={st.table__unit}>
                            <img src={save} alt="save" onClick={() => saveNewWord()}></img>
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
                            <img src={del} alt="delete" onClick={()=> delWord(item)}></img>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
