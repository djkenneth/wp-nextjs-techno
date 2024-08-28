'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { get } from 'lodash';

import { OurExperienceSection } from '@/types/graphql';

import { cn } from '@/lib/utils'

import { Container, Section } from '../craft'
import Progress from '@/molecules/Progress'

const OurExperience = ({ ourExperienceImage, ourExperienceSubTitle, ourExperienceTitle, ourExperienceDescription, ourExperienceProgress }: OurExperienceSection) => {
    const [ref, inView, entry] = useInView();
    const [progress, setProgress] = useState(0);

    return (
        <Section>
            <Container>
                <div className={cn('flex gap-10 flex-col md:flex-row')}>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={get(ourExperienceImage, 'node.sourceUrl') as string}
                            alt={get(ourExperienceImage, 'node.title') as string}
                            width={500}
                            height={500}
                            className="w-full md:my-0"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-5 flex flex-col justify-center">
                        <div className="flex flex-col items-start gap-5">
                            <span className="text-left text-primaryBlue text-base font-medium uppercase tracking-[.30em]">{ourExperienceSubTitle}</span>
                            <h2 className="capitalize md:text-4xl md:font-bold md:my-0">{ourExperienceTitle}</h2>
                            <p className="text-lg font-light">{ourExperienceDescription}</p>
                        </div>

                        <div ref={ref} className="space-y-8">
                            {ourExperienceProgress && ourExperienceProgress?.map((progress) => (
                                <div key={progress?.title} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <p className="text-base font-normal">{progress?.title}</p>
                                        <p className="text-base font-normal">{progress?.percent}%</p>
                                    </div>
                                    <Progress value={entry?.isIntersecting ? progress?.percent as number : 0} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default OurExperience