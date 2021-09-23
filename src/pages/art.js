import React, {useRef, useCallback} from 'react'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
import SectionTitle from '@components/SectionTitle'
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './art.module.scss'
// import Artworks from '../../data/artworks'
// import Lightbox from '@components/Lightbox'
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

// import {useLightgallery} from 'lightgallery/react'
// import { chunk, sumBy } from 'lodash';

import useWindowSize from '@hooks/useWindowSize'
import { useBreakpoint } from '@components/breakpoint.js'

import { useGlobalStateContext, useGlobalDispatchContext, } from '@context/globalContext'
import { motion } from 'framer-motion'


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
      duration: 0.25,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  },
};


const query= graphql`
query {
  allContentfulArt(sort: {fields: [created_at], order: DESC}) {
    edges {
      node {
        id
        title
        subtitle
        created_at
        thumbnail {
          # gatsbyImageData(
          #   layout: FULL_WIDTH
          #   placeholder: BLURRED
          #   formats: [AUTO, WEBP]
          # )
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
        image {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
          file {
            contentType
            url
          }
        }
      }
    }
  }
}
`

/* eslint-disable jsx-a11y/accessible-emoji */
const ArtPage = props => {
  const windowSize = useWindowSize()
  const breakpoints = useBreakpoint();
  const columns = breakpoints.sm ? 1 : 2;
  // const itemsPerRow = breakpoints.sm ? 1 : 2;
  let colWidth = Math.floor(Math.min(windowSize.width * 0.85, 1712) / columns);
  colWidth = Math.min(625, colWidth)
  console.log("COLWIDTH", colWidth, columns)

  const result = useStaticQuery(query);
  const artworks = result.allContentfulArt.edges.map(element => {
    // let thumbnail = getImage(element.node.thumbnail);
    let thumbnail = element.node.thumbnail.file;
    let image = element.node.image.file;
    let isVideo = image.contentType.indexOf('video') !== -1;
    // let newHeight = Math.floor(colWidth * thumbnail.height / thumbnail.width);
    return {
      ...element.node,
      thumbnail: thumbnail.url,
      image: image.url,
      isVideo: isVideo,
      // ratio: isVideo ? 1 : element.node.image.fluid.aspectRatio,
      // width: element.node.thumbnail.file.details.image.width,
      // height: element.node.thumbnail.file.details.image.height
      // width: colWidth,
      // height: newHeight
      ratio: thumbnail.details.image.width / thumbnail.details.image.height
    }
  });
  console.log(artworks)

  // const columnArtworks = reorder(artworks, columns, colWidth);
  // console.log("COLUMN", columnArtworks)

  // const rowAspectRatioSums = chunk(artworks, itemsPerRow).map(artworksRow => sumBy(artworksRow, artwork => artwork.ratio) )
  
  

  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
      if (detail) {
          lightGallery.current = detail.instance;
          console.log(lightGallery)
      }
  }, []);

  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset)
  //     console.log("scroll", offset);
  //   }
  // }, []);

  // const onClose = (detail) => {
  //   console.log("SCROLL")
  //   // console.log(detail, lightGallery.current)
  //   // lightGallery.current.closeGallery();
  // }

  // const { closeGallery } = useLightgallery();

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  if (typeof document === `undefined`) { 
    return null;
  }
  else
  return (
    // <Layout location={props.location}>
    <>
      <SEO title="Art" />
      <section className="content-container">
      <SectionTitle title="My Artworks" subtitle="Where the world of fantasy meets reality" id="main-content"/>

      {/* <ArtGallery artworks={artworks} onCursor={onCursor}/> */}

      <motion.div
        initial="hidden"
        animate='visible'
        variants={galleryVariant} 
      >
      <LightGallery
        plugins={[lgZoom, lgVideo]}
        download={false} autoplayFirstVideo={false} gotoNextSlideOnVideoEnd={false}
        onInit={onInit}
        // numberOfSlideItemsInDom={1}
        // className="art-gallery"
        elementClassNames={styles.artGallery}
        // style={{background: 'red', gridTemplateColumns: `repeat(auto-fill, ${colWidth}`}}
      >

        {
          artworks.map((artwork, i) => {
            // const rowIndex = Math.floor(i / itemsPerRow);
            // const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
            // const width = `${(artwork.ratio / rowAspectRatioSum) * 100}%`;
            const size = artwork.ratio > 1 ? `1500-${1500/artwork.ratio}`: `${1400*artwork.ratio}-1400`
            const imageUrl = `${artwork.image}?w=1500&q=50&fm=webp`
            const thumbUrl = `${artwork.thumbnail}?w=650&q=70&fm=webp`
            const height = colWidth / artwork.ratio
            const subHtml = `<h4>${artwork.title}</h4><p>${artwork.subtitle}</p>`

            if(!artwork.isVideo) {
              return (
                <motion.a
                  // initial="hidden"
                  // animate='visible'
                  onMouseEnter={() => onCursor('hovered')}
                  onMouseLeave={onCursor}
                  variants={elementVariant} 
                  data-lg-size={size}
                  className="gallery-item"
                  data-src={imageUrl}
                  data-sub-html={subHtml}
                  style={{/*position: 'relative', top: '0', width: colWidth, height: height, */gridRowEnd: `span ${Math.ceil((height + 10) / 10)}`}}
                  >
                  {/* <div className="thumbnail"> */}
                    <img
                      
                      className="img-responsive"
                      draggable={false}
                      src={thumbUrl}
                      alt={artwork.title}
                      // style={{position: 'relative', top: '0', minWidth: artwork.width, height: artwork.height}}
                    />
                  {/* </div> */}
                </motion.a>
              );
            }
            else {
              const videoUrl = `{"source": [{"src":"${imageUrl}", "type":"video/mp4"}], "attributes": {"preload": false}}`;
              return (
                <motion.a
                  // initial="hidden"
                  // animate='visible'
                  onMouseEnter={() => onCursor('hovered')}
                  onMouseLeave={onCursor}
                  variants={elementVariant} 
                  data-lg-size={size}
                  className="gallery-item"
                  data-video={videoUrl}
                  data-poster={thumbUrl}
                  // data-src={imageUrl}
                  data-sub-html={subHtml}
                  style={{/*position: 'relative', top: '0', width: colWidth, height: height, */gridRowEnd: `span ${Math.ceil((height + 10) / 10)}`}}
                  >
                  {/* <div className="thumbnail"> */}
                    <img
                      className="img-responsive"
                      draggable={false}
                      src={thumbUrl}
                      alt={artwork.title}
                      // style={{position: 'relative', top: '0', minWidth: artwork.width, height: artwork.height}}
                    />
                  {/* </div> */}
                </motion.a>
              );
            }
          })
            
            
        }

         {/* <Gallery className={styles.artGallery}> */}
          {/* <a href="img/img1.jpg">
              <img alt=".." src="img/thumb1.jpg" />
          </a>
          <a href="img/img2.jpg">
              <img alt=".." src="img/thumb2.jpg" />
          </a>
          ... */}

        {/* <a
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
            className="img-responsive"
            draggable={false}
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a> */}


          {/* <a
            data-lg-size="1406-1390"
            className="gallery-item"
            data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1400-1400"
            data-pinterest-text="Shinimamiya, Osaka, Japan"
            data-tweet-text="Shinimamiya, Osaka, Japan"
            className="gallery-item"
            data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1400-1400"
            className="gallery-item"
            data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
        </a> */}
         {/* <a
            data-lg-size="1920-1080"
            className="gallery-item"
            data-src="http://images.ctfassets.net/mznqxmivclrk/HHvwfXkt7xu6JzApl95TR/f6bb1bcd03e3ef918a950676e0f2b00b/41_Demons_in_her_head.jpg?w=1500&&q=50&fm=jpg"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            <GatsbyImage 
              width={1280}
              height={720}
              className="img-responsive"
              image={artworks[1].thumbnail}
              alt=""
              // objectFit="cover" objectPosition="50% 50%"
              // style={{position: 'relative', width: '100%', height:"100%"}}
              style={{position: 'relative', width: '1280px', height:"720px"}}
              draggable={false}
            /> */}
            {/* <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            /> */}
          {/* </a> */}

          {/* <a
            data-lg-size="1400-787.5"
            className="gallery-item"
            data-src="http://images.ctfassets.net/mznqxmivclrk/HHvwfXkt7xu6JzApl95TR/f6bb1bcd03e3ef918a950676e0f2b00b/41_Demons_in_her_head.jpg?w=1400&&q=50&fm=jpg"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="http://images.ctfassets.net/mznqxmivclrk/HHvwfXkt7xu6JzApl95TR/f6bb1bcd03e3ef918a950676e0f2b00b/41_Demons_in_her_head.jpg?w=240&&q=50&fm=jpg"
            />
        </a>
          
          <a
              data-lg-size="1080-1350"
              data-video='{"source": [{"src":"http://videos.ctfassets.net/mznqxmivclrk/4JPGK6ysjeF1VslnhaQXsf/01d44b78669c6268f22762be3dc9026c/Hyperion_-_A_Strange_Universe.mp4", "type":"video/mp4"}], "attributes": {"preload": false}}'
              data-poster="https://images.ctfassets.net/mznqxmivclrk/m8Z2gJuGNVI5EvDmK4o8U/b5b1536473a256b5ed33a4d620840fa6/42_Hyperion.jpg?w=500&fm=webp"
              data-sub-html="<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>"
          >
              <img
                  // width="300"
                  // height="100"
                  class="img-responsive"
                  src="https://images.ctfassets.net/mznqxmivclrk/m8Z2gJuGNVI5EvDmK4o8U/b5b1536473a256b5ed33a4d620840fa6/42_Hyperion.jpg?w=500&fm=webp"
              />
          </a>
          <a
            data-lg-size="1400-1400"
            data-pinterest-text="Shinimamiya, Osaka, Japan"
            data-tweet-text="Shinimamiya, Osaka, Japan"
            className="gallery-item"
            data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
          </a>
          <a
            data-lg-size="1400-1400"
            className="gallery-item"
            data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
          >
            <img
              className="img-responsive"
              draggable={false}
              src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            />
        </a> */}
        {/* </Gallery> */}
      </LightGallery>
      </motion.div>
      </section>
    </>
  )
}
  

/* eslint-enable jsx-a11y/accessible-emoji */

export default ArtPage


// TODO risolvere errore scroll mentre si apre (lgZoom)
// TODO risolvere errore zoom video (cellulare)
// TODO risolvere errore chiusura video schermo intero (?)
// TODO creare plugin custom player video ?