import React from 'react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },
  {
    id: 2,
    text: "Code",
    url: "/code"
  },
  {
    id: 3,
    text: "Art",
    url: "/art"
  },
  {
    id: 4,
    text: "About me",
    url: "/about"
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact"
  },
]



export default({styleClass, activeStyleClass}) => {
  const tempLinks = data.map(link => {
    return (
      <Link key={link.id} to={link.url} activeClassName={activeStyleClass}>{link.text}</Link>
    )
  })

  return(
    <nav className={styleClass}>
      {tempLinks}
    </nav>
  )
}