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
    <>
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
    </>
  );
}

export default Help;
