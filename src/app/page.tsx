import { allBlogs } from '.contentlayer/generated';
import { HomeCoverSection, FeaturedPosts, RecentPosts } from '@/components';

const Homepage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
};

export default Homepage;
