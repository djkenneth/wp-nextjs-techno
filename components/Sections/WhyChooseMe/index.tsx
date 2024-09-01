import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { WhyChooseUsSection } from '@/types/graphql'
import { get } from 'lodash'

const WhyChooseMe = ({ whyChooseUsSubTitle, whyChooseUsTitle, whyChooseUsDescription, whyChooseUsAccordion, whyChooseUsImage }: WhyChooseUsSection) => {

    const imageSourceUrl = get(whyChooseUsImage, 'node.sourceUrl')
    const imageTitle = get(whyChooseUsImage, 'node.title')

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full bg-[#2D2D2D] px-6 py-8 space-y-8 md:px-16 md:w-1/2">
                <div className="space-y-3">
                    <span className="text-base text-white uppercase tracking-[.45em]">{whyChooseUsSubTitle}</span>
                    <h1 className="text-white md:text-4xl font-bold leading-7">{whyChooseUsTitle}</h1>
                </div>
                <p className="text-white text-base font-normal">{whyChooseUsDescription}</p>

                <Accordion type="single" collapsible className="w-full">
                    {whyChooseUsAccordion && whyChooseUsAccordion.map((item, index) => (
                        <AccordionItem key={item?.title} value={`item-${index + 1}`} className="bg-[#393939] text-white px-5">
                            <AccordionTrigger className="hover:no-underline">{item?.title}</AccordionTrigger>
                            <AccordionContent>
                                {item?.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="w-full flex items-center md:py-3 md:w-1/2">
                <Image
                    className="h-full w-full object-contain my-0"
                    src={imageSourceUrl as string}
                    alt={imageTitle as string}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    )
}

export default WhyChooseMe