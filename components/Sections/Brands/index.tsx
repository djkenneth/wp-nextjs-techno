import React from 'react'
import BrandSlider from '@/molecules/BrandSlider'
import { Section } from '@/components/craft'
import { LogosBrands } from '@/types/graphql'

const Brands = ({ brands }: LogosBrands) => {
    return (
        <Section className="bg-[#eff2f7] py-20 md:py-20">
            <BrandSlider brands={brands} />
        </Section>
    )
}

export default Brands