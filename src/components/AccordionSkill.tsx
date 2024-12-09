import '@/styles/accordionSkill.css'

const accordionSkill = [
  {
    title: 'BIOGRAPHY',
    id: 'biography',
    hashtag: ['Study', 'Career', 'Jobs'],
    description: [
      'I studied HTML, CSS and Javascript, working at a company in Perugia to create Landing Pages and to maintain their website and their AdWords campaigns. Later I continued studying PHP and MySql creating sites using Wordpress and at the same time creating ad hoc projects or creating APIs for saving and recovering data on databases.',
      'Since 2015 I have focused my studies on the Frontend, deepening my knowledge of Javascript, CSS and preprocessor CSS as SASS and LESS and subsequently integrating the React library and the React Native and Expo framework a NextJS.',
      'Working as a Freelance for 9 years I have had many collaborations with different companies or with other freelancers, so over the years I have learned the use of software such as Trello, Asana or Jira for the management of tasks, github, gitalb and bitbucket for the maintenance of the various projects and if necessary by integrating Travis, Jenkis or Gitlab CI to create and test the projects.',
      'I worked both on pre-configured hosting and on internally maintained servers, such as AWS or Google Cloud.',
    ],
  },
  {
    title: 'UX/UI DESIGN',
    id: 'ui-ux-design',
    hashtag: ['Figma', 'Sketch', 'Adobe', 'Invision'],
    description: [
      'I collaborate with different companies and I work with several desingers so during these years I used a lot of different designer tools, like Photoshop, Figma, Skecth, etc.',
    ],
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    id: 'frontend',
    hashtag: ['HTML', 'CSS', 'React', 'NextJS', 'Tailwind'],
    description: [
      'I’m using Javascript since the beginning of my career as developer, but from 2018 I’m focus on library/framework (React/Node especially) and then I start using Typescript I studied in 2016 and I created some personal project and then I officially use with Octopus and Brixel. I had experience with NextJS.',
    ],
    exampleProjects: ['https://github.com/lmbuffetti/nextjs-login'],
  },
  {
    title: 'BACKEND DEVELOPMENT',
    id: 'backend',
    hashtag: ['PHP', 'MySql', 'Node', 'MongoDB'],
    description: [
      'I studied Node and Mongo for my personal project, before on backend side I ever used PHP and MySql, and when I join to Brixel I started to applied to real project.',
    ],
    exampleProjects: ['https://github.com/lmbuffetti/nextjs-login'],
  },
  {
    title: 'CI/CD',
    id: 'ci-cd',
    hashtag: ['Git', 'Github', 'Gitlab', 'Bitbucket'],
    description: [
      'I have experience with Github, Gitlab and Bitbucket and I used the first time in 2015 when I was working with Latte Creative and then I start using it with almost my project. I have experience even with CI and open source automation server like Jenkins or Travis.',
    ],
    exampleProjects: ['https://github.com/lmbuffetti/nextjs-login'],
  },
]

const AccordionSkill = () => {
  return (
    <div className="accordion">
      {accordionSkill.map((skill, index) => (
        <div
          key={`skill${index.toString()}`}
          className="accordion-item"
          id={skill.id}
        >
          <a
            className="accordion-link"
            href={`#${skill.id}`}
          >
            <div className="flex flex-wrap">
              <h3>{skill.title}</h3>
              <ul>
                {skill.hashtag.map((hash, i) => (
                  <li key={`hash${i.toString()}`}>#{hash}</li>
                ))}
              </ul>
            </div>
            <i className="icon ion-md-arrow-forward" />
            <i className="icon ion-md-arrow-down" />
          </a>
          <div className="answer">
            {skill.description.map((desc, i) => (
              <p key={`desc${i.toString()}`}>{desc}</p>
            ))}

            {skill.exampleProjects &&
              skill.exampleProjects.map((project, i) => (
                <a
                  key={`project${i.toString()}`}
                  href={project}
                  target="_blank"
                  className="mb-8 block"
                  rel="noreferrer"
                >
                  Example Project
                </a>
              ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AccordionSkill
