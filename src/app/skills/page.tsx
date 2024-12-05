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
        className="section-skills relative z-10 flex px-16"
      >
        <article className="pr-8">
          <h1>About me</h1>

          <AccordionSkill />
        </article>

        <SkillsEffect />
      </section>
    </>
  )
}
