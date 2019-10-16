import React from 'react'
import Img from 'gatsby-image'



export default class MosneVideo extends React.Component {

  constructor(props){
    super()
    this.state = {
      ShowVideo: true
    }
  }

  toggleVideo (e) {
    e.preventDefault()
    this.setState({
      ShowVideo: false
    })
    console.log("fired",this)
  }

  convertVideo(url){
    const input = url
    let final
    // console.log(input, url)
    const pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g
    const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
    const replacement1 = '//player.vimeo.com/video/$1' + '?background=1'
    const replacement2 = 'https://www.youtube.com/embed/$1' + '?rel=0&autoplay=1&mute=1'
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

    const iframevideo = (
      <>
        <h1>iframe {url}</h1>
      </>
    )

    const postervideo = (
      <>
        {img && <a href="#" onClick={ (e) => { e.preventDefault; toggleVideo();}} className="post__video--link">
          <Img
            style={{maxWidth:size}}
            fluid={img}
            alt={image.title}
            className="featured-image" />
            </a>
            }
      </>
    )
    return (

      <div className='post__video'> video module
        {state.showVideo ? iframevideo : postervideo}
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

export default MosneVideo
