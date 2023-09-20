import React , { useRef, useEffect } from 'react'
import st from './Button.module.scss'

export default function Button(props) {
    const {styleName, content} = props;
    const btnRef = useRef(null);

    useEffect(()=>{
      if(styleName === 'header__btn'){
        btnRef.current.focus();
      }
      
    });

  return (
    <button ref={btnRef} className={st[styleName]}>{content}</button>
  )
}
