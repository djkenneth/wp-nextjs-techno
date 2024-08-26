'use client';

import React from 'react'
import Image from 'next/image';

import type { TemplateTestimonialsPostQuery } from '@/types/graphql'
import { get } from 'lodash';

import Slider from "react-slick";
import { cn } from '@/lib/utils';
import { FaStar } from "react-icons/fa";

const TestimonialSlider = ({ testimonials }: TemplateTestimonialsPostQuery) => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
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
                {testimonials && testimonials.nodes.map((testimonial) => {

                    const position = get(testimonial, 'testimonialPost.testimonialPosition', null);
                    const thumbnailUrl = get(testimonial, 'testimonialPost.testimonialThumbnail.node.sourceUrl');
                    const titleThumbnail = get(testimonial, 'testimonialPost.testimonialThumbnail.node.title');

                    return (
                        <div key={testimonial.title} className={cn("flex flex-col space-y-10 p-3")}>
                            <div className="bg-white px-6 py-10 rounded-lg relative before:content-[''] before:-bottom-[20px] before:top-auto before:border-t-white before:border-r-transparent before:border-b-transparent before:border-l-white before:block before:absolute before:left-0 before:ml-0 before:h-0 before:w-0 before:border-solid before:border-[15px] [&>div>div]:text-sm [&>div>div]:text-left [&>div>div]:text-gray-600 [&>div>div]:leading-6 [&>p]:text-sm [&>p]:text-left [&>p]:text-gray-600 [&>p]:leading-6" dangerouslySetInnerHTML={{ __html: testimonial?.content as string }}>
                            </div>
                            <div className={cn("flex items-center gap-4")}>
                                <div>
                                    <Image src={thumbnailUrl as string} alt={titleThumbnail as string} width={300} height={300} className={cn("size-20 bg-white p-1 rounded-full md:my-0")} />
                                </div>
                                <div className={'space-y-3'}>
                                    <div className={cn("flex items-center gap-1")}>
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index.toString()} className={cn("text-blue-600 size-6")} />
                                        ))}
                                    </div>
                                    <div>
                                        <p className={cn("text-white font-semibold")}>{testimonial.title}</p>
                                        <p className={cn("text-white text-sm")}>{position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default TestimonialSlider