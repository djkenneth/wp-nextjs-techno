import React from 'react'
import { IoServerOutline } from "react-icons/io5";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";

type HeroCardProps = {
    title: string;
    description: string;
    index: number;
}

const HeroCard = ({ title, description, index }: HeroCardProps) => {
    return (
        <div className="rounded w-full py-20 px-12 border flex flex-col items-center bg-white shadow-lg">
            <div className="size-32 rounded-full bg-blue-50 flex justify-center items-center">
                {index === 0 && (
                    <IoServerOutline size={50} className="text-blue-500" />
                )}

                {index === 1 && (
                    <AiOutlineFacebook size={50} className="text-blue-500" />
                )}

                {index === 2 && (
                    <FaNetworkWired size={50} className="text-blue-500" />
                )}
            </div>
            <h2 className="text-center md:text-xl md:font-bold">{title}</h2>
            <p className="text-center md:text-base text-black font-light">{description}</p>
        </div>
    )
}

export default HeroCard