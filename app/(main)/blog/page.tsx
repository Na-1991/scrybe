import Heading from '@/app/_components/Heading'
import { cn } from '@/lib/utils'
import React from 'react'
import data from "@/app/backend.json";
import BlogCard from '@/app/_components/blog/BlogCard';

type Props = {}
const blogs = data.blogs;
const page = (props: Props) => {
  return (
    <div id="blogs" className={cn("min-h-screen pt-8")}>
    <Heading title="Blogs" description="Explore ideas, trends, and best practices for digital marketing across platforms, languages, and markets" descriptionClass="text-md "/>
    <div className="mt-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  </div>
  )
}

export default page