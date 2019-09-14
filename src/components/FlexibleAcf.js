/**
 * FlexibleAcf
 **/
import React from 'react';
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"



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
                      <div class="post__image">
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
              return (
                /**
                 * Video
                 **/
                 <div className='post__video'>
                  {img && <Img
                            style={{maxWidth:imgSizes.full}}
                            fluid={img}
                            alt={layout.image.title}
                            className="featured-image" />}
                  <div dangerouslySetInnerHTML={{ __html: "video" }} />
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
