import { Responsive } from 'semantic-ui-react'

// To detect SSR mode or not
export const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyMobile.minWidth : window.innerWidth
}