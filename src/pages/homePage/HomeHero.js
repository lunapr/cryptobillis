import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard } from 'swiper';

import skin1 from './../../assets/Images/Skins/IMG_3338.PNG'
import skin2 from './../../assets/Images/Skins/IMG_3340.PNG'
import skin3 from './../../assets/Images/Skins/IMG_3342.PNG'
import skin4 from './../../assets/Images/Skins/IMG_3354.PNG'
import skin5 from './../../assets/Images/Skins/IMG_3357.PNG'
import skin6 from './../../assets/Images/Skins/IMG_3358.PNG'
import skin7 from './../../assets/Images/Skins/IMG_3361.PNG'
import skin8 from './../../assets/Images/Skins/IMG_3366.PNG'
import skin9 from './../../assets/Images/Skins/IMG_3371.PNG'


import imghair1 from './../../assets/Images/Hair/IMG_1132.PNG'
import imghair2 from './../../assets/Images/Hair/IMG_1245.PNG'
import imghair3 from './../../assets/Images/Hair/IMG_1290.PNG'
import imghair4 from './../../assets/Images/Hair/IMG_1454.PNG'
import imghair5 from './../../assets/Images/Hair/IMG_1871.PNG'
import imghair6 from './../../assets/Images/Hair/IMG_1874.PNG'
import imghair7 from './../../assets/Images/Hair/IMG_2127.PNG'
import imghair8 from './../../assets/Images/Hair/IMG_2558.PNG'
import imghair9 from './../../assets/Images/Hair/IMG_3260.PNG'
import imghair10 from './../../assets/Images/Hair/IMG_3263.PNG'
import imghair11 from './../../assets/Images/Hair/IMG_3308.PNG'
import imghair12 from './../../assets/Images/Hair/IMG_3313.PNG'
import imghair13 from './../../assets/Images/Hair/IMG_3324.PNG'
import imghair14 from './../../assets/Images/Hair/IMG_3400.PNG'
import imghair15 from './../../assets/Images/Hair/IMG_3422.PNG'
import imghair16 from './../../assets/Images/Hair/IMG_3651.PNG'
import imghair17 from './../../assets/Images/Hair/IMG_3675.PNG'

import imgmouth1 from './../../assets/Images/Mouths/IMG_2134.PNG'
import imgmouth2 from './../../assets/Images/Mouths/IMG_2147.PNG'
import imgmouth3 from './../../assets/Images/Mouths/IMG_2150.PNG'
import imgmouth4 from './../../assets/Images/Mouths/IMG_2480.PNG'
import imgmouth5 from './../../assets/Images/Mouths/IMG_3854.PNG'
import imgmouth6 from './../../assets/Images/Mouths/IMG_3858.PNG'
import imgmouth7 from './../../assets/Images/Mouths/IMG_3867.PNG'
import imgmouth8 from './../../assets/Images/Mouths/IMG_3870.PNG'
import imgmouth9 from './../../assets/Images/Mouths/IMG_3871.PNG'
import imgmouth10 from './../../assets/Images/Mouths/IMG_4129.PNG'
import imgmouth11 from './../../assets/Images/Mouths/IMG_4130.PNG'
import imgmouth12 from './../../assets/Images/Mouths/IMG_4131.PNG'

import imgglass1 from './../../assets/Images/Glasses/IMG_0963.PNG'
import imgglass2 from './../../assets/Images/Glasses/IMG_0988.PNG'
import imgglass3 from './../../assets/Images/Glasses/IMG_1014.PNG'
import imgglass4 from './../../assets/Images/Glasses/IMG_1064.PNG'
import imgglass5 from './../../assets/Images/Glasses/IMG_1097.PNG'
import imgglass6 from './../../assets/Images/Glasses/IMG_1127.PNG'
import imgglass7 from './../../assets/Images/Glasses/IMG_2823.PNG'
import imgglass8 from './../../assets/Images/Glasses/IMG_3096.PNG'
import imgglass9 from './../../assets/Images/Glasses/IMG_3102.PNG'
import imgglass10 from './../../assets/Images/Glasses/IMG_3141.PNG'
import imgglass11 from './../../assets/Images/Glasses/IMG_3146.PNG'
import imgglass12 from './../../assets/Images/Glasses/IMG_3150.PNG'
import imgglass13 from './../../assets/Images/Glasses/IMG_3163.PNG'
import imgglass14 from './../../assets/Images/Glasses/IMG_3199.PNG'
import imgglass15 from './../../assets/Images/Glasses/IMG_3201.PNG'
import imgglass16 from './../../assets/Images/Glasses/IMG_3819.PNG'
import imgglass17 from './../../assets/Images/Glasses/IMG_3830.PNG'
import imgglass18 from './../../assets/Images/Glasses/IMG_3835.PNG'

import imgpiercing1 from './../../assets/Images/Piercings/IMG_2612.PNG'
import imgpiercing2 from './../../assets/Images/Piercings/IMG_2653.PNG'
import imgpiercing3 from './../../assets/Images/Piercings/IMG_2658.PNG'
import imgpiercing4 from './../../assets/Images/Piercings/IMG_2701.PNG'
import imgpiercing5 from './../../assets/Images/Piercings/IMG_2707.PNG'
import imgpiercing6 from './../../assets/Images/Piercings/IMG_2752.PNG'
import imgpiercing7 from './../../assets/Images/Piercings/IMG_4029.PNG'
import imgpiercing8 from './../../assets/Images/Piercings/IMG_4286.PNG'
import imgpiercing9 from './../../assets/Images/Piercings/IMG_4288.PNG'


import imgearing1 from './../../assets/Images/Earrings/IMG_2738.PNG'
import imgearing2 from './../../assets/Images/Earrings/IMG_2785.PNG'
import imgearing3 from './../../assets/Images/Earrings/IMG_2798.PNG'
import imgearing4 from './../../assets/Images/Earrings/IMG_3943.PNG'
import imgearing5 from './../../assets/Images/Earrings/IMG_4209.PNG'
import imgearing6 from './../../assets/Images/Earrings/IMG_4220.PNG'
import imgearing7 from './../../assets/Images/Earrings/IMG_4234.PNG'











// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const useStyles = makeStyles((theme) => (
  {
    container_row :{
        display: 'block',
        position : 'relative',
        width : '100%',

      },
      layer1 :{
        display : 'flex',
        position : 'relative',
        zIndex : '2'
      },
      layer2 : {
        display : 'flex',
        position : 'relative',
        zIndex : '4',
      },
      layer4 : {
        display : 'flex',
        position : 'relative',
        zIndex : '6'
      } ,     

}));

export default function HomeHero(props) {
    const classes = useStyles();
    
    return(
        <div className={classes.container_row}>
<Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer1}
  >
    <SwiperSlide>
        <div>
        <img src={skin1} ></img>
        </div>
    </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={skin2} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={skin3}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin3}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin4}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin5}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin6}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin7}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={skin8}></img>
              </div>
        </SwiperSlide>
  </Swiper>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer2}
  >
    <SwiperSlide>
        <div>
        <img src={imghair1} ></img>
        </div>
    </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair2} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair3}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={imghair4}></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={imghair5}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair6}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair7}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair8}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair9}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair10}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair11}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair12}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair13}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair14}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair15}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair16}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imghair17}></img>
              </div>
        </SwiperSlide>
  </Swiper>
  {/* <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer1}
  >
    <SwiperSlide>
        <div>
        <img src={imgmouth1} ></img>
        </div>
    </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth2} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth3}></img>
              </div>
        </SwiperSlide>

        <SwiperSlide>
              <div>
              <img src={imgmouth4}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth5}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth6}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth7}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth8}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth9}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth10}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth11}></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgmouth12}></img>
              </div>
        </SwiperSlide>
  </Swiper> */}
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer4}
    >
    <SwiperSlide>
        <div>
        <img src={imgglass1} ></img>
        </div>
    </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass2} ></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={imgglass3} ></img>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div>
              <img src={imgglass4} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass5} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass6} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass7} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass8} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass9} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass10} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass11} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass12} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass13} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass14} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass15} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass16} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass17} ></img>
              </div>
        </SwiperSlide>
          <SwiperSlide>
              <div>
              <img src={imgglass18} ></img>
              </div>
        </SwiperSlide>
  </Swiper>          
  {/* <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer1}
    >
    <SwiperSlide>
        <div>
        <img src={imgpiercing1}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing2}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing3}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing4}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing5}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing6}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing7}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing8}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing9}></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgpiercing1}></img>
        </div>
    </SwiperSlide>
  </Swiper>      */}
  {/* <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={classes.layer1}
    >
    <SwiperSlide>
        <div>
        <img src={imgearing1} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing2} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing3} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing4} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing5} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing6} ></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <img src={imgearing7} ></img>
        </div>
    </SwiperSlide>
    </Swiper>  
    */}



        </div>
    );
}