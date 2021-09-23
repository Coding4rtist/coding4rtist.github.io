import styled, { createGlobalStyle } from "styled-components"
import { motion } from 'framer-motion'

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    overflow-y: ${props => props.theme.isMobile ? 'scroll' : 'hidden'};
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};

    svg path{
      // stroke: ${props => props.theme.text};
      fill: ${props => props.theme.text};
    }

    input[type="submit"] {
      border-color: ${props => props.theme.text};
      color: ${props => props.theme.text};

      &:hover {
        background-color: ${props => props.theme.text} !important;
        color: ${props => props.theme.background};
      }
    }

    // ::-webkit-scrollbar {
    //   width: 16px;
    // }
    
    // /* Track */
    // ::-webkit-scrollbar-track {
    //   // background: #f1f1f1;
    //   background: ${props => props.theme.background};
    // }
    
    // /* Handle */
    // ::-webkit-scrollbar-thumb {
    //   background: #888;
    //   height: 56px;
    //   border-radius: 8px;
    //   border: 4px solid transparent;
    //   background-clip: content-box;
    // }
    
    // /* Handle on hover */
    // ::-webkit-scrollbar-thumb:hover {
    //   background: #555;
    //   background-clip: content-box;
    // }

    footer {
      background: ${props => props.theme.backgroundAlt};

      .social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.background};
        
        margin-left: 1.4em;
        margin-right: 1.4em;
        width: 3em;
        height: 3em;
        border-radius: 100%;
        transition: all 0.2s ease;

        a {
          position: relative;
          width: 24px;
          height: 24px;
          margin: 6px;
        }
        
        svg {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 0;
          left: 0;
          // fill: #707070;
        }

        &:hover {
          transform: translateY(-10px);
          box-shadow: 0px 25px 30px -20px black;

          svg path {
            fill: #ffba00;
          }
        }
      }
    }
  }
`

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ffba00;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ffba00;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    // top: ${props => props.theme.top} !important;
    // left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`

export const Gallery = styled(motion.ul)`
  position: relative;
  padding: 0;
  list-style-type: none;
  width: 85vw;
  margin-bottom: 30px;
  max-width: 1712px;
  overflow: hidden;
`

export const GalleryElement = styled(motion.li)`
  display: block;
  text-align: center;
  list-style-type: none;
  float: left;
  margin-bottom: 0px;
  padding: 6px;

  .thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;

    div:first-of-type {
      transition: all .4s cubic-bezier(0.43, 0.13, 0.23, 0.96);
    }

    .overlay {
      padding: 13px 20px 39px 20px;
      text-align: left;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  
    .dark-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: radial-gradient(rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 130%);
      opacity: ${props => props.theme.isMobile ? .7 : 0.1};
      transition: opacity 300ms ease-in-out;
      border-radius: 5px;
    }

    h1 {
      position: absolute;
      color: #fff;
      font-size: 44px;
      font-weight: 400;
      line-height: 1.09em;
      letter-spacing: -0.01em;
      z-index: 1;
      width: 90%;
    }

    h2 {
      font-size: 14px;
      line-height: 17px;
      font-weight: 300;
      color: #fff;
      // margin-top: 6px;
      position: absolute;
      bottom: 30px;
      // transform: translateY(-15px);
      transition: all 0.2s ease;
      opacity: ${props => props.theme.isMobile ? 1 : 0};
    }
  
    h3 {
      font-size: 22px;
      font-weight: 400;
      line-height: 1.09em;
      letter-spacing: -0.01em;
      color: #fff;
      position: absolute;
      bottom: 20px;
      opacity: ${props => props.theme.isMobile ? 1 : 0};
      transition: all 0.2s ease;
    }
  
   

    &:hover {
      .dark-overlay {
        opacity: 1;
      }
  
      h2, h3 {
        opacity: 1;
      }
  
      .thumb {
        transform: scale(1.03);
      }
    }
  }
`

export const Navigation = styled(motion.ul)`
  
  float: right;
  margin-top: 6px;
  z-index: 3;

  @media (max-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const NavLink = styled(motion.li)`
  list-style: none;
  display: inline-block;
  margin-right: 30px;

  a {
    display: inline-block;
    letter-spacing: 1.75px;
    color: #8f8f8f;
    // text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    // font-size: 17px;
    // margin-right: 30px;
    user-select: none;
  }

  a[aria-current] {
    color:${props => props.theme.text} !important;
  }

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    a {
      color: ${props => props.theme.text};
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
    text-align: center;

      a {
        font-size: 2.5rem;
      }
  }
`