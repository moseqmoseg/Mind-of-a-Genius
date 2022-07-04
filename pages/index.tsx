import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import { Box, Title, Blockquote, Button } from '@mantine/core';
import { Microphone2 } from 'tabler-icons-react';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [kanyeQuote, setkanyeQuote] = useState("Believe in your flyness…conquer your shyness.")


  const handleClick = async () => {
    try {
      let response = await fetch("https://api.kanye.rest")
      let quote = await response.json();
      setkanyeQuote(quote.quote)
    } catch (error) {
      console.log('Fetch error: ', error);
    }

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Guide me Kanye</title>
        <meta name="description" content="Created with Next.JS, Mantine and Kayne.rest" />
        <link  rel="shortcut icon" href="/favicon.ico"  />
      </Head>
      <Box>

        <p className={styles.title}>

          The Mind of a Genius
        </p>

        <Blockquote className={styles.quote} cite="– Kanye West"  icon={<Microphone2 size={24} color={"#4038D9"} />}  >

          {kanyeQuote}
        </Blockquote>

        <Button className={styles.button} onClick={()=>{handleClick()}}>Kanye Wisdom</Button>

      </Box>


    </div>
  )
}

export default Home
