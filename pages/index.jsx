import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "components/Post";
import { sortByDate } from "utils";

export default function Index({ posts }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gray-600 mb-3">Blog</div>
      <div className="grid lg:grid-cols-3 gap-20">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
