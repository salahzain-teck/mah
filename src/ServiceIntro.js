import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import './ServiceIntro.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row' 
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import image1 from './Images/service2.jpg' 
import image2 from './Images/service3.jpg' 

   
  function ServiceIntro() {
     

     const [content, setContent] = useState({   
                                
    sample1:true,
    head: 'SAMPLE HEADER',
    image : image1,
    caption: 'We want to ensure optimum use of our website for you, and also to continually improve our website. We can also show you use-based content and advertising, and to this end we work with selected partners You also receive advertising on other websites through these partners. You can revoke your voluntary consent at any time. You can find further information and setting options under "Settings" and in our data protection information'
                                
    })


    return (
        <>
    <Container fluid className='service_intro'>
    
      <div className='row_div'  >
     
      <Row >
       <Col sm ><p onClick={()=> setContent({
          sample1: true,
          head: 'SAMPLE HEADER',
          image : image1,
         
          caption: 'We want to ensure optimum use of our website for you, and also to continually improve our website. We can also show you use-based content and advertising, and to this end we work with selected partners You also receive advertising on other websites through these partners. You can revoke your voluntary consent at any time. You can find further information and setting options under "Settings" and in our data protection information'
        })} 
        className={`head ${content.sample1 ? 'active' : ''}`}>SAMPLE1 <div  className='arrow_icon'> {content.sample1 ?  < ArrowDropDownSharpIcon /> : ""}</div> </p> 
                    
        </Col> 
        
       <Col sm > <p  onClick={()=> setContent({
         sample2: true,
         head : 'SAMPLE HEADER',
         image: 'https://markazlive.com/wp-content/uploads/2018/11/Dr-Mah-Azhari-Talk-at-Morocco-Sufi-Conference.jpg',
         caption:'Mercedes-Benz, commonly referred to as Mercedes, is both a German automotive brand and, from late 2019 onwards, a subsidiary – as Mercedes-Benz AG – of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles. The headquarters is in Stuttgart, Baden-Württemberg.'
        })} 
            className={`head ${content.sample2 ? 'active' : ''}`}>SAMPLE2  <div  className='arrow_icon'> {content.sample2 ?  < ArrowDropDownSharpIcon /> : ""}</div></p>
        </Col>
            

      <Col  sm ><p onClick={()=> setContent({ 
        head : 'SAMPLE HEADER',
        sample3: true,
        image : image2 ,
        caption : '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'             
      })} 
        className={`head ${content.sample3 ? 'active' : ''}`}>SAMPLE3 <div  className='arrow_icon'> {content.sample3 ?  < ArrowDropDownSharpIcon /> : ""}</div> </p>
      </Col>
        

       <Col sm > <p  onClick={()=> setContent({
           head: 'SAMPLE HEADER',
         sample4: true,
         image : 'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/158578098603710006_1024x1024.jpg?v=1585781020',
         caption: 'Mercedes-Benz, commonly referred to as Mercedes, is both a German automotive brand and, from late 2019 onwards, a subsidiary – as Mercedes-Benz AG – of Daimler AG. Mercedes-Benz is known for producing luxury vehicles and commercial vehicles. The headquarters is in Stuttgart, Baden-Württemberg.'
        })} 
          className={`head ${content.sample4 ? 'active' : ''}`}>SAMPLE4  <div  className='arrow_icon'> {content.sample4 ?  < ArrowDropDownSharpIcon /> : ""}</div></p>
      </Col>
     </Row>
    </div>

      <div className= 'content_div' >
        <Row> 
         <Col lg >
         <div className='image_holder '>
         <img className='image '   src={content.image}/> 
         </div>
         </Col>
      
         <Col lg >
         <div className='content_holder '>
         <h4>{content.head}</h4>
            <p>
             {content.caption}
            </p>
         </div>
          </Col>
        </Row>

       </div>  
      
    </Container>
        
  </>
    
    )
}
export default ServiceIntro;




