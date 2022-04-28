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





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const useStyles = makeStyles((theme) => ({
    container_row :{
        display: 'flex',
      },
      layer1 :{
        width: '100%',
      },
      layer2 : {
        width : '100%',
        marginLeft : '-100%',
        marginTop : '-1%',
      },

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
  </Swiper>
        </div>
    );
}