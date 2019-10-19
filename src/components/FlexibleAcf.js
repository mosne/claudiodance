/**
 * FlexibleAcf
 **/
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
    <div className="post__loop">
      {post.acf &&
          post.acf.slides_post &&
          post.acf.slides_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_gallery`) {
              return (
                /**
                 * Gallery
                 **/
                <div className='post__gallery' key={`acf-${post.id}-${i}`}>
                  {layout.images && layout.images.map((photo,j) => {

                    const img = photo.localFile.childImageSharp.fluid
                    return (
                      <div className="post__image" key={`acf-${post.id}-img-${j}`}>
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
              // console.log('doube_1', layout.image)
              const img = layout.image.localFile.childImageSharp.fluid
              // console.log('doube_2', layout.image_2)
              const img2 = layout.image_2.localFile.childImageSharp.fluid
              return (
                /**
                 * Double
                 **/
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
                 **/
                <div className='post__text' key={`acf-${post.id}-${i}`}>
                  <div dangerouslySetInnerHTML={{ __html: txt }} />
                </div>
              )
            }else if (layout.__typename === `WordPressAcf_video`) {
              const img = layout.image.localFile.childImageSharp.fluid
              return (
                /**
                 * Video
                 **/
                <MosneVideo
                  img={img}
                  url={layout.video_url}
                  size={imgSizes.full}
                  image={layout.image}
                  key={`acf-${post.id}-${i}`}
                  ></MosneVideo>
              )
            }
            //return null
          })}
      </div>
  )
  return (
    <div className="post__sildes" key="acf">
      {slideAcf}
    </div>
  )
}

export default FlexibleAcf
