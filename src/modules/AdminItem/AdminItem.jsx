'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import s from "./adminitem.module.scss"
import Link from 'next/link'
export function AdminItem() {
  const [items, setItems] = useState([])
  const getItems = async ()=>{
    const data = await axios.get('http://localhost:3500/api/item')
    console.log(data.data)
    setItems(data.data.items)
  }
  useEffect(()=>{
    getItems()
  },[])

  const onAddItem = async ()=>{
    
    const token = localStorage.getItem("token")
      const res = await axios.post(`http://localhost:3500/api/item`, {
          title: "Название товара",
          color: "Цвет",
          company: "Производитель" ,
          country: "Страна производства",
          material: "Материал",
          texture: "Текстура"
      },{
          headers:{
              "authorization": token
          }
      })
      
      setItems(prevItem=>[res.data.item, ...prevItem])
  }

  return (
        <div className={s.catalog__contener}>
        <div className={s.catalog__list}>
          <button onClick={()=>onAddItem()} className={s.item__but} >
            <img src="./image/cancel.svg" alt="" />
          </button>
        {
            items.reverse().map(i=>(
              <Link href={"/admin/" + i.id} key={i.id} className={s.item}>
                {
                  i.images.length > 0 ? <img className={s.item__image} src={"http://localhost:3500/api/image/" + i.images[0].content} alt="" />
                  : <img className={s.item__image} src="/image/ara.png" alt="" />
                }
                <p className={s.item__title}>{i.title}</p>
              </Link>
            ))
          }
        </div>
      </div>
  )
}
