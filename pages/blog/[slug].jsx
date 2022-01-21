import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a className="text-gray-800 hover:text-gray-600 font-semibold mb-3">
          Go Back
        </a>
      </Link>
      <div className="mt-3">
        <div className="mb-6">
          <h2 className="font-semibold text-2xl lg:text-3xl">{title}</h2>
          <p className="font-semibold">Posted on {date}</p>
        </div>
        <div className="post">
          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
