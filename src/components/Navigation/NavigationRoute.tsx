import { ComputerDesktopIcon, HomeIcon } from '@heroicons/react/24/solid'

export const sidebarNavigation = [
  {
    label: 'Home',
    icon: <HomeIcon className="w-6" />,
    href: `/`,
  },
  {
    label: 'Skills',
    icon: <ComputerDesktopIcon className="w-6" />,
    href: `/skills`,
  },
]
