import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import Installation from './installation'

const FeatureCheckMark = ({ children }) => {
  return (
    <div className="flex flex-row items-center text-2xl md:gap-4 gap-2 md:mb-4 mb-2">
      <IoCheckmarkCircleOutline className="flex-none" />
      <div className="md:text-2xl text-sm leading-tight">
        {children}
      </div>
    </div>
  )
}

const HeroImage = () => {
  return (
    <StaticImage
      className="flex-none md:my-6"
      src="../images/screenshots/uk_caparo_dickman.png"
      alt="screenshot"
      width={450}
      quality={90}
      objectFit='contain'
    />
  )
}

const HeroFeature = ({ className = `` }) => {
  return (
    <div className={`flex md:flex-row flex-col max-w-screen-xl mx-auto ${className}`}>
      <div className="flex flex-col justify-center items-start md:p-6 p-4">
        <h3 className="md:text-4xl text-lg font-black md:mb-8 mb-4">
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