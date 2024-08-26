import React from 'react'

import type { Maybe } from '@/types/graphql'

import { AiOutlineFacebook } from 'react-icons/ai'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { IoServerOutline } from 'react-icons/io5'
import { FaNetworkWired, FaPaintBrush  } from 'react-icons/fa'
import { GiTeacher } from "react-icons/gi";

const OurServiceCard = ({ title, icon, description }: any) => {

    const outServicesIcons = (iconValue: Maybe<Maybe<string>[]>) => {
        switch (iconValue![0]) {
            case 'facebook':
                return <AiOutlineFacebook size={50} className="text-white" />
            case 'server':
                return <IoServerOutline size={50} className="text-white" />
            case 'network':
                return <FaNetworkWired size={50} className="text-white" />
            case 'teacher':
                return <GiTeacher size={50} className="text-white" />
            case 'paint':
                return <FaPaintBrush size={50} className="text-white" />
        }
    };

    return (
        <div className="flex flex-col justify-start gap-4 text-white py-7 px-7 shadow-white/10 shadow-xl rounded duration-500 hover:bg-primaryBlue hover:-translate-y-6 z-[1]">
            {outServicesIcons(icon as Maybe<Maybe<string>[]>)}
            <h3 className="text-white md:font-bold md:my-0">{title}</h3>
            <p className="text-gray-300 text-base">{description}</p>
            <div className="flex items-center gap-3">
                <span className="text-base">Read More</span>
                <LiaLongArrowAltRightSolid size={30} />
            </div>
        </div>
    )
}

export default OurServiceCard