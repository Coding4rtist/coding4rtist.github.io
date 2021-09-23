import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from './VideoPlayer.module.scss'
import playIcon from '../../images/play.svg'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.startPlay = this.startPlay.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    // this.handleRangeUpdate = this.handleRangeUpdate.bind(this);
    this.scrub = this.scrub.bind(this);
    this.startMouseDown = this.startMouseDown.bind(this);
    this.endMouseDown = this.endMouseDown.bind(this);
    // this.skip = this.skip.bind(this);
    
    this.state = {
      // video: null,
      progress: '0%',
      playbackRate: 1,
      volume: 1,
      isMouseDown: false,
      showThumb: true,
      ratio: 1
    };

    
    console.log(this.state, this.props)

    // this.props.placeHolder = this.props.placeHolder.fluid
  }

  componentDidMount() {
    // this.setState({
    //   video: this.video.current
    // }, () => {
    //   ['pause', 'play'].forEach(event => {
    //     this.video.current.addEventListener(event, () => {
    //       this.forceUpdate();
    //     });
    //   });
    //   this.video.current.addEventListener('timeupdate', this.handleProgress);
    // });
    const video = this.videoRef.current;
    ['pause', 'play'].forEach(event => {
      video.addEventListener(event, () => {
        this.forceUpdate();
      });
    });
    video.addEventListener('timeupdate', this.handleProgress);
  }

  startPlay() {
    this.setState({ showThumb: false})
    this.togglePlay();
  }

  togglePlay() {
    const video = this.videoRef.current
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }
  
  handleProgress() {
    const video = this.videoRef.current
    const percent = (video.currentTime / video.duration) * 100;
    this.setState({
      progress: `${percent}%`
    });
  }
  
  // handleRangeUpdate(e) {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   // Todo: Check how to update state with Immutable JS
  //   // instead of using refs
  //   this.refs.video[name] = value;
  // }
  
  scrub(e) {
    const video = this.videoRef.current
    const scrubTime = (e.nativeEvent.offsetX / video.clientWidth) * video.duration;
    if (!isNaN(scrubTime)) {
      video.currentTime = scrubTime;
    }
  }
  
  startMouseDown(e) {
    this.setState({
      isMouseDown: true
    });
  }
  
  endMouseDown(e) {
    this.setState({
      isMouseDown: false
    });
  }
  
  // skip(e) {
  //   const skipValue = e.target.attributes[0].value;
  //   if (!isNaN(skipValue)) {
  //     this.refs.video.currentTime += Number(skipValue);
  //   }
  // }

   render() {
    // const { video, progress, playbackRate, volume } = this.state;
    const { progress } = this.state;

    // console.log(this.props)
    
    return (
      <div className={`${this.props.className} ${styles.container}`} style={{position: 'relative', width: `calc(80vh * ${this.state.ratio})`}} >
        <video
          className={styles.videoPlayer}
          ref={this.videoRef}
          // autoPlay
          // placeholder={this.props.placeHolder.src}
          src={this.props.url}
          onClick={this.togglePlay}
          onLoadedMetadata={e => {
            // console.log("AAAAAAAAAAAAA", e.target)
            this.setState({
              ratio: e.target.videoWidth / e.target.videoHeight
            })
          }}
        />
        {/* <img src={this.props.placeholder} className={styles.placeholder} draggable={false}/> */}
        
        <div className={styles.playerControls}>
          <div 
            className={styles.progressBar}
            onMouseDown={this.startMouseDown}
            onMouseUp={this.endMouseDown}
            onMouseLeave={this.endMouseDown}
            onMouseMove={(e) => this.state.isMouseDown && this.scrub(e)}
            onClick={this.scrub}
          >
           <div
             className={styles.progressFill}
             style={{'width': progress}}
           ></div>
          </div>
          
          
          {/* <button 
            className="player__button toggle" 
            title="Toggle Play"
            onClick={this.togglePlay}>
            { video && video.paused ? '►' : '❚ ❚' }
          </button> */}
          
          {/* <input 
            type="range" 
            name="volume" 
            className="player__slider" 
            min="0" max="1" step="0.05" value={volume}
            onChange={this.handleRangeUpdate}
          />
          <input 
            type="range" 
            name="playbackRate" 
            className="player__slider" 
            min="0.5" max="2" step="0.1" value={playbackRate}
            onChange={this.handleRangeUpdate}
          /> */}
          
          {/* <button 
            data-skip="-10" 
            className="player__button"
            onClick={this.skip}
          >« 10s
          </button>
          
          <button 
            data-skip="25" 
            className="player__button"
            onClick={this.skip}
          >25s »
          </button> */}
          
        </div>

        {
          this.state.showThumb &&
          <div className="overlay" onClick={this.startPlay}>
            {
              this.props.thumbnail != null &&
              <GatsbyImage image={this.props.thumbnail.gatsbyImageData} alt="" className={styles.placeholder} draggable={false}/>
            }
            <button className={styles.playButton} title="Start Play">
              <img src={playIcon}/>
            </button>
          </div>
        }

      </div>
      
    );
  }
}

export default VideoPlayer