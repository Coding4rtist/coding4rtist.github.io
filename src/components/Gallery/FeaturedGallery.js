import PropTypes from 'prop-types'
import * as React from 'react';
import { chunk, slice } from 'lodash';
import styles from './Gallery.module.scss'

import {useBreakpoint} from '../breakpoint.js'
import Img from "gatsby-image"



const FeaturedGallery = ({featureds}) => {
  const breakpoints = useBreakpoint();
  const aspectRatios = breakpoints.sm ? [[1],[1],[1],[1],[1],[1],[1]]  
                     : breakpoints.md ? [[1],[0.5, 0.5],[1],[0.5, 0.5],[1]]
                     : [[0.5, 0.5],[0.3, 0.4, 0.3],[0.5, 0.5]]
  let rows = [];
  if(breakpoints.sm) {
    rows = chunk(featureds, 1);//1
  }
  else if(breakpoints.md) {
    rows = [
      slice(featureds, 0, 1),//1
      slice(featureds, 1, 3),//2
      slice(featureds, 3, 4),//1
      slice(featureds, 4, 6),//2
      slice(featureds, 6, 7),//1
    ]
  }
  else {
    rows = [
      slice(featureds, 0, 2),//2
      slice(featureds, 2, 5),//3
      slice(featureds, 5, 7),//2
    ]
  }

  return (
    <ul className={styles.featuredGrid}>
      {rows.map((row, i) => {
        // console.log(row)
        return row.map((featured, j) => {
          const width = `${100 * aspectRatios[i][j]}%`
          // console.log(featured, width)

          return (
            <li key={featured.id} style={{position: 'relative', top: '0', width: width, height: '420px', border: '6px solid #f4f4f4'}}>
              {/* <a href="/"> */}
                
                <Img fluid={featured.thumbnail.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{position: 'relative', width: '100%', height:"100%"}} draggable={false}/>
                <div className={styles.itemOverlay}>
                  <h1 className={styles.title}>Title</h1>
                  <div className={styles.darkOverlay}></div>
                  <h3>December 16, 2008</h3>
                  <h2>Tags</h2>
                </div>
                
                
                {/* <div className="thumb-overlay">
                  <h1>WEWE</h1>
                  <h3>TAGS</h3>
                </div> */}
              {/* </a> */}
            </li>
          );
        }
        )}
      )}
    </ul>
  );
};


FeaturedGallery.propTypes = {
  featureds: PropTypes.array,
}

export default FeaturedGallery
