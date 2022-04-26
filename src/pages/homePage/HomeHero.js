import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard } from 'swiper';
import skin1 from './../../assets/Images/Skins/IMG_3338.PNG'
import skin2 from './../../assets/Images/Skins/IMG_3340.PNG'
import skin3 from './../../assets/Images/Skins/IMG_3342.PNG'
import imghair1 from './../../assets/Images/Hair/IMG_1454.PNG'
import imghair2 from './../../assets/Images/Hair/IMG_1132.PNG'
import imghair3 from './../../assets/Images/Hair/IMG_1871.PNG'


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