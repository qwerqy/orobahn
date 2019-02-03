import { Responsive } from 'semantic-ui-react'

export const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyMobile.minWidth : window.innerWidth
}