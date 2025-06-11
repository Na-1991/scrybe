import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'

type Props = {className?:string}

const Services = ({className}: Props) => {
  return (
    <div className={cn(className,'min-h-screen')}>
           <Heading title='Services'/>
    </div>
  )
}

export default Services