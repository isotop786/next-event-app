import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

        <main>
          <h3>Event Management </h3>
          <Link href="/about">About Page</Link>
        </main>
    </div>
  )
}
