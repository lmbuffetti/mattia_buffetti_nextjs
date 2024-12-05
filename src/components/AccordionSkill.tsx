import '@/styles/accordionSkill.css'

const AccordionSkill = () => {
  return (
    <div className="accordion">
      <div
        className="accordion-item"
        id="question1"
      >
        <a
          className="accordion-link"
          href="#question1"
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
        id="question2"
      >
        <a
          className="accordion-link"
          href="#question2"
        >
          <div className="flex">
            <h3>UX/UI DESIGN</h3>
            <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="question3"
      >
        <a
          className="accordion-link"
          href="#question3"
        >
          <div className="flex">
            <h3>FRONTEND DEVELOPMENT</h3>
            <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <hr />
      </div>
      <div
        className="accordion-item"
        id="question4"
      >
        <a
          className="accordion-link"
          href="#question4"
        >
          <div>
            <h3>BACKEND DEVELOPMENT</h3>
            <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul>
          </div>
          <i className="icon ion-md-arrow-forward" />
          <i className="icon ion-md-arrow-down" />
        </a>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default AccordionSkill
