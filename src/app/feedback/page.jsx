'use client'
import React, { useState } from 'react'
import s from "./page.module.scss"
import classNames from 'classnames'
import axios from 'axios'
export default function page() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [mail, setMail] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const onSubmin = async()=>{
    try{
      await axios.post("http://localhost:3500/api/feedback", {
        name, mail, number: phone
      })
      setMail('')
      setName('')
      setPhone('')
      setCheckbox(false)
    }catch(e){
    }
  }
  return (
    <div className={s.main}>
      <div className={s.main__contener}>
        <p className={s.main__text}>Обратная связь</p>
        <h2 className={s.main__subtitle}>Рассчитайте стоимость и сроки изготовления изделия из камня с помощью наших менеджеров</h2>
        <div className={s.main__inputs}>
            <input className={s.main__input} value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Ваше имя' />
            <input className={s.main__input} value={phone} onChange={e=>setPhone(e.target.value)} type="text" placeholder='Номер телефона' />
            <input className={s.main__input} value={mail} onChange={e=>setMail(e.target.value)} type="text" placeholder='Mail' />
            <div className={s.main__block}>
                <div onClick={()=>setCheckbox(!checkbox)} className={classNames(s.main__checkbox, {
                  [s.main__checkbox_activ]: checkbox
                })}>
                  {
                    checkbox? <img className={s.main__image} src="./image/checkbox.svg" alt="" />
                    : <div className={s.main__faik}></div>
                  }
                </div>
                <p className={s.main__info}>Я даю свое согласие на хранение и обработку персональных данных</p>
            </div>
        </div>
        <div className={s.main__content}> 
                <button onClick={()=>onSubmin()} disabled={!checkbox} className={s.main__button}>ОТправить</button>
            </div>
      </div>
    </div>
  )
}
