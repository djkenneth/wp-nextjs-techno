import React from 'react'
import { Container, Section } from '../craft'
import { cn } from '@/lib/utils'
import { Clock3, MapPin, PhoneCall } from 'lucide-react'

const CompanyInfo = () => {
  return (
    <Section>
      <Container>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center bg-[#eff2f7] p-10 gap-8 rounded-md">
            <MapPin size={45} strokeWidth={1} color="#0c5adb" />
            <div className="space-y-2">
              <h2 className="md:text-2xl md:font-bold md:my-0 text-center">Company Location</h2>
              <p className="text-base text-gray-500 text-center">54/1 New sorini Asut, Melbord Austria.</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#eff2f7] p-10 gap-8 rounded-md">
            <Clock3 size={45} strokeWidth={1} color="#0c5adb" />
            <div className="space-y-2">
              <h2 className="md:text-2xl md:font-bold md:my-0 text-center">Company Location</h2>
              <p className="text-base text-gray-500 text-center">54/1 New sorini Asut, Melbord Austria.</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#eff2f7] p-10 gap-8 rounded-md">
            <PhoneCall size={45} strokeWidth={1} color="#0c5adb" />
            <div className="space-y-2">
              <h2 className="md:text-2xl md:font-bold md:my-0 text-center">Company Location</h2>
              <p className="text-base text-gray-500 text-center">54/1 New sorini Asut, Melbord Austria.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>

  )
}

export default CompanyInfo