import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import DashboardLayout from '../layouts/DashboardLayout'
import React, { useRef, Component } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Router from 'next/router'
import GithubIcon from '@mui/icons-material/Github';
Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


  const sendValue = () => {
      return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
  }


export default function Home() {
  const valueRef = useRef('') //creating a refernce for TextField Component

  //"valueRef.current.value" value entered into the text field
  const sendValue = () => {
    console.log(valueRef.current.value)
    return Router.push('/dashboard/home');
}


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
          <GithubIcon sx={{ fontSize: 40, color: "#0070f3" }}/>
        <TextField
            id='outlined-textarea'
            label='URL'
            placeholder='Enter a Github repo Url'
            variant='outlined'
            inputRef={valueRef}   //connecting inputRef property of TextField to the valueRef
            />
            <Button
            variant='contained'
            color='primary'
            size='Large'
            onClick={sendValue}
            >
            Check
            </Button>
        </inp>
      </main>

      <footer className={styles.footer}>
        <a>Sweng group <br />
        CHLOE CAREY, STEVEN CATALUNA, CORMAC FEELY, ALEXANDER O CONNOR, JAMES O'KEEFE, BRIAN SHARKEY, NEIL SHEVLIN, VIRAG VARGA
        </a>
      </footer>
    </div>
  )
}
