import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import ServiceIntro from './ServiceIntro';
import Highlights from './Highlights';
import Footer from './Footer';


function Home() {
    
  return (
      <>
        <Container fluid className='home'>
          <div className='title'> 
            <h1 >Dr MAH Azhari</h1>
            <div className='social'>
              <a href='https://www.facebook.com/drmahazhari'> <FacebookIcon/></a>  
              <a href='https://instagram.com/dr.mahazhari?utm_medium=copy_link'> <InstagramIcon/></a>  
              <a href='https://twitter.com/drmahazhari'> <TwitterIcon/></a>  
              <a href='https://www.youtube.com/c/drmahazhari/featured'> <YouTubeIcon/></a>  
           </div>
          </div>
       </Container>
       
       <ServiceIntro />
       <Highlights/>
       <Footer/>
      
      </>
    )
}
export default Home
