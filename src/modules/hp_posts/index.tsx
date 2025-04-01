import { useHPPosts } from "@/modules/hp_posts/hooks/useHPPosts.ts";
import { Post } from "@/modules/hp_posts/Post.tsx";

export const Posts = () => {
  const { posts, isLoading, error } = useHPPosts();
  if (!posts || error) return null;

  // todo skeleton
  if (isLoading) return null;

  return (
    <article className={"columns-3 my-2 gap-2"}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </article>
  );
};
