import React from 'react'
import { Container, Section } from '../../craft'
import HeroCard from '../../Cards/HeroCard'
import Image from 'next/image'
import { Button } from '../../ui/button'
import { AboutSection, HeroSection } from '@/types/graphql'
import { cn } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'
import colorizeText from '@/utils/colorizeText'
import ServiceCard from '@/components/Cards/ServiceCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type AboutProps = {
    heroSection?: HeroSection
    aboutSection?: AboutSection
}

const AboutMainSection = ({ heroSection, aboutSection }: AboutProps) => {
    const aboutType = "ReverseWithIcon"

    switch (aboutType as any) {
        case 'Standard':
            return <AboutStandard heroSection={heroSection} aboutSection={aboutSection} />
        case 'ReverseWithIcon':
            return <AboutReverseWithIcon />
        default:
            return null;
    }
}

const AboutStandard = ({ heroSection, aboutSection }: AboutProps) => {
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

const AboutReverseWithIcon = () => {

    const colorText = colorizeText("Most Trusted IT Solutio & Business {% Agency %}", 'text-primaryBlue');

    return (
        <Section className="bg-white-egg">
            <Container>
                <div className="flex flex-col gap-y-7 md:flex-row md:gap-y-0">
                    <div className="w-full md:w-[40%] space-y-6">
                        {/* <div className="flex flex-col justify-center gap-7 md:flex-row md:items-center"> */}
                        <span className={cn("font-bold text-base uppercase text-primaryBlue tracking-[0.5em]")}>About Techno</span>
                        <h2 className={cn("my-0 text-3xl font-bold md:my-0 md:text-4xl")}>{colorText}</h2>
                        {/* </div> */}
                        <Balancer className="text-lg font-light">
                            Pellentesque at posuere tellus. Ut sed dui justo. Phasellus is scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel laoreet laoreet, mauris risus porta velit, id imperdiet ante nisi in ante. Integer consectetur in nisi mattis tincidunt. Donec lacinia faucibus nunc.
                        </Balancer>
                        <div className="flex flex-col gap-5 md:items-center md:flex-row">
                            <Avatar className="size-20">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold">Marcos Romean Diangle</h4>
                                <p className="text-base text-gray-600 font-normal">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[60%]">
                        <div className="w-full h-full relative">
                            <Image
                                src={`https://wp.ditsolution.net/techno-new/wp-content/uploads/2020/12/about-new.png`}
                                alt={'asdjkhasj'}
                                className="!relative md:!absolute"
                                fill
                                sizes='100vw'
                                style={{ objectFit: 'contain' }}
                            ></Image>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </Container>
        </Section>
    )
}

export default AboutMainSection