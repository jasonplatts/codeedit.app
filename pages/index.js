import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>CodeEdit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex justify-between p-5 border-b border-gray-800">
        <a href="#"><Image src="/codeedit-logo.png" alt="CodeEdit Logo" width={128} height={21} /></a>

        <nav className="self-center flex space-x-4">
          <a href="#">Extensions</a>
          <a href="#">Documentation</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">About</a>
        </nav>

        <nav className="flex space-x-3 items-center">
          <a href="#"><FontAwesomeIcon icon={faTwitter} className="w-5"/></a>
          <a href="#"><FontAwesomeIcon icon={faDiscord} className="w-5"/></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} className="w-5"/></a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className="min-h-full w-full bg-gradient bg-top bg-cover bg-no-repeat flex flex-col items-center mt-16">
            <Image src="/codeedit-icon.png" alt="CodeEdit Icon" width={100} height={100} />

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mt-3">Elevate your editing experience.</h1>
            
            <p className="text-gray-400 font-light text-xl lg:text-2xl mt-4">
              Open source, free forever.
            </p>
            
            <a href="#" className="bg-blue-500 py-2 px-4 rounded-3xl mt-10 flex"><span>Download</span><FontAwesomeIcon icon={faChevronDown} className="ml-2 w-3"/></a>

            <div className="mt-6 text-gray-400 flex divide-x divide-gray-400 text-sm">
              <span className="px-3">v1.31.0</span>
              <span className="px-3">macOS 12.0+</span>
              <span className="px-3">Install via Homebrew</span>
            </div>

            <div className="mt-10 flex mb-32"><span className="text-xl lg:text-2xl">Watch the film</span><FontAwesomeIcon icon={faCirclePlay} className="ml-2 w-6"/></div>
            
            <Image src="/codeedit-screen-transparent.png" alt="CodeEdit Screen" width={1100} height={714} className="mt-10"/>

        </section>
      </main>
    </div>
  )
}
