import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const HighlightFeature = ({ className = `` }) => {
  return (
    <div className={`flex md:flex-row flex-col max-w-screen-xl mx-auto md:py-6 py-2 ${className}`}>
      <div className="flex-1 flex flex-col justify-center p-4">
        <h3 className="md:text-4xl text-2xl font-bold md:mb-6 mb-2">
          Click on citations anywhere 
        </h3>
        <h4 className="md:text-2xl text-base md:mb-10">
          Case citations on webpages are automatically highlighted and hyperlinked
        </h4>
      </div>
      <StaticImage
        className="flex-1"
        src='../images/screenshots/on-hover.png'
        alt="highlight screenshot"
        quality={90}
      />
    </div>
  )
}

export default HighlightFeature