'use client'

import React from 'react'
import { ReactTyped } from "react-typed";

import { Container, Section } from '../craft'
import { HeroSection } from '@/types/graphql'
import { Button } from '../ui/button'

const Hero = ({ heroSection }: HeroSection) => {
    return (
        <Section className="h-dvh bg-center bg-no-repeat bg-cover md:h-auto md:py-52" style={{ backgroundImage: `url(${heroSection?.heroBackground?.node?.sourceUrl!})` }}>
            <Container>
                <div className="space-y-6">
                    <h3 className="text-white text-2xl text-center uppercase md:text-3xl md:font-bold">{heroSection?.heroSubTitle}</h3>
                    {/* <h1 className="text-white md:text-6xl text-center font-bold">{heroSection?.heroTitle}</h1> */}
                    <div className="w-full flex justify-center">
                        <ReactTyped strings={[
                            "Provide All IT Services",
                            "Hosting Services",
                            "Digital Marketing Service",
                        ]} typeSpeed={30} backSpeed={30} loop className="text-white text-5xl text-center font-bold md:text-6xl" />
                    </div>
                    <p className="text-white text-lg text-center font-base">{heroSection?.heroDescription}</p>
                    <div className="flex flex-col justify-center gap-5 md:flex-row">
                        {heroSection && heroSection?.buttons?.map((button) => (
                            <Button key={button?.title} className="uppercase bg-primaryBlue px-14 py-6 hover:bg-white hover:text-primaryBlue duration-500">{button?.title}</Button>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero