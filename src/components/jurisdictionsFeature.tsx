import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Carousel from './carousel'

const Jurisdiction = ({ children, icon }) => {
  return (
    <div className="md:text-5xl text-2xl">
      {icon}
      <div className="md:text-base text-xs font-semibold md:mt-2 leading-tight">
        {children}
      </div>
    </div>
  )
}

const JurisdictionsFeatures = ({ className = `` }) => {
  return (
    <div className={`bg-neutral-100 ${className}`}>
      <div className={`max-w-screen-xl mx-auto md:py-10 py-6 px-4 ${className}`}>
        <h3 className="text-3xl font-bold mb-4">
          Works across jurisdictions
        </h3>
        <h4 className="text-xl md:mb-8 mb-4">
          Easily search major databases across the following jurisdictions
        </h4>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-y-8 gap-y-3 gap-x-6">
          <Jurisdiction icon={<span className="fi fi-gb"></span>}>
            United Kingdom (UK)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-sg"></span>}>
            Singapore (SG)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-my"></span>}>
            Malaysia (MY)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-hk"></span>}>
            Hong Kong (HK)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-ca"></span>}>
            Canada (CA)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-au"></span>}>
            Australia (AU)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-nz"></span>}>
            New Zealand (NZ)
          </Jurisdiction>
          <Jurisdiction icon={<span className="fi fi-eu"></span>}>
            Court of Justice of the European Union (CJEU)
          </Jurisdiction>
          <Jurisdiction icon={
            <StaticImage
              src="../images/ecthr.png"
              alt="ECtHR"
              quality={90}
              height={50}
            />
          }>
            European Court of Human Rights (ECtHR)
          </Jurisdiction>
          <Jurisdiction icon={
            <StaticImage
              src="../images/icj.png"
              alt="ICJ"
              quality={90}
              height={50}
            />
          }>
            International Court of Justice (ICJ)
          </Jurisdiction>
        </div>
      </div>
    </div>
  )
}

export default JurisdictionsFeatures