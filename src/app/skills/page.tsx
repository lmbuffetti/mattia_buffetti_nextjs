import '@/styles/Home.css'

import Script from 'next/script'

import AccordionSkill from '@/components/AccordionSkill'
import ParticleEffect from '@/components/Particles/ParticleEffect'
import SkillsEffect from '@/components/SkillsEffect'

export default async function AccordionPage() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://www.goat1000.com/tagcanvas.js"
      />
      <section>
        <ParticleEffect effect="star" />
      </section>
      <section
        id="section-skills"
        className="section-skills relative z-10 flex h-full flex-col items-center justify-center px-16"
      >
        <div className="flex items-center">
          <article className="w-4/6 pr-8">
            <h1 className="mb-16">About me</h1>

            <AccordionSkill />
          </article>

          <div className="relative w-2/6">
            <SkillsEffect />
          </div>
        </div>
      </section>
    </>
  )
}
