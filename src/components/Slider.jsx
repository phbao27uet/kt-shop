import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const bannerList = [
    {
        slug: 'ban-phim-akko-pc75b-plus-year-of-tiger',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-akko-pc75b-plus-year-of-tiger-banner_xez4yi.jpg',
    },
    {
        slug: 'ban-phim-co-akko-3098n-multi-modes-world-tour-london',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-co-akko-3098n-multi-modes-world-tour-london-banner_i9qvvd.jpg',
    },
    {
        slug: 'ban-phim-co-5087b-multi-modes-dracula-castle',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/akko_gw_03-banner_z9nrrw.jpg',
    },
]

const Slider = () => {
    return (
        <div className="slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {bannerList.map((item) => (
                    <SwiperSlide key={item.slug}>
                        <Link to={`/catalog/${item.slug}`}>
                            <img src={item.url} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
