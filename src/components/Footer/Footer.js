import React from 'react'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h4>I wanted to credit the API I used so I've provided a link</h4>
            <a href="https://github.com/mathdroid/covid-19-api">https://github.com/mathdroid/covid-19-api</a>
            <a href='https://github.com/AnonymousICT/corona-tracker'>My Github Repository</a>
            <p>This web app is made using functional components and React Hooks</p>
        </footer>
    )
}
