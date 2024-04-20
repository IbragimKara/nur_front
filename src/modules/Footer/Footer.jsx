'use client'
import React from 'react'
import s from './footer.module.scss'
import { headerLink } from '@/const/headerLink'
import Link from "next/link"
export function Footer() {
  return (
    <footer className={s.footer}>
        <div className={s.footer__contener}>    
            <ul className={s.footer__list}>
                <li className={s.footer__item}><Link className={s.footer__link} href={'/'}>Домой</Link></li>
                {
                    headerLink.map(i=>(
                        <li className={s.footer__item} key={i.id}><Link className={s.footer__link} href={i.link}>{i.title}</Link></li>
                    ))
                }
            </ul>
            <p className={s.footer__title}>NUR QUARZ</p>
            <div className={s.footer__contacts}>
            <a className={s.footer__con} href="tel:89999999999">+7 999 999-99-99</a>
            </div>
        </div>
    </footer>
  )
}
