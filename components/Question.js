import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
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


function Question() {
    const [question, setQuestion] = useState('');
    const classes = useStyles();


    const handleSubmit = (e) => {
      e.preventDefault();
      router.push('/reading');
    }

    function redirectReading() {
      router.push("/reading");
    }

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={classes.flexdisplay}>
          <h2>enter your question below: </h2>
          <TextField className={classes.textfield} value={question} onChange={(e) => setQuestion(e.target.value)}></TextField>
          <Box className={classes.flexdisplay}>
              <Button className={classes.basic} onClick={redirectReading}>reveal my fate</Button>
          </Box>
        </form>
    </div>
  )
}

export default Question;