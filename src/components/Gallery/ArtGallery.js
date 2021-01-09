import PropTypes from 'prop-types'
import * as React from 'react';
import { chunk, sum } from 'lodash';
import styles from './Gallery.module.scss'

import {useBreakpoint} from '../breakpoint.js'
import Img from "gatsby-image"



const ArtGallery = ({artworks}) => {
  const breakpoints = useBreakpoint();
  const itemsPerRow = breakpoints.sm ? 1 : breakpoints.md ? 2 : 3;
  const aspectRatios = artworks.map(artwork => artwork.thumbnail.childImageSharp.fluid.aspectRatio);

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  const rowAspectRatioSums = chunk(aspectRatios, itemsPerRow).map(rowAspectRatios => sum(rowAspectRatios))

  return (
    <ul className={styles.featuredGrid}>
      {artworks.map((artwork, i) => {
        const rowIndex = Math.floor(i / itemsPerRow);
        const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
        const width = `${(artwork.thumbnail.childImageSharp.fluid.aspectRatio / rowAspectRatioSum) * 100}%`;
        
        return (
          <li key={artwork.id} style={{position: 'relative', top: '0', width: width, height: '420px', border: '6px solid #f4f4f4'}}>
          {/* <a href="/"> */}
            <Img fluid={artwork.thumbnail.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', width: '100%', height:"100%"}} draggable={false}/>
            {/* <div className="thumb-overlay">
              <h1>WEWE</h1>
              <h3>TAGS</h3>
            </div> */}
          {/* </a> */}
        </li>
        );
      })
    }
    </ul>
  );
};



ArtGallery.propTypes = {
  images: PropTypes.array,
}

export default ArtGallery
