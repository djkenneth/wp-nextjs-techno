
import React from 'react'

import type { CaseStudiesSection, TemplateCaseStudiesPostQuery } from '@/types/graphql';
import { TemplateCaseStudiesPostDocument } from "@/graphql/sdk";

import graphqlQuery from '@/lib/client';

// Craft Imports
import { Section, Container } from "@/components/craft";
import { Button } from '../ui/button';

import CaseStudySlider from '@/molecules/CaseStudySlider';

const CaseStudies = async ({ caseStudiesSubTitle, caseStudiesTitle }: CaseStudiesSection) => {

    const { caseStudies } = await graphqlQuery<TemplateCaseStudiesPostQuery>(TemplateCaseStudiesPostDocument)

    return (
        <Section>
            <Container>
                <div>
                    <span className="text-base text-primaryBlue uppercase tracking-[.45em]">{caseStudiesSubTitle}</span>
                    <div className="flex justify-between items-center flex-col md:flex-row">
                        <h2 className="text-black md:text-4xl md:font-bold md:my-0">{caseStudiesTitle}</h2>
                        <Button className="uppercase bg-primaryBlue px-14 py-6 hover:bg-[#0c2bdb] duration-500">See All Cases</Button>
                    </div>
                </div>
            </Container>
            <CaseStudySlider caseStudies={caseStudies} />
        </Section>
    )
}

export default CaseStudies