import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden">
      <div className="w-full h-40 relative bg-gray-700 border-b">
        <Image
          src={post.frontmatter.cover_image}
          alt="Post image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="p-8 bg-state-50">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {post.frontmatter.title}
          </h3>
          <div className="text-sm">{post.frontmatter.date}</div>
        </div>
        <p>{post.frontmatter.excerpt}</p>
      </div>
      <div className="border-t bg-slate-50 px-8 py-4">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-800 hover:text-gray-600 font-semibold">Read more</a>
        </Link>
      </div>
    </div>
  );
}
