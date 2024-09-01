'use client';

import Image from 'next/image';
import React from 'react'

import Slider from "react-slick";
import { get } from 'lodash';

const BrandSlider = ({ }) => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="!flex !justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 duration-200">
                    <Image
                        src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/10/b3.png'}
                        alt="image"
                        width={300}
                        height={300}
                        className="w-36"
                    />
                </div>
                <div className="!flex !justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 duration-200">
                    <Image
                        src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/10/b3.png'}
                        alt="image"
                        width={300}
                        height={300}
                        className="w-36"
                    />
                </div>
                <div className="!flex !justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 duration-200">
                    <Image
                        src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/10/b3.png'}
                        alt="image"
                        width={300}
                        height={300}
                        className="w-36"
                    />
                </div>
                <div className="!flex !justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 duration-200">
                    <Image
                        src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/10/b3.png'}
                        alt="image"
                        width={300}
                        height={300}
                        className="w-36"
                    />
                </div>
            </Slider>
        </div>
    )
}

export default BrandSlider