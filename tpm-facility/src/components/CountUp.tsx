'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export default function CountUp({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  className = '',
  delay = 0
}: CountUpProps) {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!countRef.current) return

    const element = countRef.current
    let count = { value: 0 }

    const animation = gsap.to(count, {
      value: end,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      onUpdate: () => {
        if (element) {
          element.textContent = `${prefix}${Math.round(count.value)}${suffix}`
        }
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      animation.kill()
    }
  }, [end, duration, suffix, prefix, delay])

  return (
    <span ref={countRef} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
