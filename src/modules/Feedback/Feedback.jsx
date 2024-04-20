'use client'
import React, { useState} from 'react'
import classNames from "classnames";
import axios from 'axios';
import s from "./feedback.module.scss"

export function Feedback({ setActiv, object}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    console.log(object)
    const onSubmin = async()=>{
        try{
            await axios.post("http://localhost:3500/api/feedback/item", {
                mail, number: phone, color: object.color, name: object.title
            })
            setCheckbox(false)
        }catch(e){
            setActiv(false)
        }
        
    }
  return (
    <div className={s.block}><div className={s.main__contener}>
    <p className={s.main__text}>Рассчитать стоимость</p>

    <div className={s.main__inputs}>
        <input className={s.main__input} value={name} onChange={e => setName(e.target.value)}
               type="text" placeholder='Ваше имя'/>
        <input className={s.main__input} value={phone} onChange={e => setPhone(e.target.value)}
               type="text" placeholder='Номер телефона'/>
        <input className={s.main__input} value={mail} onChange={e => setMail(e.target.value)}
               type="text" placeholder='Mail'/>
        <div className={s.main__block}>
            <div onClick={() => setCheckbox(!checkbox)} className={classNames(s.main__checkbox, {
                [s.main__checkbox_activ]: checkbox
            })}>
                {
                    checkbox ? <img className={s.main__image} src="./image/checkbox.svg" alt=""/>
                        : <div className={s.main__faik}></div>
                }
            </div>
            <p className={s.main__info}>Я даю свое согласие на хранение и обработку персональных
                данных</p>
        </div>
    </div>
    <div className={s.main__content}>
            <button onClick={() => {
                onSubmin()
                setActiv(false)
            }} disabled={!checkbox} className={s.main__button}>Рассчитать
        </button>
    </div>
</div>
</div>
  )
}
