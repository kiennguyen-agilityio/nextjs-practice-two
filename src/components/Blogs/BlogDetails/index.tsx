import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { slug } from 'github-slugger';
import { Blog } from '.contentlayer/generated';

interface BlogDetailsProps {
  blog: Blog;
  slug: string;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), 'LLLL d, yyyy')}
      </time>

      <div className="m-3">{blog.readingTime.text}</div>
      {blog.tags && blog.tags[0] && (
        <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
          #{blog.tags[0]}
        </Link>
      )}
    </div>
  );
};

export default BlogDetails;
