import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Weather App
            </h1>
        </div>
    )
}

export default Header