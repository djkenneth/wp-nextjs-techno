import AboutMainSection from '@/components/Sections/AboutMainSection'
import Brands from '@/components/Sections/Brands'
import GlobalHeroSection from '@/components/Sections/GlobalHeroSection'
import WhyChooseMe from '@/components/Sections/WhyChooseMe'
import { TemplateAboutDocument } from '@/graphql/sdk'
import graphqlQuery from '@/lib/client'
import { AboutSection, GlobalHero, LogosBrands, WhyChooseUsSection } from '@/types/graphql'
import { notFound } from 'next/navigation'
import React from 'react'

const About = async () => {

    const { pageBy: pageData } = await graphqlQuery<TemplateAboutQuery>(TemplateAboutDocument, {
        uri: "about"
    })

    if (!pageData) {
        notFound();
    }

    const {
        title,
        content,
        globalHero,
        aboutSection,
        whyChooseUsSection,
        logosBrands
    } = pageData;

    return (
        <>
            <GlobalHeroSection {...globalHero as GlobalHero} />
            <AboutMainSection aboutSection={aboutSection as AboutSection} />
            <WhyChooseMe {...whyChooseUsSection as WhyChooseUsSection} />
            <Brands {...logosBrands as LogosBrands} />
        </>
    )
}

export default About