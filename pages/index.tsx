import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'
import { Text, Button } from '@mantine/core';
import {
  TwitterShareButton,
} from 'next-share'
import { AiOutlineTwitter } from "react-icons/ai";
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
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Text className={styles.title}>

        The Mind of a Genius
      </Text>

      <Text className={styles.quote} >
        “ {kanyeQuote} ”
        <Text className={styles.kanye}> Kanye West</Text>
      </Text>

      <Button className={styles.button} onClick={() => { handleClick() }}>Kanye Wisdom</Button>

      <TwitterShareButton
        url={'https://kanyesaid.netlify.app/'}
        title={` “ ${kanyeQuote} ” Kanye West. `}
        hashtags={["kanyewest", "Yeezus", "Pablo", "Yeezy", "Ye", "MrWest"]}

      >
        <AiOutlineTwitter className={styles.tweet} />
      </TwitterShareButton>

    </div>
  )
}

export default Home
