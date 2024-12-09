import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faComputer,
  faEnvelope,
  faFilePdf,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarNavigation = [
  {
    label: 'Home',
    icon: (
      <FontAwesomeIcon
        icon={faHome}
        className="fa-fw"
      />
    ),
    href: `/`,
  },
  {
    label: 'Skills',
    icon: (
      <FontAwesomeIcon
        icon={faComputer}
        className="fa-fw"
      />
    ),
    href: `/skills`,
  },
]

export const contactNavigation = [
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className="fa-fw"
      />
    ),
    href: `https://github.com/lmbuffetti`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faPhone}
        className="fa-fw"
      />
    ),
    href: `tel:+393286930881`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faEnvelope}
        className="fa-fw"
      />
    ),
    href: `mailto:mattia.buffetti@gmail.com`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="fa-fw"
      />
    ),
    href: `https://www.linkedin.com/in/mattiabuffetti/`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faFilePdf}
        className="fa-fw"
      />
    ),
    href: `https://mattiabuffetti.org/Curriculum_Luigi_Mattia_Buffetti.pdf`,
  },
]
