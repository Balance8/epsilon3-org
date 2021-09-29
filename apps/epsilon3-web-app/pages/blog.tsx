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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroBlog />
        <FeaturedPosts />
        <BlogList />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Blog;
