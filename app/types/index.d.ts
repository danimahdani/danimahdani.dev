declare module "danimahdani" {
  export interface ChildrenProps {
    children: ReactNode;
  }

  /** Type used for portfolio or meta data for portfolio */
  export type Portfolio = {
    title: string;
    date: string;
    featured: boolean;
    summary: string;
    slug: string;
    stack: Array<string>;
    image: string;
    link: {
      github: string;
      live: string;
    };
  };
}
