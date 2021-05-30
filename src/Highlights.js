import React from 'react'
import Carousel from "react-elastic-carousel";

import './HighLights.css'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function Highlights() {
  return (
    <div className='highlights'>
    
    <div className='content_section '>
      <div className='header_section'>
        <h3>HEADLINES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className='carousel_section'>
      <Carousel    breakPoints={breakPoints}>
        
        <div className='item bg-dark '>
          <div className='img_div bg-dark '>
           <img src='https://cdn.shopify.com/s/files/1/0043/8471/8938/products/160980393133012118_ae5a3735-c0e0-455b-ba8c-5090c91f9d92_812x.jpg?v=1609814996'/>
          </div>
          <div className='caption_div'>
            <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

        <div className='item bg-dark '>
          <div className='img_div'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTffUXwN6ZdtASxru1SJ_ULlvIHx3UXxB05Chm2QIVjbIBQ6G-vUGbQjT1STTu5dCyao&usqp=CAU' />
          </div>
          <div className='caption_div'>
          <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

        <div className='item bg-dark '>
          <div className='img_div'>
           <img src='https://cdn.shopify.com/s/files/1/0043/8471/8938/products/160980393133012118_ae5a3735-c0e0-455b-ba8c-5090c91f9d92_812x.jpg?v=1609814996'/>
          </div>
          <div className='caption_div'>
            <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

        <div className='item bg-dark '>
          <div className='img_div'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTffUXwN6ZdtASxru1SJ_ULlvIHx3UXxB05Chm2QIVjbIBQ6G-vUGbQjT1STTu5dCyao&usqp=CAU' />
          </div>
          <div className='caption_div'>
          <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

       
        <div className='item bg-dark '>
          <div className='img_div'>
           <img src='https://cdn.shopify.com/s/files/1/0043/8471/8938/products/160980393133012118_ae5a3735-c0e0-455b-ba8c-5090c91f9d92_812x.jpg?v=1609814996'/>
          </div>
          <div className='caption_div'>
            <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

        <div className='item bg-dark '>
          <div className='img_div'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTffUXwN6ZdtASxru1SJ_ULlvIHx3UXxB05Chm2QIVjbIBQ6G-vUGbQjT1STTu5dCyao&usqp=CAU' />
          </div>
          <div className='caption_div'>
          <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>
        
        <div className='item bg-dark '>
          <div className='img_div'>
           <img src='https://cdn.shopify.com/s/files/1/0043/8471/8938/products/160980393133012118_ae5a3735-c0e0-455b-ba8c-5090c91f9d92_812x.jpg?v=1609814996'/>
          </div>
          <div className='caption_div'>
            <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>

        <div className='item bg-dark '>
          <div className='img_div'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTffUXwN6ZdtASxru1SJ_ULlvIHx3UXxB05Chm2QIVjbIBQ6G-vUGbQjT1STTu5dCyao&usqp=CAU' />
          </div>
          <div className='caption_div'>
          <span> <p>JANUARY 5 2021</p></span>
           <p>totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta</p>
            
          </div>
        </div>
        
      </Carousel>
      </div>
    
    </div>
  </div>
  )
}

export default Highlights


























// import React,  { Component } from 'react'
// import Card from './Card';
// import data from './data/data'
// import './HighLights.css'


// class Highlights extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       properties: data.properties,
//       property: data.properties[0]
//     }
//   }

//   nextProperty = () => {
//     const newIndex = this.state.property.index+1;
//     this.setState({
//       property: data.properties[newIndex]
//     })
//   }

//   prevProperty = () => {
//     const newIndex = this.state.property.index-1;
//     this.setState({
//       property: data.properties[newIndex]
//     })
//   }

//   render() {
//     const {properties, property} = this.state;
//     return (
//       <div className="highlights">

//         <div className='content_section'>

//        <div className='header_section'>
         
//        <button 
//           onClick={() => this.nextProperty()} 
//           disabled={property.index === 3}
//         >Next</button>
//         <button 
//           onClick={() => this.prevProperty()} 
//           disabled={property.index === 0}
//         >Prev</button>
       
//          </div>  


//         <div className='image_section carousel'>

//         <div className="cole carousel">
//               <div className={`cards-slider active-slide-${property.index}`}>
//                 <div className="cards-slider-wrapper" style={{
//                   'transform': `translateX(-${property.index*(100/properties.length)}%)`
//                 }}>
//                   {
//                     properties.map(property => <Card key={property._id} property={property} />)
//                   }
//                 </div>
//               </div>
              
     

//             </div>
//           </div>         
       

//     </div>


      



//         </div>
    
//     );
//   }
// }


// export default Highlights;