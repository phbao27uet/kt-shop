import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const bannerList = [
    'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-akko-pc75b-plus-year-of-tiger-banner_xez4yi.jpg',
    'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-co-akko-3098n-multi-modes-world-tour-london-banner_i9qvvd.jpg',
    'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/akko_gw_03-banner_z9nrrw.jpg',
]

const Slider = () => {
    return (
        <div className="slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {bannerList.map((item) => (
                    <SwiperSlide key={item}>
                        <img src={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
