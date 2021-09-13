import Topbar from "./components/Topbar"
import Intro from "./components/Intro"
import Searchbar from "./components/Searchbar"
import Statistics from "./components/Statistics"
import Footer from "./components/Footer"
import styled from 'styled-components';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Topbar />
      <Intro />
      <Searchbar/>
      <Statistics />
      <Footer />
    </div>
  )
}
