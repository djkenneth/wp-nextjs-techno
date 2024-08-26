'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";

import { cn } from '@/lib/utils'

import { Container, Section } from '../craft'
import Progress from '@/molecules/Progress'

const OurExperience = () => {
    const [ref, inView, entry] = useInView();
    const [progress, setProgress] = useState(0);

    // useEffect(() => {
    //     const targetProgress = 90;
    //     const increment = 5; // Change this value to control the speed
    //     const interval = 100; // Time in milliseconds between each increment

    //     const timer = setInterval(() => {
    //         setProgress(prev => {
    //             const newProgress = prev + increment;
    //             if (newProgress >= targetProgress) {
    //                 clearInterval(timer);
    //                 return targetProgress;
    //             }
    //             return newProgress;
    //         });
    //     }, interval);

    //     return () => clearInterval(timer);
    // }, []);

    return (
        <Section>
            <Container>
                <div className={cn('flex gap-10 flex-col md:flex-row')}>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/12/video-img3.png'}
                            alt={'image'}
                            width={500}
                            height={500}
                            className="w-full md:my-0"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-5 flex flex-col justify-center">
                        <div className="flex flex-col items-start gap-5">
                            <span className="text-left text-primaryBlue text-base font-medium uppercase tracking-[.30em]">Our Experience</span>
                            <h2 className="capitalize md:text-4xl md:font-bold md:my-0">Stay Up, Stay Running & Protected</h2>
                            <p className="text-lg font-light">High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions</p>
                        </div>

                        <div ref={ref} className="space-y-8">
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <p className="text-base font-normal">Web Development</p>
                                    <p className="text-base font-normal">90%</p>
                                </div>
                                <Progress value={entry?.isIntersecting ? 90 : 0} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <p className="text-base font-normal">Web Development</p>
                                    <p className="text-base font-normal">40%</p>
                                </div>
                                <Progress value={entry?.isIntersecting ? 40 : 0} className="h-[5px]" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <p className="text-base font-normal">Web Development</p>
                                    <p className="text-base font-normal">20%</p>
                                </div>
                                <Progress value={entry?.isIntersecting ? 20 : 0} className="h-[5px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default OurExperience