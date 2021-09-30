import {
  Header,
  BlogSingle,
  RelatedPosts,
  Footer,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface BlogPostProps {}

export function BlogPost(props: BlogPostProps) {
  return (
    <>
      <BlogSingle />
      <RelatedPosts />
    </>
  );
}

export default BlogPost;
