import React from 'react';
import Product from './components/productdesign-com/product';

/// TRIEND
import TriendMain from '../assets/products/Triend/Triendmain.png' ; 
import C1 from '../assets/products/Triend/carousel-images/triend1.jpg' ;
import C2 from '../assets/products/Triend/carousel-images/triend2.jpg' ;
import C3 from '../assets/products/Triend/carousel-images/triend3.jpg' ;
import C4 from '../assets/products/Triend/carousel-images/triend4.jpg' ;
import C5 from '../assets/products/Triend/carousel-images/triend5.jpg' ;
import C6 from '../assets/products/Triend/carousel-images/triend6.jpg' ;

// THUNDER
import ShavingMachine from '../assets/products/Thunder/SHAVING MACHINE.png' ; 
import S1 from '../assets/products/Thunder/carousel-images/C1.jpg' ;
import S2 from '../assets/products/Thunder/carousel-images/C2.jpg' ;
import S3 from '../assets/products/Thunder/carousel-images/C3.png' ;
import S4 from '../assets/products/Thunder/carousel-images/C4.png' ;
import S5 from '../assets/products/Thunder/carousel-images/C5.png' ;

///ICE CHIAR
import IceMain from '../assets/products/Ice-chair/yessir.png' ; 
import I1 from '../assets/products/Ice-chair/carousel-images/I1.jpg' ;
import I2 from '../assets/products/Ice-chair/carousel-images/I2.jpg' ;
import I3 from '../assets/products/Ice-chair/carousel-images/I3.png' ;
import I4 from '../assets/products/Ice-chair/carousel-images/I4.png' ;

///COCEL
import Cocel from '../assets/products/Cocel/Cocelmain.jpg' ;
import CO1 from '../assets/products//Cocel/carousel-images/CO1.jpg' ;
import CO2 from '../assets/products//Cocel/carousel-images/CO2.jpg' ;
import CO3 from '../assets/products//Cocel/carousel-images/CO3.png' ;
import CO4 from '../assets/products//Cocel/carousel-images/CO4.png' ;

///IGLOO
import Igloo from '../assets/products/Igloo/Igloomain.png' ;
import IG1 from '../assets/products//Igloo/carousel-images/IG1.jpg' ;
import IG2 from '../assets/products//Igloo/carousel-images/IG2.png' ;
import IG3 from '../assets/products//Igloo/carousel-images/IG3.png' ;
import { object, style } from 'framer-motion/client';
import { color, scale, transform } from 'framer-motion';









function ProductDesign() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <Product
        title="TRIEND"
        subtitle="2025"
        description="Triend is a thesis project for BA in interior and product design, focusing on the product designing as it is a special table designed to solve a very common problem that we may face in our daily life which is the weak or unsuccessful interactions among individuals. The table has many features that are made to solve different problems or to provide more solutions to same problem, main feature is the fidgets tool built in the table that play a huge role in self mastering and self regulation. As also the one of the main purposes of this design is reducing social stress and anxiety and promote confidence and calmness, which makes this product suitable for any kind of audience and for any kind of environment."
        mainImage={TriendMain}
       carouselImages={[
  { src: C1, style:  { transform: 'scale(1.2) translate(10px, -10px)' } },
  { src: C2, style:  { transform: 'scale(1.2) translate(10px, -10px)' }},
  { src: C3, style:  { transform: 'scale(1.2) translate(10px, -10px)' }},
  { src: C4, style:  { transform: 'scale(1.2) translate(10px, -10px)' }},
  { src: C5, style:  { transform: 'scale(1.2) translate(10px, -10px)' }},
  { src: C6, style:  { transform: 'scale(1.2) translate(10px, -10px)' }},
]}

        
      />

      <Product
        title="THUNDER"
        subtitle="2025"
        description="Thunder shaving machine is uniquely designed with cracks on the surface that are inspired by the shape of the thunder. It is designed to be light and easily portable, with the inclination of the body suface that makes the holding of the machine more comfortable and stable. Moreover, the machine can have different coloring options which can match different needs of the consumers."
       descMarginTop={
          80}
        mainImage={ShavingMachine}
        MainImageStyle={{transform: 'scale(0.8) translate(0px, -40px)'}}
           carouselImages={[
  { src: S1, style:  { transform: 'scale(1.06) translate(0px, 0px)' } },
  { src: S2, style:  { transform: 'scale(1.06) translate(0px, 0px)' } },
  { src: S3, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  { src: S4, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  { src: S5, style:  { transform: 'scale(1) translate(0px, 0px)' } },
 
]}
        
      />

      <Product
        title="ICE CHAIR"
        subtitle="2025"
        description="Ice chair is inspired by ice in general and every part of it represents a different form, for example the arms represent the smoothness of the ice, the decorative part inside the arms represents the ice flakes and the small legs for stability represent the ice cubes. It is designed to be both stable and very comfotable with the thick cusions and the smooth arms that are curved. ."
        mainImage={IceMain}
       MainImageStyle={{transform: 'scale(1) translate(0px, -40px)'}}
           carouselImages={[
  { src: I1, style:  { transform: 'scale(1.05) translate(0px, 0px)' } },
  { src: I2, style:  { transform: 'scale(1.05) translate(0px, 0px)' } },
  { src: I3, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  { src: I4, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  
           ]}
          descMarginTop={
          70
           }
      />


      <Product
        title="COCEL"
        subtitle="2025"
        description="Cocel is a unique earplug/ earloop that has two aims, the first and main one is to cancel the noise around, while the second is to be used as an accessory, knowing that it has the jewerly attached to it. The jewerly has a part that can stuck with the ear without the need for piercing the ear. 
The Cocel designed to be adjustable in case of different ear sizes, as the small string that connects the earplug with the jewerly is made from fabrics that can be streched easily without any damages. ."
        mainImage={Cocel}
                 carouselImages={[
  { src: CO1, style:  { transform: 'scale(1.05) translate(0px, 0px)' } },
  { src: CO2, style:  { transform: 'scale(1.05) translate(0px, 0px)' } },
  { src: CO3, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  { src: CO4, style:  { transform: 'scale(1) translate(0px, 0px)' } },
  
           ]}
        descMarginTop={
          60
        }
      />


      <Product
        title="IGLOO"
        subtitle="2024"
        description="Igloo desk is a studying desk combined with a beautiful harmonic mix of both organic and geometric shapes, inspired by the igloo with the aim of isolation for a better concentration result. It is ideal for studying and remote working as it has a good lighting, a space for all the needed tools, a small fountain on the side that is calming and stress reducing, which also result of helping the user to experience less distraction and a more productive time working."
        mainImage={Igloo}
        MainImageStyle={{width:'350px', margin:'0 80px 0 0'}}
         carouselImages={[
  { src: IG1, style:  { transform: 'scale(1.2) translate(0px, 0px)' } },
  { src: IG2, style:  { transform: 'scale(1.2) translate(0px, 0px)' } },
  { src: IG3, style:  { transform: 'scale(1.2) translate(0px, 0px)' } },
 
  
           ]}
          descMarginTop={
          60
        }
      />


      {/* Add more <Product /> components here with different props as needed */}
    </div>
  );
}

export default ProductDesign;
