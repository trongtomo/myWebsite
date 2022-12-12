import dynamic from 'next/dynamic'

const ScrollToTopComponent = dynamic(
  () => {
    return import('./ScrollToTop')
  },
  { ssr: false }
)
const ScrollToTop = () => {
  return <ScrollToTopComponent />
}
export default ScrollToTop
