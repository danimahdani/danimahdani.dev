declare module "danimahdani" {
  export interface ChildrenProps {
    children: ReactNode;
  }

  /** Type used for blog post or meta data for blog */
  export type Blog = {
    title: string;
    slug: string;
    summary: string;
    featured: boolean;
    author_name: string;
    github_username: string;
    published: string;
    topics: Array<string>;
    keywords: Array<string>;
    related: Array<string>;
    views?: number;
    est_read?: string;
    displayViews?: boolean;
  };

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

  /** Type used for snippet or meta data for snippet */
  export type Snippet = {
    title: string;
    summary: string;
    topic: string;
    created_at: string;
    slug: string;
    author: string;
    github_username: string;
  };
}
