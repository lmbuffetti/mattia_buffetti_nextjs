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
        className="section-skills relative z-10 mt-8 flex h-full flex-col items-center justify-center px-4 md:mt-0 md:px-16"
      >
        <div className="flex w-full flex-wrap items-center">
          <article className="w-full md:w-4/6 md:pr-8">
            <h1 className="mb-16">About me</h1>

            <AccordionSkill />
          </article>

          <div className="relative w-full md:w-2/6">
            <SkillsEffect />
          </div>
        </div>
      </section>
    </>
  )
}
