import React from 'react'
import InstagramIcon from '@components/Icons/instagram-icon'
import FacebookIcon from '@components/Icons/facebook-icon'
import BehanceIcon from '@components/Icons/behance-icon'
import ArtStationIcon from '@components/Icons/artstation-icon'
import YoutubeIcon from '@components/Icons/youtube-icon'
import GitHubIcon from '@components/Icons/github-icon'
import GooglePlayIcon from '@components/Icons/googleplay-icon'
import ItchioIcon from '@components/Icons/itchio-icon'

const data = [
  {
    id: 0,
    text: "Facebook",
    icon: <FacebookIcon/>,
    url: "https://www.facebook.com/Coding4rtist/"
  },
  {
    id: 1,
    text: "Instagram",
    icon: <InstagramIcon/>,
    url: "https://www.instagram.com/coding4rtist/"
  },
  {
    id: 2,
    text: "Behance",
    icon: <BehanceIcon/>,
    url: "https://www.behance.net/coding4rtist"
  },
  {
    id: 3,
    text: "ArtStation",
    icon: <ArtStationIcon/>,
    url: "https://www.artstation.com/coding4rtist"
  },
  {
    id: 4,
    text: "YouTube",
    icon: <YoutubeIcon/>,
    url: "https://www.youtube.com/channel/UCNvfUzQlNH5tCi0-glhAwqg/videos"
  },
  {
    id: 5,
    text: "GitHub",
    icon: <GitHubIcon/>,
    url: "https://github.com/coding4rtist/"
  },
  {
    id: 6,
    text: "Google Play",
    icon: <GooglePlayIcon/>,
    url: "https://play.google.com/store/apps/dev?id=6956299742654387516"
  },
  {
    id: 7,
    text: "Itch.io",
    icon: <ItchioIcon/>,
    url: "https://coding4rtist.itch.io"
  },
]


const mainLinks = [
  0, // Facebook
  1, // Instagram
  4, // Youtube
  6, // Google Play
  7, // Itch.io
]



export function  SocialLink ({index, styleClass}) {
  const link = data[index];
  return (
    <div className={styleClass}>
       <a href={link.url}>
        {link.icon}
      </a>
      <span>{link.text}</span>
    </div>
  )
}

export function  MainSocialLink ({index, styleClass}) {
  const link = data[mainLinks[index]];
  return (
    <div className={styleClass}>
      <a href={link.url}>
        {link.icon}
      </a>
    </div>
  )
}

export default { SocialLink, MainSocialLink }
