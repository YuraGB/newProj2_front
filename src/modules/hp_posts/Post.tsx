import { TPost } from "@/types/post";
import { FC } from "react";

export const Post: FC<{ post: TPost }> = ({ post }) => {
  console.log(post);
  return <section>{post.title}</section>;
};
