import PropTypes from 'prop-types'
import React, { useEffect } from 'react';
// import { chunk, slice, sumBy } from 'lodash';
// import { motion } from 'framer-motion'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useBreakpoint } from '../breakpoint.js'
import { GatsbyImage } from "gatsby-plugin-image"
import { navigate } from 'gatsby'

// import { useGlobalStateContext} from '@context/globalContext'

import { Gallery, GalleryElement } from "@styles/globalStyles"

const galleryVariant = {
  visible: {
    transition: {
      // delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const elementVariant = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
};


// const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}


const FeaturedGallery = ({featured, onCursor}) => {
  const breakpoints = useBreakpoint();
  // const itemsPerRow = breakpoints.sm ? 1 : breakpoints.md ? 2 : 3;
  // const rowAspectRatioSums = chunk(featured, itemsPerRow).map(artworksRow => sumBy(artworksRow, artwork => artwork.ratio) )
  // const aspectRatios = breakpoints.sm ? [[1],[1],[1],[1],[1],[1],[1]]  
  //                    : breakpoints.md ? [[1],[0.5, 0.5],[1],[0.5, 0.5],[1]]
  //                    : [[0.5, 0.5],[0.3, 0.4, 0.3],[0.5, 0.5]]
  // let rows = [];
  // if(breakpoints.sm) {
  //   rows = chunk(featured, 1);//1
  // }
  // else if(breakpoints.md) {
  //   rows = [
  //     slice(featured, 0, 1),//1
  //     slice(featured, 1, 3),//2
  //     slice(featured, 3, 4),//1
  //     slice(featured, 4, 6),//2
  //     slice(featured, 6, 7),//1
  //   ]
  // }
  // else {
  //   rows = [
  //     slice(featured, 0, 2),//2
  //     slice(featured, 2, 5),//3
  //     slice(featured, 5, 7),//2
  //   ]
  // }

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // const {currentTheme} = useGlobalStateContext()

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px"
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <Gallery
      ref={contentRef} 
      initial="hidden"
      animate={animation}
      variants={galleryVariant}
    >
      {featured.map((artwork, i) => {
        // const rowIndex = Math.floor(i / itemsPerRow);
        // const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
        let itemsPerRow = 1;
        if(breakpoints.sm) { }
        else if(breakpoints.md) {
          itemsPerRow = i % 3 === 0 ? 1 : 2;
        } else {
          itemsPerRow = (i >= 2 && i<=4) ? 3 : 2;
        }
        const width = `${(100 / itemsPerRow)}%`;

        // console.log(artwork, width, i, itemsPerRow)

        const destUrl = artwork.slug != null ? "/" + artwork.slug : '/art';
        const description = artwork.slug != null ? artwork.subtitle : "3D Render";
        const dateString = (new Date(artwork.created_at)).toLocaleString('en-US', dateOptions);

        // console.log(rowIndex, rowAspectRatioSum, artwork.ratio);
        
        return (
          <GalleryElement
          key={artwork.id} 
          // initial="hidden"
          // animate={animation}
          variants={elementVariant}
          style={{position: 'relative', top: '0', width: width, height: '420px'}}
        >
  
        
        {/* <li key={el.id} style={{position: 'relative', top: '0', width: width, height: '420px', border:  `solid 6px ${currentTheme.}`}} onClick={() => navigate(destUrl)}> */}
          {/* <a href="/"> */}
            
            {/* <motion.div  whileHover={{scale: 1.02}} transition={transition}> */}
            <div className="thumbnail" onClick={() => navigate(destUrl)} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
              <GatsbyImage 
                className="thumb"
                // fluid={el.thumbnail.fluid}
                image={artwork.thumbnail.gatsbyImageData}
                alt=""
                objectFit="cover" objectPosition="50% 50%"
                style={{position: 'relative', width: '100%', height:"100%", borderRadius: '5px'}}
                draggable={false}
              />
              <div className="overlay">
                <h1>{artwork.title}</h1>
                <div className="dark-overlay"></div>
                <h2>{dateString}</h2>
                <h3>{description}</h3>
              </div>
            </div>
            
            {/* </motion.div> */}
           
            
            
            
            {/* <div className="thumb-overlay">
              <h1>WEWE</h1>
              <h3>TAGS</h3>
            </div> */}
          {/* </a> */}
        {/* </li> */}
        </GalleryElement>
        );
      })
    }
    </Gallery>
  );
};


FeaturedGallery.propTypes = {
  featureds: PropTypes.array,
}

export default FeaturedGallery
