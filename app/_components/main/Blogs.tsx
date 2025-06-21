import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import data from "@/app/backend.json";
import BlogCard from "../blog/BlogCard";

type Props = { className?: string };

const Blogs = ({ className }: Props) => {
  const blogs = data.blogs;
  return (
    <div id="blogs" className={cn(className, "min-h-screen")}>
      <Heading title="Blogs" />
      <div className="mt-8">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
