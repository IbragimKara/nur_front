import s from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={s.catalog}>
      <div className={s.catalog__contener}>{children}</div>
    </div>
  );
}
