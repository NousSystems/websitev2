import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VenturesHero, Footer, BondsOverview, BondsFeatures, BondsProducts, BondsCTA, BondsLaunch, VenturesCTA, VenturesFeatures, VenturesComingSoon, VenturesLaunch, VenturesEmail} from '../components'

export default function Home() {
  return (
    <>
    <VenturesHero/>
    <VenturesCTA/>
    <VenturesFeatures/>
    
    <VenturesComingSoon/>
    <VenturesLaunch/>
    <VenturesEmail/>
    <Footer/>
    </>
  )
}
