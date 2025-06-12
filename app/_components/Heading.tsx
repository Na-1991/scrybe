import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title:string,
    description?:string,
    titleClass?:string,
    descriptionClass?:string,
}

const Heading = ({title,description,descriptionClass,titleClass}: Props) => {
  return (
    <div className='flex flex-col gap-1'>
        <p className={cn('font-semibold text-black text-center text-5xl',titleClass,)}>{title}</p>
       {description &&  <p className={cn('text-muted-foreground text-xs text-center',descriptionClass)}>{description}</p>}
    </div>
  )
}

export default Heading