import React from 'react'
import './SocialActivities.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from './Footer';
function SocialActivities() {
    return (
        <div className='social_activities'>
            
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
                    <h1>SOCIAL ACTIVITIES</h1>
                    <p>Home / Social Activities</p>
                </div>

            </div> 

           
            <div className='activity_content_area'>

                <div className='actvity_content_holder'>
                <div className='activities_holder'>
                  
                 <div className='banner ' id='1'>
                     <div className='image_section'>
                     <img src='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/07/mercedes-suv-gls-1594448040.jpg'/>
                     </div>
                     <div className='caption_section'>
                         <h4>SOCIAL REFORMER</h4>
                         <hr/>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
                     </div>
                    
                 </div>
                 <div className='banner ' id='2'>
                 <div className='image_section'>
                     <img src='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/07/mercedes-suv-gls-1594448040.jpg'/>
                     </div>
                     <div className='caption_section'>
                         <h4>SOCIAL REFORMER</h4>
                         <hr/>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
                     </div>
                 </div>
                 <div className='banner' id='3'>
                 <div className='image_section'>
                     <img src='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/07/mercedes-suv-gls-1594448040.jpg'/>
                     </div>
                     <div className='caption_section'>
                         <h4>SOCIAL REFORMER</h4>
                         <hr/>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
                     </div>
                 </div>
                 <div className='banner' id='4'>
                 <div className='image_section'>
                     <img src='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/07/mercedes-suv-gls-1594448040.jpg'/>
                     </div>
                     <div className='caption_section'>
                         <h4>SOCIAL REFORMER</h4>
                         <hr/>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
                     </div>
                 </div>
          
                </div>
               <div className='chart_holder'>
                  <ul className='brochurs'>
                      <li><a href='#1'>Activities</a></li>
                      <li><a href='#2'>Activities</a></li>
                      <li><a href='#3'>Activities</a></li>
                      <li><a href='#4'>Activities</a></li>
                      <li><a href='#5'>Activities</a></li>
                      <li><a href='#6'>Activities</a></li>
                      <li><a href='#7'>Activities</a></li>
                      <li><a href='#8'>Activities</a></li>
                      <li><a href='#9'>Activities</a></li>
                      
                  </ul>
              </div>
            </div>
               

                
            </div>
                
               
                    
            
               < Footer /> 
        </div>

            

         

    )
}

export default SocialActivities
