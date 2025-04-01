import { TPost } from "@/types/post";
import { FC } from "react";
import { getRandomColor } from "@/lib/randomColor.ts";
import { Eye } from "lucide-react";

export const Post: FC<{ post: TPost }> = ({ post }) => {
  return (
    <section
      className={`rounded break-inside-avoid my-2 p-2`}
      style={{ backgroundColor: getRandomColor() }}
    >
      <header className={"text-primary text-3xl text-foreground font-bold"}>
        <h3>{post.title}</h3>
      </header>
      <p className={"text-base text-gray-800 my-2"}>{post.body}</p>
      <footer className={"text-gray-400 flex"}>
        <Eye className={"mr-2"} />
        {post.views}
      </footer>
    </section>
  );
};
