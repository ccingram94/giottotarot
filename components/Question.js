import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const useStyles = makeStyles({
  basic: {
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
  textfield: {
    width: '50vw',
  },
})
export default function Question() {

    const [ question, setQuestion ] = useState('');
    const [ session, loading ] = useSession();
    const classes = useStyles();
    

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Giotto Tarot
        </h1>
        <form onSubmit={handleSubmit} className={classes.flexdisplay}>
          <h2>enter your question below: </h2>
          <TextField className={classes.textfield} value={question} onChange={(e) => setQuestion(e.target.value)}></TextField>
          <Box className={classes.flexdisplay}>
            <Link href="/reading">
              <Button className={classes.basic}>reveal my fate</Button>
            </Link>
            <div className={styles.buttonbar}>
              {!session && <Button onClick={() => signIn()}>Sign In</Button>}
              {session && <Button onClick={() => signOut()}>Sign Out</Button>}
              {session && <Link href="/profile"><Button>My Profile</Button></Link>}
            </div>
          </Box>
        </form>
      </main>
    </div>
  )
}
