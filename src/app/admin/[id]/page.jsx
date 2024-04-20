'use client'
import axios from 'axios'
import s from './page.module.scss'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { NotPage } from '@/modules'

export default function page({params}) {


const [admin, setAdmin] = useState(false)
const [title, setTitle] = useState('Title')
const [color, setColor] = useState('color')
const [material, setMaterial] = useState('material')
const [company, setCompany] = useState('company')
const [texture, setTexture] = useState('texture')
const [country, setCountry] = useState('contry')
const [images, setImages] = useState([])
const [loading, setLoading] = useState(true)
const [id, setId]= useState(null)
const [upload, setUpload]=useState(false)
const [img, setImg] = useState('')

const token = localStorage.getItem('token')
const getItem = async()=>{
    try{
        const res = await axios.get(`http://localhost:3500/api/item/${params.id}`, {
            headers: {
                "authorization": token
            }
        })
        console.log(res.status)
        setTitle(res.data.item.title)
        setColor(res.data.item.color)
        setCompany(res.data.item.company)
        setCountry(res.data.item.country)
        setTexture(res.data.item.texture)
        setMaterial(res.data.item.material)
        setId(res.data.item.id)
        setAdmin(true)
        if(res.data.item.images.length > 0){
            setImages(res.data.item.images)
        }
        setLoading(false)
    }catch(e){
        setAdmin(false)
        setLoading(false)
    }
}

useEffect(()=>{
    const token = localStorage.getItem('token')
    getItem()
},[])
const updataItem = async ()=>{
    await axios.patch(`http://localhost:3500/api/item/${params.id}`, {
        title,
        color,
        company,
        country,
        material,
        texture
    },{
        headers:{
            "authorization": token
        }
    })
}
const deleteImage = async ({id})=>{
    try{
        const res = await axios.delete(`http://localhost:3500/api/image/${id}`,{
            headers:{
                "authorization": token
            }
        })
        setImages(prevItems => prevItems.filter(e => e.id !== res.data.image.id));
    }catch(e){
    }
}
const deleteItem = async()=>{
    await axios.delete(`http://localhost:3500/api/item/${id}`, {
        headers: {
            "authorization": token
        }
    })
}
const addImage = async()=>{
    try{
        const data = new FormData()
        data.append('image', img)
        const res = await axios.post(`http://localhost:3500/api/image/${params.id}`, data, {
            headers: {
                "authorization": token,
                "content-type": "mulpipart/form-data"
            }
        })
        setUpload(false)
        console.log(res)
        setImages(prevItem=>[...prevItem, res.data.image])
        setImg('')
        setUpload(false)
    }catch(e){
        
    }
}
return (
    <>
    {
        loading? <h1>Loading...</h1>
        :        <>
        {
            admin ?
            <div className={s.item}>
            <div className={s.item__contener}>
                <div className={s.item__content}>
                    <div className={s.item__images}>
                        {
                            images.map(i=>(
                                <img onClick={e=>deleteImage({id: i.id})} className={s.item__image} key={i.id} src={"http://localhost:3500/api/image/" + i.content} alt="" />
                            ))
                        }
                    </div>
                    <div className={s.item__upload}>                                
                        <img className={s.item__icon} src="../image/upload.svg" alt="" />
                        <input onChange={e=>{
                            setImg(e.target.files[0])
                            setUpload(e.target.value)
                        }} className='none' type="file" />
                        {
                            img?<div className={s.item__indicator_activ}></div>
                            : <div className={s.item__indicator}></div>
                        }                            
                        <button disabled={!upload} onClick={e=>addImage()} className={s.item__but}>Сохранить</button>
                    </div>
                </div>
                <div className={s.item__content}>
                    <input onChange={e=>{setTitle(e.target.value)}} className={s.item__title} value={title} type="text" />
                    <div className={s.item__info}>
                        <div className={s.item__box}><p className={s.item__text}>Цвет:</p> <input value={color} onChange={e=>setColor(e.target.value)} className={s.item__paragraph} type="text"  /></div>
                        <div className={s.item__box}><p className={s.item__text}>Материал: </p> <input value={material} onChange={e=>setMaterial(e.target.value)} className={s.item__paragraph} type="text"  /></div>
                        <div className={s.item__box}><p className={s.item__text}>Производитель: </p> <input value={company} onChange={e=>setCompany(e.target.value)} className={s.item__paragraph} type="text"  /></div>
                        <div className={s.item__box}><p className={s.item__text}>Текстура:</p> <input value={texture} onChange={e=>setTexture(e.target.value)} className={s.item__paragraph} type="text"  /></div>
                        <div className={s.item__box}><p className={s.item__text}>Страна:</p><input value={country} onChange={e=>setCountry(e.target.value)} className={s.item__paragraph} type="text"  /></div>
                    </div>
                    <div  className={s.item__buttons}>
                        <Link onClick={()=>deleteItem()} href={"/admin"} className={s.item__button_del}>Удалить</Link>
                    <button onClick={()=>{
                        updataItem()
                        }} className={s.item__button}>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
        : <NotPage />
        }
        </>
    }
    
    </>
)}
