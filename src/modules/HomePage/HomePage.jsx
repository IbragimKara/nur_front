import React from 'react';
import s from './homepage.module.scss';
import Link from 'next/link';
export function HomePage() {
  return (
    <div className={s.main}>
      <div className={s.main__contener}>
        <img className={s.main__image} src="/image/kam.jpg" alt="" />
        <div className={s.main__block}>
          <h1 className={s.main__title}>
            Качественные кухонные столешницы из изскуственого камня кварц, акрил{' '}
          </h1>
          <div className={s.main__content}>
            <h2 className={s.main__subtitle}>
              Запишитесь на бесплатный замер и мы привезем более 1000 образцов камня к вам домой
            </h2>
            <Link href={'/feedback'}>
              <button className={s.main__button}>Хочу бесплатный замер</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={s.main__buttons}>
        <Link href={'/catalog'}>
          <button className={s.main__but}>Перейти к каталогу</button>
        </Link>
        <Link href={'/feedback'}>
          <button className={s.main__but2}>Онлайн-консультация</button>
        </Link>
      </div>
    </div>
  );
}
