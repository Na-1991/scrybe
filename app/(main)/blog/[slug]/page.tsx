import React from 'react'
import data from '@/app/backend.json'
import { notFound } from 'next/navigation'
import ImageComponent from '@/app/_components/ImageComponent'

type Props = {params:Promise<{slug:string}>}



export async function generateStaticParams() {
  const blogs = data.blogs
 
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

const page = async ({params}: Props) => {
  const {slug} = await params
  console.log('slug',slug)
  const blog = data.blogs.find(blog=>blog.slug===slug)
  if(!blog) return notFound()
  return (
<div className='min-h-screen'>
<h3 className='font-bold text-4xl mt-8'>{blog.title}</h3>
<ImageComponent alt='blog'  aspect='video' src={blog.image} className='w-full mt-6' />
{<div className='mt-12 pb-6'>
  {blog.intro && <p dangerouslySetInnerHTML={{__html:blog.intro}} />}
  {blog.content.map((item,index)=><div key={index} className='flex flex-col gap-1 mt-4'>
<span className='font-bold'>{item.title}</span>
<span className='text-sm d' dangerouslySetInnerHTML={{__html:item.description}} />
</div>)}</div>}
</div>
   
  )
}

export default page