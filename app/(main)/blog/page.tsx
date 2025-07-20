import Heading from '@/app/_components/Heading'
import { cn } from '@/lib/utils'
import React from 'react'
import data from "@/app/backend.json";
import BlogCard from '@/app/_components/blog/BlogCard';
import FramerWrapper from '@/app/_components/FramerWrapper';

type Props = {}
const blogs = data.blogs;
const page = (props: Props) => {
  return (
    <div id="blogs" className={cn("min-h-screen pt-8")}>
      <FramerWrapper>
      <Heading title="Blogs" description="Explore ideas, trends, and best practices for digital marketing across platforms, languages, and markets" descriptionClass="text-md "/>
      </FramerWrapper>
    
    <div className="mt-8">
      {blogs.map((blog, index) => (
        <FramerWrapper  key={blog.id}>
        <BlogCard blog={blog} index={index} />
        </FramerWrapper>

      ))}
    </div>
  </div>
  )
}

export default page