import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import Installation from './installation'

const FeatureCheckMark = ({ children }) => {
  return (
    <div className="flex flex-row items-center text-2xl gap-4 mb-4">
      <IoCheckmarkCircleOutline />
      <div>
        {children}
      </div>
    </div>
  )
}

const HeroImage = () => {
  return (
    <StaticImage
      className="flex-none my-6"
      src="../images/screenshots/uk_caparo_dickman.png"
      alt="screenshot"
      width={450}
      quality={90}
    />
  )
}

const HeroFeature = ({ className = `` }) => {
  return (
    <div className={`flex flex-row max-w-screen-xl mx-auto ${className}`}>
      <div className="flex flex-col justify-center items-start p-6">
        <h3 className="md:text-4xl text-xl font-black mb-8">
          Find and download judgments quickly without disrupting your workflow
        </h3>
        <FeatureCheckMark>
          Download judgments as PDFs with one click
        </FeatureCheckMark>
        <FeatureCheckMark>
          Copy the case citation with one click
        </FeatureCheckMark>
        <FeatureCheckMark>
          Search multiple databases at the same time
        </FeatureCheckMark>
        <FeatureCheckMark>
          Search by party name or case citation
        </FeatureCheckMark>
        <FeatureCheckMark>
          Free and open source browser extension
        </FeatureCheckMark>

        <Installation />
      </div>
      <HeroImage />
    </div>
  )
}

export default HeroFeature