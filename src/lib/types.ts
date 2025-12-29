export type BlogPost = {
  data: BlogFrontMatter;
  slug: string;
  content: string;
};

export type BlogFrontMatter = {
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
};
