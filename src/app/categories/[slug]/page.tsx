import { allBlogs } from '.contentlayer/generated';
import { Categories, BlogLayoutThree } from '@/components';

import GithubSlugger, { slug } from 'github-slugger';

const slugger = new GithubSlugger();

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths: { slug: string }[] = [{ slug: 'all' }];

  allBlogs.forEach((blog) => {
    if (blog.isPublished) {
      blog.tags?.forEach((tag) => {
        // Added optional chaining (?.)
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }: { params: Params }) {
  return {
    title: `${params.slug.replace(/-/g, ' ')} Blogs`,
    description: `Learn more about ${params.slug === 'all' ? 'web development' : params.slug} through our collection of expert blogs and tutorials`,
  };
}

interface CategoryPageProps {
  params: Params;
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  // Separating logic to create a list of categories from all blogs
  const allCategories: string[] = ['all']; // Initialize with 'all' category
  allBlogs.forEach((blog) => {
    blog.tags?.forEach((tag) => {
      // Added optional chaining (?.)
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  allCategories.sort();

  const blogs = allBlogs.filter((blog) => {
    if (params.slug === 'all') {
      return true;
    }
    return blog.tags?.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
