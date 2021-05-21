const classNames = (...classnames: string[]): string => (classnames.reduce((acc, cur) => {
  return [...acc, ...cur.split(` `)]
}, []).join(` `))

const Helpers = {
  classNames,
}

export default Helpers