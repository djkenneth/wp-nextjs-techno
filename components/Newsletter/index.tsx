import React from 'react'
import { Container, Section } from '../craft'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Newsletter = () => {
    return (
        <Section className={cn("bg-primaryBlue")}>
            <Container className="space-y-14">
                <div className={cn("flex flex-col items-center gap-5")}>
                    <h2 className={cn("text-center text-white capitalize my-0 md:text-4xl md:font-bold md:w-1/2")}>Subscribe our newsletter</h2>
                </div>
                <div className="flex w-full max-w-3xl items-center space-x-2 bg-white p-2 rounded-2xl mx-auto">
                    <Input type="email" placeholder="Enter Your Email" className="focus-visible:ring-0 border-0" />
                    <Button type="submit" size="xl" className="bg-primaryBlue hover:bg-primaryBlue">Subscribe</Button>
                </div>
            </Container>
        </Section>
    )
}

export default Newsletter