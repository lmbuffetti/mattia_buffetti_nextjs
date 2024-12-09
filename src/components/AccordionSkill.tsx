import '@/styles/accordionSkill.css'

const AccordionSkill = () => {
  return (
    <div className="accordion">
      <div
        className="accordion-item"
        id="biography"
      >
        <a
          className="accordion-link"
          href="#biography"
        >
          <div className="flex">
            <h3>BIOGRAPHY</h3>
            <ul>
              <li>#Study</li>
              <li>#Carrer</li>
              <li>#Jobs</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
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
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="ui-ux-design"
      >
        <a
          className="accordion-link"
          href="#ui-ux-design"
        >
          <div className="flex">
            <h3>UX/UI DESIGN</h3>
            <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            I collaborate with different companies and I work with several desingers so during these years I used a lot of different designer tools, like Photoshop, Figma, Skecth, etc.
          </p>
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="frontend"
      >
        <a
          className="accordion-link"
          href="#frontend"
        >
          <div className="flex">
            <h3>FRONTEND DEVELOPMENT</h3>
            <ul>
              <li>#HTML</li>
              <li>#CSS</li>
              <li>#React</li>
              <li>#NextJS</li>
              <li>#Talwind</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            I’m using Javascript since the beginning of my career as developer, but from 2018 I’m focus on library/framework (React/Node especially) and then I start using Typescript
            I studied in 2016 and I created some personal project and then I officially use with Octopus and Brixel. 
            I had experience with NextJS.
          </p>
          <a href="https://github.com/lmbuffetti/nextjs-login" target='_blank' className='block mb-8'>Example Project</a>
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="backend"
      >
        <a
          className="accordion-link"
          href="#backend"
        >
          <div>
            <h3>BACKEND DEVELOPMENT</h3>
            <ul>
              <li>#PHP</li>
              <li>#MySql</li>
              <li>#Node</li>
              <li>#MongoDB</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            I studied Node and Mongo for my personal project, before on backend side I ever used PHP and MySql, and when I join to Brixel I started to applied to real project.
          </p>
          <a href="https://github.com/lmbuffetti/nextjs-login" target='_blank' className='block mb-8'>Example Project</a>
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="ci-cd"
      >
        <a
          className="accordion-link"
          href="#ci-cd"
        >
          <div>
            <h3>CI/CD</h3>
            <ul>
              <li>#Git</li>
              <li>#Github</li>
              <li>#Gitlab</li>
              <li>#Travis</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            I have experience with Github, Gitlab and Bitbucket and I used the first time in 2015 when I
was working with Latte Creative and then I start using it with almost my project. I have
experience even with CI and open source automation server like Jenkins or Travis.
          </p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default AccordionSkill
