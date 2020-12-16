import React from 'react'
import classnames from 'classnames'
import styles from './index.module.css'

export default function Input({name, inputStyle, type, placeholder, error, onChange, value}) {
  let input_style;
    switch(inputStyle) {
        case 0: 
            input_style = styles.input0;
            break;
        case 1:
            input_style = styles.input1;
            break;
        default:
            input_style = styles.input0;    
    }

  const className = classnames(input_style, {
    [styles.error]: !!error
  });

  return (
    <input className={className} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
  )
}