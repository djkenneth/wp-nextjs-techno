import { Container, Section } from '@/components/craft'
import AboutMainSection from '@/components/Sections/AboutMainSection'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <Section className={cn("bg-no-repeat bg-cover bg-[center center] relative")} style={{ backgroundImage: `url(https://wp.ditsolution.net/techno-new/wp-content/uploads/2022/04/101010.jpg)` }}>
                <div className={cn("bg-[#121b51]/40 absolute w-full h-full top-0 left-0")}></div>
                <Container className="space-y-14">
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="text-white text-center capitalize my-0 z-[1] md:w-1/2 md:text-4xl md:font-bold">About</h2>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild className="!text-white z-[1]">
                                        <Link href="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex items-center text-white z-10" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="!text-white z-[1]">About</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </Container>
            </Section>
            <AboutMainSection />
        </>
    )
}

export default About