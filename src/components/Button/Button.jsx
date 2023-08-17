import React from 'react'
import st from './Button.module.scss'

export default function Button(props) {
    const {styleName, content} = props;
    
  return (
    <button className={st[styleName]}>{content}</button>
  )
}
