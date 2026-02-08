import { cn, getRandomBetween, getUniqueRandomIndices } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import data from "@/app/backend.json";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FramerWrapper from "../FramerWrapper";

type Props = { className?: string };
export type BlogType = typeof data.blogs[0]
const Blogs = ({ className }: Props) => {
  const blogs = data.blogs;

  const [firstRandomNumber, secondRandomNumber, thirdRandomNumber] =
    getUniqueRandomIndices(3, blogs.length);

  const firstBlog = blogs[firstRandomNumber];
  const secondBlog = blogs[secondRandomNumber];
  const thridBlog = blogs[thirdRandomNumber];
  return (
    <div>
      <div
        id="blog"
        className={cn(className, "min-h-screen  scroll-mt-[30vh]")}
      >
        <Heading
          title="Blogs"
          description="Explore ideas, trends, and best practices for digital marketing across platforms, languages, and markets"
          descriptionClass="text-md "
        />
        <div className="mt-8">
          {[firstBlog, secondBlog, thridBlog].map((blog, index) => (
            <FramerWrapper key={blog.id} index={index}>
              <BlogCard blog={blog} index={index} />
            </FramerWrapper>
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
