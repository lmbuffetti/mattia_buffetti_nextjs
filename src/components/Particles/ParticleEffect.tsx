'use client'

import '@/styles/particles.css'
import ParticlesTrianlge from '@/components/Particles/PartclesTrianlge'
import ParticlesStar from '@/components/Particles/ParticlesStar'

declare let particlesJS: any

import { useEffect } from 'react'

type ParticlesEffectType = {
  effect: "star" | "triangle"
}

export default function ParticleEffect({effect}) {
  useEffect(() => {
    if (typeof particlesJS !== 'undefined') {
      let jsonEffect = ParticlesTrianlge
      if (effect === 'star') jsonEffect = ParticlesStar
      particlesJS('particles-js', jsonEffect)
    }
  }, [typeof particlesJS !== 'undefined'])

  return <div id="particles-js" />
}
