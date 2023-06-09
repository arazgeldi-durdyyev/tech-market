import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'

const mainImages = 
  [{"id": "1", "src":"Images/2 Main/watch 1.png", "alt":"iWatch"}, {"id": "2", "src":"Images/2 Main/image 6.png", "alt":"phone"},
    {"id": "3", "src":"Images/2 Main/mac 1.png", "alt":"computer"}, {"id": "4", "src":"Images/2 Main/beats 1.png", "alt":"headphone"},
    {"id": "5", "src":"Images/2 Main/ipad 1.png", "alt":"iPad"},
 ];

const SlideImage = () => {
  return (
    <div>
        <Swiper modules={[Pagination, Navigation, Autoplay]}
           speed={3000}
           loop={true}
           autoplay={{
            delay:555,
            disableOnInteraction: false,
           }}
           spaceBetween={11}
           slidesPerView={2}
           navigation
           style={{marginTop:'110px'}}
           pagination={{clickable:true}}
           breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 180,
            },
            760: {
              slidesPerView: 2,
              spaceBetween: 11,
            }
           }}
           >
            {mainImages.map((image, i)=>{
                return (
                    <SwiperSlide key={image.id} style={{display:'flex', justifyContent:'center',}}> 
                        <img src={image.src} alt={image.alt} />
                    </SwiperSlide>
                )

            })}
           </Swiper>
    </div>
  )
}

export default SlideImage