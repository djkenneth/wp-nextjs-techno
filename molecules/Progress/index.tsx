import React from 'react'
import { motion } from "framer-motion"
import { cn } from '@/lib/utils'

type ProgressProps = {
    value: number;
    className?: string;
}

const Progress = ({ className, value }: ProgressProps) => {
    return (
        <div className="relative w-full h-[5px] overflow-hidden rounded shadow-inner bg-secondary">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, delay: 0 }}
                className={cn("absolute inset-0 h-[5px] transition bg-primaryBlue", className)}
            >
            </motion.div>
        </div>
    )
}

export default Progress