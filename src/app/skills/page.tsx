import '@/styles/Home.css'

import Script from 'next/script'

import ParticleEffect from '@/components/Particles/ParticleEffect'
import SkillsEffect from '@/components/SkillsEffect'

export default async function Home() {
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

          <p>I am an Italian and I started my career in 2009.</p>
          <p>
            I studied HTML, CSS and Javascript, working at a company in Perugia
            to create Landing Pages and to maintain their website and their
            AdWords campaigns. Later I continued studying PHP and MySql creating
            sites using Wordpress and at the same time creating ad hoc projects
            or creating APIs for saving and recovering data on databases.
          </p>
          <p>
            Since 2015 I have focused my studies on the Frontend, deepening my
            knowledge of Javascript, CSS and preprocessor CSS as SASS and LESS
            and subsequently integrating the React library and the React Native
            and Expo framework a NextJS.
          </p>
          <p>
            Working as a Freelance for 9 years I have had many collaborations
            with different companies or with other freelancers, so over the
            years I have learned the use of software such as Trello, Asana or
            Jira for the management of tasks, github, gitalb and bitbucket for
            the maintenance of the various projects and if necessary by
            integrating Travis, Jenkis or Gitlab CI to create and test the
            projects.
          </p>
          <p>
            I worked both on pre-configured hosting and on internally maintained
            servers, such as AWS or Google Cloud.
          </p>
        </article>

        <SkillsEffect />
      </section>
    </>
  )
}
