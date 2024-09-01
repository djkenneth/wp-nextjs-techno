import Icon from '@/molecules/Icon'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import { cva } from 'class-variance-authority';

const cardStyle = cva("group relative flex flex-col items-center w-full border py-8 before:absolute before:right-0 before:bottom-0 before:w-11 before:h-11 before:content-[''] before:bg-primaryBlue/40 before:duration-300 before:-z-[1] before:hover:w-full before:hover:h-full before:hover:bg-primaryBlue")

const ServiceCard = () => {
    return (
        <div className={cardStyle()}>
            <Icon icon="teams" size={60} className="text-primaryBlue group-hover:text-white duration-300" />
            <h3 className="group-hover:text-white">Trusted Services</h3>
            <p className="font-light text-base text-center group-hover:text-white">Lorem ipsum dolor sit amet, consecte tur adipisicing elit. Ipsa libero ab voluptatibus itaque quas in voluptas techno.</p>
        </div>
    )
}

export default ServiceCard