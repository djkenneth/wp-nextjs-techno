import React from 'react'
import { Container, Section } from '../craft'
import HeroCard from '../Cards/HeroCard'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AboutSection, HeroSection } from '@/types/graphql'
import { cn } from '@/lib/utils'

const About = ({ heroSection, aboutSection }: any) => {
    return (
        <Section className="bg-white-egg">
            <Container className="md:-mt-40">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {heroSection && heroSection!.heroSection!.heroCard!.map((item: any, index: number) => (
                        <HeroCard key={item.title} title={item.title} description={item.description} index={index} />
                    ))}
                </div>
            </Container>
            <Container>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-full relative">
                            <Image
                                src={`${aboutSection?.aboutSection?.aboutImage?.node?.sourceUrl!}`}
                                alt={aboutSection?.aboutSection?.aboutImage?.node?.title!}
                                className="!relative md:!absolute"
                                fill
                                sizes='100vw'
                                style={{ objectFit: 'contain' }}
                            ></Image>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="flex flex-col justify-center gap-7 md:flex-row md:items-center">
                            <span className={cn("font-bold text-9xl text-primaryBlue")}>{aboutSection?.aboutSection?.aboutBigHeading}</span>
                            <h2 className={cn("my-0 text-4xl font-bold md:my-0")}>{aboutSection?.aboutSection?.aboutTitle}</h2>
                        </div>
                        <div className="text-lg font-light" dangerouslySetInnerHTML={{ __html: aboutSection?.aboutSection?.aboutDescription! }}></div>
                        <Button className="uppercase bg-primaryBlue px-14 py-6 hover:bg-white hover:text-primaryBlue duration-500">More Details</Button>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default About