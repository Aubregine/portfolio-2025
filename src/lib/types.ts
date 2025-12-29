export type BlogPost = {
  data: BlogMetadata;
  slug: string;
  content: string;
};

export type BlogMetadata = {
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
};
