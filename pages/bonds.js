import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BondsHero, Marketplace, CTA, Bonds, Funds, Ventures, Features, Testimonials, Footer, BondsOverview, BondsFeatures, BondsProducts, BondsCTA, BondsLaunch} from '../components'

export default function Home() {
  return (
    <>
    <BondsHero/>
    <BondsOverview/>
    <BondsFeatures/>
    
    <BondsProducts/>
    <BondsCTA/>
    <BondsLaunch/>
    <Footer/>
    </>
  )
}
