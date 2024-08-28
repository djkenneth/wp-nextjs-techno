import React from 'react'
import graphqlQuery from '@/lib/client'
import { TemplateArticlesPostDocument } from '@/graphql/sdk'
import type { TemplateArticlesPostQuery } from '@/types/graphql'

import { Container, Section } from '../craft'
import { Button } from '../ui/button'

import LatestArticleSlider from '@/molecules/LatestArticleSlider'

const LatestArticle = async () => {

    const { articles } = await graphqlQuery<TemplateArticlesPostQuery>(
        TemplateArticlesPostDocument,
        { first: 6, after: "null" },
    )

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
            <LatestArticleSlider articles={articles?.nodes} />
        </Section>
    )
}

export default LatestArticle