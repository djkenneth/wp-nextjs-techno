import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const WhyChooseMe = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full bg-[#2D2D2D] px-6 py-8 space-y-8 md:px-16 md:w-1/2">
                <div className="space-y-3">
                    <span className="text-base text-white uppercase tracking-[.45em]">Why Choose Us</span>
                    <h1 className="text-white md:text-4xl font-bold leading-7">We Provide World Class IT Solution Service</h1>
                </div>
                <p className="text-white text-base font-normal">Contrary to popular belief, Lorem Ipsum is not simply and random text. It has roots in a piece of classical</p>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="bg-[#393939] text-white px-5">
                        <AccordionTrigger className="hover:no-underline">Best IT solution provider</AccordionTrigger>
                        <AccordionContent>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-[#393939] text-white px-5">
                        <AccordionTrigger className="hover:no-underline">Experienced Engineers</AccordionTrigger>
                        <AccordionContent>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-[#393939] text-white px-5">
                        <AccordionTrigger className="hover:no-underline">Internet Of Things</AccordionTrigger>
                        <AccordionContent>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whice
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="w-full flex items-center md:py-3 md:w-1/2">
                <Image
                    className="h-full w-full object-contain my-0"
                    src={"https://wp.ditsolution.net/techno-new/wp-content/uploads/2021/01/about-video-img.jpg"}
                    alt={'image'}
                    width={400}
                    height={200}
                />
            </div>
        </div>
    )
}

export default WhyChooseMe