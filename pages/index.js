import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Hero, Marketplace, CTA, Bonds, Funds, Ventures, Features, Testimonials, Footer} from '../components'

export default function Home() {
  return (
    <>
    <Hero/>
    <Marketplace/>
    
    <Bonds/>
    <Ventures/>
  
    <Funds/>
    <Features/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
