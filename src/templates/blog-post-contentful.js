import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
// import * as styles from './blog-post.module.scss'

import { INLINES/*, BLOCKS, MARKS*/ } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      // console.log(node)
      // TODO cambiare title 
      if(node.data.uri.indexOf('youtube.com') !== -1) {
        return (
          <span className="yt-video">
            <iframe title={node.data.uri} width="640" height="360" src={node.data.uri} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </span>
        )
      }
    }
  }
}

const BlogPostContentful = ({ data }) => {
  const post = data.contentfulProject;
  if(post == null || post.content == null) return <></>;
  const json = JSON.parse(post.content.raw)
  if(json == null) return <></>;
  // console.log(post, JSON.parse(post.content.raw))
  // const pathname = 
  return (
    <>
      <SEO title={post.title} description={post.subtitle}/>
      {/* <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div className={styles.date}>{post.frontmatter.date}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      /> */}
      <section className="content-container">
      {documentToReactComponents(json, options)}
      </section>
    </>
  )
}

export default BlogPostContentful

export const query = graphql`
  query ContentfulProjectBySlug($slug: String!) {
    contentfulProject(slug: {eq: $slug}) {
      title
      subtitle
      content {
        raw
      }
    }
  }
`
