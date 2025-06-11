import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'

type Props = {className?:string}

const ContactUs = ({className}: Props) => {
  return (
    <div className={cn(className,'min-h-screen')}>
           <Heading title='Contact Us'/>
    </div>
  )
}

export default ContactUs