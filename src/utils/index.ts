import { compareDesc, parseISO } from 'date-fns';
import { Blog } from '../../.contentlayer/generated';

export const sortBlogs = (blogs: Blog[]): Blog[] => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
    );
};
