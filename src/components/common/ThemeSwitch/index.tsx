import { useTheme } from 'next-themes';
import { SunIcon } from '@/icons';
import dynamic from 'next/dynamic';
const MoonIcon = dynamic(
  () => import('@/icons').then((module) => module.MoonIcon),
  { ssr: false },
);

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 ${theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      aria-label="theme-switcher"
    >
      {theme === 'light' ? (
        <MoonIcon customClass="fill-dark" />
      ) : (
        <SunIcon customClass="fill-dark" />
      )}
    </button>
  );
};

export default ThemeSwitch;
