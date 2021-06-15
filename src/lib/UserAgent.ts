import UAParser from 'ua-parser-js'

export type browserState = `Chrome` | `Firefox` | `Edge` | `Not Desktop` | `Unknown`

const getParser = () => {
  const ua = navigator ? navigator?.userAgent : ``
  return new UAParser(ua)
}

const getBrowserName = () => getParser().getBrowser().name
const isChrome = () => /(Chrome|Chromium)/i.test(getBrowserName())
const isFirefox = () => /(Firefox|IceCat)/i.test(getBrowserName())
const isEdge = () => getParser().getBrowser().name === `Edge`
const isNotDesktop = () => typeof getParser().getDevice().type !== `undefined`
const getBrowserState = (): browserState => (
      isNotDesktop() ? `Not Desktop` :
      isChrome() ? `Chrome` :
      isFirefox() ? `Firefox` :
      isEdge() ? `Edge` : `Unknown`
)

const UserAgent = {
  getBrowserName,
  getBrowserState,
  getParser,
  isChrome,
  isEdge,
  isFirefox,
  isNotDesktop,
}

export default UserAgent