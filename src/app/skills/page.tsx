import '@/styles/Home.css'

import Script from 'next/script'

import SkillsEffect from '@/components/SkillsEffect'

export default async function Home() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://www.goat1000.com/tagcanvas.js"
      />
      <section
        id="section-skills"
        className="section-skills"
      >
        <article>
          <h1>About me</h1>

          <p>Lorem ipum....</p>
        </article>

        <SkillsEffect />
      </section>
    </>
  )
}
