import React from 'react'
import Img from 'gatsby-image'

export default class MosneVideo extends React.Component {
  // const {img, url, size, image} = props
  
  constructor(props) {
    super(props);
// const MosneVideo = (props) => {
  
  this.videohtml
  this.state = { ShowVideo: false }
  this.toggleVideo = this.toggleVideo.bind(this)
  }

  toggleVideo () {
    this.setState(prevState => { ShowVideo: !prevState.showVideo })
  }
/*
  convertVideo (url) {
    // const {input} = props
    let final
    let input = url
    // console.log(input, url)
    const pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g
    const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
    const replacement1 = '//player.vimeo.com/video/$1' + '?background=1'
    const replacement2 = 'https://www.youtube.com/embed/$1' + '?rel=0&autoplay=1&mute=1'
    if(pattern1.test(url)){
      // console.log(input, replacement1, pattern1)
      final = input.replace(pattern1, replacement1)
    }
    if(pattern2.test(url)){
      // console.log(input, replacement2,pattern2)
      final = input.replace(pattern2, replacement2)
    }
    // console.log("final", final)
     return final
  }*/

  render() {
    if (this.state.ShowVideo) {
      this.videohtml = (
        <>
          <h1>iframe</h1>
        </>
      )
    } else {
      this.videohtml = (
        <>
          {this.props.img && <a href="#" onClick={ (e) => { e.preventDefault; this.toggleVideo();}} className="post__video--link">
            <Img
              style={{maxWidth:this.props.size}}
              fluid={this.props.img}
              alt={this.props.image.title}
              className="featured-image" />
              </a>
              }
        </>
      )
    }
    return (
      <div className='post__video'> video module
        {this.videohtml}
      </div>
    )
  /*
    OldVideohtml = (
        <> hello video
                    {img && <a href="#" onClick="switchVideo(this,e,{layout.video_url});" className="post__video--link">
                            <Img
                              style={{maxWidth:size}}
                              fluid={img}
                              alt={image.title}
                              className="featured-image" />
                            </a>
                            }
                        <div className="video-wrapper">
                          <iframe
                          src={convertVideo(url)}
                          title={url}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          frameBorder="0"
                          webkitallowfullscreen="true"
                          mozallowfullscreen="true"
                          allowFullScreen
                        />
                        </div>
                    <div dangerouslySetInnerHTML={{ __html: url }} />
                    <div dangerouslySetInnerHTML={{ __html: convertVideo(url) }} />
                  end of video</>
      )
  */
  }
}
