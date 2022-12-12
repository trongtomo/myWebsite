import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }
  return (
    <div className="flex space-x-2 justify-center">
      {' '}
      {showTopBtn && <button className="scroll-smooth hover:scroll-auto">Go To Top</button>}{' '}
    </div>
  )
}
