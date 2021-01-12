import React from "react"

export default props => {
  const url = props.url
  const responsiveVideoContainer = {
    padding: "56.25% 0 0 0",
    position: "relative",
  }

  const responsiveVideoPlayer = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }

  // decide whether we have youtube or vimeo
  if (url) {
    let source
    let service
    let search = url.includes("youtu")
    if (search) {
      source = "https://youtube.com/embed/"
      service = "youtube"
    } else {
      source = "https://player.vimeo.com/video/"
      service = "vimeo"
    }
    // find the code on the video

    let nSlash = url.lastIndexOf("/")
    let resultOne = url.substring(nSlash + 1)
    let videoCode = resultOne
    // sometimes youtube urls have a watch?= bit in them...
    let nEqual = url.indexOf("=")
    let nAnd = url.indexOf("&")
    let videoCodeFinal

    if (url.includes("playlist")) {
      let listLoc = url.indexOf("list")
      videoCodeFinal = "videoseries" + url.substring(listLoc + 4)
    } else {
      if (nEqual === -1) {
        videoCodeFinal = videoCode
      } else if (nEqual > 0 && nAnd === -1) {
        let resultTwo = url.substring(nEqual + 1)
        videoCodeFinal = resultTwo
      } else {
        let resultTwo = url.substring(nEqual + 1, nAnd)
        videoCodeFinal = resultTwo
      }
    }

    // video series looks like this:
    // https://www.youtube.com/playlist?list=PLGAnN7vfHn1pnrKvmnM4qTBvDy5vks_7P
    // needs to look like this
    // https://www.youtube.com/embed/videoseries?list=PLGAnN7vfHn1pnrKvmnM4qTBvDy5vks_7P

    // install https://www.npmjs.com/package/get-video-id, to get Vimeo or YouTube IDs
    // const getVideoId = require('get-video-id')

    // const id = getVideoId(url).id
    // const service = getVideoId(url).service

    // const vimeoEmbedUrl = 'https://player.vimeo.com/video/' + id
    // const youtubeEmbedUrl = 'https://www.youtube.com/embed/' + id

    if (service === "vimeo") {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={`${source}${videoCodeFinal}`}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      )
    }

    if (service === "youtube") {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={`${source}${videoCodeFinal}`}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    }
  } else {
    return <div>Missing YouTube or Vimeo URL</div>
  }

  return <div />
}
