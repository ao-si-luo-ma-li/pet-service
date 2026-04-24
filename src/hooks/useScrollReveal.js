import { useState, useEffect } from 'react'

export function useScrollReveal(options = {}) {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, ...options }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return [setRef, visible]
}
