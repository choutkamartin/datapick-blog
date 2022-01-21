import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "components/Post";
import { sortByDate } from "utils";

export default function Index({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold text-gray-600 mb-3">Welcome</div>
      <p>Latest news from Datapick.</p>
      <div>
        <h2 className="text-xl font-bold text-gray-600 mb-3">Posts</h2>
        <div className="grid lg:grid-cols-3 gap-20">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
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
