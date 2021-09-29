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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <BlogSingle />
        <RelatedPosts />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;
