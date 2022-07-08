import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Gallery from '../components/Gallery'

export default function Home() {
 return (
  <div>
  <Navbar/>
  <About/>
  <Gallery/>
  </div>
 )
}
