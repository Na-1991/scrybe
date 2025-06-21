import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'
import data from '@/app/backend.json'
import ServiceCard from '../Services/ServiceCard'

type Props = {className?:string}

const Services = ({className}: Props) => {
    const services = data.services
  return (
    <div id='services' className={cn(className,'min-h-screen')}>
           <Heading title='Services'/>
           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services