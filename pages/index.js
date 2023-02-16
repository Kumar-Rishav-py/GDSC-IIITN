import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import About from './About'

export default function Home() {
  return (
  <div>
    <Header />
    <About />
  </div>
  )
}
