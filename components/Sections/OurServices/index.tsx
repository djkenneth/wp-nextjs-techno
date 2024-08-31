import React from 'react'

import type { OurServicesSection } from '@/types/graphql'

import { Container, Section } from '../../craft'

import { cn } from '@/lib/utils'
import OurServiceCard from '../../Cards/OurServiceCard'

const OurServices = ({ ourServicesBackground, ourServicesSubTitle, ourServicesTitle, ourServicesServices }: OurServicesSection) => {

    return (
        <Section className={cn("bg-no-repeat bg-cover bg-[center center] relative")} style={{ backgroundImage: `url(${ourServicesBackground?.image?.node?.sourceUrl!})` }}>
            <div className={cn("bg-[#000000c7] absolute w-full h-full top-0 left-0")}></div>
            <Container className="space-y-14">
                <div className="flex flex-col items-center gap-5">
                    <span className="text-white text-center text-base font-medium uppercase tracking-[.30em] z-[1]">{ourServicesSubTitle}</span>
                    <h2 className="text-white text-center capitalize my-0 z-[1] md:w-1/2 md:text-4xl md:font-bold">{ourServicesTitle}</h2>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {ourServicesServices?.map((services) => (
                        <OurServiceCard key={services?.title} {...services} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default OurServices