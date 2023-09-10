import React , { useRef, useEffect } from 'react'
import st from './Button.module.scss'

export default function Button(props) {
    const {styleName, content} = props;
    const btnRef = useRef(null);

    useEffect(()=>{
      btnRef.current.focus();
    });

  return (
    <button ref={btnRef} className={st[styleName]}>{content}</button>
  )
}
