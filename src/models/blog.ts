export interface Blog {
  title: string;
  url: string;
  description: string;
  tags?: string[]; // Handle optional tags
  image?: {
    filePath: string;
    blurhashDataUrl: string;
  };
  publishedAt: string;
}
