import React from 'react'
import { Container, Section } from '../craft'
import { Button } from '../ui/button'

import LatestArticleSlider from '@/molecules/LatestArticleSlider'

const LatestArticle = () => {
    return (
        <Section className="bg-[#edf4fc]">
            <Container>
                <div>
                    <span className="text-base text-primaryBlue uppercase tracking-[.45em]">Latest Article</span>
                    <div className="flex justify-between items-center">
                        <h2 className="text-black md:text-4xl md:font-bold md:my-0">See Our Latest Blog Posts</h2>
                        <Button className="uppercase bg-primaryBlue px-14 py-6 hover:bg-[#0c2bdb] duration-500">See All Blogs</Button>
                    </div>
                </div>
            </Container>
            <LatestArticleSlider /> 
        </Section>
    )
}

export default LatestArticle