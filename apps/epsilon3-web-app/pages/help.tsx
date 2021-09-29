import {
  Header,
  PageIllustration,
  HeroHelp,
  HelpList,
  RelatedLinks,
  Footer,
} from '@epsilon3-org/shared/ui';

/* eslint-disable-next-line */
export interface HelpProps {}

export function Help(props: HelpProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHelp />
        <HelpList />
        <RelatedLinks />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Help;
