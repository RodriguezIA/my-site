import styles from './Navbar.module.scss'

export const Navbar = (): React.ReactNode => {
    return (
        <nav className={styles.navbar}>
            <div>
                <div>Logo</div>
            </div>
        </nav>
    )
}