/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import Img from 'gatsby-image'

export default class MosneVideo extends React.Component {

  constructor(props){
    super()
    this.state = {
      video: false
    }
  }

  toggleVideo () {
    // e.preventDefault()
    this.setState({
      video: !this.state.video
    })
    // console.log("fired",this.state,this.state.video)
  }

  // eslint-disable-next-line class-methods-use-this
  convertVideo(url){
    const input = url
    let final
    // console.log(input, url)
    const pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g
    const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
    const replacement1 = '//player.vimeo.com/video/$1' + '?background=1'
    const replacement2 = 'https://www.youtube.com/embed/$1' + '?rel=0&autoplay=1&mute=1&controls=0'
    if(pattern1.test(input)){
      // console.log(input, replacement1, pattern1)
      final = input.replace(pattern1, replacement1)
    }
    if(pattern2.test(input)){
      // console.log(input, replacement2,pattern2)
      final = input.replace(pattern2, replacement2)
    }
    // console.log("final", final)
    return final
  }

  render(){

    const iframevideo = (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <div className="video-wrapper">
          <iframe
            src={this.convertVideo(this.props.url)}
            title={this.props.image.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    )

    const postervideo = (
      <div className="post__video--wrapper">
        {this.props.img && <a onClick={() => this.toggleVideo()} className="post__video--link">
          <Img
            style={{maxWidth:this.props.size}}
            fluid={this.props.img}
            alt={this.props.image.title}
            className="featured-image"
          />
        </a>
            }
      </div>
    )

    return (
      <div className='post__video'>
        {this.state.video ? iframevideo : postervideo}
      </div>
    )
  }
}

