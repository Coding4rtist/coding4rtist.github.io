import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Coding4rtistLogo = ({fillColor = '#000'}) => (
  <AniLink external="true"  to="/" activeClassName="active" swipe direction="up" top="entry" duration={0.5}>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 500 500" style={{fill: fillColor, width: '40px', height:'40px', cursor: 'pointer'}}>
      <path stroke="#231f20" strokeMiterlimit="10" strokeWidth=".25" d="M500 425h-80.53l-41.33-69.17-42.85-71.68L277 186.61a111.85 111.85 0 1 0-97.08 169.22h112.91l12 20.16 9.35 15.65 20 33.36h-153a181 181 0 1 1 155.18-273.86l122.3 204.69z" data-name="2019"/>
    </svg>
  </AniLink>
)

export default Coding4rtistLogo