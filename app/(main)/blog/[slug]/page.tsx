import React from 'react'
import data from '@/app/backend.json'
import { notFound } from 'next/navigation'
import ImageComponent from '@/app/_components/ImageComponent'

type Props = {params:Promise<{slug:string}>}

const page = async ({params}: Props) => {
  const {slug} = await params
  console.log('slug',slug)
  const blog = data.blogs.find(blog=>blog.slug===slug)
  if(!blog) return notFound()
  return (
<div className='min-h-screen'>
<h3>{blog.title}</h3>
<ImageComponent alt='blog'  aspect='video' src={blog.image} className='w-full mt-12' />
<span className='blog-content mt-12 block' dangerouslySetInnerHTML={{__html:blog.content}} />
</div>
   
  )
}

export default page