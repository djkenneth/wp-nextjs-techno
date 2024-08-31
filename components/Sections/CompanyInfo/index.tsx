import React from 'react'
import { Company } from '@/types/graphql'
import { Clock3, MapPin, PhoneCall } from 'lucide-react'

import { Container, Section } from '../../craft'
import { cn } from '@/lib/utils'

const CompanyInfo = ({ companyInfo }: Company) => {
  return (
    <Section>
      <Container>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {companyInfo && companyInfo.map((info) => (
            <div key={info?.title} className="flex flex-col items-center bg-[#eff2f7] p-10 rounded-md md:gap-8">
              {info?.icon === 'map' && <MapPin size={45} strokeWidth={1} color="#0c5adb" className="shrink-0 w-auto" />}
              {info?.icon === 'clock' && <Clock3 size={45} strokeWidth={1} color="#0c5adb" className="shrink-0 w-auto" />}
              {info?.icon === 'phone' && <PhoneCall size={45} strokeWidth={1} color="#0c5adb" className="shrink-0 w-auto" />}
              <div className="space-y-2">
                <h2 className="md:text-2xl md:font-bold md:my-0 text-center">{info?.title}</h2>
                <p className="text-base text-gray-500 text-center">{info?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>

  )
}

export default CompanyInfo