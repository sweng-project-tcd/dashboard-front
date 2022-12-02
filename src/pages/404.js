import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import DashboardLayout from '../layouts/DashboardLayout'
Custom404.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
import Link from 'next/link'

export default function Custom404() {
    return (
        <div className={styles.container}>
          <Head>
            <title>404 Page not found</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
             <a> 404 Page not found</a>
            </h1>
            <div className={styles.description}>
                This is a scary place <br />
                <Link style={{ color: 'blue' }} href="/">Return to Safety</Link>
            </div>
          </main>
    
          <footer className={styles.footer}>
            <a>Sweng group</a>
          </footer>
        </div>
      )
  }