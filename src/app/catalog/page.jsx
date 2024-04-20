'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import s from './page.module.scss'
import Link from 'next/link'
import { ModelCard } from '@/modules/ModelCard/ModelCard'

export default function page({params}) {

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [page, setPage] = useState(0)
  const getCatalog = async ()=>{
    try{
      setLoading(false)
      console.log(page)
      const data = await axios.get(`http://localhost:3500/api/items/${page}`)
      console.log(data.data.items)
      setItems(data.data.items)
      setLoading(true)
    }catch(e){
      setLoading(true)
    }
  }
  useEffect(()=>{
    getCatalog()
    
  }, [])
    const [activ, setActiv] = useState(false)
    const [object, setObject] = useState({})
  return (
   <div className={s.page}>
   {
    loading?  <div>
    {
        activ? <ModelCard  object={object} setActiv={setActiv}/>
            : null
    }
    
    

    <div className={s.page}>
    <div className={s.catalog__list} >
    {
        items.map(i=>(
          <div onClick={()=>{
              setActiv(true)
              setObject(i)
          }} key={i.id} className={s.item}>
            {
              i.images.length > 0 ?
              <div>
                <img className={s.item__image} src={"http://localhost:3500/api/image/" + i.images[0].content} alt="" />
                <p className={s.item__title}>{i.title}</p>
              </div>
              : 
              <div>
                <img className={s.item__image} src="/image/ara.png" alt="" />
                <p className={s.item__title}>{i.title}</p>
              </div>
            }
          </div>
        ))
      }
    </div>
    <div className={s.page__buttons}>
      {
        page <= 0 ?null
        : <Link className={s.page__button} href={'/catalog/' + (page - 1)}>{page}</Link>
      }
     
      <div className={s.page__text}>{page + 1}</div>
      <Link className={s.page__button} href={'/catalog/' + (page + 1)}>{page + 2}</Link>
    </div>
    </div>
  </div>

: <h1 className={s.loading}>Loading ...</h1>
   }
   </div>
  )
}
