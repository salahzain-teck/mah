import React from 'react'
import './Biography.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from './Footer';

function Biography() {
    return (
        < >
        <div className='main_div'>
            
            <div className='about_header '>
                <div className='accont_parent'>
                  <div className='acconts_head float-right  '>
                    <a href='https://www.facebook.com/drmahazhari'> <FacebookIcon/></a>  
                    <a href='https://instagram.com/dr.mahazhari?utm_medium=copy_link'> <InstagramIcon/></a>  
                    <a href='https://twitter.com/drmahazhari'> <TwitterIcon/></a>  
                    <a href='https://www.youtube.com/c/drmahazhari/featured'> <YouTubeIcon/></a>  
                  </div> 
               </div>
                <div className='main_title'>
                   <h1>ABOUT DR MAH AZHARI</h1>
                   <p>Home / About</p>
                </div>
            </div>   

            <div className='content_area'>
             
                <div className='sidebar'>
                    
                    <div className='profile_img'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqG5UbZMQX2sYc45HdkwgLr6XZ75LSDMCoYXLLdkl1DigE2l4YtCN1j0hhGGHX1SO9oTo&usqp=CAU' />
                    </div>
                   
                   <div className='name_div'>
                    <h5>DR ABDUL HAKKIM AZHARI</h5>
                    <p>MD Markaz knowledge city</p>
                   </div>
                  
                   <div className='details_head'>
                       <p>PERSONAL DETAILS</p>
                    </div>
                   
                   <hr/>

                   <div className='details'>
                    <p className='p_div'>Born</p>
                    <sapn><p> 33 March 1900</p></sapn>  
                   </div>
                   
                   <hr/>
            
                    <div className='details'>
                      <p className='p_div'>Loaction</p>
                      <span> <p> Kanthapuram</p></span>  
                    </div>
                   
                   <hr/>
                   
                   <div className='details'>
                       <p className='p_div'>Nationality</p>
                       <span>  <p>India</p></span>
                   </div>
                   
                   <hr/>
                   
                   <div className='details'>
                      <p className='p_div' >Father</p>
                      <span><p>Sheikh Aboobacker Ahmed</p></span>  
                   </div>
                   
                   <hr/>
                   
                   <div className='details'>
                       <p className='p_div'>Mother</p>
                       <sapn><p>Mother</p></sapn>
                   </div>
                   
                   <hr/>
                   <div className='details'>
                      <p className='p_div'>Education</p>
                      <span><p>Al Azhar Egypt</p></span> 
                   </div>
                   <hr/>
                
                   <div className=' sm_div' >
                       <a href='https://www.facebook.com/drmahazhari'> <span><FacebookIcon className='sm_icon' /></span></a>
                       <a  href='https://instagram.com/dr.mahazhari?utm_medium=copy_link'><span><InstagramIcon className='sm_icon'   /></span></a>
                       <a href='https://twitter.com/drmahazhari'> <span><TwitterIcon  className='sm_icon' /></span></a>
                    </div>
                  
                </div>

                <div className='main_content'>
                    <div className='content_header_div'>
                        <div className='content_header'>
                            <h5>DR Abdul Hakkim Azhari</h5>
                        </div>
                      
                    </div>
                    <div className='content_text'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
       
        </>
    )
}     
export default Biography
