'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import type { TemplateCaseStudiesPostQuery } from '@/types/graphql';

import Slider from "react-slick";
import { get } from 'lodash';

const CaseStudySlider = ({ caseStudies }: TemplateCaseStudiesPostQuery) => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div>
            <Slider {...settings}>
                {caseStudies?.nodes.map((data: any) => {
                    
                    const title = get(data, 'title')
                    const sourceUrl = get(data, 'caseStudies.thumbnail.node.sourceUrl');
                    const categoryName = get(data, 'caseStudyCategories.nodes[0].name');
                    const categorySlug = get(data, 'caseStudyCategories.nodes[0].slug');
                    
                    return (
                        <div key={data.title} className='group'>
                            <div className="relative overflow-hidden w-full before:content-[''] before:absolute before:h-full before:w-full before:bg-primaryBlue/50 before:left-0 before:top-0 before:opacity-0 before:invisible before:transform before:duration-100 hover:before:opacity-100 hover:before:visible">
                                {sourceUrl && (
                                    <Image src={sourceUrl} alt="image" width={300} height={300} className="w-full md:my-0" />
                                )}
                                <div className="bg-white w-[80%] mx-auto rounded-lg py-10 px-2 flex flex-col justify-center absolute left-0 right-0 -bottom-36 transform duration-500 group-hover:bottom-24">
                                    <h4 className="text-center hover:text-primaryBlue md:font-bold md:my-0">{title}</h4>
                                    <Link href="#" className="text-center text-sm md:text-primaryBlue md:no-underline">{categoryName}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default CaseStudySlider