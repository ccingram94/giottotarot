import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import { session, useSession } from 'next-auth/client'

const useStyles = makeStyles({
  root: {
    padding: '20px',
    margin: '10px',
    backgroundColor: 'black',
    color: 'white',
  },
  flexdisplay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {

  }
})


export default function Home() {

    const [session, loading] = useSession();
    const classes = useStyles();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
    }

    function redirectHome () {
      router.push("/");
    }

    function redirectReading() {
      router.push("/reading");
    }

    function redirectCards() {
      router.push("/cardmeanings");
    }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <Head>
        <title>Giotto Tarot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.buttonbar}>
          <Button onClick={redirectHome}>Home</Button>
          <Button onClick={redirectReading}>Reading</Button>
          <Button onClick={redirectCards}>Card Meanings</Button>
        </div>
        <h1 className={styles.title}>
          My Profile
        </h1>
        <h2>Your Saved Readings: </h2>
      </main>
    </div>
  )
}
