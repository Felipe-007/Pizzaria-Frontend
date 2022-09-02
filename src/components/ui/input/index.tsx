import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{} //faz com que o placeholder de cada container Index quando chamado possa ter uma descrição diferente

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}: InputProps){  // aplica o InputProps qua foi criado
  return(
    <input className={styles.input} {...rest} />
  )
}

export function TextArea({...rest}: TextAreaProps){
  return(
    <textarea className={styles.input} {...rest}></textarea>
  )
}