import { useHPPosts } from "@/modules/hp_posts/hooks/useHPPosts.ts";
import { Post } from "@/modules/hp_posts/Post.tsx";

export const Posts = () => {
  const { posts, isLoading, error } = useHPPosts();
  if (!posts || error) return null;

  // todo skeleton
  if (isLoading) {
    return (
      <article
        className={
          "hidden md:block md:columns-2 md:gap-2 lg:columns-3 lg:gap-4 mb-4 min-h-[887px]"
        }
      />
    );
  }

  return (
    <article
      className={
        "hidden md:block md:columns-2 md:gap-2 lg:columns-3 lg:gap-4 mb-4"
      }
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </article>
  );
};
