import styles from './Header.module.css'
import logo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <strong className={styles.header}>
      <img src={logo} alt="Logo" />
    </strong>
  )
}