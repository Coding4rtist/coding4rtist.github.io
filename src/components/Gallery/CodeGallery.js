import PropTypes from 'prop-types'
import React from 'react';
import { chunk, sumBy } from 'lodash';

import {useBreakpoint} from '../breakpoint.js'
import { GatsbyImage } from "gatsby-plugin-image"

// import { motion, AnimatePresence } from 'framer-motion'

import { Gallery, GalleryElement } from "@styles/globalStyles"
import { navigate } from 'gatsby';

// import VideoPlayer from '@components/VideoPlayer'

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

const CodeGallery = ({artworks, onCursor}) => {
  const breakpoints = useBreakpoint();
  const itemsPerRow = breakpoints.sm ? 1 : breakpoints.md ? 2 : 3;
  // const infos = artworks.map(element => {
  //   let artwork = element.node;
  //   let isVideo = artwork.image.file.contentType.indexOf('video') !== -1;
  //   console.log(artwork, artwork.image)
  //   return {
  //     ratio: isVideo ? 1 : artwork.image.fluid.aspectRatio,
  //     isVideo: isVideo
  //   }
  // });
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  // console.log(artworks)
  const rowAspectRatioSums = chunk(artworks, itemsPerRow).map(artworksRow => sumBy(artworksRow, artwork => artwork.ratio) )

  // TODO: Aggiungere thumbnails video, migliroare UI controlli

  return (
    <Gallery
      initial="hidden"
      animate='visible'
      variants={galleryVariant}
    >
      {artworks.map((artwork, i) => {
        const rowIndex = Math.floor(i / itemsPerRow);
        const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
        const width = `${(artwork.ratio / rowAspectRatioSum) * 100}%`;

        // console.log(artwork)
        const dateString = (new Date(artwork.created_at)).toLocaleString('en-US', dateOptions);

        // console.log(rowIndex, rowAspectRatioSum, artwork.ratio);
        
        return (
          <GalleryElement key={artwork.id} variants={elementVariant} style={{position: 'relative', top: '0', width: width, height: '420px'}}>
          {/* <a href="/"> */}
          {//artwork.isVideo
            // ? <video src={artwork.image.file.url} controls style={{position: 'relative', width: '100%', height:"100%", objectFit: "cover"}} draggable={false}/>
            //? <VideoPlayer url={artwork.image.file.url} style={{position: 'relative', width: '100%', height:"100%", objectFit: "cover"}}/> : 
            <div className="thumbnail" onClick={() => navigate("/" + artwork.slug)} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor}>
              <GatsbyImage 
                className="thumb"
                image={artwork.thumbnail}
                alt=""
                objectFit="cover" objectPosition="50% 50%"
                style={{position: 'relative', width: '100%', height:"100%"}}
                draggable={false}
              />
              <div className="overlay">
                <h1>{artwork.title}</h1>
                <div className="dark-overlay"></div>
                <h2>{dateString}</h2>
                <h3>{artwork.subtitle}</h3>
              </div>
            </div>
            
          }
            
            {/* <div className="thumb-overlay">
              <h1>WEWE</h1>
              <h3>TAGS</h3>
            </div> */}
          {/* </a> */}
        </GalleryElement>
        );
      })
    }
    </Gallery>
  );
};



CodeGallery.propTypes = {
  images: PropTypes.array,
}

export default CodeGallery
