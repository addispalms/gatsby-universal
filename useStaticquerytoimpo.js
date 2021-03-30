using graphql to import images 


<Swiper
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={alle} alt="alle" /></SwiperSlide>
      <SwiperSlide><img src={roof} alt="alle" /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};







import bar from 'home/yeshi/Documents/misikir/content/images/insta/corrugated_roof.png'; 

${__dirname}/content`

import bar from 'home/yeshi/Documents/misikir/content/images/insta/i_sketched_a_hand.png'; 


import alle from '/home/yeshi/Documents/misikir/content/images/insta/alle_art_project.png'


import hand from 'home/yeshi/Documents/misikir/content/images/insta/i_sketched_a_hand.png'; 

import alle from
'/home/yeshi/Documents/misikir/content/images/insta/alle_art_project.png';

'home/yeshi/Documents/misikir/content/images/insta/corrugated_roof.png'

 /home/yeshi/Documents/misikir/content/images/insta
/addis_Ababa_city_landscape.png    

/home/yeshi/Documents/misikir/content/images/insta
/misikir_reinforcement_bars_applied.png
 
 /home/yeshi/Documents/misikir/content/images/insta
/alle_art_project.png             
 
  /home/yeshi/Documents/misikir/content/images/insta
/misikir_self_image.png

/home/yeshi/Documents/misikir/content/images/insta
/art_mask.png                      
 
 /home/yeshi/Documents/misikir/content/images/insta
/miskir_moldy_tree.png
 /home/yeshi/Documents/misikir/content/images/insta
/building_addis_.png  

 	/home/yeshi/Documents/misikir/content/images/insta


const slides = []; 
for (let i = 0; i < 5; i += 1) {
	slides.push(
     <SwiperSlide
	)
}



<Swiper>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
</Swiper>


x-special/nautilus-clipboard
copy
file:///home/yeshi/Documents/misikir/content/images/insta/

alle_art_project.png
file:///home/yeshi/Documents/misikir/content/images/

insta/art_mask.png
file:///home/yeshi/Documents/misikir/content/images/insta/building_addis_.png



const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "alle_art_project.png
" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      image2: file(relativePath: { eq: "insta/art_mask.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)






import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;



lets create a simple query from header 

import React from "react" 
import {useStaticQuery, graphql from "gatsby"}

export default function Header() {
	
	const data= useStaticQuery(graphql `
	)
}