import React from 'react'

import type { ProcessSection } from '@/types/graphql';

import { Container, Section } from '../craft'
import ProgressStepCard from '@/molecules/ProgressStep/Card'
import { cn } from '@/lib/utils'

const Process = ({ processSubTitle, processTitle, stepProgressInfo }: ProcessSection) => {
    return (
        <Section className="bg-white">
            <Container className="space-y-14">
                <div className="flex flex-col items-center gap-5">
                    <span className="text-center text-primaryBlue text-base font-medium uppercase tracking-[.30em]">{processSubTitle}</span>
                    <h2 className="text-center capitalize my-0 md:w-1/2 md:text-4xl md:font-bold">{processTitle}</h2>
                </div>
                <div className={cn("grid grid-cols-1 md:grid-cols-3")}>
                    {stepProgressInfo && stepProgressInfo.map((data, index) => {
                        const isProgressLine = index > 0 ? true : false;
                        return (
                            <ProgressStepCard key={data?.title} step={index + 1} isProgressLine={isProgressLine} title={data?.title as string} description={data?.description as string} />
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default Process