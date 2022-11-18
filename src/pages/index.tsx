import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import HeroFeature from '../components/heroFeature'
import Container from '../components/container'
import RenameFeature from '../components/renameFeature'
import JurisdictionsFeatures from '../components/jurisdictionsFeature'
import HighlightFeature from '../components/highlightFeature'
import Subscribe from '../components/Subscribe'

const title = `Clerkent`
const description = `case law at your fingertips, when and where you want it`

const HomePage = () => {
  return (
    <Layout noHeader>
      <Container className="flex flex-row md:py-8 py-4 md:gap-6 gap-4 items-center mx-auto">
        <StaticImage
          src='../images/clerkent.png'
          alt="Clerkent"
          width={90}
          className="md:w-[90px] w-[45px] flex-none aspect-square"
          quality={90}
        />
        <div>
          <h1 className="md:text-5xl text-xl font-bold md:mb-2">{title}</h1>
          <h2 className="md:text-3xl text-sm leading-snug">{description}</h2>
        </div>
      </Container>
        
      <div className="w-full max-w-screen-xl mx-auto border border-slate-200 border-t border-solid" />
        
      <HeroFeature />

      <RenameFeature className="md:mt-8 mt-4" />

      <JurisdictionsFeatures className='md:mt-12 mt-6' />

      <HighlightFeature />

      {/* <Subscribe /> */}

      <section className="p-4 flex md:flex-row justify-center flex-col md:gap-6 gap-4 text-center mx-auto">
        <Link to="/help">Get Help</Link>
        <Link to="/feedback">Give Feedback</Link>
        <a href="https://updates.clerkent.huey.xyz/#/portal/">Latest Updates</a>
      </section>
      <footer className="flex flex-col items-center p-4 text-center">
        <p className="mb-2">
          made by&nbsp;
          <a target="_blank" href="https://huey.xyz" rel="noreferrer">Huey</a>
        </p>
        <p>
          source code available on&nbsp;
          <a target="_blank" href="https://github.com/lacuna-technologies/clerkent" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </Layout>
  )
}

export default HomePage

export const Head = () => (
  <SEO title="Home" description={description} />
)