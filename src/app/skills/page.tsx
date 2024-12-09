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
        className="section-skills relative z-10 px-16 flex flex-col items-center h-full justify-center"
      >
        <div className='flex items-center'>
          <article className="pr-8 w-4/6">
            <h1 className='mb-16'>About me</h1>

            <AccordionSkill />
          </article>

          <div className='w-2/6 relative'>
            <SkillsEffect />
          </div>
        </div>
      </section>
    </>
  )
}
