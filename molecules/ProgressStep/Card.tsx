import React from 'react'

import ProgressStep from '@/molecules/ProgressStep'
import { cn } from '@/lib/utils';

type ProgressStepCardProps = {
    step: number;
    isProgressLine: boolean;
    title: string;
    description: string;
}

const ProgressStepCard = ({ step, isProgressLine, title, description }: ProgressStepCardProps) => {
  return (
    <div className={cn("flex flex-col items-center px-10")}>
        <ProgressStep step={step} isProgressLine={isProgressLine} />
        <h3 className={cn("md:text-lg md:font-semibold")}>{title}</h3>
        <p className={cn("text-base text-center")}>{description}</p>
    </div>
  )
}

export default ProgressStepCard;