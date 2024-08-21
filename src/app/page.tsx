import { allBlogs } from '.contentlayer/generated';
import FeaturedPosts from '@/components/FeaturePost';
import HomeCoverSection from '@/components/HomeCoverSection';
import RecentPosts from '@/components/RecentPost';

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
