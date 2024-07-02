import Header from "@/app/components/Header";
import PostComponents from "@/app/components/PostComponents";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]
  `;
  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}


const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostByTag(params.slug)
  console.log(posts, 'post by tag')
  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponents key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
