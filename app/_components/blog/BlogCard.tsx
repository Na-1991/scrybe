import Image from "next/image";
import ImageComponent from "../ImageComponent";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
 
  image: string;
};

export default function BlogCard({
  blog,
  index,
}: {
  blog: Blog;
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center gap-6 bg-white rounded-xl shadow-md p-6 mb-10`}
    >
      {/* Text */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        
        <p className="text-gray-600 mb-3">{blog.excerpt}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-full md:w-1/2   rounded-xl overflow-hidden">
        <ImageComponent src={blog.image} alt={blog.title} aspect="video" imgClassName="object-con" className="h-full" />
      </div>
    </div>
  );
}
