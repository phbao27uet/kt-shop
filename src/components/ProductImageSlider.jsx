import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductImageSlider = (props) => {
    const [activeThumb, setActiveThumb] = useState()

    // console.log(props.images)

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="product-images-slider"
            >
                {props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product images" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setActiveThumb}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                className="product-images-slider-thumbs"
            >
                {props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

ProductImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ProductImageSlider
