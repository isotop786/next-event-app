import Link from 'next/link'
import React from 'react'
import styles from '@/styles/404.module.css'
import {FaExclamationTriangle} from 'react-icons/fa'

const NotFoundPage = () => {
  return (
        <div className={styles.error}>
            <h1><FaExclamationTriangle/>Page not found</h1>
            <h3>Sorry, there is nothing here</h3>
            <Link href="/">Back to Homepage</Link>
        </div>

  )
}

export default NotFoundPage