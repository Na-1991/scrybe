import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'

type Props = {className?:string}

const AboutUs = ({className}: Props) => {
  return (
    <div className={cn(className,'min-h-screen')}>
           <Heading title='About Us'/>
    </div>
  )
}

export default AboutUs