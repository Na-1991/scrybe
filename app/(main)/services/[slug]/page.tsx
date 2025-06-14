import React from 'react'
import data from '@/app/backend.json'
import { notFound } from 'next/navigation'

type Props = {params:Promise<{slug:string}>}

const page =async ({params}: Props) => {
  const {slug} = await params
  const service = data.services.find(service=>service.slug===slug)
  if(!service) notFound()

  return (
    <div className='min-h-screen'>{service.title}</div>
  )
}

export default page