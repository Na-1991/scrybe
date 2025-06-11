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
        <p className={cn(titleClass,'font-semibold text-black text-center text-5xl')}>{title}</p>
       {description &&  <p className={cn(descriptionClass,'text-muted-foreground text-xs text-center')}>{description}</p>}
    </div>
  )
}

export default Heading