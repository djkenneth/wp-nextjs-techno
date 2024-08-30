import { cn } from '@/lib/utils'
import React from 'react'

const ProgressStep = ({ step, isProgressLine }: { step: number, isProgressLine: boolean }) => {
  return (
    <div className="bg-primaryBlue/20 size-20 rounded-full flex justify-center items-center">
      <div className="z-10 rounded-full bg-primaryBlue/40 flex justify-center items-center size-14">
        <div className={cn("z-20 size-9 rounded-full bg-primaryBlue flex justify-center items-center relative", {
          "step-progress-line before:hidden before:md:block": isProgressLine
        })}>
          <span className="font-medium text-white">{step}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressStep