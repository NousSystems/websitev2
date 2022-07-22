import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, FundsHero, FundsFeatures, FundsCTA, FundsLaunch, FundsOverview, FundsProducts, HowItWorksHero, HowItWorksOverview, HowItWorksHowToInvest, HowItWorksGettingStarted, HowItWorksChainlink} from '../components'

export default function Home() {
  return (
    <>
    <HowItWorksHero/>
    <HowItWorksOverview/>
    
    
    <HowItWorksHowToInvest/>
    <HowItWorksGettingStarted/>
    <HowItWorksChainlink/>
    
    <Footer/>
    </>
  )
}
