import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer, FundsHero, FundsFeatures, FundsCTA, FundsLaunch, FundsOverview, FundsProducts, HowItWorksHero, HowItWorksOverview, HowItWorksHowToInvest, HowItWorksGettingStarted, HowItWorksChainlink, CompanyHero, CompanyMission, CompanyVision, CompanyStory, CompanyPress, CompanyBlog, CompanyTeam} from '../components'

export default function Home() {
  return (
    <>
    <CompanyHero/>
    <CompanyMission/>
    <CompanyVision/>
    <CompanyStory/>
    <CompanyPress/>
    <CompanyBlog/>
    <CompanyTeam/>
    <Footer/>
    </>
  )
}
