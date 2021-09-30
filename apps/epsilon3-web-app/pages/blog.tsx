import {
  Header,
  HeroBlog,
  FeaturedPosts,
  BlogList,
  Footer,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <>
      <HeroBlog />
      <FeaturedPosts />
      <BlogList />
    </>
  );
}

export default Blog;
