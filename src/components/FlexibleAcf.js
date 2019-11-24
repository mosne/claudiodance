/* eslint-disable jsx-a11y/media-has-caption */
/**
 * FlexibleAcf
 * */
import React from 'react';
import Img from 'gatsby-image'
import MosneVideo from '../components/video'


const FlexibleAcf = (props) => {
  const { post, meta, index } = props
  let slideAcf = true;
  const imgSizes = {
    full : 1840,
    half : 910,
  }

  slideAcf = (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="post__loop">
      {post.acf &&
          post.acf.slides_post &&
          post.acf.slides_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_gallery`) {
              return (
                /**
                 * Gallery
                 * */
                <div className='post__gallery' key={`acf-${post.id}-${i}`}>
                  {layout.images && layout.images.map((photo,j) => {

                    const img = photo.localFile.childImageSharp.fluid
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className="post__image" key={`acf-${post.id}-img-${j}`}>
                        {img && <Img
                          style={{maxWidth:imgSizes.full}}
                          fluid={img}
                          alt={photo.title}
                          className="featured-image"
                        />}
                      </div>
                    )
                  })}
                </div>
              )
            // eslint-disable-next-line no-underscore-dangle
            }else if (layout.__typename === `WordPressAcf_double`) {
              // console.log('doube_1', layout.image)
              const img = layout.image.localFile.childImageSharp.fluid
              // console.log('doube_2', layout.image_2)
              const img2 = layout.image_2.localFile.childImageSharp.fluid
              return (
                /**
                 * Double
                 * */
                // eslint-disable-next-line react/no-array-index-key
                <div className='post__double' key={`acf-${post.id}-${i}`}>

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
                 * */
                <div className='post__text' key={`acf-${post.id}-${i}`}>
                  <div dangerouslySetInnerHTML={{ __html: txt }} />
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_video`) {
              /**
               * Video
               * */
                if (typeof(layout.video_file) !== "undefined" ){
                  return (
                    <div className='post__video'>
                      <div className="inlinevideo">
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video
                          disableremoteplayback
                          autoPlay
                          playsinline
                          muted
                          poster
                          loop
                          preload="auto"
                          className="video"
                        >
                          <source
                            src={layout.video_file.localFile.publicURL} 
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  )
                }else if (typeof(layout.image !== "undefined")) {
                  return (
                    <MosneVideo
                      img={img}
                      url={layout.video_url}
                      size={imgSizes.full}
                      image={layout.image}
                      key={`acf-${post.id}-${i}`}
                    />
                  )
                }
            }
          })
    }
    </div>
  )
  return (
    <div className="post__sildes" key="acf">
      {slideAcf}
    </div>
  )
}

export default FlexibleAcf
