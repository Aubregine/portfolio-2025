export type BlogPost = {
  metadata: BlogMetadata;
  slug: string;
  content: string;
};

export type BlogMetadata = {
  title: string;
  date: string;
  tags: string[];
  excerpt?: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
};
