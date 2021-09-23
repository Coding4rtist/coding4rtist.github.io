import React from 'react'
import InstagramIcon from '@components/Icons/instagram-icon'
import FacebookIcon from '@components/Icons/facebook-icon'
import TwitterIcon from '@components/Icons/twitter-icon'
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

export const socials = {
  facebook: {
    id: 0,
    text: "Facebook",
    icon: <FacebookIcon/>,
    url: "https://www.facebook.com/Coding4rtist/"
  },
  instagram: {
    id: 1,
    text: "Instagram",
    icon: <InstagramIcon/>,
    url: "https://www.instagram.com/coding4rtist/"
  },
  youtube: {
    id: 2,
    text: "YouTube",
    icon: <YoutubeIcon/>,
    url: "https://www.youtube.com/channel/UCNvfUzQlNH5tCi0-glhAwqg/videos"
  },
  twitter: {
    id: 3,
    text: "Twitter",
    icon: <TwitterIcon/>,
    url: "https://twitter.com/Coding4rtist"
  },
  behance: {
    id: 4,
    text: "Behance",
    icon: <BehanceIcon/>,
    url: "https://www.behance.net/coding4rtist"
  },
  artstation: {
    id: 5,
    text: "ArtStation",
    icon: <ArtStationIcon/>,
    url: "https://www.artstation.com/coding4rtist"
  },
  google_play: {
    id: 6,
    text: "Google Play",
    icon: <GooglePlayIcon/>,
    url: "https://play.google.com/store/apps/dev?id=6956299742654387516"
  },
  itchio: {
    id: 7,
    text: "Itch.io",
    icon: <ItchioIcon/>,
    url: "https://coding4rtist.itch.io"
  },
  // github: {
  //   id: 8,
  //   text: "GitHub",
  //   icon: <GitHubIcon/>,
  //   url: "https://github.com/coding4rtist/"
  // },
  // ludumdare: {
  //   id: 9,
  //   text: "Ludum Dare",
  //   icon: <GitHubIcon/>,
  //   url: "..."
  // }
}

export const MainSocials = [
  socials.facebook,
  socials.instagram,
  socials.youtube,
  socials.twitter,
  socials.itchio
];

export const AllSocials = [
  socials.facebook,
  socials.instagram,
  socials.twitter,
  socials.youtube,
  socials.artstation,
  socials.behance,
  socials.itchio,
  socials.google_play
]


const mainLinks = [
  0, // Facebook
  1, // Instagram
  2, // Youtube
  3, // Twitter
  7, // Itch.io
]

export function Social (name) {
  return socials[name];
}

export function SocialLink ({index, styleClass}) {
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
