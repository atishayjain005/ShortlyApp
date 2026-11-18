import Topbar from "./components/Topbar"
import Intro from "./components/Intro"
import Searchbar from "./components/Searchbar"
import Statistics from "./components/Statistics"
import Footer from "./components/Footer"
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shortly — URL shortening demo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A URL shortening portfolio demo with accessible input and clear request feedback." />
      </Head>
      <a className="skip-link" href="#textInput">Skip to URL shortener</a>
      <Topbar />
      <main>
      <p className="demo-note">Portfolio demo. Shortening depends on an external service; accounts and analytics are not available.</p>
      <Intro />
      <Searchbar/>
      <Statistics />
      </main>
      <Footer />
    </div>
  )
}
