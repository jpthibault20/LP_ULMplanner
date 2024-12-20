import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'AeroClubConnect',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        label: 'login',
        id: "waitlist",
        variant: 'primary',
        href: 'https://app.aeroconnect.fr',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://www.linkedin.com/in/thibault-jeanpierre-b94a7b198">JEANPIERRE Thibault</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:thibault@jp-developpement.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/in/thibault-jeanpierre-b94a7b198',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://github.com/jpthibault20',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
