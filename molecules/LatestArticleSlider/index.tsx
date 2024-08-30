'use client';

import React from 'react'
import Image from 'next/image';

import Slider from "react-slick";

import { Container } from '@/components/craft';
import { Button } from '@/components/ui/button'

import { IoIosArrowForward } from "react-icons/io";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { get } from 'lodash';

const LatestArticleSlider = ({ articles }: any) => {

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={cn("flex justify-center items-center z-10 before:content-[''] hover:bg-primaryBlue w-14 h-14 rounded-full bg-primaryBlue", className)}
                onClick={onClick}
            >
                <BsArrowRight className="text-white size-7" />
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={cn("flex justify-center items-center z-10 before:content-[''] hover:bg-primaryBlue w-14 h-14 rounded-full bg-primaryBlue", className)}
                onClick={onClick}
            >
                <BsArrowLeft className="text-white size-7" />
            </div>
        );
    }

    const settings = {
        dots: true,
        dotsClass: "custom-pagination-slider",
        infinite: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
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
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <Slider {...settings}>
                {articles && articles.map((article: any) => (
                    <div key={article.title} className="p-3">
                        <div className="bg-white w-full">
                            <div className="relative">
                                <Image width={400} height={400} src={get(article, 'customArticle.thumbnail.node.sourceUrl')} alt={get(article, 'customArticle.thumbnail.node.title')} className="w-full h-[17rem] md:my-0 object-cover" />
                                {article && article.articleCategories.nodes.map((badge: any, index: number) => (
                                    <Badge key={badge.id} className={cn("absolute top-5 z-10 uppercase bg-primaryBlue py-2 px-4 rounded", {
                                        "left-5": index === 0,
                                        "left-28": index === 1
                                    })}>{badge.name}</Badge>
                                ))}
                            </div>
                            <div className="p-5 pl-8 space-y-4">
                                <div className="flex">
                                    <span className="text-sm text-gray-500 pr-4">Techno</span>
                                    <span className="text-sm text-gray-500 pl-4">January 10, 2020</span>
                                </div>
                                <div className="space-y-5">
                                    <h3 className="md:text-xl md:font-semibold md:my-0 cursor-pointer transition-colors hover:text-primaryBlue">{article.title}</h3>
                                    <p className="text-gray-600 md:text-base">Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                    <Button variant="link" className="px-0 font-bold hover:no-underline hover:text-primaryBlue">
                                        Read More <IoIosArrowForward className="ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div className="p-3">
                    <div className="bg-white w-full">
                        <div>
                            <Image width={400} height={400} src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/09/blog-1-390x290.jpg'} alt="image" className="w-full h-[17rem] md:my-0 object-cover" />
                        </div>
                        <div className="p-5 pl-8 space-y-4">
                            <div className="flex">
                                <span className="text-sm text-gray-500 pr-4">Techno</span>
                                <span className="text-sm text-gray-500 pl-4">January 10, 2020</span>
                            </div>
                            <div className="space-y-5">
                                <h3 className="md:text-xl md:font-semibold md:my-0 cursor-pointer transition-colors hover:text-primaryBlue">Coin strategy can help youengage Audience</h3>
                                <p className="text-gray-600 md:text-base">Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                <Button variant="link" className="px-0 font-bold hover:no-underline hover:text-primaryBlue">
                                    Read More <IoIosArrowForward className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="bg-white w-full">
                        <div>
                            <Image width={400} height={400} src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/09/blog-1-390x290.jpg'} alt="image" className="w-full h-[17rem] md:my-0 object-cover" />
                        </div>
                        <div className="p-5 pl-8 space-y-4">
                            <div className="flex">
                                <span className="text-sm text-gray-500 pr-4">Techno</span>
                                <span className="text-sm text-gray-500 pl-4">January 10, 2020</span>
                            </div>
                            <div className="space-y-5">
                                <h3 className="md:text-xl md:font-semibold md:my-0 cursor-pointer transition-colors hover:text-primaryBlue">Coin strategy can help youengage Audience</h3>
                                <p className="text-gray-600 md:text-base">Digital Transformation in Healthcare in 2022: Lorem ipsum dolor sit amet consectet </p>
                                <Button variant="link" className="px-0 font-bold hover:no-underline hover:text-primaryBlue">
                                    Read More <IoIosArrowForward className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </Container>
    )
}

export default LatestArticleSlider