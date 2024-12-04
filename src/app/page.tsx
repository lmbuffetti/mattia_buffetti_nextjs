import '@/styles/Home.css'

import ParticleEffect from '@/components/Particles/ParticleEffect'

export default async function Home() {
  return (
    <>
      <section>
        <ParticleEffect effect="triangle" />
      </section>

      <section
        id="section-home"
        className="section-home"
      >
        <div className="text-zone">
          <h1>
            Hi, <br /> I&apos;m
            <span className="ml-8">M</span>attia, <br /> web developer
          </h1>
          <p className="gray-text">
            Front End Developer / Wordpress Expert / Fullstack Developer
          </p>
          <br />

          <a
            href="#"
            className="contact-button"
          >
            <div>
              <span className="bg" />
              <span className="base" />
              <span className="text">Contact me!</span>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
