import React from 'react'

import { TemplateTestimonialsPostDocument } from '@/graphql/sdk';
import type { TestimonialSection, TemplateTestimonialsPostQuery } from '@/types/graphql'

import { get } from 'lodash';
import graphqlQuery from '@/lib/client';

// Craft Imports
import { Container, Section } from '../../craft'
import { cn } from '@/lib/utils'

import TestimonialSlider from '@/molecules/TestimonialSlider';

const Testimonials = async ({ testimonialSubTitle, testimonialTitle, testimonialBackgroundImage }: TestimonialSection) => {

    const { testimonials } = await graphqlQuery<TemplateTestimonialsPostQuery>(TemplateTestimonialsPostDocument)

    const backgroumdSourceUrl = get(testimonialBackgroundImage, 'node.sourceUrl')

    return (
        <Section style={{ backgroundImage: `url(${backgroumdSourceUrl})` }} className={cn("bg-[center center] bg-no-repeat bg-cover bg-fixed pb-0")}>
            <Container className="space-y-14 pb-0">
                <div className={cn("flex flex-col items-center gap-5")}>
                    <span className={cn("text-center text-white text-base font-medium uppercase tracking-[.30em]")}>{testimonialSubTitle}</span>
                    <h2 className={cn("text-center text-white capitalize my-0 md:w-1/2 md:text-4xl md:font-bold")}>{testimonialTitle}</h2>
                </div>
                <TestimonialSlider testimonials={testimonials} />
            </Container>
        </Section>
    )
}

export default Testimonials