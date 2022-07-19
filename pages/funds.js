import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, FundsHero, FundsFeatures, FundsCTA, FundsLaunch, FundsOverview, FundsProducts} from '../components'

export default function Home() {
  return (
    <>
    <FundsHero/>
    <FundsOverview/>
    <FundsFeatures/>
    
    <FundsProducts/>
    <FundsCTA/>
    <FundsLaunch/>
    <Footer/>
    </>
  )
}
