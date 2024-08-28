import React from 'react'
import Image from 'next/image'
import { ContactSection } from '@/types/graphql'

import { Container, Section } from '../craft'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { get } from 'lodash'

const Contact = ({ contactImage, contactTitle }: ContactSection) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col-reverse w-full shadow-2xl md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="md:text-4xl md:font-semibold md:mt-0">{contactTitle}</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input type="text" placeholder="Name" className="h-14 focus-visible:ring-blue-300 focus-visible:ring-4 duration-300" />
              <Input type="email" placeholder="Emai" className="h-14 focus-visible:ring-blue-300 focus-visible:ring-4 duration-300" />
              <Input type="text" placeholder="Phone" className="h-14 focus-visible:ring-blue-300 focus-visible:ring-4 duration-300" />
              <Input type="text" placeholder="Website" className="h-14 focus-visible:ring-blue-300 focus-visible:ring-4 duration-300" />
            </div>
            <Textarea placeholder="Your Message" rows={10} className="focus-visible:ring-blue-300 focus-visible:ring-4 duration-300" />
            <Button className="bg-primaryBlue px-14 py-6 hover:bg-primaryBlue duration-500 mx-auto mt-4">Free Consultancy</Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={get(contactImage, 'node.sourceUrl') as string} alt={get(contactImage, 'node.title') as string} width="500" height="500" className="w-full h-full object-contain md:my-0"></Image>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Contact