import styles from './Header.module.scss';

import logo from '../../assets/svg/logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <header>
        <img src={logo} alt="Logo todo" />
      </header>
    </div>
  )
}