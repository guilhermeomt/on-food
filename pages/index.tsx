import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Header } from '@/components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Home
