import React from 'react'
import data from '@/app/backend.json'
import { notFound } from 'next/navigation'

type Props = {params:Promise<{slug:string}>}

const page = async ({params}: Props) => {
  const {slug} = await params
  console.log('slug')
  const blog = data.blogs.find(blog=>blog.slug===slug)
  if(!blog) return notFound()
  return (
    <div className='min-h-screen'>{blog.title}</div>
  )
}

export default page