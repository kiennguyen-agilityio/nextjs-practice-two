import Link from 'next/link';

interface CategoryProps {
  link?: string;
  name: string;
  active?: boolean;
  className?: string;
}

const Category = ({
  link = '#',
  name,
  active = false,
  className = '',
  ...props
}: CategoryProps) => {
  const baseClasses =
    'inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2';
  const activeClasses = 'bg-dark text-light dark:bg-light dark:text-dark';
  const inactiveClasses = 'bg-light text-dark dark:bg-dark dark:text-light';

  const combinedClasses = `${baseClasses} ${
    active ? activeClasses : inactiveClasses
  } ${className}`;

  return (
    <Link href={link} className={combinedClasses} {...props}>
      #{name}
    </Link>
  );
};

export default Category;
