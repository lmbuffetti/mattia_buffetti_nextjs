import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faComputer,
  faEnvelope,
  faFilePdf,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarNavigation = [
  {
    label: 'Home',
    icon: (
      <FontAwesomeIcon
        icon={faHome as IconProp}
        className="fa-fw"
      />
    ),
    href: `/`,
  },
  {
    label: 'Skills',
    icon: (
      <FontAwesomeIcon
        icon={faComputer as IconProp}
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
        icon={faGithub as IconProp}
        className="fa-fw"
      />
    ),
    href: `https://github.com/lmbuffetti`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faPhone as IconProp}
        className="fa-fw"
      />
    ),
    href: `tel:+393286930881`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faEnvelope as IconProp}
        className="fa-fw"
      />
    ),
    href: `mailto:mattia.buffetti@gmail.com`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faLinkedinIn as IconProp}
        className="fa-fw"
      />
    ),
    href: `https://www.linkedin.com/in/mattiabuffetti/`,
  },
  {
    label: '',
    icon: (
      <FontAwesomeIcon
        icon={faFilePdf as IconProp}
        className="fa-fw"
      />
    ),
    href: `https://mattiabuffetti.org/Curriculum_Luigi_Mattia_Buffetti.pdf`,
  },
]
