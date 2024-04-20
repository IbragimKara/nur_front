'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'

import s from './modelcard.module.scss'
import { Feedback } from '../Feedback';
export function ModelCard({object, setActiv}) {
    console.log(object)
    const [bool, setBool] = useState(true)
    console.log(object.images.length)
    const [image, setImage] = useState('')
    useEffect(()=>{
        if(object.images.length > 0){
            setImage(object.images[0].content)
        }else{
            setImage('ara.png')
        }
    },[])
  return (
    <div onClick={e=>setActiv(false)} className={s.model}>
        <div onClick={e=>e.stopPropagation()} className={s.model__contener}>
            {
                bool ? <div className={s.model__conent}>
                        <div className={s.model__pictures}>
                            <img className={s.model__image} src={"http://localhost:3500/api/image/" + image} alt=""/>
                            <div className={s.model__images}>
                                {
                                    object.images.map(i=>(
                                        <img onClick={e=>{setImage(i.content)}} key={i.id} className={s.model__img} src={"http://localhost:3500/api/image/" + i.content} alt=""/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={s.model__info}>
                            <div>
                                <h1 className={s.model__title}>{object.title}</h1>
                                <div className={s.model__paragraphs}>
                                    <div className={s.model__box}>
                                        <p className={s.model__text}>Цвет:</p>
                                        <p className={s.model__par}>{object.color}</p>
                                    </div>
                                    <div className={s.model__box}>
                                        <p className={s.model__text}>Материал:</p>
                                        <p className={s.model__par}>{object.material}</p>
                                    </div>
                                    <div className={s.model__box}>
                                        <p className={s.model__text}>Производитель:</p>
                                        <p className={s.model__par}>{object.company}</p>
                                    </div>
                                    <div className={s.model__box}>
                                        <p className={s.model__text}>Текстура:</p>
                                        <p className={s.model__par}>{object.texture}</p>
                                    </div>
                                    <div className={s.model__box}>
                                        <p className={s.model__text}>Страна производства:</p>
                                        <p className={s.model__par}>{object.country}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={()=>{setBool(!bool)}} className={s.model__but}>Рассчитать стоимость</button>
                        </div>

                    </div>
                    :<Feedback object={object} setActiv={setActiv} />
            }
        </div>
    </div>
  )
}
