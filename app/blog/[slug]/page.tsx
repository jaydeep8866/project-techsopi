import { notFound, redirect } from "next/navigation";
import { blogPosts } from "../posts-data";

type BlogRedirectPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogRedirectPage({ params }: BlogRedirectPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  redirect(post.externalUrl);
}
