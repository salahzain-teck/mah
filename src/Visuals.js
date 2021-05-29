import React from 'react'
import './Visuals.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from './Footer';


function Visuals() {

    return (
        <div classNames='visuals'>
            <div className='about_header '>
               <div className='accont_parent'>
               <div className='acconts_head float-right  '>
                  <a href='https://www.facebook.com/drmahazhari'> <FacebookIcon/></a>  
                  <a href='https://instagram.com/dr.mahazhari?utm_medium=copy_link'> <InstagramIcon/></a>  
                  <a href='https://twitter.com/drmahazhari'> <TwitterIcon/></a>  
                  <a href='https://www.youtube.com/c/drmahazhari/featured'> <YouTubeIcon/></a>  
                </div> 
               </div>
             
                <div className='main_title    '>
                    <h1>VIDEO GALLERY</h1>
                    <p>Home / VIdeo Gallery</p>
                </div>
            </div> 

          <div className='visual_contents'>
          <div className='row_container'>
  
    <Row className='row_class'>
   
    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9">
    <iframe  src="https://www.youtube.com/embed/U8isZu-N0vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
      
    </div></Col>


    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/l-SQy2NGPyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
   <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
    </div>
    </Col>

    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/793ffBhWAXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
    </div>
    </Col>

  </Row>

  <Row className='row_class'>
    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9 ">
    <iframe src="https://www.youtube.com/embed/BRrRd6q9Tbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
      </div>
    </Col>

    


    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9">
    <iframe  src="https://www.youtube.com/embed/qkRxgIxPbAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
    
    </div>
    </Col>

    <Col sm><div className='video_card'>
    <div class="ratio ratio-16x9">
    <iframe  src="https://www.youtube.com/embed/spAgknxD968" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className='video_caption'>
         <p>sample video</p>
       </div>
       </div>
   </div>
   </Col>

  </Row>

    </div>
    </div>
        

    <Footer/>
  </div>

    )
}
export default Visuals
