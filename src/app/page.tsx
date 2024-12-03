import ParticleEffect from "@/components/ParticleEffect";
import Script from "next/script";
import'@/styles/Home.css'

export default async function Home() {

  return (
    <>
    <Script strategy="beforeInteractive" src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
    <Script strategy="beforeInteractive" src="https://threejs.org/examples/js/libs/stats.min.js" />
    <section>
      <ParticleEffect />
    </section>

    <section id="section-home" className="section-home">
        <div className="text-zone">
            <h1>Hi, <br /> I&apos;m
                Mattia, <br /> web developer
            </h1>
            <p className="gray-text">Front End Developer / Wordpress Expert</p>
            <br />

            <a href="#" className="contact-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Contact me!
                    </span>
                </div>
            </a>
        </div>
    </section>

    </>
  )
}
