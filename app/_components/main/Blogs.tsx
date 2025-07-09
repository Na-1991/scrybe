import { cn, getRandomBetween, getUniqueRandomIndices } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import data from "@/app/backend.json";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = { className?: string };
 
const Blogs = ({ className }: Props) => {
  const blogs = data.blogs;

  const [firstRandomNumber, secondRandomNumber, thirdRandomNumber] =
    getUniqueRandomIndices(3, blogs.length);

  const firstBlog = blogs[firstRandomNumber];
  const secondBlog = blogs[secondRandomNumber];
  const thridBlog = blogs[thirdRandomNumber];
  return (
    <div>
      <div id="blogs" className={cn(className, "min-h-screen")}>
        <Heading
          title="Blogs"
          description="Explore ideas, trends, and best practices for digital marketing across platforms, languages, and markets"
          descriptionClass="text-md "
        />
        <div className="mt-8">
          {[firstBlog, secondBlog, thridBlog].map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
      <Link
        href={"/blog"}
        className="text-center text-xl flex items-center gap-2 mx-auto w-fit text-indigo-600 font-semibold hover:underline"
      >
        <span>See More →</span>
        
      </Link>
    </div>
  );
};

export default Blogs;
