import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import DashboardLayout from '../layouts/DashboardLayout'
import TextField from '@mui/material/TextField';
import InputWithIcon from '../components/TextInput'
Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sweng Metrics Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <a> Metrics Dashboard</a>
        </h1>
        <inp>
          hello
          <InputWithIcon tag = "url" />
        </inp>
      </main>

      <footer className={styles.footer}>
        <a>Sweng group</a>
      </footer>
    </div>
  )
}
