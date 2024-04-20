import React from 'react'
import s from './aboutus.module.scss'

export default function AboutUs() {
  return (
<div className={s.main}>
      <div className={s.main__contener}>
        <div className={s.main__block}>
          <h1 className={s.main__head}>Добро пожаловать в нашу компанию! Мы специализируемся на производстве столешниц из натурального камня</h1>
        </div>
        <div className={s.main__content}>
          <div className={s.main__box}>
            <h2 className={s.main__title}>Наши ценности</h2>
            <div className={s.main__list}>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Качество</h3>
                <p className={s.main__text}>Мы гордимся высоким качеством наших изделий. Каждая столешница проходит строгий контроль перед отправкой клиентам.</p>
              </div>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Индивидуальный подход</h3>
                <p className={s.main__text}>Мы учитываем потребности каждого клиента и создаем уникальные решения для их домов и офисов.</p>
              </div>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Профессионализм</h3>
                <p className={s.main__text}>Наша команда состоит из опытных специалистов, которые знают все о камне и его обработке.</p>
              </div>
            </div>
          </div>
          <div className={s.main__box}>
            <h2 className={s.main__title}>Наши преимущества</h2>
            <div className={s.main__list}>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Индивидуальный дизайн</h3>
                <p className={s.main__text}>Мы создаем столешницы, которые идеально подходят к интерьеру каждого клиента.</p>
              </div>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Быстрая доставка</h3>
                <p className={s.main__text}>Мы ценим ваше время и стараемся сократить сроки поставки.</p>
              </div>
              <div className={s.main__item}>
                <h3 className={s.main__subtitle}>Гарантия качества</h3>
                <p className={s.main__text}>Мы уверены в своих изделиях и предоставляем гарантию на все столешницы.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
