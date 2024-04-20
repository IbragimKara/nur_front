'use client';
import React, { useState } from 'react';
import { headerLink } from '@/const/headerLink';
import s from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export function Header() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  return (
    <header className={s.header}>
      <Link href={'/'} className={s.header__logo}>
        <img src="/image/logo.svg" width={43} height={43} alt="" />
        <p className={s.header__title}>NUR QUARZ</p>
      </Link>
      <ul className={s.header__list}>
        {headerLink.map((i) => (
          <li className={s.header__item} key={i.id}>
            <Link
              className={classNames(s.header__link, {
                [s.header__link_activ]: pathname == i.link,
              })}
              href={i.link}>
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
      <a href="tel:89058104386" className={s.header__phone}>
        +7 905 810-43-86
      </a>
      <button onClick={() => setNavbar(true)} className={s.header__button}>
        <svg
          className={s.header__image}
          width="49"
          height="40"
          viewBox="0 0 49 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H45.8571C47.2379 0.5 48.3571 1.61929 48.3571 3C48.3571 4.38071 47.2379 5.5 45.8571 5.5H3C1.61929 5.5 0.5 4.38071 0.5 3ZM0.5 20.1429C0.5 18.7621 1.61929 17.6429 3 17.6429H45.8571C47.2379 17.6429 48.3571 18.7621 48.3571 20.1429C48.3571 21.5236 47.2379 22.6429 45.8571 22.6429H3C1.61929 22.6429 0.5 21.5236 0.5 20.1429ZM3 34.7857C1.61929 34.7857 0.5 35.905 0.5 37.2857C0.5 38.6664 1.61929 39.7857 3 39.7857H45.8571C47.2379 39.7857 48.3571 38.6664 48.3571 37.2857C48.3571 35.905 47.2379 34.7857 45.8571 34.7857H3Z"
            fill="#D2A364"
          />
        </svg>
      </button>
      <div
        className={classNames(s.header__navbar, {
          [s.header__navbar_activ]: navbar,
        })}>
        <button onClick={() => setNavbar(false)} className={s.header__navbar__button}>
          <svg
            className={s.header__navbar__image}
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              y="29.2842"
              width="40"
              height="2"
              transform="rotate(-45 0 29.2842)"
              fill="white"
            />
            <rect
              x="1.41406"
              y="0.301758"
              width="40"
              height="2"
              transform="rotate(45 1.41406 0.301758)"
              fill="white"
            />
          </svg>
        </button>
        <ul className={s.header__navbar__list}>
          {headerLink.map((i) => (
            <li className={s.header__navbar__item} key={i.id}>
              <Link
                onClick={() => setNavbar(false)}
                className={classNames(s.header__navbar__link, {
                  [s.header__navbar__link_activ]: pathname == i.link,
                })}
                href={i.link}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:89058104386" className={s.header__navbar__phone}>
          +7 905 810-43-86
        </a>
      </div>
    </header>
  );
}
