/**
 * FlexibleAcf
 **/
import React from 'react';
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FlexibleAcf = (props) => {
  const { post, slides } = props
  let slideAcf = true;

  slideAcf = (
    <div className='post__text'>
      {post.title}
      <div className="post__loop">
      {post.acf &&
          post.acf.slides_post &&
          post.acf.slides_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_gallery`) {
              return (
                <div className='post__gallery'>
                  <h2>ACF Image Gallery</h2>
                  {layout.images && layout.images.map((photo) => {

                    const img = photo.localFile.childImageSharp.fluid
                    return (
                      <div>
                      {img && <Img
                            style={{maxWidth:900}}
                            fluid={img}
                            title={post.title}
                            className="featured-image" />}
                      </div>
                    )
                  })}
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_double`) {
              // console.log(layout.image)
              console.log('doube_1', layout.image)
              const img = layout.image.localFile.childImageSharp.fluid
              console.log('doube_2', layout.image_2)
              const img2 = layout.image_2.localFile.childImageSharp.fluid
              return (
                <div className='post__double'>
                  <h2>ACF Post Photo</h2>
                  {img && <Img
                            style={{maxWidth:450}}
                            fluid={img}
                            title={post.title}
                            className="featured-image" />}
                  {img2 && <Img
                            style={{maxWidth:450}}
                            fluid={img2}
                            title={post.title}
                            className="featured-image" />}
                </div>
              )
            }else if(layout.__typename === `WordPressAcf_text`) {
              const txt = layout.text
              return (
                <div className='post__text'>
                  <h2>ACF text</h2>
                  <div dangerouslySetInnerHTML={{ __html: txt }} />
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_video`) {
              // const txt = layout.text
              return (
                <div className='post__video'>
                  <h2>ACF video</h2>
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
