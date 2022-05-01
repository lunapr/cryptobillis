/** @format */

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
//Earing
import imgearing1 from "./../../assets/Images/Earrings/IMG_2738.PNG";
import imgearing2 from "./../../assets/Images/Earrings/IMG_2785.PNG";
import imgearing3 from "./../../assets/Images/Earrings/IMG_2798.PNG";
import imgearing4 from "./../../assets/Images/Earrings/IMG_3943.PNG";
import imgearing5 from "./../../assets/Images/Earrings/IMG_4209.PNG";
import imgearing6 from "./../../assets/Images/Earrings/IMG_4220.PNG";
import imgearing7 from "./../../assets/Images/Earrings/IMG_4234.PNG";
//Glass
import imgglass1 from "./../../assets/Images/Glasses/IMG_0963.PNG";
import imgglass2 from "./../../assets/Images/Glasses/IMG_0988.PNG";
import imgglass3 from "./../../assets/Images/Glasses/IMG_1014.PNG";
import imgglass4 from "./../../assets/Images/Glasses/IMG_1064.PNG";
import imgglass5 from "./../../assets/Images/Glasses/IMG_1097.PNG";
import imgglass6 from "./../../assets/Images/Glasses/IMG_1127.PNG";
import imgglass7 from "./../../assets/Images/Glasses/IMG_2823.PNG";
import imgglass8 from "./../../assets/Images/Glasses/IMG_3096.PNG";
import imgglass9 from "./../../assets/Images/Glasses/IMG_3102.PNG";
import imgglass10 from "./../../assets/Images/Glasses/IMG_3141.PNG";
import imgglass11 from "./../../assets/Images/Glasses/IMG_3146.PNG";
import imgglass12 from "./../../assets/Images/Glasses/IMG_3150.PNG";
import imgglass13 from "./../../assets/Images/Glasses/IMG_3163.PNG";
import imgglass14 from "./../../assets/Images/Glasses/IMG_3199.PNG";
import imgglass15 from "./../../assets/Images/Glasses/IMG_3201.PNG";
import imgglass16 from "./../../assets/Images/Glasses/IMG_3819.PNG";
import imgglass17 from "./../../assets/Images/Glasses/IMG_3830.PNG";
import imgglass18 from "./../../assets/Images/Glasses/IMG_3835.PNG";
//Hair
import imghair1 from "./../../assets/Images/Hair/IMG_1132.PNG";
import imghair2 from "./../../assets/Images/Hair/IMG_1245.PNG";
import imghair3 from "./../../assets/Images/Hair/IMG_1290.PNG";
import imghair4 from "./../../assets/Images/Hair/IMG_1454.PNG";
import imghair5 from "./../../assets/Images/Hair/IMG_1871.PNG";
import imghair6 from "./../../assets/Images/Hair/IMG_1874.PNG";
import imghair7 from "./../../assets/Images/Hair/IMG_2127.PNG";
import imghair8 from "./../../assets/Images/Hair/IMG_2558.PNG";
import imghair9 from "./../../assets/Images/Hair/IMG_3260.PNG";
import imghair10 from "./../../assets/Images/Hair/IMG_3263.PNG";
import imghair11 from "./../../assets/Images/Hair/IMG_3308.PNG";
import imghair12 from "./../../assets/Images/Hair/IMG_3313.PNG";
import imghair13 from "./../../assets/Images/Hair/IMG_3324.PNG";
import imghair14 from "./../../assets/Images/Hair/IMG_3400.PNG";
import imghair15 from "./../../assets/Images/Hair/IMG_3422.PNG";
import imghair16 from "./../../assets/Images/Hair/IMG_3651.PNG";
import imghair17 from "./../../assets/Images/Hair/IMG_3675.PNG";
//Mouth
import imgmouth1 from "./../../assets/Images/Mouths/IMG_2134.PNG";
import imgmouth2 from "./../../assets/Images/Mouths/IMG_2147.PNG";
import imgmouth3 from "./../../assets/Images/Mouths/IMG_2150.PNG";
import imgmouth4 from "./../../assets/Images/Mouths/IMG_2480.PNG";
import imgmouth5 from "./../../assets/Images/Mouths/IMG_3854.PNG";
import imgmouth6 from "./../../assets/Images/Mouths/IMG_3858.PNG";
import imgmouth7 from "./../../assets/Images/Mouths/IMG_3867.PNG";
import imgmouth8 from "./../../assets/Images/Mouths/IMG_3870.PNG";
import imgmouth9 from "./../../assets/Images/Mouths/IMG_3871.PNG";
import imgmouth10 from "./../../assets/Images/Mouths/IMG_4129.PNG";
import imgmouth11 from "./../../assets/Images/Mouths/IMG_4130.PNG";
import imgmouth12 from "./../../assets/Images/Mouths/IMG_4131.PNG";
//Piercing
import imgpiercing1 from "./../../assets/Images/Piercings/IMG_2612.PNG";
import imgpiercing2 from "./../../assets/Images/Piercings/IMG_2653.PNG";
import imgpiercing3 from "./../../assets/Images/Piercings/IMG_2658.PNG";
import imgpiercing4 from "./../../assets/Images/Piercings/IMG_2701.PNG";
import imgpiercing5 from "./../../assets/Images/Piercings/IMG_2707.PNG";
import imgpiercing6 from "./../../assets/Images/Piercings/IMG_2752.PNG";
import imgpiercing7 from "./../../assets/Images/Piercings/IMG_4029.PNG";
import imgpiercing8 from "./../../assets/Images/Piercings/IMG_4286.PNG";
import imgpiercing9 from "./../../assets/Images/Piercings/IMG_4288.PNG";
//Skin
import skin1 from "./../../assets/Images/Skins/IMG_3338.PNG";
import skin2 from "./../../assets/Images/Skins/IMG_3340.PNG";
import skin3 from "./../../assets/Images/Skins/IMG_3342.PNG";
import skin4 from "./../../assets/Images/Skins/IMG_3354.PNG";
import skin5 from "./../../assets/Images/Skins/IMG_3357.PNG";
import skin6 from "./../../assets/Images/Skins/IMG_3358.PNG";
import skin7 from "./../../assets/Images/Skins/IMG_3361.PNG";
import skin8 from "./../../assets/Images/Skins/IMG_3366.PNG";

const useStyles = makeStyles((theme) => ({
  hero_container: {
    position: "relative",
    display: "block",
    textAlign: "center",
    width: "100vw",
    height: "55vh",
  },
  sec_container: {
    position: "absolute",
    top: 0,
    display: "block",
    textAlign: "center",
    width: "100%",
    height: "75%",
    [theme.breakpoints.between(theme.breakpoints.values.lg - 280, "lg")]: {
      height: "76%",
    },
    //1280px+
    [theme.breakpoints.up("lg")]: {
      height: "75%",
    },
    //400px-500px - iPhone XR
    [theme.breakpoints.between(
      theme.breakpoints.values.sm - 200,
      theme.breakpoints.values.sm - 100
    )]: {
      height: "69%",
    },
    //500px-600px - Surface Duo
    [theme.breakpoints.between(theme.breakpoints.values.sm - 100, "sm")]: {
      height: "73%",
    },
    [theme.breakpoints.between("xs", theme.breakpoints.values.sm - 225)]: {
      height: "75%",
    },
    //385px - 400px - iPhone 12 Pro
    [theme.breakpoints.between(
      theme.breakpoints.values.sm - 215,
      theme.breakpoints.values.sm - 200
    )]: {
      height: "69%",
    },
    //400px-500px - Samsung Galaxy
    [theme.breakpoints.between(
      theme.breakpoints.values.sm - 200,
      theme.breakpoints.values.sm - 100
    )]: {
      height: "68%",
    },
    //375px-385px - iPhone SE
    [theme.breakpoints.between(
      theme.breakpoints.values.sm - 225,
      theme.breakpoints.values.sm - 215
    )]: {
      height: "75%",
    },
    //360px-385px
    [theme.breakpoints.between(
      theme.breakpoints.values.sm - 240,
      theme.breakpoints.values.sm - 225
    )]: {
      height: "73%",
    },
    //Blackberry - 600px
    [theme.breakpoints.only("sm")]: {
      height: "66%",
    },
  },
  skins: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "0",
  },
  hairs: {
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
  },
  mouths: {
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "0",
  },
  glasses: {
    top: "58%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("xs")]: {
      top: "57%",
    },
  },
  piercings: {
    top: "57%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "3",
    [theme.breakpoints.down("xs")]: {
      top: "55%",
    },
  },
  earings: {
    top: "56%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("xs")]: {
      top: "54%",
    },
  },

  imgStyle: {
    objectFit: "contain",
    width: "inherit",
    height: "inherit",
  },
}));

export default function HomeHero(props) {
  const classes = useStyles();
  const skins = [skin1, skin2, skin3, skin4, skin5, skin6, skin7, skin8];
  const hairs = [
    imghair1,
    imghair2,
    imghair3,
    imghair4,
    imghair5,
    imghair6,
    imghair7,
    imghair8,
    imghair9,
    imghair10,
    imghair11,
    imghair12,
    imghair13,
    imghair14,
    imghair15,
    imghair16,
    imghair17,
  ];

  const glasses = [
    imgglass1,
    imgglass2,
    imgglass3,
    imgglass4,
    imgglass5,
    imgglass6,
    imgglass7,
    imgglass8,
    imgglass9,
    imgglass10,
    imgglass11,
    imgglass12,
    imgglass13,
    imgglass14,
    imgglass15,
    imgglass16,
    imgglass17,
    imgglass18,
  ];

  const mouths = [
    imgmouth1,
    imgmouth2,
    imgmouth3,
    imgmouth4,
    imgmouth4,
    imgmouth5,
    imgmouth6,
    imgmouth7,
    imgmouth8,
    imgmouth9,
    imgmouth10,
    imgmouth11,
    imgmouth12,
  ];

  const piercings = [
    imgpiercing1,
    imgpiercing2,
    imgpiercing3,
    imgpiercing4,
    imgpiercing5,
    imgpiercing6,
    imgpiercing7,
    imgpiercing8,
    imgpiercing9,
  ];

  const earings = [
    imgearing1,
    imgearing2,
    imgearing3,
    imgearing4,
    imgearing5,
    imgearing6,
    imgearing7,
  ];

  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "150px",
        backgroundImage: "linear-gradient(#B4FFA0 55%, #ffffff 0%)",
      }}>
      <div className={classes.hero_container}>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop="true"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.skins}>
          {skins.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Skin" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.sec_container}>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop="true"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.hairs}>
          {hairs.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Hair" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.sec_container}>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop="true"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.mouths}>
          {mouths.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Mouth" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.sec_container}>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop="true"
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.glasses}>
          {glasses.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Glass" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.sec_container}>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop="true"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.piercings}>
          {piercings.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Piercing" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={classes.sec_container}>
        <Swiper
          spaceBetween={20}
          loop="true"
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay, A11y, Navigation, Scrollbar, Pagination]}
          className={classes.earings}>
          {earings.map((item) => {
            return (
              <SwiperSlide>
                <Container maxWidth="sm">
                  <img className={classes.imgStyle} src={item} alt="Earing" />
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
