'use client'
import { AdminItem } from '@/modules'
import s from './page.module.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function page() {
  const [admin, setAdmin] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const getIsAdmin = async ()=>{
    try{
      setLoading(true)
      const token = localStorage.getItem('token')
      await axios.post("http://localhost:3500/api/auth/isadmin",{},{
        headers: {
          "authorization": token
        }
    })
    setAdmin(true)
    setLoading(false)
  }catch(e){
    setAdmin(false)
    setLoading(false)
}
  }
  useEffect(()=>{
    getIsAdmin()
  },[])
  const onLogin = async ()=>{
    try{
      const res = await axios.post("http://localhost:3500/api/auth/login", {
        login,
        password
      })
      localStorage.setItem("token", `Bearer ${res.data.token}`)
      location.reload()
    }catch(e){
      setAdmin(false)
    }
  }

  return (
    <div className={s.catalog}>
      {
       loading ? <h1>Loading...</h1>
       :<>{
          admin ? <AdminItem />
          : 
          <div className={s.page}>
            <div className={s.page__contener}>
              <input value={login} onChange={e=>setLogin(e.target.value)} className={s.page__input} type="text" placeholder='login' />
              <input value={password} onChange={e=>setPassword(e.target.value)} className={s.page__input} type="password" placeholder='password' />
              <button onClick={()=>{onLogin()}} className={s.page__but}>submin</button>
            </div>
          </div>
       }</>
      }
    </div>
  )
}
