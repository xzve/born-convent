export interface Post {
  title: string
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
}

export interface Tag {
  length: number;
  map(arg0: (tag: any) => any): import("react").ReactNode | Iterable<import("react").ReactNode>;
  name: string
  slug: { current: string };
  _id: string;
  postCount?: number
}