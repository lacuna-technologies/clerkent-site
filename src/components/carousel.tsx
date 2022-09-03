import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import { StaticImage } from 'gatsby-plugin-image'
import 'pure-react-carousel/dist/react-carousel.es.css'

const screenshotsFolder = `../images/screenshots`

const screenshotWidth = 500
const screenshotHeight = 500

const Carousel = ({ className = ``}) => {
  return (
    <>
    <CarouselProvider
      className={`h-[500px] ${className}`}
      naturalSlideHeight={100}
      naturalSlideWidth={150}
      totalSlides={7}
    >
      <Slider>
        <Slide index={0}>
          <StaticImage
            src={`../images/screenshots/uk_caparo_dickman.png`}
            alt={`UK Neutral Citation`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={1}>
          <StaticImage
            src={`${screenshotsFolder}/sg_lim_oon_kuin.png`}
            alt={`SG Case Name`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={2}>
          <StaticImage
            src={`${screenshotsFolder}/sg_neutral_citation.png`}
            alt={`SG Neutral Citation`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={3}>
          <StaticImage
            src={`${screenshotsFolder}/eu_infopaq.png`}
            alt={`EU Case Name`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={4}>
          <StaticImage
            src={`${screenshotsFolder}/eu_neutral_citation.png`}
            alt={`EU Neutral Citation`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={5}>
          <StaticImage
            src={`${screenshotsFolder}/au_thaler.png`}
            alt={`AU Case Name`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
        <Slide index={6}>
          <StaticImage
            src={`${screenshotsFolder}/au_neutral_citation.png`}
            alt={`AU Neutral Citation`}
            width={screenshotWidth}
            height={screenshotHeight}
            objectFit='contain'
          />
        </Slide>
      </Slider>
    </CarouselProvider>
    </>
  )
}

export default Carousel