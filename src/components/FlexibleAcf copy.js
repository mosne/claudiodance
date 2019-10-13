/**
 * FlexibleAcf
 **/
import React from 'react';
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const convertVideo = (url) => {
  const input = url
  let final = ''
  console.log(input, url)
  const pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g
  const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g
  const replacement1 = '//player.vimeo.com/video/$1' + '?background=1'
  const replacement2 = 'https://www.youtube.com/embed/$1' + '?rel=0&autoplay=1&mute=1'
  if(pattern1.test(url)){
    console.log(input, replacement1, pattern1)
    final = input.replace(pattern1, replacement1)
  }
  if(pattern2.test(url)){
    console.log(input, replacement2,pattern2)
    final = input.replace(pattern2, replacement2)
  }
  console.log("final", final)
  return final
}

const switchVideo = (el,e,url) => {
  // e.preventDefault();
  console.log("done", el,e,url)
}

const FlexibleAcf = (props) => {
  const { post, meta } = props
  let slideAcf = true;
  const imgSizes = {
    full : 1840,
    half : 910,
  }

  slideAcf = (
    <div className='post__text'>
      {post.title}
      <div className="post__loop">
      {post.acf &&
          post.acf.slides_post &&
          post.acf.slides_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_gallery`) {
              return (
                /**
                 * Gallery
                 **/
                <div className='post__gallery'>
                  {layout.images && layout.images.map((photo) => {

                    const img = photo.localFile.childImageSharp.fluid
                    return (
                      <div className="post__image">
                      {img && <Img
                            style={{maxWidth:imgSizes.full}}
                            fluid={img}
                            alt={photo.title}
                            className="featured-image" />}
                      </div>
                    )
                  })}
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_double`) {
              console.log('doube_1', layout.image)
              const img = layout.image.localFile.childImageSharp.fluid
              console.log('doube_2', layout.image_2)
              const img2 = layout.image_2.localFile.childImageSharp.fluid
              return (
                /**
                 * Double
                 **/
                <div className='post__double'>

                  {console.log('size', imgSizes.half)}
                  {img && <Img
                            style={{maxWidth:imgSizes.half}}
                            fluid={img}
                            alt={layout.image.title}
                            className="featured-image" />}
                  {img2 && <Img
                            style={{maxWidth:imgSizes.half}}
                            fluid={img2}
                            alt={layout.image_2.title}
                            className="featured-image" />}
                </div>
              )
            }else if(layout.__typename === `WordPressAcf_text`) {
              const txt = layout.text
              return (
                /**
                 * Text
                 **/
                <div className='post__text'>
                  <div dangerouslySetInnerHTML={{ __html: txt }} />
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_video`) {
              const img = layout.image.localFile.childImageSharp.fluid
              const video_file = layout.video_file
              const video_url = layout.video_url
              const videoSrcURL = convertVideo(layout.video_url)
              return (
                /**
                 * Video
                 **/
                 <div className='post__video'>
                  {img && <a href="#" onClick="switchVideo(this,e,{layout.video_url});" className="post__video--link">
                          <Img
                            style={{maxWidth:imgSizes.full}}
                            fluid={img}
                            alt={layout.image.title}
                            className="featured-image" />
                           </a>
                           }
                      <div className="video-wrapper">
                        <iframe
                        src={videoSrcURL}
                        title={video_url}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                      />
                      </div>
                  <div dangerouslySetInnerHTML={{ __html: video_url }} />
                  <div dangerouslySetInnerHTML={{ __html: videoSrcURL }} />
                </div>
              )
            }
            //return null
          })}
      </div>
    </div>
  )
  return (
    <div className="post__sildes">
      {slideAcf}
    </div>
  )
}

export default FlexibleAcf
